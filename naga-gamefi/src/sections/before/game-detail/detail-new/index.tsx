import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';

import GameDetailTop from '../game-top-dom';
import GameDetailBottom from '../game-bottom-dom';
import GameDetailLeftInfo from './detail-left-info';
import GameDetailRightInfo from './detail-right-info';
import { Context } from '../context';
import DetailH5Info from './detail-h5-info';

import '../index.scss';

const GameDetailNew = () => {
  const { isPc, detail } = useContext(Context);
  return (
    <Box
      sx={{
        maxWidth: 1440,
        margin: 2,
        mx: 'auto',
      }}
    >
      <Grid className="newdetail-con-pc" container justifyContent="space-between">
        <Grid xs={2.8}>
          <GameDetailLeftInfo />
        </Grid>
        <Grid xs={5.7}>
          <GameDetailTop isnewdetail />
          <GameDetailBottom />
        </Grid>
        <Grid xs={2.8}>
          <GameDetailRightInfo />
        </Grid>
      </Grid>
      <Grid className="newdetail-con-h5" sx={{ px: 16 / 8, py: 40 / 8 }}>
        <GameDetailTop isnewdetail />
        <DetailH5Info />
        <GameDetailBottom />
      </Grid>
    </Box>
  );
};

export default GameDetailNew;
