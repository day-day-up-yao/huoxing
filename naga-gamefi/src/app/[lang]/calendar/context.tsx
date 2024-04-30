import React, { createContext, useMemo, useEffect, useCallback, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/system';

import { useGetEventCalendarCatList, useGetEventCalendarList } from 'src/fetchs/event-calendar';
import { useGetQuestHome } from 'src/fetchs/quest';
import { paths } from 'src/routes/paths';
import { useLink } from 'src/components/link';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const { linkTo } = useLink();
  dayjs.extend(utc);
  // 是否是移动端
  const { isPc: smUp } = useBreakPoint();
  // 当前类型
  const [typeValue, setTypeValue] = useState(0);
  // 日历日期
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  // 当前日历分类
  const { trigger: triggerEventCalendarCatList, data: eventCalendarCatList } =
    useGetEventCalendarCatList();
  const [eventCalendarCatData, setEventCalendarCatData] = useState<EventCalendarCatType[]>();
  // 当前日历列表
  const { trigger: triggerEventCalendarList, data: eventCalendarList } = useGetEventCalendarList();
  const [eventCalendarData, setEventCalendarData] = useState<{
    [key: string]: EventCalendarListType[];
  }>();
  // 当前日期
  const [nowDay, setNowDay] = useState<number>();
  const [loading, setLoading] = useState(true);

  // 当前活动列表
  const { trigger: triggerQuestHome, data: questHome } = useGetQuestHome();

  // 初始列表请求
  useEffect(() => {
    setLoading(true);
    triggerEventCalendarList({
      currentPage: 1,
      pageSize: 50,
    });
  }, [triggerEventCalendarList]);

  // 设置列表数据
  useEffect(() => {
    if (eventCalendarList?.inforList && eventCalendarList?.inforList.length >= 0) {
      setNowDay(dayjs(dayjs().utc().format('YYYY-MM-DD')).valueOf());
      const obj: { [key: number]: EventCalendarListType[] } = {};
      for (let i = 0; i < eventCalendarList.inforList.length; i += 1) {
        const item = eventCalendarList.inforList[i];
        const day = dayjs(
          dayjs(item.triggerAt * 1000)
            .utc()
            .format('YYYY-MM-DD')
        ).valueOf();
        if (obj[day]) {
          obj[day].push(item);
        } else {
          obj[day] = [];
          obj[day].push(item);
        }
      }

      setEventCalendarData(obj);
      setLoading(false);
    }
  }, [eventCalendarList]);

  // 初始分类请求
  useEffect(() => {
    setLoading(true);
    triggerEventCalendarCatList();
  }, [triggerEventCalendarCatList]);
  // 设置分类数据
  useEffect(() => {
    if (eventCalendarCatList && eventCalendarCatList.length > 0) {
      const allData = [{ id: 0, name: 'All' }];
      setEventCalendarCatData(allData.concat(eventCalendarCatList));
    }
  }, [eventCalendarCatList]);

  // 初始请求活动列表
  useEffect(() => {
    setLoading(true);
    triggerQuestHome();
  }, [triggerQuestHome]);

  // 更改日期
  const onDateValueChange = useCallback(
    (newValue: Dayjs) => {
      let time;
      if (dayjs(newValue).unix() !== dayjs(dateValue).unix()) {
        time = dayjs(newValue).unix();
        setDateValue(newValue);

        setLoading(true);
        triggerEventCalendarList({
          currentPage: 1,
          pageSize: 50,
          category: typeValue !== 0 ? typeValue : undefined,
          triggerAt: time,
        });
      }
    },
    [dateValue, triggerEventCalendarList, typeValue]
  );

  // 更改类型
  const onBtnTypeValueClick = useCallback(
    (newValue: number) => {
      setTypeValue(newValue);
      const time = dateValue ? dayjs(dateValue).unix() : undefined;

      setLoading(true);
      triggerEventCalendarList({
        currentPage: 1,
        pageSize: 50,
        category: newValue !== 0 ? newValue : undefined,
        triggerAt: time,
      });
    },
    [dateValue, triggerEventCalendarList]
  );

  // 点击右侧 更多活动事件
  const onBtnLinkToTaskClick = useCallback(() => {
    linkTo(paths.taskExplore);
  }, [linkTo]);

  // H5 日历开关
  const [isH5CalendarShow, setIsH5CalendarShow] = useState(false);
  // 点击开启H5日历
  const onBtnOpenH5CalendarClick = useCallback(() => {
    setIsH5CalendarShow(true);
  }, []);
  // 点击关闭H5日历
  const onBtnCloseH5CalendarClick = useCallback(() => {
    setIsH5CalendarShow(false);
  }, []);

  const values = useMemo(
    () => ({
      t,
      theme,
      smUp,
      nowDay,
      dateValue,
      typeValue,
      loading,
      questHome,
      eventCalendarData,
      eventCalendarCatData,
      isH5CalendarShow,
      onBtnOpenH5CalendarClick,
      onBtnCloseH5CalendarClick,
      onBtnTypeValueClick,
      onDateValueChange,
      onBtnLinkToTaskClick,
    }),
    [
      t,
      theme,
      smUp,
      nowDay,
      dateValue,
      typeValue,
      loading,
      questHome,
      eventCalendarData,
      eventCalendarCatData,
      isH5CalendarShow,
      onBtnOpenH5CalendarClick,
      onBtnCloseH5CalendarClick,
      onBtnTypeValueClick,
      onDateValueChange,
      onBtnLinkToTaskClick,
    ]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
