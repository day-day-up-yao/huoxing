import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ceshiList = [
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: 'Jom a massive 2,500,000 $SQR Prize Pool! Backed bys...',
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
  {
    icon: 'https://naga-prod.mars-block.com/gamefi/image/2023/07/1689139901366488.jpg',
    title: 'Battle For Giostone',
    desc: "Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...Join Magic Square's Road-to-TGE Campaign in Exclusive Collaboration with CoinList: Win from a massive 2,500,000 $SQR Prize Pool! Backed by Binance Labs...",
  },
];

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const values = useMemo(
    () => ({
      t,
      ceshiList,
    }),
    [t]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
