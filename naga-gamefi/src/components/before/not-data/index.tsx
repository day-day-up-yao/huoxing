import React from 'react';
import classNames from 'classnames';

import './index.scss';
import { useIsDark } from 'src/utils/hooks/use-is-dark';

const NotData = (props: any) => {
  const { className, title } = props;
  const isDark = useIsDark();
  return (
    <div className={classNames('not-data-img', className)}>
      <img
        src={isDark ? '/images/bigimg/notdata.png' : '/images/bigimg/notdatalighter.png'}
        alt=""
      />
      <div className="not-data-desc">{title}</div>
    </div>
  );
};

export default NotData;
