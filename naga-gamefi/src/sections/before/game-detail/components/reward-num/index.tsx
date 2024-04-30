import React from 'react';
import { Stack, Avatar, Typography, Box } from '@mui/material';

export default (props: any) => {
  // eslint-disable-next-line react/prop-types
  const { starnum, updown } = props;
  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Avatar src="/images/icon/falshicon.png" sx={{ width: 20, height: 20 }} />
        <Typography variant="body1" sx={{ color: '#F4BC2C', fontWeight: 500, ml: 0.6 }}>
          {starnum}
        </Typography>
      </Stack>
      {updown && (
        <Typography variant="body2" sx={{ color: '#15BD44' }}>
          {updown}
        </Typography>
      )}
    </Box>
  );
};
