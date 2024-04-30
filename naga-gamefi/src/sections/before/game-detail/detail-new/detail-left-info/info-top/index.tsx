import React, { useMemo, useContext } from 'react';
import { Box, Avatar, Stack, Typography, Grid, LinearProgress, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Context } from '../../../context';

import RewardNum from '../../../components/reward-num';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'right',
  ...theme.typography.body2,
}));

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { detail, isadmin, usersinfo, handleModalOpen, t } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const topinfolist = [
    {
      name: t('game_detail_top_info_events'),
      total: detail.gameUserStatistics.questNum ? detail.gameUserStatistics.questNum : 0,
      singula: detail.gameUserStatistics.questFinish ? detail.gameUserStatistics.questFinish : '',
      iscenter: true,
    },
    {
      name: t('game_detail_top_info_task'),
      total: detail.gameUserStatistics.missionNum ? detail.gameUserStatistics.missionNum : 0,
      singula: detail.gameUserStatistics.missionFinish
        ? detail.gameUserStatistics.missionFinish
        : '',
      iscenter: true,
    },
    {
      name: t('game_detail_top_info_invites'),
      total: detail.gameUserStatistics.inviteNum,
      iscenter: false,
    },
    {
      name: t('game_detail_top_info_energy'),
      total: 0,
      singula: 0,
      iscenter: false,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ManageDom = useMemo(
    () => (
      <Box
        sx={{
          mt: 28 / 8,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            height: 48,
            borderRadius: 5 / 8,
            borderColor: '#fff',
          }}
          onClick={() => {
            window.location.href = '/manage/game-info';
          }}
        >
          {t('game_detail_top_info_manage')}
        </Button>
      </Box>
    ),
    [t]
  );

  const Energyright = useMemo(
    () => (
      <Stack direction="row" alignItems="center">
        <RewardNum starnum={detail.gameUserStatistics.bonus} />
        <Typography
          variant="body2"
          sx={{
            // color: '#18191D',
            fontWeight: 500,
            ml: 1.2,
            px: 1.3,
            py: 3 / 8,
            // borderRadius: 20 / 8,
            borderRadius: 10,
            border: '1px solid #fff',
            // bgcolor: '#fff',
          }}
        >
          Rank：{detail.gameUserStatistics.bonusRank}
        </Typography>
      </Stack>
    ),
    [detail.gameUserStatistics.bonus, detail.gameUserStatistics.bonusRank]
  );

  const NotinvestDom = useMemo(
    () => (
      <Box>
        {topinfolist.map((item, index) => {
          let mynum = 4;
          if (topinfolist.length - 1 === index) {
            mynum = 0;
          }
          return (
            <Grid
              key={index}
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{
                my: mynum,
              }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  color: '#9FACBF',
                }}
              >
                {item.name}
              </Grid>
              {item.iscenter && (
                <Grid item xs={7}>
                  <LinearProgress
                    variant="determinate"
                    sx={{
                      height: 6,
                      my: 1,
                    }}
                    value={(item.singula / item.total) * 100}
                  />
                </Grid>
              )}
              <Grid item xs={item.iscenter ? 2 : 8} container justifyContent="flex-end">
                {index === 3 ? (
                  <Item>{Energyright}</Item>
                ) : (
                  <Item>
                    <Stack direction="row" spacing={2} alignItems="center">
                      {item.singula && `${item.singula}/`}
                      {item.total}
                      {index === 2 && (
                        <Button
                          sx={{
                            bgcolor: 'red',
                            borderRadius: 10,
                            color: '#fff',
                            '&:hover': {
                              bgcolor: 'red',
                            },
                          }}
                          variant="contained"
                          onClick={() => handleModalOpen('invite')}
                        >
                          {t('game_detail_top_info_toinvite')}
                        </Button>
                      )}
                    </Stack>
                  </Item>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Box>
    ),
    [Energyright, handleModalOpen, t, topinfolist]
  );
  return (
    <Box
      sx={{
        mb: 3,
        py: 4,
        px: 3,
        bgcolor: '#23252b',
        borderRadius: 0.5,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" sx={{ width: 64, height: 64 }} src={usersinfo.avatarUrl} />
        <Box>
          <Typography variant="h4">{usersinfo.username}</Typography>
          <Typography variant="body1" sx={{ color: '#9FACBF' }}>
            {usersinfo.address?.slice(0, 7)}...{usersinfo.address?.slice(-6)}
          </Typography>
        </Box>
      </Stack>
      {isadmin ? ManageDom : NotinvestDom}
      {/* {ManageDom} */}
      {/* {NotinvestDom} */}
    </Box>
  );
};
