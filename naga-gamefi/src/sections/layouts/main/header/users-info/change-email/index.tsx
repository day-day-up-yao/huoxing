import React, { useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

export default () => {
  const {
    sureBtn,
    emailRef,
    getEmailCode,
    // codeerror,
    getNewemail,
    getNewemailCode,
    sendEmailcode,
    sendtime,
    sendTimeflag,
    againtime,
    t,
  } = useContext(Context);
  return (
    <>
      <TitleClose title={t('user_change_email')} />
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
        CountDown={sendTimeflag}
        // codeError={codeerror}
      />
      <Input
        placeholder={t('user_new_email')}
        inputid="newemail"
        getChangeValue={(e: any) => {
          getNewemail(e);
        }}
      />
      <Input
        placeholder={t('user_verifycode')}
        inputid="code"
        issend
        getChangeValue={(e: any) => {
          getNewemailCode(e);
        }}
        sendtime={againtime}
        CountDown={sendTimeflag}
        sendBtn={() => {
          sendEmailcode('new');
        }}
      />
      <Button
        btnFn={() => {
          sureBtn('changeemail');
        }}
        isconcal
      />
    </>
  );
};
