import React, { useContext } from 'react';

import AllTaskList from 'src/components/before/all-task-list';
import { Context } from '../context';

import './index.scss';

export default () => {
  const { detail } = useContext(Context);
  const tasklist = {
    inforList: detail.questList,
    recordCount: detail.questList?.length,
  };
  return (
    <>
      {detail.questList?.length > 0 && (
        <div className="game-detail-tasklist">
          <h3>Task</h3>
          <AllTaskList listinfo={tasklist} shownum={24} isgamedetail />
        </div>
      )}
    </>
  );
};
