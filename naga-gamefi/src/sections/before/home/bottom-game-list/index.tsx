import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import HomeGameItem from '../home-game-item';
import { Context } from '../context';

export default () => {
  const { bottomgames, chainList } = useContext(Context);
  return (
    <div className="bottom-gamelist">
      {bottomgames.map((item: any, index: number) => (
        <BoxPage
          key={index}
          children={
            <HomeGameItem
              Itemlist={item.list}
              title={item.title}
              link={item.link}
              type={item.type}
              id={item.id}
              chainIcon={item.icon}
              chainList={chainList}
            />
          }
        />
      ))}
    </div>
  );
};
