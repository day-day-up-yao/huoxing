import { Box, Card, Skeleton, Stack } from '@mui/material';

export const LaunchpadItemSkeleton = () => (
  <Card sx={({ palette }) => ({ background: palette.background.paper })}>
    <Box position="relative" paddingBottom="16px" sx={{ marginBottom: '8px' }}>
      <Skeleton
        width="100%"
        height="192px"
        sx={{ borderRadius: '0', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
      />
      <Skeleton
        width="94px"
        height="94px"
        sx={{
          position: 'absolute',
          left: '8px',
          top: '8px',
          borderRadius: '3px',
        }}
      />
      <Skeleton
        width="50px"
        height="50px"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '24px',
          padding: '3px',
          borderRadius: '5px',
        }}
      />
    </Box>
    <Box padding="0 20px 20px">
      <Skeleton
        width="100%"
        height="30px"
        sx={{
          marginBottom: '12px',
          borderRadius: '3px',
        }}
      />
      <Skeleton
        width="100%"
        height="22px"
        sx={{
          marginBottom: '16px',
          borderRadius: '3px',
        }}
      />
      <Skeleton
        width="100%"
        height="21px"
        sx={{
          borderRadius: '3px',
        }}
      />
    </Box>
  </Card>
);
