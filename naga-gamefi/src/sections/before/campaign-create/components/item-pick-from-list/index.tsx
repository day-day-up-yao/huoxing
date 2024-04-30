import React, { forwardRef, useMemo } from 'react';
import { InputPicker } from 'rsuite';

import './index.scss';

const CampaignCreateItemNetwork = forwardRef((props: any, ref) => {
  const { rewardTokenObjData, chain, t, ...rest } = props;

  const data = useMemo(
    () => (rewardTokenObjData && chain ? rewardTokenObjData[chain] : []),
    [rewardTokenObjData, chain]
  );

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
      renderMenuItem={(label, item: any) =>
        item ? (
          <div className="campaign-create-item-network-render-menu-item">
            <img src={item.icon} alt="" />
            {label}
          </div>
        ) : null
      }
      {...rest}
      placeholder={t('campaign_create_reward_token_pick_from_list')}
      ref={ref}
    />
  );
});

export default CampaignCreateItemNetwork;
