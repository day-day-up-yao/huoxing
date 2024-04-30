import React, { useMemo, useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AllTaskList from 'src/components/before/all-task-list';
import NotData from 'src/components/before/not-data';

import { Context } from '../context';
// import RewardNum from '../components/reward-num';

import TasksLists from './games-tasks-list';

const CompaignTasks = () => {
  const { detail, isPc, t, missionlist } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tasklist = {
    inforList: detail.questList,
    recordCount: detail.questList?.length,
  };

  // 活动
  const campaignDom = useMemo(
    () => (
      <Box>
        <Typography variant="h4">{t('activity_title')}</Typography>
        <Stack direction="row" justifyContent="center">
          <AllTaskList listinfo={tasklist} shownum={isPc ? 12 : 24} isnewdetail />
        </Stack>
      </Box>
    ),
    [isPc, t, tasklist]
  );

  // 任务
  const taskInfoDom = useMemo(
    () => (
      <Box sx={{ mt: '18px' }}>
        <Typography variant="h4">{t('campaign_create_tasks')}</Typography>
        <TasksLists />
      </Box>
    ),
    [t]
  );

  return (
    <Box
      sx={{
        mt: 5,
        width: '100%',
      }}
    >
      {tasklist.inforList.length > 0 && campaignDom}
      {missionlist?.length > 0 && taskInfoDom}
      {missionlist?.length === 0 && tasklist?.inforList?.length === 0 && (
        <NotData title={t('public_not_data')} />
      )}
    </Box>
  );
};

export default CompaignTasks;
