import React from 'react';

import CreateContext from './context';
import GameOverviewMain from './main';

const GameOverviewPage = () => (
  <CreateContext>
    <GameOverviewMain />
  </CreateContext>
);

export default GameOverviewPage;
