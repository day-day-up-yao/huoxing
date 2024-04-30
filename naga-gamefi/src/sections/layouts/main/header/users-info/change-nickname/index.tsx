import React, { useContext } from 'react';

import TitleClose from '../components/titleand-close';
import Input from '../components/input';
import Button from '../components/button';
import { Context } from '../context';

export default () => {
  const { sureBtn, getName, t } = useContext(Context);
  return (
    <>
      <TitleClose title={t('user_change_nickname')} />
      <Input
        placeholder="Nickname"
        inputid="nickname"
        getChangeValue={(e: any) => {
          getName(e);
        }}
      />
      <Button
        btnFn={() => {
          sureBtn('changename');
        }}
        isconcal
      />
    </>
  );
};
