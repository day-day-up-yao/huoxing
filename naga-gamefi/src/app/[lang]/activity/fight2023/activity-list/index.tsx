import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Carousel, { useCarousel } from 'src/components/carousel';

import QuestItem from 'src/components/quest-item';
import { Context } from '../context';
import ActivityBoxDom from '../../_components/activity-box';
import ActivityLineTitleDom from '../../_components/activity-line-title';
import ActivityPrizeBox from '../../_components/activity-prize-box';

const ActivityList = () => {
  const { t, listData1, questList, windowShowType } = useContext(Context);

  // 轮播图设置
  const carousel = useCarousel({
    speed: 800,
    autoplaySpeed: 7000,
    autoplay: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    rows: windowShowType === 2 ? 2 : 2,
    slidesPerRow: windowShowType === 0 ? 4 : windowShowType === 1 ? 3 : 2,
    appendDots: (dots) => (
      <Stack
        direction="column"
        justifyContent="flex-end"
        sx={
          windowShowType === 2
            ? { position: 'absolute', bottom: '-76px' }
            : { position: 'absolute', bottom: '-86px', height: '32px' }
        }
      >
        <Box
          component="ul"
          sx={{
            margin: '0px',
            li: {
              width: '32px',
              height: '32px',
              margin: '8px',
              '&.slick-active': {
                div: {
                  bgcolor: '#FCBF23',
                  borderRadius: '6px',
                  color: '#18191D',
                },
              },
            },
          }}
        >
          {dots}
        </Box>
      </Stack>
    ),
    customPaging: (i) => (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '32px',
          height: '32px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#9FA1C1',
          lineHeight: '18px',
        }}
      >
        {i + 1}
      </Stack>
    ),
  });

  // 轮播组件实例
  const slider = useRef<any>();
  // 初始点击跳转第一页
  useEffect(() => {
    if (slider.current) slider.current.slickGoTo(0);
  }, []);

  // 活动任务
  const questListDom = useMemo(
    () => (
      <Box
        width="100%"
        sx={
          windowShowType === 2
            ? {
                mt: '12px',
                mb: '40px',
                position: 'relative',
                gap: '24px',
              }
            : {
                mt: '12px',
                mb: '70px',
                position: 'relative',
                gap: '24px',
              }
        }
      >
        <Carousel ref={slider} {...carousel.carouselSettings}>
          {questList?.slice(0, 18).map((item: QuestListType, index: number) => (
            <Box
              sx={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
              key={index}
            >
              <QuestItem item={item} />
            </Box>
          ))}
        </Carousel>
      </Box>
    ),
    [carousel.carouselSettings, questList, windowShowType]
  );

  // 活动奖励 —— 金币
  const awardBoxDom = useMemo(
    () => (
      <Stack justifyContent="center" alignItems="center" width="100%">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={
            windowShowType === 2
              ? {
                  width: '120px',
                  height: '32px',
                  background: 'rgba(244,188,44,0.2)',
                  borderRadius: '10px',
                  border: '1px solid #F4BC2C',
                }
              : {
                  width: '210px',
                  height: '64px',
                  background: 'rgba(244,188,44,0.2)',
                  borderRadius: '15px',
                  border: '2px solid #F4BC2C',
                }
          }
        >
          <Typography
            sx={
              windowShowType === 2
                ? {
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#FCBF23',
                    lineHeight: '20px',
                  }
                : {
                    fontSize: '36px',
                    fontWeight: 600,
                    color: '#FCBF23',
                    lineHeight: '42px',
                  }
            }
          >
            {listData1.prizeNum}
          </Typography>
        </Stack>
      </Stack>
    ),
    [listData1.prizeNum, windowShowType]
  );

  // 活动奖励 —— 奖品
  const awardPrizeDom = useMemo(
    () => (
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        columnGap={windowShowType === 2 ? '8px' : '150px'}
        rowGap={windowShowType === 2 ? '60px' : '130px'}
        sx={windowShowType === 2 ? { mt: '32px', mb: '60px' } : { mt: '35px', mb: '160px' }}
      >
        {listData1.prizeList.map(
          (
            item: {
              img: string;
              name: string;
              num: string;
              support: string;
            },
            index: number
          ) => (
            <ActivityPrizeBox windowShowType={windowShowType} type="big" {...item} key={index} />
          )
        )}
      </Stack>
    ),
    [listData1.prizeList, windowShowType]
  );

  // 活动奖励
  const awardListDom = useMemo(
    () => (
      <Stack>
        <ActivityLineTitleDom title={t(listData1.titleSub)} windowShowType={windowShowType} />
        {awardBoxDom}
        {awardPrizeDom}
      </Stack>
    ),
    [awardBoxDom, awardPrizeDom, listData1.titleSub, t, windowShowType]
  );

  return (
    <ActivityBoxDom
      title={t(listData1.titleMain)}
      bgImg={windowShowType === 2 ? listData1.bgImgH5 : listData1.bgImg}
      windowShowType={windowShowType}
    >
      {questListDom}
      {awardListDom}
    </ActivityBoxDom>
  );
};

export default ActivityList;
