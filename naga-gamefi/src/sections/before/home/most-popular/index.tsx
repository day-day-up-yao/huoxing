import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import { paths } from 'src/routes/paths';
import HomeGameItem from '../home-game-item';
import { Context } from '../context';

export default () => {
  const { homeinfo, t, chainList } = useContext(Context);
  //   console.log('homeinfo', homeinfo);

  return (
    <BoxPage
      children={
        <div className="most-popular">
          <HomeGameItem
            Itemlist={homeinfo.adviseList}
            title={t('home_most_popular')}
            link={`${paths.gameLibrary}?hot`}
            type="most"
            chainIcon="most"
            id={0}
            chainList={chainList}
          />
        </div>
      }
    />
  );
};
