import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import { Handle, Remove } from './components';

import styles from './item.module.css';
import { DataItem } from '../../sortable';

export type RenderItem = (args: {
  dragOverlay: boolean;
  dragging: boolean;
  sorting: boolean;
  index: number | undefined;
  fadeIn: boolean;
  listeners: DraggableSyntheticListeners;
  ref: React.Ref<HTMLElement>;
  style: React.CSSProperties | undefined;
  transform: Props['transform'];
  transition: Props['transition'];
  value: Props['value'];
  handleProps?: any;
}) => React.ReactElement;
export interface Props {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  userDefinedHandleRemove?: boolean;
  handleProps?: any;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  id: UniqueIdentifier;
  value: DataItem;
  onRemove?(): void;
  renderItem?: RenderItem;
  renderItemContent?: RenderItem;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        userDefinedHandleRemove,
        height,
        index,
        listeners,
        onRemove,
        renderItem,
        renderItemContent,
        sorting,
        style,
        transition,
        transform,
        wrapperStyle,
        value,
        id,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = 'grabbing';

        return () => {
          document.body.style.cursor = '';
        };
      }, [dragOverlay]);

      const renderItemArgs = useMemo(
        () => ({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          index,
          fadeIn: Boolean(fadeIn),
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        }),
        [
          dragOverlay,
          dragging,
          fadeIn,
          index,
          listeners,
          ref,
          sorting,
          style,
          transform,
          transition,
          value,
        ]
      );

      const dragHandleProps = useMemo(
        () => ({
          ...handleProps,
          ...listeners,
        }),
        [handleProps, listeners]
      );

      return renderItem ? (
        renderItem(renderItemArgs)
      ) : (
        <li
          className={classNames(
            styles.Wrapper,
            fadeIn && styles.fadeIn,
            sorting && styles.sorting,
            dragOverlay && styles.dragOverlay
          )}
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition].filter(Boolean).join(', '),
              '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
              '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
              '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
              '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
              '--index': index,
              '--color': color,
            } as React.CSSProperties
          }
          ref={ref}
        >
          <div
            className={classNames(
              styles.Item,
              dragging && styles.dragging,
              handle && styles.withHandle,
              dragOverlay && styles.dragOverlay,
              disabled && styles.disabled,
              color && styles.color
            )}
            style={style}
            data-cypress="draggable-item"
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            {renderItemContent
              ? renderItemContent({ ...renderItemArgs, handleProps: dragHandleProps })
              : value?.id || ''}

            {userDefinedHandleRemove && (
              <span className={styles.Actions}>
                {onRemove ? <Remove className={styles.Remove} onClick={onRemove} /> : null}
                {handle ? <Handle {...dragHandleProps} /> : null}
              </span>
            )}
          </div>
        </li>
      );
    }
  )
);
