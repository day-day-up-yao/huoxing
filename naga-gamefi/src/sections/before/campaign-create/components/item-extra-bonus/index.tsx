import React, { forwardRef } from 'react';
import { InputGroup, Input } from 'rsuite';

import './index.scss';

const CampaignCreateItemExtraBonus = forwardRef((props: any, ref) => {
  const { value, t, ...rest } = props;

  return (
    <InputGroup className="campaign-create-item-extra-bonus" inside>
      <Input
        className="campaign-create-item-extra-bonus-input"
        as="textarea"
        spellCheck="false"
        placeholder={t('campaign_create_reward_extra_bonus_placeholder')}
        maxLength={500}
        value={value}
        ref={ref}
        {...rest}
      />
      <InputGroup.Addon className="campaign-create-item-extra-bonus-num">
        {value ? value.length : 0}/500
      </InputGroup.Addon>
    </InputGroup>
  );
});

export default CampaignCreateItemExtraBonus;
