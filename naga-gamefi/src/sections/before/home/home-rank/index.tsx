import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Box, MenuItem, Select, Skeleton, Stack, Typography } from '@mui/material';
import { formattingNum } from 'src/utils/public';
import { paths } from 'src/routes/paths';
import { Link } from 'src/components/link';
import GamePriceBox from 'src/components/game-price-box';
import { Context } from '../context';
import AmountRise from '../../game-list/all-game/amount-rise';

const timeTypeData = [
  {
    name: '1D',
    value: 'change24h',
    prop: 'change_24h',
  },
  {
    name: '7D',
    value: 'change7d',
    prop: 'change_7d',
  },
  {
    name: '30D',
    value: 'change30d',
    prop: 'change_30d',
  },
];

const titleStyle = {
  fontSize: '14px',
  color: 'text.secondary',
  lineHeight: '16px',
};

const HomeRank = () => {
  const {
    t,
    isPC,
    rankLists,
    rankChainList,
    rankType,
    onBtnRankTypeClick,
    rankTime,
    onBtnRankTimeClick,
    rankChainSelect,
    onSelectChainChange,
    rankTimeSelect,
    onSelectTimeChange,
    onBtnRankLinkToClick,
    rankLoading,
  } = useContext(Context);

  // 标题类型切换
  const titleTypeBtn = useCallback(
    (type: number) => (
      <Stack
        direction="column"
        justifyContent="space-between"
        height={isPC ? '50px' : '42px'}
        onClick={() => onBtnRankTypeClick(type)}
      >
        <Typography
          variant={isPC ? 'h4' : 'h6'}
          sx={{
            height: isPC ? '40px' : '30px',
            lineHeight: isPC ? '40px' : '30px',
            color: rankType === type ? 'text.primary' : 'text.secondary',
            cursor: rankType === type ? 'default' : 'pointer',
          }}
        >
          {type === 1 ? t('ranking_trending') : t('ranking_top')}
        </Typography>
        {rankType === type ? (
          <Box sx={({ palette }) => ({ height: '2px', bgcolor: palette.primary.main })} />
        ) : undefined}
      </Stack>
    ),
    [isPC, onBtnRankTypeClick, rankType, t]
  );

  // 时间类型切换
  const timeTypeBtn = useCallback(
    (time: number) => (
      <Box
        sx={{
          p: '0 16px',
          boxSizing: 'border-box',
          height: '40px',
          borderRadius: '5px',
          bgcolor: rankTime === time ? 'primary.main' : 'background.neutral',
          cursor: rankTime === time ? 'default' : 'pointer',
        }}
        onClick={() => onBtnRankTimeClick(time)}
      >
        <Typography variant="body2" sx={{ lineHeight: '40px' }}>
          {timeTypeData[time].name}
        </Typography>
      </Box>
    ),
    [onBtnRankTimeClick, rankTime]
  );

  // 时间类型切换 H5
  const timeTypeBtnH5 = useMemo(
    () => (
      <Select
        displayEmpty
        value={rankTimeSelect}
        onChange={onSelectTimeChange}
        sx={{ height: '40px', width: isPC ? 'auto' : '100%', minHeight: 'auto' }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 180,
            },
          },
        }}
      >
        {timeTypeData?.map((item: any, index: number) => (
          <MenuItem value={item.prop} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    ),
    [isPC, onSelectTimeChange, rankTimeSelect]
  );

  // 链类型切换
  const chainTypeBtn = useMemo(
    () => (
      <Select
        displayEmpty
        value={rankChainSelect}
        onChange={onSelectChainChange}
        sx={({ palette }) => ({
          height: '40px',
          width: isPC ? 'auto' : '100%',
          minHeight: 'auto',
          bgcolor: palette.background.sub,
        })}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 180,
            },
          },
        }}
      >
        <MenuItem value="">All Chain</MenuItem>
        {rankChainList?.map((item: any, index: number) => (
          <MenuItem value={item.chain} key={index}>
            {item.showName}
          </MenuItem>
        ))}
      </Select>
    ),
    [rankChainList, isPC, onSelectChainChange, rankChainSelect]
  );

  // 查看全部
  const seeAllDom = useMemo(
    () => (
      <Link href={paths.gameList}>
        <Box
          sx={({ palette }) =>
            isPC
              ? {
                  height: '40px',
                  p: '10px 20px',
                  borderRadius: '5px',
                  border: '1px solid',
                  borderColor: palette.text.primary,
                }
              : {
                  height: '30px',
                  p: '5px 16px',
                  borderRadius: '5px',
                  border: '1px solid',
                  borderColor: palette.text.primary,
                }
          }
        >
          {t('public_seeall')}
        </Box>
      </Link>
    ),
    [isPC, t]
  );

  // 头部
  const titleDom = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ p: isPC ? '0' : '0 16px' }}
      >
        <Stack direction="row" gap={isPC ? '40px' : '24px'}>
          {titleTypeBtn(1)}
          {titleTypeBtn(2)}
        </Stack>
        {isPC ? (
          <Stack direction="row" gap="10px">
            {/* {timeTypeBtn(0)}
            {timeTypeBtn(1)}
            {timeTypeBtn(2)} */}
            {chainTypeBtn}
            {seeAllDom}
          </Stack>
        ) : (
          <Stack direction="row" gap="10px">
            {seeAllDom}
          </Stack>
        )}
      </Stack>
    ),
    [chainTypeBtn, isPC, seeAllDom, titleTypeBtn]
  );

  // H5 筛选栏
  const h5SelectDom = useMemo(
    () => (
      <Stack direction="row" gap="10px" sx={{ p: '16px', pb: '0' }}>
        {chainTypeBtn}
        {/* {timeTypeBtnH5} */}
      </Stack>
    ),
    [chainTypeBtn]
  );

  // 列表头部
  const rankListTitleDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isPC ? '7% 50% 20% 20%' : '7% 46% 22% 22%',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'border',
          p: '12px 0',
          boxSizing: 'border-box',
          mt: '20px',
          mb: '10px',
        }}
      >
        <Box sx={{ textAlign: 'left' }}>
          <Typography sx={{ ...titleStyle, mr: '8px' }}>#</Typography>
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Typography sx={{ ...titleStyle }}>{t('ranking_gamename')}</Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={{ ...titleStyle }}>
            {rankType === 1 ? t('ranking_token_price') : t('ranking_mkt_cap')}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={{ ...titleStyle }}>24H %</Typography>
        </Box>
      </Box>
    ),
    [isPC, rankType, t]
  );

  // 列表行
  const rankListItemDom = useCallback(
    (item: any, index: number) => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isPC ? '7% 50% 20% 20%' : '7% 46% 22% 22%',
          alignItems: 'center',
          p: '13px 0',
          boxSizing: 'border-box',
        }}
        key={index}
      >
        <Box sx={{ textAlign: 'left' }}>
          <Typography
            sx={{
              fontSize: isPC ? '16px' : '12px',
              fontWeight: 'bold',
              color: 'text.primary',
              mr: '8px',
            }}
          >
            {index + 1}
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ textAlign: 'left', cursor: 'pointer', gap: isPC ? '12px' : '8px' }}
          onClick={() => onBtnRankLinkToClick(item.id)}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={
              isPC
                ? {
                    width: '70px',
                    height: '70px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.2);',
                  }
                : {
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.2);',
                  }
            }
          >
            <img src={rankType === 1 ? item.iconUrl : item.iconUrl} alt="" />
          </Stack>
          <Typography
            sx={{
              fontSize: isPC ? '16px' : '14px',
              color: 'text.primary',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              maxWidth: isPC ? '190px' : '68px',
              fontWeight: 'bold',
            }}
          >
            {item.name}
          </Typography>
          {rankType === 1 && (
            <Typography
              sx={{ fontSize: isPC ? '16px' : '14px', color: 'text.secondary', fontWeight: 'bold' }}
            >
              {item.symbol}
            </Typography>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ textAlign: 'right', gap: isPC ? '12px' : '8px' }}
        >
          {rankType === 1 ? (
            <GamePriceBox price={item.price} fontSize={isPC ? '16px' : '14px'} />
          ) : (
            <Typography
              sx={{ fontSize: isPC ? '16px' : '14px', color: 'text.primary' }}
            >{`$ ${formattingNum(item.marketCap)}`}</Typography>
          )}
        </Stack>
        <Box sx={{ textAlign: 'right' }}>
          <Typography
            sx={{
              fontSize: isPC ? '16px' : '14px',
              color: 'text.primary',
              fontWeight: 'bold',
            }}
          >
            <AmountRise percent={item[timeTypeData[rankTime].value]} />
          </Typography>
        </Box>
      </Box>
    ),
    [isPC, onBtnRankLinkToClick, rankTime, rankType]
  );

  // 列表行 占位
  const rankListItemSkeleton = useCallback(
    (index: number) => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isPC ? '50px 45% 20% 20%' : '30px 45% 20% 20%',
          gap: '20px',
          alignItems: 'center',
          p: '19px 12px',
          boxSizing: 'border-box',
        }}
        key={index}
      >
        <Skeleton variant="rectangular" width={50} height={50} />
        <Skeleton variant="rounded" height={24} />
        <Skeleton variant="rounded" height={24} />
        <Skeleton variant="rounded" height={24} />
      </Box>
    ),
    [isPC]
  );

  // 列表
  const rankListDom = useCallback(
    (type: number) => (
      <Stack sx={{ width: '100%' }}>
        {rankListTitleDom}
        {(type === 1 || type === 3) &&
          !rankLoading &&
          rankLists &&
          rankLists.length > 0 &&
          rankLists.slice(0, 5).map((item: any, index: number) => rankListItemDom(item, index))}
        {(type === 2 || type === 3) &&
          !rankLoading &&
          rankLists &&
          rankLists.length > 0 &&
          rankLists
            .slice(5, 10)
            .map((item: any, index: number) => rankListItemDom(item, index + 5))}
        {(type === 1 || type === 3) &&
          rankLoading &&
          Array.from({ length: 5 }).map((_, index) => rankListItemSkeleton(index))}
        {(type === 2 || type === 3) &&
          rankLoading &&
          Array.from({ length: 5 }).map((_, index) => rankListItemSkeleton(index))}
      </Stack>
    ),
    [rankListItemDom, rankListItemSkeleton, rankListTitleDom, rankLists, rankLoading]
  );

  return (
    <Stack sx={{ mt: '50px' }}>
      {titleDom}
      {!isPC && h5SelectDom}
      {isPC ? (
        <Stack direction="row" gap="90px">
          {rankListDom(1)}
          {rankListDom(2)}
        </Stack>
      ) : (
        <Stack direction="row" gap="54px" padding="0 16px">
          {rankListDom(3)}
        </Stack>
      )}
    </Stack>
  );
};

export default HomeRank;
