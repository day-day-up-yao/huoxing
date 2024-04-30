import React from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemJoinTelegram = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const inputProps = useInputProps({ item, handleInputChange });
  return (
    <div className="campaign-create-item-task-item-content">
      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text)}</InputGroup.Addon>
        <Input className="input" placeholder={t(data?.placeholder)} {...inputProps} />
      </InputGroup>
    </div>
  );
};

export default CampaignCreateItemTaskItemJoinTelegram;
