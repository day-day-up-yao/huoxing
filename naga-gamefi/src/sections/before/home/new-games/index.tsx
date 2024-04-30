import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import { paths } from 'src/routes/paths';
import HomeGameItem from '../home-game-item';
import { Context } from '../context';

export default () => {
  const { homeinfo, t } = useContext(Context);
  //   console.log('homeinfo', homeinfo);

  return (
    <BoxPage
      children={
        <div className="most-popular">
          <HomeGameItem
            Itemlist={homeinfo.newGames}
            title={t('home_goodwork')}
            link="/gamelibrary?newgame"
            type="newgames"
            // id={0}
          />
        </div>
      }
    />
  );
};
