import React, { useContext, useMemo } from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { Context } from '../context';

export default () => {
  const { t, currentTab, TABS, isSubmitting, handleChangeTab, handleCancel } = useContext(Context);

  // 上一步按钮
  const readerCancelBtn = useMemo(
    () => (
      <Button fullWidth variant="outlined" size="large" onClick={() => handleCancel()}>
        {t('public_btn_cancel')}
      </Button>
    ),
    [handleCancel, t]
  );

  // 下一步按钮
  const readerNextBtn = useMemo(
    () => (
      <Button
        fullWidth
        variant="contained"
        size="large"
        color="error"
        onClick={(e) => handleChangeTab(e, TABS[1].value)}
      >
        {t('public_btn_next')}
      </Button>
    ),
    [t, TABS, handleChangeTab]
  );

  // 上一步按钮
  const readerPreviousBtn = useMemo(
    () => (
      <Button
        fullWidth
        variant="outlined"
        size="large"
        onClick={(e) => handleChangeTab(e, TABS[0].value)}
      >
        {t('public_btn_previous')}
      </Button>
    ),
    [t, TABS, handleChangeTab]
  );

  // 提交按钮
  const readerSubmitBtn = useMemo(
    () => (
      <LoadingButton
        fullWidth
        type="submit"
        variant="contained"
        size="large"
        color="error"
        loading={isSubmitting}
      >
        {t('public_btn_submit')}
      </LoadingButton>
    ),
    [isSubmitting, t]
  );

  return (
    <Grid container spacing="20px" sx={{ mt: '8px' }}>
      <Grid xl={4}>{currentTab === TABS[0].value ? readerCancelBtn : readerPreviousBtn}</Grid>
      <Grid xl={8}>{currentTab === TABS[0].value ? readerNextBtn : readerSubmitBtn}</Grid>
    </Grid>
  );
};
