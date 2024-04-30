import React, { forwardRef } from 'react';
import { InputGroup, InputNumber } from 'rsuite';

import './index.scss';

const CampaignCreateItemTotalRewardAmountVariable = forwardRef((props: any, ref) => {
  const { value, t, ...rest } = props;

  return (
    <InputGroup className="campaign-create-item-total-reward-amount">
      <InputGroup.Addon>
        {t('campaign_create_reward_token_reward_amount_variable_equals')}
      </InputGroup.Addon>
      <InputNumber value={value} ref={ref} {...rest} />
      <InputGroup.Addon className="nobg">USDT</InputGroup.Addon>
    </InputGroup>
  );
});

export default CampaignCreateItemTotalRewardAmountVariable;
