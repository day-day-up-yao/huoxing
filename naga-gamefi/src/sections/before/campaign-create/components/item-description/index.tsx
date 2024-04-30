import React, { forwardRef } from 'react';

import './index.scss';
import RichText from 'src/components/before/rich-text';

const CampaignCreateItemDescription = forwardRef((props: any, ref) => {
  const { value, onChange, t } = props;

  return <RichText onChange={onChange} value={value} t={t} ref={ref} />;
});

export default CampaignCreateItemDescription;
