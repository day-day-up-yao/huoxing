import { Avatar, Badge, Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { TocopyText, formatNum, formattingNum } from 'src/utils/public';
import { gameDetailTimeType } from 'src/utils/public/datas';

type GameNFTCollectionBoxItemParams = {
  t: any;
  nowTimeType: number;
  nowContractAddress: any;
  nowChainData: any;
  onBtnConnectionWalletClick: (url: string) => void;
  date: GameDetailType;
};
export default function GameTokenCollectionBoxItem(props: GameNFTCollectionBoxItemParams) {
  const { t, date, nowTimeType, nowContractAddress, nowChainData, onBtnConnectionWalletClick } =
    props;
  const { symbol, coinIconUrl, price, change24h, change7d, volume24h, marketCap } = date;

  // 当前时间类型参数字符串 ———— 默认24H(选择切换功能暂时隐藏)
  const timeTypeString = useMemo(() => gameDetailTimeType[nowTimeType].type, [nowTimeType]);
  const numChange = useMemo(() => {
    const change = { change24h, change7d };
    return change[`change${timeTypeString}` as keyof typeof change];
  }, [change24h, change7d, timeTypeString]);

  // 头部
  const renderHead = useMemo(
    () => (
      <Stack direction="row" alignItems="center" gap="16px">
        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Avatar
            src={coinIconUrl}
            sx={{ bgcolor: 'background.neutral', width: '40px', height: '40px' }}
          />
        </Badge>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {symbol}
        </Typography>
      </Stack>
    ),
    [coinIconUrl, symbol]
  );

  // Token 币种信息 ———— 涨跌百分比
  const changeDome = useMemo(
    () =>
      numChange && numChange !== 0 ? (
        <Typography
          sx={{
            mb: '4px',
            typography: 'subtitle2',
            color: numChange > 0 ? 'success.main' : 'error.main',
          }}
        >
          {numChange > 0 ? '+' : ''}
          {Number.parseFloat(Number(numChange * 100).toFixed(3))}%(24H)
        </Typography>
      ) : undefined,
    [numChange]
  );

  // Token 价格
  const datePrice = useMemo(
    () => (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" gap="14px">
        <Typography
          sx={{
            typography: 'h4',
            color: 'text.primary',
          }}
        >
          {price ? `$ ${Number(price).toFixed(3)}` : '- -'}
        </Typography>
        {changeDome}
      </Stack>
    ),
    [changeDome, price]
  );

  // Token 交易量
  const volume = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" gap="14px">
        <Typography
          sx={{
            // typography: 'subtitle1',
            color: 'text.secondary',
          }}
        >
          Volume (24H)
        </Typography>
        <Box gap="8px">
          <Typography
            sx={{
              // typography: 'subtitle1',
              color: 'text.primary',
            }}
          >
            {volume24h ? `$ ${formattingNum(volume24h)}` : '--'}
          </Typography>
        </Box>
      </Stack>
    ),
    [volume24h]
  );

  // Token 市值
  const mktCap = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" gap="14px">
        <Typography
          sx={{
            // typography: 'subtitle1',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_market_value')}
        </Typography>
        <Box gap="8px">
          <Typography
            sx={{
              // typography: 'subtitle1',
              color: 'text.primary',
            }}
          >
            {marketCap ? `$ ${formattingNum(marketCap.toFixed(4))}` : '--'}
          </Typography>
        </Box>
      </Stack>
    ),
    [t, marketCap]
  );

  // Token 合约
  const contract = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" gap="14px">
        <Typography
          sx={{
            // typography: 'subtitle1',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_contract')}
        </Typography>
        {nowContractAddress() ? (
          <Stack direction="row" alignItems="center" gap="8px">
            {nowChainData ? (
              <Image src={nowChainData?.icon} alt={nowChainData.name} width={18} height={18} />
            ) : undefined}
            <Typography
              sx={{
                // typography: 'subtitle1',
                color: 'text.primary',
              }}
            >
              {`${nowContractAddress()?.slice(0, 4)}...${nowContractAddress()?.slice(-4)}`}
            </Typography>
            <Image
              src="/images/icon/copyicon.png"
              alt=""
              onClick={() => TocopyText(nowContractAddress)}
              width={26}
              height={26}
            />
            {/* <Image
              src="/images/icon/martmask.png"
              alt=""
              onClick={() => onBtnConnectionWalletClick(nowContractAddress)}
              width={26}
              height={26}
            /> */}
          </Stack>
        ) : undefined}
      </Stack>
    ),
    [t, nowContractAddress, nowChainData]
  );

  return (
    <Stack width={1} gap="30px">
      <Typography
        variant="h5"
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        Token
      </Typography>
      {renderHead}
      {datePrice}
      {volume}
      {mktCap}
      {nowContractAddress && contract}
    </Stack>
  );
}
