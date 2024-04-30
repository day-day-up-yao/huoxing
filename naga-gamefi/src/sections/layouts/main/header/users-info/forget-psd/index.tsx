import React, { useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

export default () => {
  const {
    sureBtn,
    sendtime,
    sendEmailcode,
    codeerror,
    getEmail,
    getEmailCode,
    getPassword,
    sendTimeflag,
    t,
  } = useContext(Context);
  return (
    <div className="forgetpsd">
      <TitleClose title={t('user_forget_password')} />
      <Input
        placeholder="Email"
        inputid="email"
        getChangeValue={(e: any) => {
          getEmail(e);
        }}
      />
      <Input
        placeholder={t('user_verifycode')}
        issend
        inputid="code"
        sendtime={sendtime}
        sendBtn={sendEmailcode}
        CountDown={sendTimeflag}
        codeError={codeerror}
        getChangeValue={(e: any) => {
          getEmailCode(e);
        }}
      />
      <Input
        placeholder={t('user_password')}
        ispassword
        inputid="password"
        getChangeValue={(e: any) => {
          getPassword(e);
        }}
      />
      <Button
        btnFn={() => {
          sureBtn('forgetpsd');
        }}
      />
    </div>
  );
};
