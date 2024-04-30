import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  Active,
  Announcements,
  closestCenter,
  CollisionDetection,
  DragOverlay,
  DndContext,
  DropAnimation,
  KeyboardSensor,
  KeyboardCoordinateGetter,
  Modifiers,
  MouseSensor,
  MeasuringConfiguration,
  PointerActivationConstraint,
  ScreenReaderInstructions,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  arrayMove,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  SortingStrategy,
  rectSortingStrategy,
  AnimateLayoutChanges,
  NewIndexGetter,
} from '@dnd-kit/sortable';
import { nanoid } from 'nanoid';

import { createRange } from 'src/utils/create-range';
import { canUseDom } from 'src/utils/can-use-dom';
import { Item, List, Wrapper } from './components';
import { RenderItem } from './components/item/item';
import { sleep } from '../sleep';

export type DataItem = { id: string; taskType: number; param1?: any; param2?: any };

export interface Props {
  activationConstraint?: PointerActivationConstraint;
  animateLayoutChanges?: AnimateLayoutChanges;
  adjustScale?: boolean;
  collisionDetection?: CollisionDetection;
  coordinateGetter?: KeyboardCoordinateGetter;
  Container?: any; // To-do: Fix me
  dropAnimation?: DropAnimation | null;
  getNewIndex?: NewIndexGetter;
  handle?: boolean;
  userDefinedHandleRemove?: boolean;
  itemCount?: number;
  items?: DataItem[];
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  renderItem?: RenderItem;
  renderItemContent?: RenderItem;
  removable?: boolean;
  reorderItems?: (item: DataItem[], from: any, to: any) => any;
  strategy?: SortingStrategy;
  style?: React.CSSProperties;
  useDragOverlay?: boolean;
  getItemStyles?(args: {
    id: UniqueIdentifier;
    index: number;
    isSorting: boolean;
    isDragOverlay: boolean;
    overIndex: number;
    isDragging: boolean;
  }): React.CSSProperties;
  wrapperStyle?(args: {
    active: Pick<Active, 'id'> | null;
    index: number;
    isDragging: boolean;
    id: UniqueIdentifier;
  }): React.CSSProperties;
  isDisabled?(id: UniqueIdentifier): boolean;
}

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

