import React, { useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

export default () => {
  const {
    sureBtn,
    getPassword,
    codeerror,
    sendTimeflag,
    emailRef,
    sendEmailcode,
    getEmailCode,
    sendtime,
    t,
  } = useContext(Context);
  return (
    <>
      <TitleClose title={t('user_change_password')} />
      <Input disabled invalue={emailRef.current} inputid="email" />
      <Input
        placeholder={t('user_verifycode')}
        inputid="code"
        issend
        getChangeValue={(e: any) => {
          getEmailCode(e);
        }}
        sendtime={sendtime}
        sendBtn={sendEmailcode}
        codeError={codeerror}
        CountDown={sendTimeflag}
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
          sureBtn('changepsd');
        }}
        isconcal
      />
    </>
  );
};
