import React from 'react';
import './index.scss';

// import tasklistbg from '../../public/imgs/bigimg/tasklistbg.png'
import RenderCenter from 'src/components/before/render-center';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import TaskBanner from './task-banner';
import TaskList from './task-list';
import TaskContext from './context';

export default () => {
  const isDark = useIsDark();
  return (
    <TaskContext>
      <div className={`task-explore ${!isDark && 'task-explore-lighter'}`}>
        {/* <img src={tasklistbg} alt="" /> */}
        <div className="task-explore-con">
          <RenderCenter
            children={
              <div>
                {/* <TaskBanner /> */}
                <TaskList />
              </div>
            }
          />
        </div>
      </div>
    </TaskContext>
  );
};
