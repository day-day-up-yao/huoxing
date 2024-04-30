import React from 'react';

import TopInfo from './top-info';
import CenterInfo from './center-info';
import BottomInfo from './bottom-info';

import './index.scss';

export default () => (
  <div className="naga-download">
    <TopInfo />
    <CenterInfo />
    <BottomInfo />
  </div>
);
