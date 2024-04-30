'use client';

import { useMemo } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import ActivityBanner from './activity-banner';
import ActivityList from './activity-list';
import ActivityListSub from './activity-list-sub';
import ActivityRules from './activity-rules';
import ActivityAbout from './activity-about';
import ActivityOrganizer from './activity-organizer';
import ActivityDecorateBox from './activity-decorate-box';

const ActivityContent = () => {
  const { isMob } = useBreakPoint();

  // 顶部Banner
  const topBg = useMemo(
    () => (
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: isMob ? '750px' : '1600px',
          top: isMob ? '50px' : '0',
          zIndex: '0',
          backgroundImage: isMob
            ? 'url(/images/activity/fight2023/bg/bg-main-top-h5.webp)'
            : 'url(/images/activity/fight2023/bg/bg-main-top.webp)',
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
        background: 'linear-gradient(180deg, #0A052C 0%, #18191D 100%)',
      }}
    >
      {topBg}
      <Container maxWidth="xl">
        <Stack sx={{ position: 'relative', zIndex: '2' }}>
          <ActivityBanner />
          <ActivityList />
          <ActivityListSub />
          <ActivityRules />
          <ActivityOrganizer />
          <ActivityAbout />
          <Box height="40px" />
          <ActivityDecorateBox />
        </Stack>
      </Container>
    </Box>
  );
};

export default ActivityContent;
