'use client';

import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetAccountInfo } from 'src/fetchs/user';
import { useGetBonusAwardSetting, useGetBonusTaskStatus } from 'src/fetchs/points';
import Summary from './summary';
import CheckIn from './check-in';
import Campaign from './campaign';
import Task from './task';

const Content = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { mutate: mutateAccountInfo } = useGetAccountInfo();
  const { mutate: mutateAwardSetting } = useGetBonusAwardSetting();
  const { mutate: mutateStatus } = useGetBonusTaskStatus();

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true);
    console.log('request initial data by points context');
    mutateAccountInfo();
    mutateAwardSetting();
    mutateStatus();
  }, [isMounted, mutateAccountInfo, mutateAwardSetting, mutateStatus]);

  return (
    <Box
      sx={{
        paddingTop: '32px',
        paddingBottom: '40px',
        background: `url(/images/points/background.png)`,
        backgroundPosition: 'top center',
        backgroundSize: { md: '100% auto', xs: 'auto 100%' },
        backgroundRepeat: 'no-repeat',
        minHeight: '1600px',
      }}
    >
      {isMounted && (
        <Container maxWidth="xl">
          <Summary />
          <CheckIn />
          <Campaign />
          <Task />
        </Container>
      )}
    </Box>
  );
};

export default Content;
