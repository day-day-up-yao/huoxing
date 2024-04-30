import { Stack } from '@mui/material';
import React, { useMemo } from 'react';

const UserInfoBox = () => {
  console.log(1);

  const infoBox = useMemo(
    () => (
      <Stack
        direction="column"
        alignItems="center"
        sx={({ palette }) => ({
          width: '320px',
          p: '50px',
          boxSizing: 'border-box',
          bgcolor: palette.background.paper,
        })}
      >
        112
      </Stack>
    ),
    []
  );

  return infoBox;
};

export default UserInfoBox;
