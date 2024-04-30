import React, { useMemo } from 'react';
import classNames from 'classnames';

import './index.scss';
import TextField from '../../components/text-field';
import ItemTaskList from '../../components/item-task-list';

const CampaignCreateTasks = (props: any) => {
  const { show, t, taskListData, formError, popover, onPopoverChange } = props;

  // 奖励面板
  const addTaskDom = useMemo(
    () => (
      <TextField
        name="taskList"
        accepter={ItemTaskList}
        data={taskListData}
        t={t}
        labelFirst
        errorMessage={formError.taskList}
        popover={popover}
        onPopoverChange={onPopoverChange}
      />
    ),
    [taskListData, t, formError.taskList, popover, onPopoverChange]
  );

  return <div className={classNames('campaign-create-tasks', { show })}>{addTaskDom}</div>;
};

export default CampaignCreateTasks;
