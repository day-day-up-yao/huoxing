import React, { useMemo, useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

import './index.scss';

export default () => {
  const {
    chanceType,
    sureBtn,
    emailtype,
    selectEmailtype,
    getEmail,
    getEmailCode,
    getPassword,
    sendtime,
    sendEmailcode,
    sendTimeflag,
    codeerror,
    t,
  } = useContext(Context);

  console.log(codeerror);

  // 登录方式切换 忘记密码 注册 入口
  const LoginBottom = useMemo(
    () => (
      <div className="login-bottom">
        <div className="login-bottom-changelogin">
          <div className="login-bottom-changelogin-link" onClick={selectEmailtype}>
            {emailtype === 0 ? t('user_make_password_login') : t('user_make_code_login')}
          </div>
          {emailtype !== 0 && (
            <div className="login-bottom-changelogin-link" onClick={() => chanceType(2)}>
              {t('user_forget_password')}
            </div>
          )}
        </div>
        {/* <div className="login-bottom-tologinup">
                <span>沒有帳號？</span>
                <div className="to-signup">去註冊</div>
            </div> */}
      </div>
    ),
    [chanceType, emailtype, selectEmailtype, t]
  );

  return (
    <div className="login">
      <TitleClose title={t('user_login')} />
      <Input
        placeholder="Email"
        inputid="email"
        getChangeValue={(e: any) => {
          getEmail(e);
        }}
      />
      {emailtype === 0 ? (
        <Input
          placeholder={t('user_verifycode')}
          issend
          inputid="code"
          getChangeValue={(e: any) => {
            getEmailCode(e);
          }}
          sendtime={sendtime}
          sendBtn={sendEmailcode}
          CountDown={sendTimeflag}
          codeError={codeerror}
        />
      ) : (
        <Input
          placeholder={t('user_password')}
          ispassword
          inputid="password"
          getChangeValue={(e: any) => {
            getPassword(e);
          }}
        />
      )}
      <Button
        btnFn={() => {
          sureBtn('login');
        }}
      />
      {LoginBottom}
    </div>
  );
};
