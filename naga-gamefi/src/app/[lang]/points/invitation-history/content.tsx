'use client';

import { Box, Card, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Invite } from '../summary';
import { InvitationHistory } from '../invitation-history';

const History = () => {
  const { t } = useTranslation();

  return (
    <Box marginTop="32px">
      <Typography
        variant="h6"
        sx={{
          marginBottom: '8px',
          textTransform: 'capitalize',
        }}
      >
        {t('points-invitation-history')}
      </Typography>
      <Card sx={{ background: '#242235', padding: '16px' }}>
        <InvitationHistory />
      </Card>
    </Box>
  );
};

const Content = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

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
          <Invite />
          <History />
        </Container>
      )}
    </Box>
  );
};

export default Content;
