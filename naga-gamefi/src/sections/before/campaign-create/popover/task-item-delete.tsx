import React from 'react';
import { Button } from 'rsuite';

import './index.scss';
import PopupPage from 'src/components/popup-page';
import { useIsDark } from 'src/utils/hooks/use-is-dark';

const iconClose = '/images/icon/btn-close.png';
const iconBell = '/images/icon/popover-bell.png';

const PopoverTaskItemDelete = (props: any) => {
  const { t, onBtnCancelClick, onBtnDeleteClick } = props;

  const isDark = useIsDark();
  return (
    <PopupPage
      children={
        <div className="campaign-create-popover">
          <div className="campaign-create-popover-close-box" onClick={() => onBtnCancelClick()}>
            <img className="campaign-create-popover-close-img" src={iconClose} alt="" />
          </div>
          <img className="campaign-create-popover-img" src={iconBell} alt="" />
          <div className="campaign-create-popover-text">{t('campaign_create_popover_title')}</div>
          <div className="campaign-create-popover-btn-box">
            <Button className="campaign-create-popover-btn no" onClick={() => onBtnCancelClick()}>
              {t('campaign_create_popover_cancel')}
            </Button>
            <Button
              className="campaign-create-popover-btn ok"
              onClick={() => onBtnDeleteClick()}
              style={{ color: `rgba(255, 255, 255, ${isDark ? '1' : '0.9'})` }}
            >
              {t('campaign_create_popover_delete')}
            </Button>
          </div>
        </div>
      }
    />
  );
};

export default PopoverTaskItemDelete;
