import React from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemWatchAvideoOnYoutube = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const inputProps = useInputProps({ item, handleInputChange });
  const textareaProps = useInputProps({ item, handleInputChange, paramName: 'param2' });

  return (
    <div className="campaign-create-item-task-item-content">
      <div className="item-title" style={{ marginTop: 0 }}>
        {t(data?.title1)}
      </div>
      <Input className="input" placeholder={t(data?.placeholder1)} {...inputProps} />
      <div className="item-title">{t(data?.title2)}</div>
      <InputGroup className="input-group" inside>
        <Input
          className="textarea"
          as="textarea"
          spellCheck="false"
          placeholder={t(data?.placeholder2)}
          maxLength={100}
          {...textareaProps}
        />
        <InputGroup.Addon className="textarea-num-box">
          {item.param2 ? item.param2.length : 0}/100
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
};

export default CampaignCreateItemTaskItemWatchAvideoOnYoutube;
