import React from 'react';
import { Grid, Box } from '@mui/material';

import RenderCenter from 'src/components/before/render-center';
import UserDetailContext from './context';
import LeftTabs from './left-tab';
import CenterInfo from './center-info';
import H5UserCenter from './h5-usercenter';

import './index.scss';

export default () => (
  <UserDetailContext>
    <RenderCenter
      children={
        <Box>
          <Grid container pt="40px" className="pc-usercenter-con">
            <Grid item xs={3} pr="56px">
              <LeftTabs />
            </Grid>
            <Grid item xs={9}>
              <CenterInfo />
            </Grid>
          </Grid>
          <Box className="h5-usercenter-con">
            <H5UserCenter />
          </Box>
        </Box>
      }
    />
  </UserDetailContext>
);
