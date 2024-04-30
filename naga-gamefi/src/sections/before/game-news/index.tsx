import React from 'react';

import NewsContext from './context';
import NewsMain from './main';

const GameNews = () => (
  <NewsContext>
    <NewsMain />
  </NewsContext>
);

export default GameNews;
