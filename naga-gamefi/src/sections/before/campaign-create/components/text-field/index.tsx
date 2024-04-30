import React, { forwardRef, useMemo, useState } from 'react';
import { Form, Toggle } from 'rsuite';
import classNames from 'classnames';

import './index.scss';

const CampaignCreateTextField = forwardRef((props: any, ref) => {
  const {
    className,
    name,
    style,
    label,
    toggleShow,
    labelFirst,
    helpText,
    accepter,
    placeholder,
    errorMessage,
    isLoading,
    ...rest
  } = props;

  // 开关展示
  const [isToggleShow, setIsToggleShow] = useState(false);

  // 表单内容
  const ControlDom = useMemo(
    () => (
      <Form.Control
        name={name}
        placeholder={placeholder}
        accepter={accepter}
        {...rest}
        errorMessage=""
      />
    ),
    [accepter, name, placeholder, rest]
  );

  return (
    <Form.Group
      className={classNames('campaign-create-textfield', className)}
      controlId={`campaign-create-${name}`}
      style={style}
      ref={ref as any}
    >
      {label ? (
        <Form.ControlLabel
          className={classNames('campaign-create-textfield-title', { first: labelFirst })}
        >
          <div>
            <span style={{ textTransform: 'capitalize' }}>{label}</span>
            {toggleShow && (
              <Toggle
                onChange={(isShow) => setIsToggleShow(isShow)}
                style={{ marginLeft: '16px' }}
              />
            )}
          </div>
        </Form.ControlLabel>
      ) : undefined}
      {toggleShow ? (isToggleShow ? ControlDom : null) : ControlDom}
      {helpText && <Form.HelpText>{helpText}</Form.HelpText>}
      {errorMessage && !isLoading ? (
        <div className="campaign-create-textfield-error">{errorMessage}</div>
      ) : null}
    </Form.Group>
  );
});

export default CampaignCreateTextField;
