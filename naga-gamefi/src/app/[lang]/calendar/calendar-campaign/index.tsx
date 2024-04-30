import React, { useContext, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';

import Image from 'next/image';
import AllTaskList from 'src/components/before/all-task-list';
import { Context } from '../context';

const CalendarCampaign = () => {
  const { t, loading, questHome, onBtnLinkToTaskClick } = useContext(Context);

  // 标题
  const readerTitle = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ mt: '40px', cursor: 'pointer' }}
        onClick={() => onBtnLinkToTaskClick()}
      >
        <Typography variant="h4" sx={{ flexGrow: 1, lineHeight: '28px' }}>
          {t('home_partnership_campaign')}
        </Typography>
        <Image src="/images/icon/bannerright.png" alt="" width={16} height={16} />
      </Stack>
    ),
    [onBtnLinkToTaskClick, t]
  );

  // 数据
  const taskinfo = useMemo(
    () => ({
      inforList: questHome ? (questHome.length > 2 ? questHome.slice(0, 2) : questHome) : [],
      recordCount: questHome ? questHome.length : 0,
    }),
    [questHome]
  );

  return (
    <Stack width="340px" direction="column">
      {readerTitle}
      <AllTaskList listinfo={taskinfo} loading={loading} />
    </Stack>
  );
};

export default CalendarCampaign;
