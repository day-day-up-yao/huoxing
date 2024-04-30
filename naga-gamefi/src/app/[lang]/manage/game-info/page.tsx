'use client';

import Content from './main';
import ManageGameInfoContext from './context';

const ManageGameInfoContent = () => (
  <ManageGameInfoContext>
    <Content />
  </ManageGameInfoContext>
);

export default ManageGameInfoContent;
