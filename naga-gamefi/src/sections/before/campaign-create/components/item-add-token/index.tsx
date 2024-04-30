import React, { forwardRef } from 'react';
import { InputGroup, Input } from 'rsuite';

import './index.scss';

const CampaignCreateItemExtraBonus = forwardRef((props: any, ref) => {
  const { t, ...rest } = props;

  return (
    <InputGroup className="campaign-create-item-add-token">
      <InputGroup.Addon className="input-group-add-left-first">
        {t('campaign_create_reward_token_add_placeholder')}
      </InputGroup.Addon>
      <Input ref={ref} {...rest} />
    </InputGroup>
  );
});

export default CampaignCreateItemExtraBonus;
