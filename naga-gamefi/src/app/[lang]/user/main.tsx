'use client';

import { useMemo } from 'react';
import { Box, Container, Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import UserInfoBox from './components/user-info';

const UserContent = () => {
  // 顶部Banner
  const topBanner = useMemo(
    () => (
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '240px',
          zIndex: '-1',
          backgroundImage: 'url(/images/bigimg/user-top.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    ),
    []
  );

  // 右侧顶部占位
  const rightBox = useMemo(() => <Box height="160px" />, []);

  return (
    <>
      {topBanner}
      <Container maxWidth="xl" sx={{ mt: '80px' }}>
        <Grid container spacing="56px">
          <Grid>
            <UserInfoBox />
          </Grid>
          <Grid>
            {rightBox}
            12233
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserContent;
