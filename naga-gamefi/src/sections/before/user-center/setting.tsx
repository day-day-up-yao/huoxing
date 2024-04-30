import React from 'react';

import RenderCenter from 'src/components/before/render-center';
import UserDetailContext from './context';
import LeftCon from './left-tab';
import RightCon from './right-con';

import './index.scss';

export default () => (
  <UserDetailContext>
    <RenderCenter
      children={
        <div className="user-center">
          {/* <LeftCon /> */}
          <RightCon />
        </div>
      }
    />
  </UserDetailContext>
);
