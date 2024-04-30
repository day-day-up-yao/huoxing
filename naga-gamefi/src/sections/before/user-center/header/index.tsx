import React, { useContext } from 'react';

import './index.scss';

import SvgIcon from 'src/components/svg-icon';
import { paths } from 'src/routes/paths';
import { useLink } from 'src/components/link';
import { Context } from '../context';

export default () => {
  const { accountinfo, t } = useContext(Context);
  const { linkTo } = useLink();
  return (
    <div className="usercenter-header">
      <div className="usercenter-header-left">
        <div className="usercenter-header-left-avatar">
          {accountinfo.avatarUrl && <img src={accountinfo.avatarUrl} alt="" />}
          {/* <div className="usercenter-header-left-avatar-first">
                        <div className="usercenter-header-left-avatar-two">
                            <img src={accountinfo.avatarUrl} alt="" />
                        </div>
                    </div> */}
        </div>
        <div className="usercenter-header-left-info">
          <div className="usercenter-header-left-info-title">{accountinfo.name}</div>
          <div className="usercenter-header-left-info-points">
            <SvgIcon name="points" />
            <span>
              {t('quest_user_points')}： {accountinfo.strBonus}
            </span>
          </div>
        </div>
      </div>
      <div
        className="usercenter-header-right"
        onClick={() => {
          linkTo(paths.userSetting);
        }}
      >
        <span>{t('public_setting')}</span>
        <SvgIcon name="btn_arrow_right_line" />
      </div>
    </div>
  );
};
