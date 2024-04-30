import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { Context } from '../context';
import UsercenterCon from '../user-con';

export default () => {
  const { t, lefttabstype } = useContext(Context);

  return (
    <Box>
      <Typography variant="h3">
        {lefttabstype === 0 && t('user_participated')}
        {lefttabstype === 1 && t('user_taskmanagemen')}
        {lefttabstype === 2 && t('user_badge')}
        {lefttabstype === 3 && t('rate_popup_btn')}
        {lefttabstype === 4 && t('user_settings')}
      </Typography>
      <UsercenterCon />
    </Box>
  );
};
