import React, { createContext, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, IconButton, List, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Cookies from 'js-cookie';
import { usePopover } from 'src/components/custom-popover';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { markAsRead, useGetMyNoticeList } from 'src/fetchs/notice';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import Iconify from 'src/components/iconify/iconify';
import { useBoolean } from 'src/utils/hooks/use-boolean';
import { useResponsive } from 'src/utils/hooks/use-responsive';
import NotificationItem from './notifications-item';

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const popover = usePopover();
  const drawer = useBoolean();
  const smUp = useResponsive('up', 'sm');
  const { linkTo } = useLink();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  // 请求列表
  const { trigger, data: myNoticeList } = useGetMyNoticeList();
  useEffect(() => {
    if (Cookies.get('uid')) {
      trigger({
        currentPage: 1,
        pageSize: 100,
      });
    }
  }, [trigger]);

  // 红点数量
  const badgeNum = useMemo(() => {
    let num = 0;
    myNoticeList?.inforList.map((item: NoticeListType) => {
      if (item.status === 0) {
        num += 1;
      }
    });

    return num;
  }, [myNoticeList?.inforList]);

  // 关闭界面事件
  const onBtnClostClick = useCallback(() => {
    if (matches) {
      drawer.onFalse();
    } else {
      popover.onClose();
    }
  }, [drawer, matches, popover]);

  // 点击通知事件
  const onBtnNoticeItemClick = useCallback(
    (item: NoticeListType) => {
      onBtnClostClick();
      if (item.status === 0) {
        markAsRead({
          ids: `${item.id}`,
        });
      }

      switch (Number(item.type)) {
        case 1:
          linkTo(`${paths.taskDetail}/${item.questId}`);
          break;
        case 3:
          window.location.reload();
          if (item.jumpUrl) {
            //   window.open(item.jumpUrl, '_self');
            linkTo(item.jumpUrl);
          }
          break;
        default:
          break;
      }
    },
    [linkTo, onBtnClostClick]
  );

  // 点击全部已读事件
  const onBtnReadAllClick = useCallback(() => {
    let num = 0;
    myNoticeList?.inforList.map((item) => {
      if (item.status === 0) {
        num += 1;
      }
    });

    if (num > 0) {
      markAsRead({ ids: undefined }).then((res: any) => {
        if (res.code === 0) {
          trigger({
            currentPage: 1,
            pageSize: 100,
          });
        }
      });
    }

    onBtnClostClick();
  }, [myNoticeList?.inforList, onBtnClostClick, trigger]);

  // 头部Dom
  const renderHead = useMemo(
    () => (
      <Stack direction="row" alignItems="center" sx={{ p: '20px 24px' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('notice_title')}
        </Typography>
        <IconButton onClick={onBtnClostClick}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Stack>
    ),
    [onBtnClostClick, t]
  );

  // 没有通知Dom
  const renderNoList = useMemo(
    () => (
      <Stack display="flex" justifyContent="center" alignItems="center" height="160px">
        {t('notice_no_list')}
      </Stack>
    ),
    [t]
  );

  // 列表Dom
  const renderList = useMemo(
    () =>
      myNoticeList?.inforList && myNoticeList?.inforList.length > 0 ? (
        <Scrollbar
          sx={{
            maxHeight: matches ? 'auto' : 390,
            height: matches ? 'calc(100% - 140px)' : 'auto',
          }}
        >
          <List
            disablePadding
            sx={{
              maxHeight: matches ? 'auto' : 390,
              height: matches ? 'calc(100% - 140px)' : 'auto',
            }}
          >
            {myNoticeList?.inforList.map((item: NoticeListType, index: number) => (
              <NotificationItem
                key={index}
                noticeItem={item}
                onBtnItemClick={() => onBtnNoticeItemClick(item)}
              />
            ))}
          </List>
        </Scrollbar>
      ) : (
        renderNoList
      ),
    [matches, myNoticeList?.inforList, onBtnNoticeItemClick, renderNoList]
  );

  // 全部已读按钮Dom
  const readAllBtn = useMemo(
    () => (
      <Box sx={{ p: 1 }}>
        <Button fullWidth size="large" onClick={() => onBtnReadAllClick()}>
          {t('notice_read_all')}
        </Button>
      </Box>
    ),
    [onBtnReadAllClick, t]
  );

  const values = useMemo(
    () => ({
      popover,
      drawer,
      smUp,
      badgeNum,
      matches,
      renderHead,
      renderList,
      readAllBtn,
    }),
    [popover, drawer, smUp, badgeNum, matches, renderHead, renderList, readAllBtn]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
