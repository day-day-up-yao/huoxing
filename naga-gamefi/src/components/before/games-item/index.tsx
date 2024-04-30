import React from 'react';
import classNames from 'classnames';
import { Avatar, Stack, Typography, Box } from '@mui/material';

import './index.scss';

import { Link } from 'src/components/link';
import SvgIcon from 'src/components/svg-icon';
import { formatNum } from 'src/utils/public';
import GamePriceBox from 'src/components/game-price-box';
import ImageLazy from '../image-lazy';
// import SortInfo from '../sort-info';
import Currency from '../title-currency';

// eslint-disable-next-line react/prop-types
const TitleSort = (title: string, sort: string) => (
  <Stack direction="row" alignItems="center">
    <Typography
      variant="h5"
      className="games-title-info"
      sx={{
        maxWidth: '75%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {title}
    </Typography>
    <Currency chain={sort} size="medium" isnewshow />
  </Stack>
);

const centerData = (price: number, change24h: number, typename: string) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      // width: '49%',
      mt: '16px',
    }}
  >
    <Typography variant="body2" color="text.secondary" mr="16px">
      {typename}
    </Typography>
    {price && (
      <Typography
        variant="body1"
        sx={{
          mr: '5px',
          fontWeight: 'bold',
        }}
      >
        {typename === 'Price' ? <GamePriceBox price={price} fontWeight="bold" /> : formatNum(price)}
      </Typography>
    )}

    {typename === 'Price' ? (
      change24h || Number(change24h) === 0 ? (
        <Stack direction="row" alignItems="center" gap="6px">
          <SvgIcon
            isGreen={Number(change24h) >= 0}
            isRed={Number(change24h) < 0}
            name={Number(change24h) >= 0 ? 'pointup' : 'pointdown'}
          />
          <Typography
            variant="body1"
            sx={{
              lineHeight: '20px',
              color: Number(change24h) >= 0 ? '#15BD44' : '#E60000',
            }}
          >
            {/* (change24h)% */}
            {(
              Number(change24h >= 0 ? change24h : change24h.toString().replace('-', '')) * 100
            ).toFixed(2)}
            %
          </Typography>
        </Stack>
      ) : price ? (
        '一'
      ) : (
        ''
      )
    ) : (
      ''
    )}
  </Stack>
);

// 没有token,推特数据
const NotDataDom = () => (
  <Stack
    direction="row"
    alignItems="center"
    gap="6px"
    sx={{
      mt: '16px',
    }}
  >
    <Typography variant="body2" color="text.secondary" mr="16px">
      Price
    </Typography>
    <Typography variant="body2" fontWeight="bold" mr="16px">
      -
    </Typography>
  </Stack>
);

export default (props: any) => {
  const {
    picurl,
    title,
    category,
    link,
    price,
    change24h,
    twitterFollowNum,
    chain,
    type,
    twitterChange,
    discordFollowNum,
    discordChange,
    // sort,
    time,
    tokenData,
    chainList, // 所属链数据
    isNotDataBox, // 是否不显示最下方的 推特discord数据、上架时间等 Box组件
  } = props;
  const clesses = classNames('gamesitem');
  return (
    <Link href={link}>
      <div className={clesses}>
        <div className="gamesitem-top">
          <div className="gamesitem-top-img">
            <ImageLazy src={picurl} className="gamesitem-lazy-img" />
          </div>
          {/* <SortInfo score={sort} /> */}
        </div>
        <div className="gamesitem-bottom">
          {TitleSort(title, chain)}
          <Box>
            {type === 'newgames' ? (
              <Typography
                variant="body2"
                sx={{
                  mt: '15px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {category && category?.replace(',', ' · ')}
              </Typography>
            ) : price ? (
              centerData(price, change24h, 'Price')
            ) : twitterFollowNum ? (
              centerData(twitterFollowNum, twitterChange, 'Twitter')
            ) : (
              NotDataDom()
            )}
          </Box>
          {/* <div
            className={classNames('gamesitem-desc', {
              'gamesitem-desc-tba': !(tokenData && tokenData.symbol),
            })}
          >
            {newsbox ? title : desc}
          </div> */}
          {/* {tokenData && tokenData.symbol ? (
            <div className="gamesitem-token">
              {tokenData.coinIconUrl && (
                <img className="gamesitem-token-icon" src={tokenData.coinIconUrl} alt="" />
              )}
              {tokenData?.price && (
                <div className="gamesitem-token-text">{`$ ${Number(tokenData?.price).toFixed(
                  3
                )}`}</div>
              )}
              {tokenData.change24h && Number(tokenData.change24h) !== 0 && (
                <div
                  className={classNames('gamesitem-token-text gamesitem-token-change', {
                    fall: Number(tokenData.change24h) > 0,
                    rise: Number(tokenData.change24h) < 0,
                  })}
                >{`${(Number(tokenData.change24h) * 100).toFixed(2)}%`}</div>
              )}
              {tokenData.change24h && Number(tokenData.change24h) !== 0 && (
                <SvgIcon
                  className={classNames('gamesitem-token-change', {
                    fall: Number(tokenData.change24h) > 0,
                    rise: Number(tokenData.change24h) < 0,
                  })}
                  name={Number(tokenData.change24h) > 0 ? 'pointup' : 'pointdown'}
                />
              )}
            </div>
          ) : newsbox ? (
            <div className="gamesitem-token">{time}</div>
          ) : undefined} */}
        </div>
        {/* {tokenData && tokenData.symbol && (
          <div className="gamesitem-token-top-box">
            {tokenData.coinIconUrl && (
              <img className="gamesitem-token-top-icon" src={tokenData.coinIconUrl} alt="" />
            )}
            {tokenData.price && <GamePriceBox price={Number(tokenData.price)} />}
            {tokenData.change24h && Number(tokenData.change24h) !== 0 && (
              <SvgIcon
                className={classNames('gamesitem-token-top-arrows-icon', {
                  fall: Number(tokenData.change24h) > 0,
                  rise: Number(tokenData.change24h) < 0,
                })}
                name={Number(tokenData.change24h) > 0 ? 'pointup' : 'pointdown'}
              />
            )}
            {tokenData.change24h && Number(tokenData.change24h) !== 0 && (
              <div
                className={classNames('gamesitem-token-top-text', {
                  fall: Number(tokenData.change24h) > 0,
                  rise: Number(tokenData.change24h) < 0,
                })}
              >{`${(Number(tokenData.change24h) * 100).toFixed(2)}%`}</div>
            )}
          </div>
        )} */}
      </div>
    </Link>
  );
};
