'use client';

import Content from './main';
import UserContext from './context';

const UserContent = () => (
  <UserContext>
    <Content />
  </UserContext>
);

export default UserContent;
