import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import './index.scss';
import { useTheme } from '@mui/system';
import TitleHeader from 'src/components/before/title-header';
import SvgIcon from 'src/components/svg-icon';

const CampaignCreateStepDrawer = (props: any) => {
  const { t, listData, nowStep, onChangeNowStepClick } = props;

  // 标题
  const titleDom = useMemo(
    () => (
      <TitleHeader
        className="campaign-create-step-drawer-title"
        text={t('campaign_create_title')}
      />
    ),
    [t]
  );

  // 标题 —— 移动端
  const titleDomM = useMemo(
    () => (
      <TitleHeader
        className="campaign-create-step-drawer-title-m"
        text={t(`${listData.find((item: any) => nowStep === item.id).title}`) || ''}
      />
    ),
    [listData, nowStep, t]
  );

  const theme = useTheme();
  // 选项
  const stepItem = useCallback(
    (item: any, index: any) => {
      const isActive = nowStep === item.id;
      return (
        <div key={index}>
          <div
            className={classNames('campaign-create-step-drawer-item-divide', { none: index === 0 })}
          />
          <div
            className={classNames('campaign-create-step-drawer-item', {
              active: isActive,
            })}
            onClick={() => onChangeNowStepClick(item.id)}
          >
            <div className="item-icon-box">
              <SvgIcon name={item.icon} style={{ color: isActive ? theme.palette.grey[50] : '' }} />
            </div>
            <div className="item-title" style={{ color: isActive ? theme.palette.grey[50] : '' }}>
              {t(item.title)}
            </div>
          </div>
        </div>
      );
    },
    [nowStep, onChangeNowStepClick, t, theme.palette.grey]
  );

  // 选项列表
  const stepListDom = useMemo(
    () => (
      <div className="campaign-create-step-drawer-list">
        {listData.map((item: any, index: any) => stepItem(item, index))}
      </div>
    ),
    [listData, stepItem]
  );

  // 选项列表 —— 移动端
  const stepListDomM = useMemo(
    () => (
      <div className="campaign-create-step-drawer-list-m">
        {listData.map((item: any, index: any) => (
          <div
            className={classNames('campaign-create-step-drawer-item-m', {
              active: nowStep > item.id - 1,
            })}
            key={index}
          />
        ))}
      </div>
    ),
    [listData, nowStep]
  );

  // Q&A 帮助按钮
  // const helpBtnDom = useMemo(
  //     () => (
  //         <a className="campaign-create-step-drawer-help-btn-box">
  //             <div className="help-icon">?</div>
  //             <div className="help-text">Help Center</div>
  //         </a>
  //     ),
  //     []
  // )

  return (
    <div className="campaign-create-step-drawer">
      {titleDom}
      {titleDomM}
      {stepListDom}
      {stepListDomM}
      {/* {helpBtnDom} */}
    </div>
  );
};

export default CampaignCreateStepDrawer;
