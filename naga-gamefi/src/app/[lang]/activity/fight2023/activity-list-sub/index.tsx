import React, { useCallback, useContext, useMemo } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import ActivityBoxDom from '../../_components/activity-box';
import ActivityPrizeBox from '../../_components/activity-prize-box';
import ActivityBtn from '../../_components/activity-btn';
import { Context } from '../context';

const ActivityListSub = () => {
  const { t, listData2, listData3, windowShowType } = useContext(Context);

  // 顶部文字说明
  const topDecDom = useCallback(
    (text: string) => (
      <Box
        width="calc(100% - 34px)"
        sx={
          windowShowType === 2
            ? {
                m: '30px 14px 50px',
                height: '72px',
              }
            : {
                m: '36px 17px 70px',
                height: '128px',
              }
        }
      >
        <Typography
          sx={
            windowShowType === 2
              ? {
                  fontSize: '12px',
                  color: '#5273C7',
                  lineHeight: '18px',
                  letterSpacing: '1px',
                  textAlign: 'center',
                }
              : {
                  fontSize: '18px',
                  color: '#5273C7',
                  lineHeight: '32px',
                  letterSpacing: '1px',
                  textAlign: 'center',
                }
          }
        >
          {t(text)}
        </Typography>
      </Box>
    ),
    [t, windowShowType]
  );

  // 活动奖励 —— 奖品
  const prizeListDom = useCallback(
    (
      list: {
        img: string;
        name: string;
        num: string;
        support: string;
      }[]
    ) => (
      <Box
        sx={
          windowShowType === 2
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                justifyContent: 'center',
                justifyItems: 'center',
                columnGap: '8px',
                rowGap: '62px',
              }
            : {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                justifyContent: 'center',
                justifyItems: 'center',
                columnGap: '58px',
                rowGap: '125px',
              }
        }
      >
        {list.map(
          (
            item: {
              img: string;
              name: string;
              num: string;
              support: string;
            },
            index: number
          ) => (
            <ActivityPrizeBox type="small" windowShowType={windowShowType} {...item} key={index} />
          )
        )}
      </Box>
    ),
    [windowShowType]
  );

  // 左侧奖励列表
  const leftMotivate = useMemo(
    () => (
      <ActivityBoxDom
        title={t(listData2.titleMain)}
        bgImg={windowShowType === 2 ? listData2.bgImgH5 : listData2.bgImg}
        windowShowType={windowShowType}
      >
        {topDecDom(listData2.description)}
        {prizeListDom(listData2.prizeList)}
        <ActivityBtn
          text={t(listData2.joinText)}
          href={listData2.joinUrl}
          windowShowType={windowShowType}
        />
      </ActivityBoxDom>
    ),
    [
      listData2.bgImg,
      listData2.bgImgH5,
      listData2.description,
      listData2.joinText,
      listData2.joinUrl,
      listData2.prizeList,
      listData2.titleMain,
      prizeListDom,
      t,
      topDecDom,
      windowShowType,
    ]
  );

  // 右侧奖励列表
  const rightSpace = useMemo(
    () => (
      <ActivityBoxDom
        title={t(listData3.titleMain)}
        bgImg={windowShowType === 2 ? listData3.bgImgH5 : listData3.bgImg}
        windowShowType={windowShowType}
      >
        {topDecDom(listData3.description)}
        {prizeListDom(listData3.prizeList)}
        <ActivityBtn
          text={t(listData3.joinText)}
          href={listData3.joinUrl}
          windowShowType={windowShowType}
        />
      </ActivityBoxDom>
    ),
    [
      listData3.bgImg,
      listData3.bgImgH5,
      listData3.description,
      listData3.joinText,
      listData3.joinUrl,
      listData3.prizeList,
      listData3.titleMain,
      prizeListDom,
      t,
      topDecDom,
      windowShowType,
    ]
  );

  return (
    <Stack direction={windowShowType === 0 ? 'row' : 'column'} justifyContent="space-between">
      <Box width={windowShowType === 0 ? '48%' : '100%'}>{leftMotivate}</Box>
      <Box width={windowShowType === 0 ? '48%' : '100%'}>{rightSpace}</Box>
    </Stack>
  );
};

export default ActivityListSub;
