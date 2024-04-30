'use client';

import Content from './main';
import CommunitiesListContext from './context';

const CommunitiesListContent = () => (
  <CommunitiesListContext>
    <Content />
  </CommunitiesListContext>
);

export default CommunitiesListContent;
