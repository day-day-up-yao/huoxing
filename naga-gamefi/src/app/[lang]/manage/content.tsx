'use client';

import { useEffect } from 'react';
import { useLink } from 'src/components/link';
import { btnNavigationData } from './left-navigation';

const Manage = () => {
  const { linkTo } = useLink();

  useEffect(() => {
    linkTo(btnNavigationData[0].href);
  }, [linkTo]);

  return <div />;
};
export default Manage;
