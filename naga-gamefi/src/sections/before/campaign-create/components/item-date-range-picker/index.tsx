import React, { forwardRef } from 'react';
import { DateRangePicker } from 'rsuite';
import isBefor from 'date-fns/isBefore';

import './index.scss';

// const { beforeToday } = DateRangePicker
const CampaignCreateItemDateRangePicker = forwardRef((props, ref) => {
  const { ...rest } = props;

  return (
    <DateRangePicker
      className="campaign-create-item-date-range-picker"
      block
      format="yyyy-MM-dd HH:mm:ss"
      editable={false}
      cleanable={false}
      disabledDate={(date) => isBefor(date, new Date())}
      ref={ref as any}
      {...rest}
    />
  );
});

export default CampaignCreateItemDateRangePicker;
