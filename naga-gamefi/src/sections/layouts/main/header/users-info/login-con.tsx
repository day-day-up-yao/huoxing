import React, { useContext } from 'react';

import PopupPage from 'src/components/popup-page';
import { Context } from './context';
import Loagin from './login';
import AllLoginway from './all-login-way';
import ForgetPsd from './forget-psd';
import BindEmail from './bind-email';
import ChangeName from './change-nickname';
import ChangeEmail from './change-email';
import ChangePsd from './change-psd';

import './index.scss';

export default () => {
  const { showtypes } = useContext(Context);
  return (
    <PopupPage
      children={
        <div className="uses-info">
          {showtypes === 0 && <AllLoginway />}
          {showtypes === 1 && <Loagin />}
          {showtypes === 2 && <ForgetPsd />}
          {showtypes === 3 && <BindEmail />}
          {showtypes === 4 && <ChangeName />}
          {showtypes === 5 && <ChangeEmail />}
          {showtypes === 6 && <ChangePsd />}
        </div>
      }
    />
  );
};
