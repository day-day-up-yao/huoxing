'use client';

import { useContext, useMemo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import { Context } from './context';

const ManageGameInfoContent = () => {
  const { t } = useContext(Context);

  // 头部
  const titleDom = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{t('manage_navigation_calendar')}</Typography>
        <Button variant="outlined" sx={{ height: '40px' }}>
          {t('manage_calendar_add')}
        </Button>
      </Stack>
    ),
    [t]
  );

  return <Box>{titleDom}</Box>;
};

export default ManageGameInfoContent;