const screenReaderInstructions: ScreenReaderInstructions = {
  draggable: `
    To pick up a sortable item, press the space bar.
    While sorting, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
};

export function Sortable({
  activationConstraint,
  animateLayoutChanges,
  adjustScale = false,
  Container = List,
  collisionDetection = closestCenter,
  coordinateGetter = sortableKeyboardCoordinates,
  dropAnimation = dropAnimationConfig,
  getItemStyles = () => ({}),
  getNewIndex,
  handle = false,
  userDefinedHandleRemove,
  itemCount = 16,
  items: initialItems,
  isDisabled = () => false,
  measuring,
  modifiers,
  removable,
  renderItem,
  renderItemContent,
  reorderItems,
  strategy = rectSortingStrategy,
  style,
  useDragOverlay = true,
  wrapperStyle = () => ({}),
}: Props) {
  const [items, setItems] = useState<DataItem[]>(
    () =>
      initialItems ??
      createRange<DataItem>(itemCount, (index) => ({ id: nanoid(), taskType: index }))
  );

  const draggingLocked = useRef(false);
  useEffect(() => {
    if (!initialItems || draggingLocked.current) return;
    setItems(initialItems);
  }, [initialItems]);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    useSensor(KeyboardSensor, {
      // Disable smooth scrolling in Cypress automated tests
      scrollBehavior: canUseDom ? ('Cypress' in window ? 'auto' : undefined) : undefined,
      coordinateGetter,
    })
  );

  const isFirstAnnouncement = useRef(true);
  const getIndex = (id: UniqueIdentifier) => items.findIndex((item) => item.id === id);
  const getPosition = (id: UniqueIdentifier) => getIndex(id) + 1;
  const activeIndex = activeId ? getIndex(activeId) : -1;

  const handleRemove = removable
    ? (id: UniqueIdentifier) => setItems((items) => items.filter((item) => item.id !== id))
    : undefined;

  const announcements: Announcements = {
    onDragStart({ active: { id } }) {
      return `Picked up sortable item ${String(
        id
      )}. Sortable item ${id} is in position ${getPosition(id)} of ${items.length}`;
    },
    onDragOver({ active, over }) {
      // In this specific use-case, the picked up item's `id` is always the same as the first `over` id.
      // The first `onDragOver` event therefore doesn't need to be announced, because it is called
      // immediately after the `onDragStart` announcement and is redundant.
      if (isFirstAnnouncement.current === true) {
        isFirstAnnouncement.current = false;
        return;
      }

      if (over) {
        return `Sortable item ${active.id} was moved into position ${getPosition(over.id)} of ${
          items.length
        }`;
      }
    },
    onDragEnd({ active, over }) {
      if (over) {
        return `Sortable item ${active.id} was dropped at position ${getPosition(over.id)} of ${
          items.length
        }`;
      }
    },
    onDragCancel({ active: { id } }) {
      return `Sorting was cancelled. Sortable item ${id} was dropped and returned to position ${getPosition(
        id
      )} of ${items.length}.`;
    },
  };

  useEffect(() => {
    if (!activeId) {
      isFirstAnnouncement.current = true;
    }
  }, [activeId]);

  return (
    <DndContext
      accessibility={{
        announcements,
        screenReaderInstructions,
      }}
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={({ active }) => {
        draggingLocked.current = true;
        if (!active) {
          return;
        }

        setActiveId(active.id);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);

        if (over) {
          const overIndex = getIndex(over.id);
          if (activeIndex !== overIndex) {
            setItems((items) => {
              const movedItems = arrayMove(items, activeIndex, overIndex);

              if (reorderItems) {
                (async () => {
                  await sleep();
                  draggingLocked.current = false;
                  reorderItems(movedItems, activeIndex, overIndex);
                })();
              } else {
                draggingLocked.current = false;
              }
              return movedItems;
            });
          } else {
            draggingLocked.current = false;
          }
        } else {
          draggingLocked.current = false;
        }
      }}
      onDragCancel={() => setActiveId(null)}
      measuring={measuring}
      modifiers={modifiers}
    >
      <Wrapper style={style} center>
        <SortableContext items={items} strategy={strategy}>
          <Container>
            {items.map((item, index) => (
              <SortableItem
                userDefinedHandleRemove={userDefinedHandleRemove}
                key={item.id}
                id={item.id}
                value={item}
                handle={handle}
                index={index}
                style={getItemStyles}
                wrapperStyle={wrapperStyle}
                disabled={isDisabled(item.id)}
                renderItem={renderItem}
                renderItemContent={renderItemContent}
                onRemove={handleRemove}
                animateLayoutChanges={animateLayoutChanges}
                useDragOverlay={useDragOverlay}
                getNewIndex={getNewIndex}
              />
            ))}
          </Container>
        </SortableContext>
      </Wrapper>
      {useDragOverlay && canUseDom
        ? createPortal(
            <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
              {activeId ? (
                <Item
                  userDefinedHandleRemove={userDefinedHandleRemove}
                  id={items[activeIndex].id}
                  value={items[activeIndex]}
                  handle={handle}
                  renderItem={renderItem}
                  renderItemContent={renderItemContent}
                  wrapperStyle={wrapperStyle({
                    active: { id: activeId },
                    index: activeIndex,
                    isDragging: true,
                    id: items[activeIndex].id,
                  })}
                  style={getItemStyles({
                    id: items[activeIndex].id,
                    index: activeIndex,
                    isSorting: activeId !== null,
                    isDragging: true,
                    overIndex: -1,
                    isDragOverlay: true,
                  })}
                  dragOverlay
                />
              ) : null}
            </DragOverlay>,
            document.body
          )
        : null}
    </DndContext>
  );
}

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges;
  disabled?: boolean;
  getNewIndex?: NewIndexGetter;
  id: UniqueIdentifier;
  value: DataItem;
  index: number;
  handle: boolean;
  userDefinedHandleRemove?: boolean;
  useDragOverlay?: boolean;
  onRemove?(id: UniqueIdentifier): void;
  style(values: any): React.CSSProperties;
  renderItem?: RenderItem;
  renderItemContent?: RenderItem;
  wrapperStyle: Props['wrapperStyle'];
}

export function SortableItem({
  disabled,
  animateLayoutChanges,
  getNewIndex,
  handle,
  userDefinedHandleRemove,
  id,
  value,
  index,
  onRemove,
  style,
  renderItem,
  renderItemContent,
  useDragOverlay,
  wrapperStyle,
}: SortableItemProps) {
  const {
    active,
    attributes,
    isDragging,
    isSorting,
    listeners,
    overIndex,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
    disabled,
    getNewIndex,
  });

  return (
    <Item
      userDefinedHandleRemove={userDefinedHandleRemove}
      ref={setNodeRef}
      id={value.id}
      value={value}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={
        handle
          ? {
              ref: setActivatorNodeRef,
            }
          : undefined
      }
      renderItem={renderItem}
      renderItemContent={renderItemContent}
      index={index}
      style={style({
        index,
        id,
        isDragging,
        isSorting,
        overIndex,
      })}
      onRemove={onRemove ? () => onRemove(id) : undefined}
      transform={transform}
      transition={transition}
      wrapperStyle={wrapperStyle?.({ index, isDragging, active, id })}
      listeners={listeners}
      data-index={index}
      data-id={id}
      dragOverlay={!useDragOverlay && isDragging}
      {...attributes}
    />
  );
}
