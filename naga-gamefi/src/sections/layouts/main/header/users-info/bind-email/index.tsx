import React, { useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

export default () => {
  const { sureBtn, sendtime, codeerror, sendEmailcode, sendTimeflag, getEmail, getEmailCode, t } =
    useContext(Context);
  return (
    <div className="bindemail">
      <TitleClose title={t('user_bind_email')} />
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
        getChangeValue={(e: any) => {
          getEmailCode(e);
        }}
        sendtime={sendtime}
        sendBtn={sendEmailcode}
        CountDown={sendTimeflag}
        codeError={codeerror}
      />
      <Button
        btnFn={() => {
          sureBtn('bindemail');
        }}
      />
    </div>
  );
};
