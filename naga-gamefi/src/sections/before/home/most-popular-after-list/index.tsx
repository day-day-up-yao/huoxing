import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import HomeGameitem from '../home-game-item';
import { Context } from '../context';

export default () => {
  const { mostPopularAfterList, chainList } = useContext(Context);
  return (
    <div className="bottom-gamelist">
      {mostPopularAfterList.map((item: any, index: number) => (
        <BoxPage
          key={index}
          children={
            <HomeGameitem
              Itemlist={item.list}
              title={item.title}
              link={item.link}
              type={item.type}
              id={item.id}
              chainIcon={item.chainIcon}
              chainList={chainList}
            />
          }
        />
      ))}
    </div>
  );
};
