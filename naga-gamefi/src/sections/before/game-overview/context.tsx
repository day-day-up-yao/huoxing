import React, { createContext, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memoize } from 'proxy-memoize';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { RootState } from 'src/models/store';

const selectDatas = memoize((state: RootState) => ({
  gamelist: state.common.gamelist,
  dailyVolume: state.overview.dailyVolume,
  dailyTransactions: state.overview.dailyTransactions,
  dailyNumberOfGamers: state.overview.dailyNumberOfGamers,
  activeAddressesChart: state.overview.activeAddressesChart,
  transactionsChart: state.overview.transactionsChart,
  volumeChart: state.overview.volumeChart,
  transactionsWeeklyChart: state.overview.transactionsWeeklyChart,
  activeProjectsByChainChart: state.overview.activeProjectsByChainChart,
  weeklyNumberOfGamesChart: state.overview.weeklyNumberOfGamesChart,
  dailyVolumeByChainGameChart: state.overview.dailyVolumeByChainGameChart,
}));

export const Context = createContext({} as any);
export default ({ children }: any) => {
  const { t } = useTranslation();
  const { linkTo } = useLink();
  const {
    gamelist,
    dailyVolume,
    dailyTransactions,
    dailyNumberOfGamers,
    activeAddressesChart,
    transactionsChart,
    volumeChart,
    transactionsWeeklyChart,
    activeProjectsByChainChart,
    weeklyNumberOfGamesChart,
    dailyVolumeByChainGameChart,
  } = useSelector((state: RootState) => selectDatas(state));

  // 点击跳转 排行榜 按钮事件
  const onBtnRankingClick = useCallback(() => {
    linkTo(paths.gameList);
  }, [linkTo]);

  const result = useMemo(
    () => ({
      t,
      gamelist,
      dailyVolume,
      dailyTransactions,
      dailyNumberOfGamers,
      activeAddressesChart,
      transactionsChart,
      volumeChart,
      transactionsWeeklyChart,
      activeProjectsByChainChart,
      weeklyNumberOfGamesChart,
      dailyVolumeByChainGameChart,
      onBtnRankingClick,
    }),
    [
      activeAddressesChart,
      activeProjectsByChainChart,
      dailyNumberOfGamers,
      dailyTransactions,
      dailyVolume,
      dailyVolumeByChainGameChart,
      gamelist,
      onBtnRankingClick,
      t,
      transactionsChart,
      transactionsWeeklyChart,
      volumeChart,
      weeklyNumberOfGamesChart,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
