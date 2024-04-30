import React, { forwardRef, useEffect, useState } from 'react';
import { InputNumber, Toggle } from 'rsuite';

import './index.scss';

const CampaignCreateItemNumberOfWinners = forwardRef((props: any, ref) => {
  const { onChange: fieldOnChange, t } = props;

  // 开关展示
  const [isToggleShow, setIsToggleShow] = useState(false);
  // 输入数值
  const [num, setNum] = useState<any>();

  // 输入变化
  const onInputNumberChange = (value: any) => {
    setNum(value);
    fieldOnChange(value);
  };

  // 开关变化
  const onToggleShowChange = (isShow: any) => {
    setNum('');

    if (isShow) {
      fieldOnChange(-1);
    } else {
      fieldOnChange(undefined);
    }

    setIsToggleShow(isShow);
  };

  useEffect(() => {
    console.log('isToggleShow', isToggleShow);
  }, [isToggleShow]);

  return (
    <div className="campaign-create-item-number-of-winners">
      <InputNumber
        className="campaign-create-item-number-of-winners-input"
        placeholder={t('campaign_create_reward_number_of_winners_placeholder')}
        min={1}
        onChange={(value: any, event: any) => onInputNumberChange(value)}
        disabled={isToggleShow}
        value={num}
        ref={ref}
      />
      <div className="campaign-create-item-number-of-winners-switch-box">
        {t('campaign_create_reward_number_of_winners_all')}
        <Toggle
          className="campaign-create-item-number-of-winners-switch"
          onChange={(isShow) => onToggleShowChange(isShow)}
        />
      </div>
    </div>
  );
});

export default CampaignCreateItemNumberOfWinners;
