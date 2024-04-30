import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const CommunitiesSkeletonItem = () => (
  <Stack
    sx={({ palette }) => ({
      p: '30px',
      borderRadius: '5px',
      bgcolor: palette.background.paper,
      border: '1px solid',
      borderColor: 'border',
      gap: '16px',
    })}
  >
    <Stack direction="row" alignItems="center" gap="16px">
      <Skeleton variant="circular" height="40px" width="40px" />
      <Skeleton variant="text" width="50%" />
    </Stack>
    <Skeleton variant="rounded" height="72px" />
    <Skeleton variant="rectangular" height="32px" width="50%" />
  </Stack>
);

export default CommunitiesSkeletonItem;
