import React, { forwardRef } from 'react';
import { InputPicker } from 'rsuite';

import './index.scss';

const CampaignCreateItemRewardDistributeBy = forwardRef((props: any, ref) => {
  const { data, t, ...rest } = props;

  return (
    <InputPicker
      className="campaign-create-item-reward-distributed-by"
      data={data}
      cleanable={false}
      searchable={false}
      defaultValue={1}
      disabledItemValues={[0]}
      renderValue={(value, item: any) => (item ? t(`${item.label}`) : undefined)}
      renderMenuItem={(label, item) => (item ? t(`${item.label}`) : undefined)}
      {...rest}
      ref={ref}
    />
  );
});

export default CampaignCreateItemRewardDistributeBy;
