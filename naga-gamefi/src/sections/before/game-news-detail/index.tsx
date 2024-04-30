import React from 'react';

import DetailContext from './context';
import NewsDetailMain from './main';

const GameNewsDetail = () => (
  <DetailContext>
    <NewsDetailMain />
  </DetailContext>
);

export default GameNewsDetail;
