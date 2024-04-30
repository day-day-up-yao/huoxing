import React, { useContext } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import BoxPage from 'src/components/before/box-page';
import HomeCalendar from './home-calendar';
import HomeBannerNew from './home-banner-new';
import QuestList from '../quest-list';
import { Context } from '../context';
import BannerInfo from '../banner-info';
import HomeGameItem from '../home-game-item';
// import BigNewBanner from '../banner-info';
import LaunchPadCalendar from '../launchpad-calendar';

// ----------------------------------------------------------------------
// 新游戏 横条
const HomeNewGameList = () => {
  const { newGameList, chainList } = useContext(Context);
  return (
    <div className="bottom-gamelist">
      {newGameList && (
        <BoxPage
          children={
            <HomeGameItem
              Itemlist={newGameList.list}
              title={newGameList.title}
              link={newGameList.link}
              type={newGameList.type}
              id={newGameList.id}
              chainList={chainList}
              showNum={4}
              isMoreBtn
              isNotDataBox
            />
          }
        />
      )}
    </div>
  );
};

// ----------------------------------------------------------------------

const HomeNewTopBanner = () => (
  <Grid container spacing={3}>
    <Grid xs>
      {/* <BannerInfo /> */}
      {/* <Stack spacing={3}>
        <BannerInfo />
      </Stack> */}
      <Stack className="home-top-info">
        <HomeBannerNew />
        <LaunchPadCalendar />
        {/* <QuestList /> */}
      </Stack>
    </Grid>

    <Grid xs="auto">
      <Stack spacing={3}>
        <HomeCalendar />
      </Stack>
    </Grid>
  </Grid>
);

// ----------------------------------------------------------------------

const HomeBanner = () => {
  const { eventCalendarData, isPC, isMob } = useContext(Context);

  return eventCalendarData && isPC && Object.keys(eventCalendarData).length > 0 ? (
    <HomeNewTopBanner />
  ) : (
    <>
      <BannerInfo />
      {/* <QuestList num={4} /> */}
      <HomeCalendar />
      {eventCalendarData && Object.keys(eventCalendarData).length === 0 && <HomeNewGameList />}
    </>
  );
};

export default HomeBanner;
