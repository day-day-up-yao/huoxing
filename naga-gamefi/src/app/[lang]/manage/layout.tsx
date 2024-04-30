'use client';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import dynamic from 'next/dynamic';
import { HeadAppDir } from 'src/sections/layouts/head-content';
import { useResponsive } from 'src/utils/hooks/use-responsive';

const ManageLeftNavigation = dynamic(() => import('./left-navigation'), { ssr: false });

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const smUp = useResponsive('up', 'sm');
  const theme = useTheme();

  return (
    <>
      <HeadAppDir title="Manage" />
      <Container
        sx={{
          mt: { xs: '80px', sm: '40px' },
          maxWidth: '1200px !important;',
          padding: '0 !important;',
          [theme.breakpoints.down('lg')]: {
            padding: '15px !important', // md断点以下的padding
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid xl={3} sx={{ [theme.breakpoints.down('sm')]: { pb: 0 } }}>
            <ManageLeftNavigation smUp={smUp} />
          </Grid>
          <Grid xl={9}>{children}</Grid>
        </Grid>
      </Container>
    </>
  );
}
