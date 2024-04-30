'use client';

import { useContext, useMemo } from 'react';
import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import dayjs from 'dayjs';
import NotData from 'src/components/before/not-data';

import { Context } from './context';
import CalendarDate from './calendar-date';
import CalendarType from './calendar-type';
import CalendarTable from './calendar-table';
import CalendarCampaign from './calendar-campaign';
import CalendarTableSkeleton from './calendar-table-skeleton';

const CalendarContent = () => {
  const {
    t,
    smUp,
    loading,
    dateValue,
    eventCalendarData,
    isH5CalendarShow,
    onBtnOpenH5CalendarClick,
    onBtnCloseH5CalendarClick,
  } = useContext(Context);

  // 标题
  const readerTitle = useMemo(
    () => (
      <Typography
        variant={smUp ? 'h3' : 'h5'}
        sx={{ flexGrow: 1, mb: smUp ? '24px' : '16px', lineHeight: smUp ? '40px' : '30px' }}
      >
        {t('event_calendar_title')}
      </Typography>
    ),
    [smUp, t]
  );

  // 列表
  const readerList = useMemo(() => {
    const list: JSX.Element[] = [];
    if (eventCalendarData) {
      Object.keys(eventCalendarData).forEach((key) => {
        list.push(<CalendarTable data={eventCalendarData[key]} objKey={key} key={key} />);
      });
    }

    return loading ? (
      <CalendarTableSkeleton />
    ) : list.length > 0 ? (
      list
    ) : (
      <NotData title={t('public_not_data')} />
    );
  }, [eventCalendarData, loading, t]);

  // H5日期组件 - 按钮
  const h5DateBox = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: '16px', width: '100%', bgcolor: 'background.paper', p: '8px 16px' }}
        onClick={onBtnOpenH5CalendarClick}
      >
        <Typography variant="body2">
          {dayjs(dateValue).utc().format(t('event_calendar_time'))}
        </Typography>
        <ArrowForwardIosIcon sx={{ height: 12, color: 'text.secondary' }} />
      </Stack>
    ),
    [dateValue, onBtnOpenH5CalendarClick, t]
  );

  // H5日期组件 - 日历
  const h5DateCalendar = useMemo(
    () => (
      <Modal open={isH5CalendarShow} onClose={onBtnCloseH5CalendarClick}>
        <Stack
          height="100%"
          justifyContent="center"
          alignItems="center"
          onClick={onBtnCloseH5CalendarClick}
        >
          <CalendarDate />
        </Stack>
      </Modal>
    ),
    [isH5CalendarShow, onBtnCloseH5CalendarClick]
  );

  return (
    <Container maxWidth="xl" sx={{ mt: smUp ? '40px' : '80px' }}>
      {readerTitle}
      <Grid container spacing={10}>
        <Grid xs>
          <Stack>
            <CalendarType />
            {smUp ? undefined : h5DateBox}
            {readerList}
          </Stack>
        </Grid>
        {smUp ? (
          <Grid xs="auto">
            <Stack>
              <CalendarDate />
              <CalendarCampaign />
            </Stack>
          </Grid>
        ) : undefined}
      </Grid>
      {h5DateCalendar}
    </Container>
  );
};

export default CalendarContent;
