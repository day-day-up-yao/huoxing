import React, { useCallback, useContext, useMemo } from 'react';
import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import AdminIcon from '@rsuite/icons/Admin';
// import classNames from 'classnames'

import './index.scss';

import { Context } from '../context';

export default () => {
  const { tabType, getTabtype, t } = useContext(Context);
  const tablist = useMemo(
    () => [
      {
        name: t('user_account'),
        icon: <ShareOutlineIcon />,
        type: 0,
      },
      {
        name: t('user_info'),
        icon: <AdminIcon />,
        type: 1,
      },
    ],
    [t]
  );

  const tabItemFn = useCallback(
    (type: any) => {
      getTabtype(type);
    },
    [getTabtype]
  );

  // 切换tab列表
  const TabDom = useMemo(
    () => (
      <div className="usercenter-tab-list">
        {tablist.map((item, index) => (
          <div
            className={`usercenter-tab-item ${tabType === item.type && 'selected-tab-item'}`}
            key={index}
            onClick={() => tabItemFn(item.type)}
          >
            <div className="usercenter-tab-item-con">
              {item.icon}
              {/* <img src="" alt=""/> */}
              <span>{item.name}</span>
            </div>
            {/* {tabType === item.type && <div className="tab-selected-border" />} */}
          </div>
        ))}
      </div>
    ),
    [tablist, tabType, tabItemFn]
  );

  return (
    <div className="usercenter-left">
      {/* <div className="usercenter-left-min">{t('user_mine')}</div> */}
      {TabDom}
    </div>
  );
};
