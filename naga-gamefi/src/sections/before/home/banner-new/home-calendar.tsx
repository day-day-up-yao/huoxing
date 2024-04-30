import React, { useCallback, useContext, useMemo } from 'react';

import { Avatar, Box, ListItemText, Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import dayjs from 'dayjs';

import { useTheme } from '@mui/system';
import SvgIcon from 'src/components/svg-icon';
import { paths } from 'src/routes/paths';
import TitleHeader from 'src/components/before/title-header';
import BoxPage from 'src/components/before/box-page';
import { useSettingsContext } from 'src/sections/layouts/settings';
import PricePercent from 'src/components/price-percent';
import { cardShadow } from 'src/utils/card-shadow';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { Context } from '../context';

const HomeCalendar = () => {
  const theme = useTheme();
  const { lang } = useSettingsContext();
  const {
    t,
    eventCalendarData,
    onBtnLinkToCalendarClick,
    isPC,
    // onBtnEventCalendarAvatarClick,
    eventCalendarCatList,
    eventCalendarCatData,
  } = useContext(Context);

  // console.log(eventCalendarData, eventCalendarCatData);

  // 标题
  const readerTitle = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ cursor: 'pointer', mb: '8px' }}
        onClick={() => onBtnLinkToCalendarClick()}
      >
        <Typography variant="h4" sx={{ flexGrow: 1, lineHeight: '28px' }}>
          {t('event_calendar_title')}
        </Typography>
        <Image src="/images/icon/bannerright.png" alt="" width={16} height={16} />
      </Stack>
    ),
    [onBtnLinkToCalendarClick, t]
  );

  const isDark = useIsDark();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pcstyle = {
    p: '24px 24px',
    // borderBottom: `1px solid ${theme.palette.border}`,
    bgcolor: isDark ? 'background.paper' : undefined,
    textDecoration: 'none',
    borderRadius: '10px',
    height: { sm: '144px', lg: '128px' },
    mt: '17px',
    '&:last-of-type': {
      borderBottom: 'none',
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const h5style = {
    p: '20px 24px',
    // borderBottom: `1px solid ${theme.palette.border}`,
    bgcolor: isDark ? 'background.paper' : undefined,
    textDecoration: 'none',
    borderRadius: '10px',
    Minheight: '160px',
    width: '62%',
    mr: '15px',
    flexShrink: 0,
    // mt: '17px',
    '&:last-of-type': {
      borderBottom: 'none',
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calendarTitle = (title: string) => (
    <Typography
      variant={isPC ? 'body1' : 'h6'}
      sx={{
        fontWeight: 'bold',
        width: isPC ? '70%' : 'auto',
        mt: isPC ? '' : 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {title}
    </Typography>
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calendarCenter = (item: any) => (
    <Box>
      <Typography
        variant="body2"
        sx={{
          // fontWeight: 'bold',
          mt: isPC ? 12 / 8 : 6 / 8,
          fontWeight: 'bold',
          // color: 'text.secondary',
          // height: item.price ? '44px' : '66px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: item.price || item.symbol || item.coinIconUrl || item.change24h ? 1 : 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {item.title}
      </Typography>
      <Box>
        <PricePercent
          coinIconUrl={item.coinIconUrl}
          symbol={isPC && item.symbol}
          price={item.price}
          change24h={item.change24h}
        />
      </Box>
    </Box>
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calstackstyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // 活动item
  const itemDom = useCallback(
    (item: EventCalendarListType, index: number) => {
      let catType = '';
      if (eventCalendarCatList) {
        eventCalendarCatList?.map((itm: EventCalendarCatType) => {
          if (itm.id === item.category) {
            catType = itm.name;
          }
        });
      }
      let calendarname = item.gameName;
      if (!item.gameName || item.gameName === '') {
        calendarname = item.projectName;
      }
      return (
        <Box sx={isPC ? pcstyle : h5style} key={index} boxShadow={cardShadow}>
          <Stack direction="row" gap="16px" sx={isPC ? {} : calstackstyle}>
            <Box
              component={
                (item.gameId && item.gameIcon) || (item.projectLink && item.projectIcon)
                  ? 'a'
                  : 'div'
              }
              href={
                item.gameId && item.gameIcon
                  ? `/${lang}${paths.game}/${item.gameId}`
                  : item.projectLink && item.projectIcon
                  ? item.projectLink
                  : ''
              }
              target={
                item.gameId && item.gameIcon
                  ? '_self'
                  : item.projectLink && item.projectIcon
                  ? '_blank'
                  : '_self'
              }
            >
              <Avatar
                variant={isPC ? 'rounded' : 'square'}
                src={
                  item.gameIcon
                    ? item.gameIcon
                    : item.projectIcon
                    ? item.projectIcon
                    : '/images/icon/icon-calendar.webp'
                }
                sx={isPC ? { width: 50, height: 50 } : { width: 32, height: 32 }}
              />
            </Box>
            <Box width="calc(100% - 66px)" component="a" href={item.sourceLink} target="_blank">
              {/* <ListItemText
          primary={item.title}
          secondary={item.content || undefined}
          primaryTypographyProps={{
            noWrap: true,
            typography: 'subtitle1',
          }}
          secondaryTypographyProps={{
            mt: '12px',
            noWrap: true,
            component: 'div',
            sx: {
              height: '16px',
              lineHeight: '16px',
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: item.content ? '-webkit-box' : 'none',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            },
          }}
        /> */}
              {/* <Stack direction="row">
              <SvgIcon name="time" colorSeventyStyle is14px />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {dayjs(item.triggerAt * 1000)
                  .utc()
                  .format(t('event_calendar_time'))}
              </Typography>
            </Stack> */}
              <Stack direction="row" sx={{ justifyContent: isPC ? 'space-between' : 'flex-end' }}>
                {isPC && calendarTitle(calendarname)}

                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {dayjs(item.triggerAt * 1000)
                    .utc()
                    .format(t('event_calendar_time_noday'))}
                </Typography>
              </Stack>
              {isPC && calendarCenter(item)}
              {/* <Button
              sx={{
                fontSize: '13px',
                color: 'text.secondary',
                fontWeight: 400,
                bgcolor: 'rgba(159,172,191,0.1)',
                padding: '0 10px',
                minWidth: 'auto',
                mt: 10 / 8,
              }}
            >
              {catType}
            </Button> */}
            </Box>
          </Stack>
          {isPC ? undefined : calendarTitle(calendarname)}
          {isPC ? undefined : calendarCenter(item)}
        </Box>
      );
    },
    [
      eventCalendarCatList,
      isPC,
      pcstyle,
      h5style,
      calstackstyle,
      lang,
      calendarTitle,
      t,
      calendarCenter,
    ]
  );

  // 活动List
  const listDom = useCallback(
    (data: EventCalendarListType[], objKey?: string) => (
      <Box
        sx={{
          display: isPC ? 'block' : 'flex',
        }}
      >
        {/* <Typography variant="body1" color="text.secondary" component="div" noWrap>
          {objKey}（UTC）
        </Typography> */}
        {data && data.length > 0 && data.map((item, index) => itemDom(item, index))}
      </Box>
    ),
    [isPC, itemDom]
  );

  // 列表 首页只显示6个
  const readerList = useMemo(
    () => (
      // const list: JSX.Element[] = [];
      // if (eventCalendarData) {
      //   Object.keys(eventCalendarData).forEach((key) => {
      //     list.push(listDom(eventCalendarData[key], key));
      //   });
      // }

      <Stack
        sx={{
          // height: 'calc(100% - 52px)',
          overflowY: { xs: 'auto', lg: 'unset' },
          padding: { xs: '25px 16px', lg: '0' },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          // mt: isPC ? '' : '15px',
        }}
      >
        <Box gap="12px">{listDom(eventCalendarData)}</Box>
      </Stack>
    ),
    [eventCalendarData, listDom]
  );

  const pcCalendarDom = useMemo(
    () => (
      <Box
        sx={{
          width: { sm: '305px', lg: '342px' },
          height: { sm: '650px', lg: '760px' },
          zIndex: '2',
          // pt: '24px',
          pb: '0',
          // bgcolor: 'info.main',
          borderRadius: '5px',
          // overflow: 'hidden',
        }}
        className="home-calendar-box"
      >
        {readerTitle}
        {readerList}
      </Box>
    ),
    [readerList, readerTitle]
  );

  const h5CalendarDom = useMemo(
    () => (
      <Box>
        <BoxPage>
          <Box pl="16px">
            <TitleHeader text="Events Calendar" islink="/calendar" />
          </Box>

          {readerList}
        </BoxPage>
      </Box>
    ),
    [readerList]
  );

  return isPC ? pcCalendarDom : h5CalendarDom;
};

export default HomeCalendar;
