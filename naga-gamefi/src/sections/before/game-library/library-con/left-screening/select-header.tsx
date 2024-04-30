import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import SvgIcon from 'src/components/svg-icon';

export default (props: any) => {
  const { name, num, isclear, foldIndex, foldList, onFold } = props;
  const { t } = useTranslation();
  return (
    <div className="screening-header">
      <div className="header-title">
        <div className="name">{name}</div>
        <div className="num">{num !== 0 && `（${num}）`}</div>
      </div>
      {isclear && <div className="header-clear">{isclear}</div>}
      {typeof foldIndex === 'number' && (
        <div className="header-fold" onClick={onFold}>
          {foldList[foldIndex] ? t('public_btn_more') : t('public_btn_less')}
          {/* <img
            className={classNames('header-fold-icon', { fold: foldList[foldIndex] })}
            src="/images/icon/pointdowns.png"
            alt="down"
          /> */}
        </div>
      )}
    </div>
  );
};
