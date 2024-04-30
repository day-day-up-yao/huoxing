import React, { useContext, useMemo } from 'react';
import { Stack } from '@mui/material';

import { Context } from '../context';
import GameCommunityPopularityTwitterChart from './charts/twitter-chart';
import GameCommunityPopularityDiscordChart from './charts/discord-chart';

const GameDetailCommunityPopularity = () => {
  const { isPc, detail } = useContext(Context);

  return (
    <Stack
      direction={isPc ? 'row' : 'column'}
      justifyContent="space-between"
      width="100%"
      gap="24px"
      sx={{ mt: '40px' }}
    >
      {detail?.twitterDataList && detail?.twitterDataList.length > 0 && (
        <GameCommunityPopularityTwitterChart
          data={detail?.twitterDataList || []}
          followNum={detail?.twitterFollowNum}
          followAdd={detail?.twitterFollowAdd}
          likeNum={detail?.twitterLikeNum}
          likeAdd={detail?.twitterLikeAdd}
          isPc={isPc}
        />
      )}
      {detail?.discordDataList && detail?.discordDataList.length > 0 && (
        <GameCommunityPopularityDiscordChart
          data={detail?.discordDataList || []}
          memberNum={detail?.discordMemberNum}
          memberAdd={detail?.discordMemberAdd}
          onlineNum={detail?.discordOnlineNum}
          onlineAdd={detail?.discordOnlineAdd}
          isPc={isPc}
        />
      )}
    </Stack>
  );
};

export default GameDetailCommunityPopularity;
