import React from 'react';

import GameContext from './context';
import GameOverviewMain from './main';

const GameOverviewPage = () => (
  <GameContext>
    <GameOverviewMain />
  </GameContext>
);

export default GameOverviewPage;
