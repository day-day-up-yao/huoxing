import React from 'react';

import PopupPage from 'src/components/popup-page';

import './index.scss';

export default (props: any) => {
  const { closeTaskClick, tiptext } = props;
  return (
    <PopupPage
      children={
        <div className="task-detail-tip">
          <div className="task-detail-tip-top">
            <img src="/images/bigimg/tasktip.png" alt="" />
          </div>
          <div className="task-detail-tip-con">{tiptext}</div>
          <div className="task-detail-tip-close" onClick={closeTaskClick}>
            <img src="/images/icon/closeicon.webp" alt="" />
          </div>
        </div>
      }
    />
  );
};
