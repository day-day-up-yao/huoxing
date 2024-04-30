import { Avatar, Badge, Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { formatNum } from 'src/utils/public';

type GameNFTCollectionBoxItemParams = {
  t: any;
  date: NFTCollectionType;
};
export default function GameNFTCollectionBoxItem(props: GameNFTCollectionBoxItemParams) {
  const { t, date } = props;
  const {
    name,
    iconUrl,
    isVerified,
    verifiedIconUrl,
    floorPrice,
    bestOfferPrice,
    volume24h,
    volumeTotal,
    ownerCount,
    orderRate,
    slug,
  } = date;

  // 头部
  const renderHead = useMemo(
    () => (
      <Stack direction="row" alignItems="center" gap="16px" mb="36px">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            isVerified ? (
              <Avatar
                src={verifiedIconUrl || '/images/svg/verify-collection.svg'}
                sx={{ width: '20px', height: '20px' }}
              />
            ) : undefined
          }
        >
          <Avatar
            src={iconUrl}
            sx={{ bgcolor: 'background.neutral', width: '64px', height: '64px' }}
          />
        </Badge>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
      </Stack>
    ),
    [iconUrl, isVerified, name, verifiedIconUrl]
  );

  // 地板价 floor price
  const dateFloorPrice = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_floor_price')}
        </Typography>
        {Number(floorPrice.price) < 0 ? (
          <Typography
            sx={{
              typography: 'h6',
              color: 'text.primary',
            }}
          >
            - -
          </Typography>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            gap="2px"
            component="span"
            sx={{ flexShrink: 0 }}
          >
            <Image src={floorPrice.iconUrl} alt={floorPrice.name} width={20} height={20} />
            <Typography
              sx={{
                typography: 'h6',
                color: 'text.primary',
              }}
            >
              {Math.floor(Number(floorPrice.price) * 10000) / 10000}
            </Typography>
          </Stack>
        )}
      </Stack>
    ),
    [floorPrice.iconUrl, floorPrice.name, floorPrice.price, t]
  );
  // 最佳报价 best offer
  const dateBestOffer = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_best_offer')}
        </Typography>
        {Number(bestOfferPrice.price) < 0 ? (
          <Typography
            sx={{
              typography: 'h6',
              color: 'text.primary',
            }}
          >
            - -
          </Typography>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            gap="2px"
            component="span"
            sx={{ flexShrink: 0 }}
          >
            <Image src={bestOfferPrice.iconUrl} alt={bestOfferPrice.name} width={20} height={20} />
            <Typography
              sx={{
                typography: 'h6',
                color: 'text.primary',
              }}
            >
              {Math.floor(Number(bestOfferPrice.price) * 10000) / 10000}
            </Typography>
          </Stack>
        )}
      </Stack>
    ),
    [bestOfferPrice.iconUrl, bestOfferPrice.name, bestOfferPrice.price, t]
  );
  // 24小时交易额 24h volume
  const dateVolume24h = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_volume_24h')}
        </Typography>
        <Typography
          sx={{
            typography: 'h6',
            color: 'text.primary',
          }}
        >
          {formatNum(Number(volume24h))}
        </Typography>
      </Stack>
    ),
    [t, volume24h]
  );
  // 总交易额 total volume
  const datevolumeTotal = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_volume_total')}
        </Typography>
        <Typography
          sx={{
            typography: 'h6',
            color: 'text.primary',
          }}
        >
          {formatNum(Number(volumeTotal))}
        </Typography>
      </Stack>
    ),
    [t, volumeTotal]
  );
  // 持有人数 owners
  const dateOwnerCount = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_owner_count')}
        </Typography>
        <Typography
          sx={{
            typography: 'h6',
            color: 'text.primary',
          }}
        >
          {formatNum(Number(ownerCount))}
        </Typography>
      </Stack>
    ),
    [t, ownerCount]
  );
  // 挂单率 listed
  const dateOrderRate = useMemo(
    () => (
      <Stack direction="column" alignItems="flex-start" gap="14px" width="50%">
        <Typography
          sx={{
            typography: 'body2',
            color: 'text.secondary',
          }}
        >
          {t('game_detail_nft_order_rate')}
        </Typography>
        <Typography
          sx={{
            typography: 'h6',
            color: 'text.primary',
          }}
        >
          {`${Number(orderRate) * 100}%`}
        </Typography>
      </Stack>
    ),
    [t, orderRate]
  );

  // 数据
  const renderDate = useMemo(
    () => (
      <Stack direction="row" flexWrap="wrap" rowGap="32px" mb="24px">
        {dateFloorPrice}
        {dateBestOffer}
        {dateVolume24h}
        {datevolumeTotal}
        {dateOwnerCount}
        {dateOrderRate}
      </Stack>
    ),
    [dateBestOffer, dateFloorPrice, dateOrderRate, dateOwnerCount, dateVolume24h, datevolumeTotal]
  );

  // 按钮
  const renderBtn = useMemo(
    () => (
      <Box sx={{ p: 0 }}>
        <Button
          fullWidth
          size="large"
          sx={{ bgcolor: 'background.neutral' }}
          onClick={() => {
            if (slug && slug !== '') window.open(`https://element.market/collections/${slug}`);
          }}
        >
          {t('game_detail_nft_buy_now')}
        </Button>
      </Box>
    ),
    [slug, t]
  );

  return (
    <Box>
      {renderHead}
      {renderDate}
      {renderBtn}
    </Box>
  );
}
