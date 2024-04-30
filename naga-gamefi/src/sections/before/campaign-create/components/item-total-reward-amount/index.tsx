import React, { forwardRef } from 'react';
import { InputGroup, InputNumber } from 'rsuite';

import './index.scss';

const CampaignCreateItemTotalRewardAmount = forwardRef((props: any, ref) => {
  const { value, symbol, ...rest } = props;

  return (
    <InputGroup className="campaign-create-item-total-reward-amount">
      <InputNumber value={value} ref={ref} {...rest} />
      <InputGroup.Addon className="nobg">{symbol}</InputGroup.Addon>
    </InputGroup>
  );
});

export default CampaignCreateItemTotalRewardAmount;
