import React, { useContext } from 'react';

import './index.scss';

import { Context } from '../context';

// import vimg from '../../../public/imgs/icon/vicon.png'

export default () => {
  const { questdetail } = useContext(Context);
  return (
    <div className="task-detail-top">
      {questdetail.title}
      {/* <div className="task-detail-top-v">
                <img src={vimg} alt="" />
            </div> */}
    </div>
  );
};
