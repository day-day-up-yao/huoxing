import React, { useContext, useMemo } from 'react';
import { Button } from 'rsuite';

import './index.scss';

import TitleHeader from 'src/components/before/title-header';
import SvgIcon from 'src/components/svg-icon';
import BoxPage from 'src/components/before/box-page';
import GameDataTop from 'src/components/before/game-data-top';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { paths } from 'src/routes/paths';
import { Context } from './context';
import Ranklist from '../game-list/all-game';
import GameOverviewActiveAddressesChart from './charts/gamefi-daily-active-addresses-chart';
import GameOverviewTransactionsChart from './charts/gamefi-daily-transactions-chart';
import GameOverviewVolumeChart from './charts/gamefi-volume-chart';
import GameOverviewTransactionsWeeklyChart from './charts/gamefi-transactions-weekly-chart';
import GameOverviewActiveProjectsByChainChart from './charts/active-projects-by-chain-chart';
import GameOverviewWeeklyNumberOfGamesChart from './charts/weekly-number-of-games-chart';
import GameOverviewDailyVolumeByChainGameChart from './charts/daily-volume-by-chain-game-chart';

const GameOverviewMain = () => {
  const {
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
  } = useContext(Context);

  // 顶部标题
  const headerDom = useMemo(
    () => (
      <TitleHeader
        className="game-overview-title"
        text={t('overview_title')}
        rightchildren={
          <Button
            className="game-overview-type-btn"
            appearance="ghost"
            onClick={() => onBtnRankingClick()}
            endIcon={<SvgIcon name="btn_arrow_right_line" />}
          >
            {t('public_ranking')}
          </Button>
        }
      />
    ),
    [onBtnRankingClick, t]
  );

  // 顶部统计数据
  const gameDataTopDom = useMemo(
    () => (
      <GameDataTop
        dailyVolume={dailyVolume}
        dailyTransactions={dailyTransactions}
        dailyNumberOfGamers={dailyNumberOfGamers}
      />
    ),
    [dailyNumberOfGamers, dailyTransactions, dailyVolume]
  );

  // 简介
  const { isMob } = useBreakPoint();
  const subHeaderDom = useMemo(
    () => (
      <TitleHeader
        className="game-overview-sub-title"
        text={
          isMob
            ? `${t('overview_sub_title1')}\n${t('overview_sub_title2')}`
            : t('overview_sub_title1') + t('overview_sub_title2')
        }
        rightchildren={
          <a
            className="game-overview-data-sources"
            href="https://www.footprint.network/"
            target="_blank"
            rel="noreferrer"
          >
            {t('overview_data_sources')}
            <SvgIcon className="data-sources-icon" name="footprint" />
            {/* <img className="data-sources-icon" src="/images/icon/logo-footprint.png" alt="" /> */}
          </a>
        }
      />
    ),
    [isMob, t]
  );

  // 图表 - GameFi Daily Active Addresses
  const activeAddressesChartDom = useMemo(
    () => <GameOverviewActiveAddressesChart data={activeAddressesChart} />,
    [activeAddressesChart]
  );

  // 图表 - GameFi Daily Transactions
  const transactionsChartDom = useMemo(
    () => <GameOverviewTransactionsChart data={transactionsChart} />,
    [transactionsChart]
  );

  // 图表 - GameFi Volume (Weekly)
  const volumeChartDom = useMemo(
    () => <GameOverviewVolumeChart data={volumeChart} />,
    [volumeChart]
  );

  // 图表 - GameFi Transactions (Weekly)
  const transactionsWeeklyChartDom = useMemo(
    () => <GameOverviewTransactionsWeeklyChart data={transactionsWeeklyChart} />,
    [transactionsWeeklyChart]
  );

  // 图表 - Active Projects by Chain
  const activeProjectsByChainChartDom = useMemo(
    () => <GameOverviewActiveProjectsByChainChart data={activeProjectsByChainChart} />,
    [activeProjectsByChainChart]
  );

  // 图表 - Weekly Number of Games
  const weeklyNumberOfGamesChartDom = useMemo(
    () => <GameOverviewWeeklyNumberOfGamesChart data={weeklyNumberOfGamesChart} />,
    [weeklyNumberOfGamesChart]
  );

  // 图表 - Daily Volume by Chain & Game
  const dailyVolumeByChainGameChartDom = useMemo(
    () => <GameOverviewDailyVolumeByChainGameChart data={dailyVolumeByChainGameChart} />,
    [dailyVolumeByChainGameChart]
  );

  // 排行榜
  const rankPage = useMemo(
    () => (
      <BoxPage
        children={
          <div className="home-rank">
            <TitleHeader text={t('public_ranking')} fontsize={26} islink={paths.gameList} />
            <Ranklist gamelists={gamelist} isHome current={1} times="24h" />
          </div>
        }
      />
    ),
    [gamelist, t]
  );

  return (
    <div className="game-overview-page">
      <div className="game-overview-content">
        {headerDom}
        {gameDataTopDom}
        {subHeaderDom}
        <div className="game-overview-chart-list">
          {activeAddressesChartDom}
          {transactionsChartDom}
          {volumeChartDom}
          {transactionsWeeklyChartDom}
          {weeklyNumberOfGamesChartDom}
          {dailyVolumeByChainGameChartDom}
          {activeProjectsByChainChartDom}
          {rankPage}
        </div>
      </div>
    </div>
  );
};

export default GameOverviewMain;
