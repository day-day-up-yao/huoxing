import React, { useState } from 'react';
import { Input, InputGroup, Toggle } from 'rsuite';

import './index.scss';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemQA = (props: any) => {
  const { item, data, t, handleInputChange } = props;

  const [isToggleShow, setIsToggleShow] = useState<any>(item.param2 || false);

  const inputProps = useInputProps({ item, handleInputChange });
  const inputProps3 = useInputProps({ item, handleInputChange, paramName: 'param3' });

  const onToggleChange = (isShow: any) => {
    setIsToggleShow(isShow);
    handleInputChange({ ...item, param2: isShow });
  };

  return (
    <div className="campaign-create-item-task-item-content">
      <div className="item-title" style={{ marginTop: '0' }}>
        {t(data?.title1)}
      </div>
      <InputGroup className="input-group" inside>
        <Input
          className="textarea more"
          as="textarea"
          spellCheck="false"
          placeholder={t(data?.placeholder1)}
          maxLength={500}
          {...inputProps}
        />
        <InputGroup.Addon className="textarea-num-box">
          {item.param1 ? item.param1.length : 0}/500
        </InputGroup.Addon>
      </InputGroup>
      <div className="item-title">
        {t(data?.title2)}
        <Toggle
          {...{ value: isToggleShow }}
          onChange={(isShow) => onToggleChange(isShow)}
          style={{ marginLeft: '16px' }}
        />
      </div>
      {isToggleShow ? (
        <Input className="input" placeholder={t(data?.placeholder2)} {...inputProps3} />
      ) : undefined}
    </div>
  );
};

export default CampaignCreateItemTaskItemQA;
