import { clearInterval } from 'timers';
import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Image from 'src/components/image';
import SvgIcon from 'src/components/svg-icon';
import { paths } from 'src/routes/paths';
import { GREY } from 'src/theme/palette-step-colors';
import { Context } from '../context';

const HomeTopCoinList = () => {
  const { topCoinList, coinPrice, linkTo, isPC } = useContext(Context);

  const running = useRef<HTMLDivElement | null>(null);
  const runningChild1 = useRef<HTMLDivElement | null>(null);
  const runningChild2 = useRef<HTMLDivElement | null>(null);
  const runningChild3 = useRef<HTMLDivElement | null>(null);
  const childRefs: { [key: string]: React.MutableRefObject<HTMLDivElement | null> } = {
    runningChild1,
    runningChild2,
    runningChild3,
  };

  useEffect(() => {
    let timer: number;
    const demo = running.current;
    const demo1 = runningChild1.current;
    const demo2 = runningChild2.current;
    const speed = 50; // 数值越大滚动速度越慢
    if (demo && demo1 && demo2) {
      const Marquee = () => {
        if (demo2.offsetWidth - demo.scrollLeft <= 0) {
          demo.scrollLeft -= demo1.offsetWidth;
        } else {
          demo.scrollLeft += 1;
        }
      };

      timer = window.setInterval(Marquee, speed);
    }

    return () => window.clearInterval(timer);
  }, []);

  const itemDom = useCallback(
    (data: TopCoinListType, index: number) => {
      const item = {
        ...data,
        ...((coinPrice &&
          coinPrice.find((cItem: TopCoinListType) => data.symbol === cItem.symbol)) ||
          data),
      };

      return (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap="8px"
          width="218px"
          height="16px"
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            linkTo(`${paths.game}/${item.gameId}`);
          }}
          key={index}
        >
          {/* 图标 */}
          {item.coinIcon && (
            <Image
              src={item.coinIcon}
              alt={item.symbol}
              sx={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
              }}
            />
          )}
          {/* 名称 */}
          {item.symbol && (
            <Typography
              sx={{
                typography: 'caption',
                color: 'text.secondary',
              }}
            >
              {item.symbol}
            </Typography>
          )}
          {/* 价格 */}
          {item.price && (
            <Typography
              sx={{
                typography: 'caption',
                color: 'text.secondary',
              }}
            >
              {`$ ${Number(item.price).toFixed(3)}`}
            </Typography>
          )}
          {/* 涨跌趋势 */}
          {item.change24h && (
            <SvgIcon
              name={Number(item.change24h) > 0 ? 'pointup' : 'pointdown'}
              isGreen={Number(item.change24h) > 0}
              isRed={Number(item.change24h) < 0}
              style={{ height: '12px' }}
            />
          )}
          {item.change24h && (
            <Typography
              sx={{
                typography: 'caption',
                color: Number(item.change24h) > 0 ? 'success.main' : 'error.main',
              }}
            >
              {item.change24h > 0
                ? `+${parseFloat((Number(item.change24h) * 100).toFixed(2))}%`
                : `${parseFloat((Number(item.change24h) * 100).toFixed(2))}%`}
            </Typography>
          )}
        </Stack>
      );
    },
    [coinPrice, linkTo]
  );

  return (
    <Stack
      height="40px"
      width="100%"
      direction="row"
      overflow="hidden"
      position="sticky"
      top="73px"
      zIndex="9"
      display={isPC ? 'flex' : 'none'}
      sx={{
        background: `linear-gradient(180deg, ${GREY[900]} 0%, ${GREY[800]} 100%)`,
      }}
      ref={running}
    >
      {Array.from({ length: 3 }).map((_, rIndex: number) => (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          height="40px"
          key={rIndex}
          ref={childRefs[`runningChild${rIndex + 1}`]}
        >
          {topCoinList &&
            topCoinList?.map((item: TopCoinListType, index: number) =>
              item.symbol ? itemDom(item, index) : undefined
            )}
        </Stack>
      ))}
    </Stack>
  );
};

export default HomeTopCoinList;
