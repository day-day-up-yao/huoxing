import React from 'react';

import './index.scss';

import RenderCenter from 'src/components/before/render-center';
import HomeBanner from './banner-new';
import MostPopular from './most-popular';
import QuestList from './quest-list';
// import MostPopularAfterList from './MostPopularAfterList'
import MewsandRank from './newsand-rank';
import BottomGamelist from './bottom-game-list';
import HomeContext from './context';
import HomeTopCoinList from './top-coin-list';
import HomeTopFestivalTopper from './top-festival-topper';
import HomeCooperateLogo from './home-cooperate-logo';
import HomeRank from './home-rank';
import NewGames from './new-games';
import DiscoveGames from './discover-games';

export default () => (
  // const env = process.env.NODE_ENV
  <HomeContext>
    {/* <HomeTopCoinList /> */}
    {/* <HomeTopFestivalTopper /> */}
    <RenderCenter
      children={
        <>
          <HomeBanner />
          <QuestList num={4} />
          <NewGames />
          {/* {env !== 'production' && <MostPopularAfterList />} */}
          {/* <MewsandRank /> */}
          <HomeRank />
          <MostPopular />
          <BottomGamelist />
          <DiscoveGames />
          <HomeCooperateLogo />
        </>
      }
    />
  </HomeContext>
);
