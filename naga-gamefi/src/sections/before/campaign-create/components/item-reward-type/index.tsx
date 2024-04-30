import React, { forwardRef } from 'react';
import { InputPicker } from 'rsuite';

import './index.scss';

const CampaignCreateItemDateRangePicker = forwardRef((props: any, ref) => {
  const { data, t, ...rest } = props;

  return (
    <InputPicker
      className="campaign-create-item-reward-type"
      data={data}
      cleanable={false}
      searchable={false}
      renderValue={(value, item: any) => (item ? t(`${item.label}`) : undefined)}
      renderMenuItem={(label, item) => (item ? t(`${item.label}`) : undefined)}
      {...rest}
      placeholder={t('campaign_create_reward_type_placeholder')}
      ref={ref}
    />
  );
});

export default CampaignCreateItemDateRangePicker;
