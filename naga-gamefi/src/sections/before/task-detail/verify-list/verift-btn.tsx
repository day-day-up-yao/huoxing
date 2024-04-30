import React, { useState, useEffect, useContext } from 'react';
import { Loader } from 'rsuite';
import classNames from 'classnames';

import './index.scss';

import { Context } from '../context';

export default (props: any) => {
  const { verifyBtnClick, text, isTop } = props;
  const { verloading } = useContext(Context);
  const [btninfo, setBtninfo] = useState(0);
  useEffect(() => {
    setBtninfo(0);
  }, [verloading]);
  return (
    <div
      className={classNames('taskdetail-left-selecttask-list-item-right-btn', {
        'right-top': isTop,
      })}
      onClick={() => {
        verifyBtnClick();
        setBtninfo(1);
      }}
    >
      {btninfo === 0 && (text || 'Verify')}
      {btninfo === 1 && <Loader />}
    </div>
  );
};
