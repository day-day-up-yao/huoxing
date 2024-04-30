import React, { forwardRef } from 'react';
import { InputPicker } from 'rsuite';

import './index.scss';

const CampaignCreateItemNetwork = forwardRef((props: any, ref) => {
  const { data, t, ...rest } = props;

  return (
    <InputPicker
      className="campaign-create-item-network"
      data={data}
      cleanable={false}
      renderValue={(value, item: any) =>
        item ? (
          <div className="campaign-create-item-network-render-value">
            <img src={item.icon} alt="" />
            {item.label}
          </div>
        ) : null
      }
      renderMenuItem={(label, item) =>
        item ? (
          <div className="campaign-create-item-network-render-menu-item">
            <img src={item.icon} alt="" />
            {label}
          </div>
        ) : null
      }
      {...rest}
      placeholder={t('campaign_create_reward_network_placeholder')}
      ref={ref}
    />
  );
});

export default CampaignCreateItemNetwork;
