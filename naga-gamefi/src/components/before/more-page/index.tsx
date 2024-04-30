import React from 'react';

import './index.scss';

export default (props: any) => {
  const { getMorefunction } = props;
  return (
    <div className="h5-more-page">
      <div className="h5-more-page-con" onClick={getMorefunction}>
        更多
      </div>
    </div>
  );
};
