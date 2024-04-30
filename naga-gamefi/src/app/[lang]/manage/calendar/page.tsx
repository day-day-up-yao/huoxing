'use client';

import Content from './main';
import ManageCalendarContext from './context';

const ManageCalendarContent = () => (
  <ManageCalendarContext>
    <Content />
  </ManageCalendarContext>
);

export default ManageCalendarContent;
