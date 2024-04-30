import React, { useContext } from 'react';

import GameDetailOld from './detail-old';
import GameDetailNew from './detail-new';
import GuildInvite from './components/guild-invite';
import { Context } from './context';

const GameDetailMain = () => {
  const { isattestation } = useContext(Context);
  return (
    <>
      <GuildInvite />
      {isattestation ? <GameDetailNew /> : <GameDetailOld />}
    </>
  );
};

export default GameDetailMain;
