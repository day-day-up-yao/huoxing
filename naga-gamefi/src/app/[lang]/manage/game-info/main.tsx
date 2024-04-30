'use client';

import { useContext } from 'react';
import FormProvider from 'src/components/hook-form/form-provider';

import { Context } from './context';
import ManageGameInfoHead from './game-info-head';
import ManageGameInfoBasic from './game-info-basic';
import ManageGameInfoPicture from './game-info-picture';

const ManageGameInfoContent = () => {
  const { currentTab, TABS, methods, onSubmit } = useContext(Context);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <ManageGameInfoHead />
      {currentTab === TABS[0].value && <ManageGameInfoBasic />}
      {currentTab === TABS[1].value && <ManageGameInfoPicture />}
    </FormProvider>
  );
};

export default ManageGameInfoContent;
