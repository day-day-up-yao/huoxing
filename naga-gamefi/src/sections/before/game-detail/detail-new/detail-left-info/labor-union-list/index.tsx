import React, { useContext } from 'react';
import { Box } from '@mui/material';
import BoxList from '../box-list';
import { Context } from '../../../context';

export default () => {
  const { energyRank, guildlist, t } = useContext(Context);
  // const leaderlist = [
  //   {
  //     iconUrl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     bonus: 35,
  //   },
  //   {
  //     iconUrl: '/images/icon/secondicon.png',
  //     address: '0x129…6d3d',
  //     bonus: 35,
  //   },
  //   {
  //     iconUrl: '/images/icon/thendicon.png',
  //     address: '0x129…6d3d',
  //     bonus: 35,
  //   },
  //   {
  //     // iconUrl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     bonus: 35,
  //   },
  //   {
  //     // iconUrl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     bonus: 35,
  //   },
  // ];
  // const guildlist = [
  //   {
  //     iconurl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     text: '3,523 成员',
  //     upsnum: '+10.0%',
  //     bonus: 35,
  //   },
  //   {
  //     iconurl: '/images/icon/secondicon.png',
  //     address: '0x129…6d3d',
  //     text: '3,523 成员',
  //     upsnum: '+10.0%',
  //     bonus: 35,
  //   },
  //   {
  //     iconurl: '/images/icon/thendicon.png',
  //     address: '0x129…6d3d',
  //     text: '3,523 成员',
  //     upsnum: '+10.0%',
  //     bonus: 35,
  //   },
  //   {
  //     // iconurl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     text: '3,523 成员',
  //     upsnum: '+10.0%',
  //     bonus: 35,
  //   },
  //   {
  //     // iconurl: '/images/icon/firsticon.png',
  //     address: '0x129…6d3d',
  //     text: '3,523 成员',
  //     upsnum: '+10.0%',
  //     bonus: 35,
  //   },
  // ];
  return (
    <Box>
      <BoxList title={`⚡️ ${t('game_detail_rank_leaderboard')}`} alllist={energyRank.inforList} />
      <BoxList
        title={`🏆 ${t('game_detail_rank_guild')}`}
        alllist={guildlist.inforList}
        type="guild"
      />
    </Box>
  );
};
