'use client';

import { useMemo } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import ClaimTop from './claim-top';
import ClaimBottom from './claim-bottom';
import ClaimPopup from './claim-popup';

const ActivityContent = () => {
  const { isMob } = useBreakPoint();

  // 顶部Banner
  const topBg = useMemo(
    () => (
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: isMob ? '862px' : '1150px',
          top: isMob ? '50px' : '0',
          zIndex: '0',
          backgroundImage: isMob
            ? 'url(/images/activity/fight2023/claim/bg-claim-h5.webp)'
            : 'url(/images/activity/fight2023/claim/bg-claim.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'top',
        }}
      />
    ),
    [isMob]
  );

  return (
    <Box
      sx={{
        background: '#0A052C',
      }}
    >
      {topBg}
      <Container maxWidth="lg">
        <Stack sx={{ position: 'relative', zIndex: '2' }}>
          <ClaimTop />
          <ClaimBottom />
        </Stack>
      </Container>
      <ClaimPopup />
    </Box>
  );
};

export default ActivityContent;
