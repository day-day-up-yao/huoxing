import React from 'react';

import './index.scss';

export default (props: any) => {
  const { children } = props;
  return <div className="home-box">{children}</div>;
};
