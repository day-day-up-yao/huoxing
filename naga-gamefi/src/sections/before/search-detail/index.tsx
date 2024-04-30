import React from 'react';

import './index.scss';

import SearchContext from './context';
import SearchDetailMain from './main';

const SearchDetailPage = () => (
  <SearchContext>
    <SearchDetailMain />
  </SearchContext>
);

export default SearchDetailPage;
