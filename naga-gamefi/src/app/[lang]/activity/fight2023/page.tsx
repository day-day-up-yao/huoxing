'use client';

import Content from './main';
import ActivityContext from './context';

const ActivityContent = () => (
  <ActivityContext>
    <Content />
  </ActivityContext>
);

export default ActivityContent;
