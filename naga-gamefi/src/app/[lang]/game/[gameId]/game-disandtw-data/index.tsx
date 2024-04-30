import { Stack } from '@mui/material';
import { useContext } from 'react';

import GameTwitterChart from './twitter-chart';
import GameDiscordChart from './disord-chart';

export default ({ distwinfo, ish5 }: any) => (
  <Stack
    mt={{ sx: '24px', sm: '' }}
    direction={{ xs: 'column', sm: 'row' }}
    justifyContent="space-between"
  >
    {distwinfo?.twitterDataList?.length > 0 && (
      <GameTwitterChart
        ish5={ish5}
        data={distwinfo?.twitterDataList || []}
        flowernum={distwinfo?.twitterFollowNum}
        followAdd={distwinfo?.twitterFollowAdd}
      />
    )}
    {distwinfo?.discordDataList?.length > 0 && (
      <GameDiscordChart
        ish5={ish5}
        data={distwinfo?.discordDataList || []}
        flowernum={distwinfo?.discordMemberNum}
        followAdd={distwinfo?.discordOnlineAdd}
      />
    )}
  </Stack>
);
