'use client';

import Content from './content';
// eslint-disable-next-line import/no-named-as-default
import Context from './context';
import './index.scss';

const Page = () => (
  <Context>
    <Content />
  </Context>
);

export default Page;
