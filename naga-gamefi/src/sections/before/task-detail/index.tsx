import React from 'react';

import RenderCenter from 'src/components/before/render-center';
import TaskDetailTop from './task-detail-top';
import TaskDetailLeft from './task-detail-left';
import TaskDetailRight from './task-detail-right';
import TaskDetailContext from './context';

import './index.scss';

export default () => (
  <TaskDetailContext>
    <RenderCenter
      children={
        <div className="task-detail">
          <TaskDetailTop />
          <div className="task-detail-center">
            <TaskDetailLeft />
            <TaskDetailRight />
          </div>
        </div>
      }
    />
  </TaskDetailContext>
);
