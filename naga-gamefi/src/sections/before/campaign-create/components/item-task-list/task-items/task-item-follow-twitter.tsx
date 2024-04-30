import React from 'react';
import { Input, InputGroup } from 'rsuite';
import { useInputProps } from '../../public';
import './index.scss';

const CampaignCreateItemTaskItemFollowTwitter = (props: any) => {
  const { item, data, t, handleInputChange } = props;

  const inputProps = useInputProps({ item, handleInputChange });

  return (
    <div className="campaign-create-item-task-item-content">
      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text)}</InputGroup.Addon>
        <InputGroup.Addon className="input-group-add-left-second">@</InputGroup.Addon>
        <Input className="input left" {...inputProps} />
      </InputGroup>
    </div>
  );
};

export default CampaignCreateItemTaskItemFollowTwitter;
