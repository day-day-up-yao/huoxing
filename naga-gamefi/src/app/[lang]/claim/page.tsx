'use client';

import Content from './main';
import ClaimContext from './context';

const ClaimContent = () => (
  <ClaimContext>
    <Content />
  </ClaimContext>
);

export default ClaimContent;
