import React from 'react';

import DetailContext from './context';
import GameDetailMain from './main';

const GameDetailPage = () => (
  <DetailContext>
    <GameDetailMain />
  </DetailContext>
);

export default GameDetailPage;
