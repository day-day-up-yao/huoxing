import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

export default (props: any) => {
  const { typelist, onSelectFn, itemselect } = props;
  const { t } = useTranslation();

  return (
    <div className="usercenter-con-typeselect">
      {typelist.map((item: any, index: any) => (
        <div
          className={`usercenter-con-typeselect-item ${
            itemselect === item.type && 'typeselect-item-active'
          }`}
          key={index}
          onClick={() => {
            onSelectFn(item.type);
          }}
        >
          {t(item.name)}
        </div>
      ))}
    </div>
  );
};
