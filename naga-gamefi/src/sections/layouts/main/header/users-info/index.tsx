import React from 'react';
import { useUserPopup } from 'src/fetchs/store';
import ContextUserInfo from './context';
import LoginCon from './login-con';
import './index.scss';

export default () => {
  const {
    data: { popupShow },
  } = useUserPopup();

  return <ContextUserInfo>{popupShow && <LoginCon />}</ContextUserInfo>;
};
