import React, { useMemo } from 'react';

import './index.scss';
import { Button, ButtonGroup } from 'rsuite';

const CampaignCreateStepBtnGroup = (props: any) => {
  const {
    t,
    nowStep,
    stepFirstId,
    stepEndId,
    isLoading,
    onChangeNowStepClick,
    onBtnHandleSubmitClick,
  } = props;

  // 存草稿 按钮
  // const btnSave = useMemo(
  //     () => (
  //         <Button className="campaign-create-step-btn-group-ghost-btn" appearance="ghost">
  //             {t('campaign_create_btn_previous')}
  //         </Button>
  //     ),
  //     []
  // )

  // 上一步 按钮
  const btnPrevious = useMemo(
    () => (
      <Button
        className="campaign-create-step-btn-group-ghost-btn"
        appearance="ghost"
        onClick={() => onChangeNowStepClick(nowStep - 1)}
      >
        {t('campaign_create_btn_previous')}
      </Button>
    ),
    [nowStep, onChangeNowStepClick, t]
  );

  // 下一步 按钮
  const btnNext = useMemo(
    () => (
      <Button
        className="campaign-create-step-btn-group-primary-btn"
        appearance="primary"
        loading={isLoading}
        onClick={() => onChangeNowStepClick(nowStep + 1)}
      >
        {t('campaign_create_btn_next')}
      </Button>
    ),
    [isLoading, t, onChangeNowStepClick, nowStep]
  );

  // 完成 按钮
  const btnSubmit = useMemo(
    () => (
      <Button
        className="campaign-create-step-btn-group-primary-btn"
        appearance="primary"
        loading={isLoading}
        onClick={() => onBtnHandleSubmitClick()}
      >
        {t('campaign_create_btn_submit')}
      </Button>
    ),
    [isLoading, t, onBtnHandleSubmitClick]
  );

  return (
    <ButtonGroup className="campaign-create-step-btn-group">
      {nowStep !== stepFirstId && btnPrevious}
      {nowStep < stepEndId && btnNext}
      {nowStep === stepEndId && btnSubmit}
    </ButtonGroup>
  );
};

export default CampaignCreateStepBtnGroup;
