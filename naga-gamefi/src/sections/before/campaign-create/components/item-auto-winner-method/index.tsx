import React, { forwardRef } from 'react';
import { InputPicker } from 'rsuite';

import './index.scss';

const CampaignCreateItemAutoWinnersMethod = forwardRef((props: any, ref) => {
  const { data, t, ...rest } = props;

  return (
    <InputPicker
      className="campaign-create-item-auto-winners-method"
      data={data}
      cleanable={false}
      searchable={false}
      defaultValue={0}
      renderValue={(value, item: any) => (item ? t(`${item.label}`) : undefined)}
      renderMenuItem={(label, item) => (item ? t(`${item.label}`) : undefined)}
      {...rest}
      ref={ref}
    />
  );
});

export default CampaignCreateItemAutoWinnersMethod;
