import React, { useCallback } from 'react';
import { Box, Skeleton, Stack } from '@mui/material';
import { useTheme } from '@mui/system';

const CalendarTableSkeleton = () => {
  const theme = useTheme();

  const skeletonDom = useCallback(
    (key: number) => (
      <Stack
        key={key}
        direction="row"
        height="110px"
        width={1}
        gap="16px"
        sx={{
          mt: '24px',
          borderBottom: `1px solid ${theme.palette.border}`,
        }}
      >
        <Skeleton variant="circular" width={50} height={50} />
        <Box width={160}>
          <Skeleton variant="rectangular" height="20px" sx={{ mb: '16px' }} />
          <Skeleton variant="rectangular" width={100} height="28px" sx={{ borderRadius: '8px' }} />
        </Box>
        <Box flex={1}>
          <Skeleton variant="rectangular" height="20px" sx={{ mb: '16px' }} />
          <Skeleton variant="rectangular" height="20px" sx={{ mb: '4px' }} />
          <Skeleton variant="rectangular" height="20px" />
        </Box>
      </Stack>
    ),
    [theme.palette.border]
  );

  return (
    <Stack direction="column">
      {Array.from({ length: 6 }).map((_, index) => skeletonDom(index))}
    </Stack>
  );
};

export default CalendarTableSkeleton;
