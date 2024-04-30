import React, { useContext, useMemo } from 'react';
import { Form } from 'rsuite';

import './index.scss';

import { Context } from './context';
import CampaignCreateStepDrawer from './create-step';
import Basicinfo from './form-box/basic-info';
import Rewards from './form-box/rewards';
import Tasks from './form-box/tasks';
import IncludeGoogleCaptcha from './form-box/include-google-captcha';
import CampaignCreateStepBtnGroup from './components/step-btn-group';

const CampaignCreateMain = () => {
  const {
    t,
    stepListData,
    rewardTypeData,
    rewardChainListData,
    rewardTokenObjData,
    drawWinnersMethodData,
    autoWinnersMethodData,
    rewardDistributeByData,
    rewardsDistributionData,
    taskListData,
    nowStep,
    stepFirstId,
    stepEndId,
    formRef,
    formValue,
    formError,
    model,
    tokenType,
    tokenInfo,
    nftInfo,
    setFormValue,
    setFormError,
    popover,
    isUseUSDT,
    isLoading,
    setIsLoading,
    onPopoverChange,
    onChangeNowStepClick,
    onBtnHandleSubmitClick,
    onBtnTokenTypeClick,
    onBtnTokenIsUseUSDTChange,
  } = useContext(Context);

  const stepDom = useMemo(
    () => (
      <CampaignCreateStepDrawer
        t={t}
        listData={stepListData}
        nowStep={nowStep}
        onChangeNowStepClick={onChangeNowStepClick}
      />
    ),
    [nowStep, onChangeNowStepClick, stepListData, t]
  );

  const btnDom = useMemo(
    () => (
      <CampaignCreateStepBtnGroup
        t={t}
        nowStep={nowStep}
        stepFirstId={stepFirstId}
        stepEndId={stepEndId}
        isLoading={isLoading}
        onChangeNowStepClick={onChangeNowStepClick}
        onBtnHandleSubmitClick={onBtnHandleSubmitClick}
      />
    ),
    [t, nowStep, stepFirstId, stepEndId, isLoading, onChangeNowStepClick, onBtnHandleSubmitClick]
  );

  const formDom = useMemo(
    () => (
      <div className="campaign-create-page-form-box">
        <Form
          fluid
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          formError={formError}
          model={model}
        >
          <Basicinfo
            show={nowStep === 1}
            t={t}
            gameInfo={formValue.gameInfo}
            formError={formError}
            setIsLoading={setIsLoading}
          />
          <Rewards
            show={nowStep === 2}
            t={t}
            {...formValue}
            formError={formError}
            tokenType={tokenType}
            tokenInfo={tokenInfo}
            nftInfo={nftInfo}
            rewardTypeData={rewardTypeData}
            rewardChainListData={rewardChainListData}
            rewardTokenObjData={rewardTokenObjData}
            drawWinnersMethodData={drawWinnersMethodData}
            autoWinnersMethodData={autoWinnersMethodData}
            rewardDistributeByData={rewardDistributeByData}
            rewardsDistributionData={rewardsDistributionData}
            isUseUSDT={isUseUSDT}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            onBtnTokenTypeClick={onBtnTokenTypeClick}
            onBtnTokenIsUseUSDTChange={onBtnTokenIsUseUSDTChange}
          />
          <Tasks
            show={nowStep === 3}
            t={t}
            taskListData={taskListData}
            formError={formError}
            popover={popover}
            onPopoverChange={onPopoverChange}
          />
          <IncludeGoogleCaptcha show={nowStep === 3} t={t} />
        </Form>
        {btnDom}
      </div>
    ),
    [
      formRef,
      setFormValue,
      setFormError,
      formValue,
      formError,
      model,
      nowStep,
      t,
      setIsLoading,
      tokenType,
      tokenInfo,
      nftInfo,
      rewardTypeData,
      rewardChainListData,
      rewardTokenObjData,
      drawWinnersMethodData,
      autoWinnersMethodData,
      rewardDistributeByData,
      rewardsDistributionData,
      isUseUSDT,
      isLoading,
      onBtnTokenTypeClick,
      onBtnTokenIsUseUSDTChange,
      taskListData,
      popover,
      onPopoverChange,
      btnDom,
    ]
  );

  return (
    <div className="campaign-create-page">
      <div className="campaign-create-page-content">
        {stepDom}
        {formDom}
      </div>
    </div>
  );
};

export default CampaignCreateMain;
