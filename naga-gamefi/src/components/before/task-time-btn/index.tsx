import React from 'react';
import classNames from 'classnames';

import './index.scss';

export default (props: any) => {
  const { className, timetype, children, isdetail, style } = props;
  const classes = classNames('task-time-btn', className, {
    'time-be-start': timetype === 0,
    'time-be-ing': timetype === 1,
    'time-be-finish': timetype === 2,
    'time-detail': isdetail,
  });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
