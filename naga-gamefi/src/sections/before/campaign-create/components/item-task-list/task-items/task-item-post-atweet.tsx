import React from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemPostATweet = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const inputProps = useInputProps({ item, handleInputChange });

  return (
    <div className="campaign-create-item-task-item-content">
      <div className="item-title" style={{ marginTop: '0' }}>
        {t(data?.text)}
      </div>
      <InputGroup className="input-group" inside>
        <Input
          className="textarea more"
          as="textarea"
          spellCheck="false"
          placeholder={t(data?.placeholder)}
          maxLength={120}
          {...inputProps}
        />
        <InputGroup.Addon className="textarea-num-box">
          {item.param1 ? item.param1.length : 0}/120
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
};

export default CampaignCreateItemTaskItemPostATweet;
