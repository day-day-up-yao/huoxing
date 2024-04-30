'use client';

import {
  Typography,
  Card,
  Grid,
  Stack,
  Avatar,
  Button,
  Skeleton,
  SxProps,
  Theme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { SystemStyleObject } from '@mui/system';
import { paths } from 'src/routes/paths';
import { Link, useLink } from 'src/components/link';
import { useBoolean } from 'src/utils/hooks/use-boolean';
import Label from 'src/components/label';
import { deleteMission, useMissionList } from 'src/fetchs/common';
import { cookiesName } from 'src/utils/public';
import {
  checkInType,
  linkTypeTxt,
  linktype,
  taskIcon,
  twitterDiscordTxt,
  twittertype,
} from 'src/sections/before/game-detail/game-campaign-tasks/games-tasks-list';
import { toast } from 'src/components/toast';
import { oneLineTextOverflow } from 'src/utils/styles';
import { NoData } from 'src/components/no-data';
import CompletedList from './completed-list';

export const MyGameButton = () => {
  const { t } = useTranslation();
  const [gameId, setGameId] = useState<string | undefined>();
  useEffect(() => {
    const gameId = Cookies.get(cookiesName.adminGameId);
    setGameId(gameId);
  }, []);

  const { linkTo } = useLink();
  const clickHandler = useCallback(() => {
    linkTo(`${paths.game}/${gameId}`, { client: true });
  }, [gameId, linkTo]);
  return gameId ? (
    <Button
      onClick={clickHandler}
      sx={{ textTransform: 'capitalize', padding: '0 24px', height: '44px' }}
      variant="outlined"
      size="large"
      color="inherit"
    >
      {t('task_my_game')}
    </Button>
  ) : null;
};

export const CompletedStatus = ({ type }: { type: number }) => {
  const { t } = useTranslation();
  return type === 1 ? (
    <Label variant="soft" color="success" sx={{ marginLeft: '12px', textTransform: 'capitalize' }}>
      {t('task_completed')}
    </Label>
  ) : (
    ''
  );
};

export const SkeletonComp = ({ sx, slotSx }: { sx?: SxProps<Theme>; slotSx?: SxProps<Theme> }) => (
  <Skeleton
    variant="rounded"
    width="100%"
    sx={
      sx ||
      (({ palette }) => ({
        height: '76px',
        borderRadius: '5px',
        margin: '0 0 16px 8px',
        background: palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }))
    }
  >
    <Skeleton
      variant="rounded"
      width="40%"
      sx={
        slotSx ||
        (({ palette }) => ({
          height: '40px',
          borderRadius: '5px',
          background: palette.background.paper,
          visibility: 'visible',
        }))
      }
    />
    <Skeleton
      variant="rounded"
      width="20%"
      sx={
        slotSx ||
        (({ palette }) => ({
          height: '40px',
          borderRadius: '5px',
          background: palette.background.paper,
          visibility: 'visible',
        }))
      }
    />
  </Skeleton>
);

const TaskList = () => {
  const { t } = useTranslation();
  const confirm = useBoolean();
  const { linkTo } = useLink();

  const { trigger: triggerMissionList, data: missionList, isMutating } = useMissionList();

  // 当没有关联游戏时，禁止编辑，跳转首页
  useEffect(() => {
    const gameId = Cookies.get(cookiesName.adminGameId);
    if (!gameId || gameId === 'null') {
      linkTo(paths.home);
    } else {
      triggerMissionList({
        gameId,
      });
    }
  }, [linkTo, triggerMissionList]);

  const [deleteIng, setDeleteIng] = useState(false);
  const deleteMissionDo = useCallback(
    async (missionId: number) => {
      try {
        const gameId = Cookies.get(cookiesName.adminGameId);
        if (!gameId) throw new Error('GameId null');
        if (!missionId) throw new Error('MissionId null');
        setDeleteIng(true);
        const res = (await deleteMission(missionId)) as any;
        setDeleteIng(false);
        if (res?.code === 0) {
          toast.success(t('delete_task_success'));
          await triggerMissionList({
            gameId,
          });
        } else {
          toast.error(t('delete_task_failed'));
        }
      } catch {
        setDeleteIng(false);
      }
    },
    [t, triggerMissionList]
  );

  return (
    <>
      {confirm.value && <CompletedList {...confirm} />}
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: '24px' }}
      >
        <Typography variant="h4">{t('campaign_create_task')}</Typography>
        <Stack flexDirection="row" alignItems="center" justifyContent="flex-end">
          <MyGameButton />
          <Button
            onClick={() => linkTo(paths.manage.taskCreate, { client: true })}
            variant="outlined"
            sx={{
              marginLeft: '16px',
              padding: '8px 36px',
              position: 'relative',
              textTransform: 'capitalize',
              '&:after': {
                content: `""`,
                backgroundImage:
                  'linear-gradient(45deg, rgba(253, 148, 53, 1), rgba(230, 0, 0, 1), rgba(87, 13, 243, 1))',
                position: 'absolute',
                left: '-2px',
                top: '-2px',
                height: 'calc(100% + 4px)',
                width: 'calc(100% + 4px)',
                borderRadius: '5px',
                overflow: 'hidden',
                zIndex: 0,
                textIndent: '999em',
              },
            }}
          >
            <Typography
              variant="body1"
              sx={({ palette }) => ({
                textTransform: 'capitalize',
                position: 'absolute',
                left: '-1px',
                right: '-1px',
                zIndex: 1,
                fontWeight: 'bold',
                height: 'calc(100% + 2px)',
                width: 'calc(100% + 2px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
                background: palette.background.default,
              })}
            >
              {t('task_create')}
            </Typography>
            {t('task_create')}
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={1}>
        {isMutating && Array.from({ length: 10 }).map((_, index) => <SkeletonComp key={index} />)}
        {!isMutating && missionList?.data?.length === 0 && <NoData />}
        {!isMutating &&
          missionList?.data?.map((item) => {
            const leftimg = taskIcon({ item });

            let showContent = <></>;
            if (twittertype.includes(item.missionType)) {
              const { text, name, lasttext, link } = twitterDiscordTxt({ info: item });
              showContent = (
                <Stack flexDirection="row" sx={{ width: { xs: 'calc(100% - 100px)', sm: 'auto' } }}>
                  <Typography variant="body1" style={oneLineTextOverflow}>
                    {text}
                  </Typography>
                  <a
                    style={{
                      display: name === '' ? 'none' : 'inline-block',
                      padding: '0 4px',
                      color: 'rgba(78, 165, 243, 1)',
                      ...oneLineTextOverflow,
                    }}
                  >
                    {name}
                  </a>
                  <Typography variant="body1" style={oneLineTextOverflow}>
                    {lasttext}
                  </Typography>
                </Stack>
              );
            }

            if (linktype.includes(item.missionType)) {
              const { title, link, desc } = linkTypeTxt({ info: item });
              showContent = (
                <Stack flexDirection="row" sx={{ width: { xs: 'calc(100% - 100px)', sm: 'auto' } }}>
                  <a
                    href={link}
                    style={{
                      display: 'inline-block',
                      padding: '0 4px',
                      color: 'rgba(78, 165, 243, 1)',
                      textTransform: 'capitalize',
                      ...oneLineTextOverflow,
                    }}
                  >
                    {title}
                  </a>
                  {/* <Typography variant="body1">{desc}</Typography> */}
                </Stack>
              );
            }

            return (
              <Grid
                key={item.id}
                item
                xs={24}
                sx={{
                  padding: 0,
                  mb: '16px',
                  width: '100%',
                }}
              >
                <Card
                  sx={{
                    padding: { xs: '8px 12px', sm: '18px 26px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    sx={{
                      width: { xs: '100%', sm: 'auto' },
                      paddingBottom: { xs: '12px', sm: '0px' },
                      justifyContent: { xs: 'flex-start', sm: 'space-between' },
                    }}
                  >
                    <Avatar
                      alt="twitter"
                      src={leftimg}
                      variant="rounded"
                      sx={{ width: 40, height: 40, mr: '16px', borderRadius: '6px' }}
                    />
                    {showContent}
                    <Label variant="soft" sx={{ marginLeft: '12px', textTransform: 'capitalize' }}>
                      {checkInType(item.isDaily)}
                    </Label>

                    <CompletedStatus type={item.finishStatus} />
                  </Stack>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                  >
                    <Button
                      sx={{ textTransform: 'capitalize' }}
                      variant="soft"
                      startIcon={<EventNoteOutlinedIcon />}
                      onClick={() => confirm.setValue(true)}
                    >
                      {t('task_completed_list')}
                    </Button>
                    <LoadingButton
                      loading={deleteIng}
                      disabled={deleteIng}
                      onClick={() => deleteMissionDo(item.id)}
                      variant="soft"
                      sx={{ marginLeft: '24px', textTransform: 'capitalize' }}
                      startIcon={<DeleteOutlineOutlinedIcon />}
                    >
                      {t('task_completed_delete')}
                    </LoadingButton>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
export default TaskList;
