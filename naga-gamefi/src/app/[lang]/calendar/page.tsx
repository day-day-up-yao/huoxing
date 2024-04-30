'use client';

import Content from './main';
import CalendarContext from './context';

const CalendarContent = () => (
  <CalendarContext>
    <Content />
  </CalendarContext>
);

export default CalendarContent;
