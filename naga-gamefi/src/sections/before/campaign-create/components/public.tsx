import { isFunction } from 'lodash';
import React, { useCallback, useMemo, useRef } from 'react';
import useComposition, { NormalizeHandlerType } from 'src/utils/hooks/use-composition';
import { sleep } from 'src/utils/sleep';

export const ErrorMessage = ({ children }: any) => <span style={{ color: 'red' }}>{children}</span>;

export const Cell = ({ className, style, children, ...rest }: any) => (
  <td
    className={className}
    style={{ padding: '2px 4px 2px 0', verticalAlign: 'top', ...style }}
    {...rest}
  >
    {children}
  </td>
);

export const useInputProps = (props: {
  item: any;
  handleInputChange: (data: any, args?: { afterOnChange?: any }) => void;
  normalizeTrigger?: any;
  normalize?: any;
  onBlur?: any;
  paramName?: string;
}) => {
  const { item, handleInputChange, paramName = 'param1' } = props;

  const inputRef = useRef<any | null>(null);

  const normalizeHandler = useCallback(
    (type: NormalizeHandlerType) => {
      let handler;
      const normalizeTrigger = props.normalizeTrigger || ['onBlur'];
      if (
        Array.isArray(normalizeTrigger) &&
        normalizeTrigger.indexOf(type) > -1 &&
        isFunction(props.normalize)
      ) {
        handler = props.normalize;
      }
      return handler;
    },
    [props.normalize, props.normalizeTrigger]
  );

  const {
    compositionValue,
    valueChangeHandler,
    compositionHandler,
    keyDownHandler,
    triggerValueChangeCallback,
  } = useComposition({
    value: item[paramName] || '',
    maxLength: 10000,
    onChange: (value, e) => {
      const oldPosition = inputRef.current?.selectionStart;
      handleInputChange(
        { ...item, [paramName]: value },
        {
          afterOnChange: () => {
            if (!oldPosition) return;
            inputRef.current?.setSelectionRange(oldPosition, oldPosition);
          },
        }
      );
    },
    onKeyDown: (e: any) => ['@'].includes(e.key) && e.preventDefault(),
    normalizeHandler,
  });

  const inputProps = useMemo(
    () => ({
      value: compositionValue || item[paramName] || '',
      onMouseDown: (e: any) => e.stopPropagation(),
      onTouchStart: (e: any) => e.stopPropagation(),
      onKeyDown: keyDownHandler,
      onChange: (value: any, e: any) => valueChangeHandler(e),
      onCompositionStart: (e: any) => compositionHandler(e),
      onCompositionUpdate: (e: any) => compositionHandler(e),
      onCompositionEnd: (e: any) => compositionHandler(e),
      onBlur: (e: any) => {
        props.onBlur?.(e);
        const normalize = normalizeHandler('onBlur');
        if (normalize && triggerValueChangeCallback) {
          triggerValueChangeCallback(normalize(e.target.value), e);
        }
      },
    }),
    [
      compositionHandler,
      compositionValue,
      item,
      keyDownHandler,
      normalizeHandler,
      paramName,
      props,
      triggerValueChangeCallback,
      valueChangeHandler,
    ]
  );

  return { ...inputProps, ref: inputRef };
};
