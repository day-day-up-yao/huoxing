import React from 'react';

import './index.scss';

export default (props: any) => {
  const { children, onCloseFn } = props;
  return (
    <div className="popuppage" id="popup-page" onClick={onCloseFn}>
      {children}
    </div>
  );
};
