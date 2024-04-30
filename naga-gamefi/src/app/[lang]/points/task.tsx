import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { isNumber } from 'lodash';
import { CSSProperties, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Image from 'src/components/image';
import { Link, useLink } from 'src/components/link';
import SvgIcon from 'src/components/svg-icon';
import { toast } from 'src/components/toast';
import { nagaDiscordInviteLink, nagaTwitterAccount } from 'src/config-global';
import {
  useGetBonusAwardSetting,
  useGetBonusTaskStatus,
  useReceiveBonusAward,
} from 'src/fetchs/points';
import { useGetAccountInfo } from 'src/fetchs/user';
import { useLocales } from 'src/locales';
import { paths } from 'src/routes/paths';
import { twitterLimit } from 'src/sections/before/task-detail/context';
import { useResponsiveBreakpoint } from 'src/utils/hooks/use-responsive';
import { discordLogin, twitterLogin } from 'src/utils/public';
import { multiLineTextOverflow, oneLineTextOverflow } from 'src/utils/styles';

const Point = ({ pointNumber }: { pointNumber: number }) => {
  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';

  return (
    <Stack flexDirection="row" alignItems="center" sx={{ marginLeft: { xs: '-6px', sm: '24px' } }}>
      <Image
        src="/images/points/summary-point.png"
        height={isXs ? '26px' : '32px'}
        width={isXs ? '26px' : '32px'}
      />
      <Typography variant="subtitle2" color="#B061FF">
        {pointNumber}
      </Typography>
    </Stack>
  );
};

type TaskItemProps = {
  icon: string;
  title: ReactNode;
  type?: number;
  point?: number;
  buttonText: string;
  buttonDisabledText?: string;
  buttonLoading?: boolean;
  status?: number;
  onClick: (taskItem: TaskItemProps) => Promise<any>;
  description?: string;
  tips?: string;
};

const TaskItem = (props: TaskItemProps) => {
  const {
    icon,
    title,
    type,
    point,
    buttonText,
    buttonDisabledText,
    buttonLoading,
    status,
    onClick,
    description,
    tips,
  } = props;
  const popover = usePopover();
  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';

  const buttonDisabled = status === 1 || status === -1;
  const btnDom = useCallback(
    (params?: { style?: CSSProperties }) => (
      <LoadingButton
        loading={buttonLoading}
        onClick={() => onClick && onClick(props)}
        disabled={buttonDisabled}
        size={isXs ? 'small' : 'medium'}
        sx={{
          textTransform: 'capitalize',
          marginLeft: '8px',
          width: isXs ? '100px' : '130px',
          background: buttonDisabled
            ? '#302E48'
            : 'linear-gradient( 90deg, #613389 0%, #E6365E 100%)',
          padding: isXs ? '6px 8px' : '8px 24px',
          ...params?.style,
        }}
      >
        {status === 1 ? buttonDisabledText : buttonText}
      </LoadingButton>
    ),
    [buttonDisabled, buttonDisabledText, buttonLoading, buttonText, isXs, onClick, props, status]
  );

  return (
    <>
      <Card
        sx={{
          marginBottom: { xs: '12px', sm: '16px' },
          background: '#242235',
          padding: { xs: '14px 16px', sm: '20px 26px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack
          flexDirection="row"
          alignItems={description ? 'start' : 'center'}
          width={isXs ? '100%' : 'auto'}
        >
          <Image
            src={icon}
            height={isXs ? '26px' : '40px'}
            width={isXs ? '26px' : '40px'}
            marginRight={isXs ? '12px' : '16px'}
            flexShrink={0}
          />
          <Stack flexGrow={1} width={isXs ? 'calc(100% - 40px)' : 'auto'}>
            <Stack
              flexDirection={isXs ? 'column' : 'row'}
              alignItems={isXs ? 'flex-start' : 'center'}
            >
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={isXs ? '100%' : 'auto'}
              >
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  width={isXs ? 'calc(100% - 110px)' : 'auto'}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mr: '8px',
                      textTransform: 'capitalize',
                      ...oneLineTextOverflow,
                    }}
                  >
                    {title}
                  </Typography>
                  {tips && (
                    <Box
                      onClick={popover.onOpen}
                      sx={{ opacity: popover.open ? 1 : 0.9, height: '22px', width: '16px' }}
                    >
                      <SvgIcon
                        style={{
                          height: '100%',
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        name="exclamation"
                      />
                    </Box>
                  )}
                </Stack>
                {btnDom({ style: { display: isXs ? 'flex' : 'none' } })}
              </Stack>

              {isNumber(point) && <Point pointNumber={point} />}
            </Stack>
            {description && (
              <Typography
                variant="body2"
                sx={{
                  mt: '8px',
                  color: '#9FACBF',
                  ...(isXs ? multiLineTextOverflow('2') : oneLineTextOverflow),
                }}
              >
                {description}
              </Typography>
            )}
          </Stack>
        </Stack>
        {btnDom({ style: { display: isXs ? 'none' : 'flex' } })}
      </Card>
      {tips && (
        <CustomPopover
          open={popover.open}
          onClose={popover.onClose}
          arrow="top-center"
          sx={{ width: 200, fontSize: '12px', padding: '12px', mt: '12px' }}
        >
          {tips}
        </CustomPopover>
      )}
    </>
  );
};

const Task = () => {
  const { t } = useLocales();
  const { linkTo } = useLink();
  const { data } = useGetBonusAwardSetting();
  const awardSetting = data?.data || null;
  const { isMutating, trigger } = useReceiveBonusAward();
  const { mutate: mutateAccount } = useGetAccountInfo();
  const { data: dataStatus, mutate: mutateStatus } = useGetBonusTaskStatus();
  const taskStatus = dataStatus?.data || null;

  const [currentTask, setCurrentTask] = useState<TaskItemProps | null>(null);
  const tasks = useMemo(
    () => [
      {
        icon: '/images/icon/favorite.png',
        title: t('points-task-1-title'),
        description: t('points-task-1-description'),
        tips: t('points-task-1-tips'),
        point: awardSetting?.quest,
        buttonText: t('points-task-to-complete'),
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          linkTo(paths.taskExplore, { client: true });
        },
      },
      {
        icon: '/images/icon/edit.png',
        title: t('points-task-2-title'),
        description: t('points-task-2-description'),
        point: awardSetting?.changeName,
        buttonText: t('points-task-receive'),
        buttonDisabledText: t('points-task-received'),
        buttonLoading: currentTask?.type === 1 && isMutating,
        type: 1,
        status: taskStatus?.changeName,
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          const res = await trigger({ bonusTaskType: taskItem.type as number });
          if (res?.code === -2) {
            toast.error(t('points-task-2-error'));
            linkTo(`${paths.userCenter}?usertabs=4`, { client: true });
            return null;
          }
          await mutateAccount();
          await mutateStatus();
          toast.success(t('points-task-received-success'));
        },
      },
      {
        icon: '/images/icon/user.png',
        title: t('points-task-3-title'),
        description: t('points-task-3-description'),
        point: awardSetting?.changeAvatar,
        buttonText: t('points-task-receive'),
        buttonDisabledText: t('points-task-received'),
        buttonLoading: currentTask?.type === 2 && isMutating,
        type: 2,
        status: taskStatus?.changeAvatar,
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          const res = await trigger({ bonusTaskType: taskItem.type as number });
          if (res?.code === -3) {
            toast.error(t('points-task-3-error'));
            linkTo(`${paths.userCenter}?usertabs=4`, { client: true });
            return null;
          }
          await mutateAccount();
          await mutateStatus();
          toast.success(t('points-task-received-success'));
        },
      },
      {
        icon: '/images/icon/tasktwitter.png',
        title: (
          <>
            Follow
            <Link
              href={`https://twitter.com/${nagaTwitterAccount}`}
              target="_blank"
              style={{ color: '#4EA5F3', margin: '0 4px' }}
            >
              @{nagaTwitterAccount}
            </Link>
            on Twitter
          </>
        ),
        point: awardSetting?.followNagaTwitter,
        buttonText: t('points-task-receive'),
        buttonDisabledText: t('points-task-received'),
        buttonLoading: currentTask?.type === 3 && isMutating,
        type: 3,
        status: taskStatus?.followNagaTwitter,
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          const res = await trigger({ bonusTaskType: taskItem.type as number });

          if (res?.code === -13) {
            toast.error(t('quest_detail_tip_twitter_limit', { time: twitterLimit(res.msg) }));
            return null;
          }
          if (res?.code === -401 || res?.code === -5) {
            toast.error(t('points-task-4-error'));
            twitterLogin();
            return null;
          }
          await mutateAccount();
          await mutateStatus();
          toast.success(t('points-task-received-success'));
        },
      },
      {
        icon: '/images/icon/taskdiscord.png',
        title: (
          <>
            Join
            <Link
              href={nagaDiscordInviteLink}
              target="_blank"
              style={{ color: '#4EA5F3', margin: '0 4px' }}
            >
              Naga Games
            </Link>
            on Discord
          </>
        ),
        point: awardSetting?.joinNagaDiscord,
        buttonText: t('points-task-receive'),
        buttonDisabledText: t('points-task-received'),
        buttonLoading: currentTask?.type === 4 && isMutating,
        type: 4,
        status: taskStatus?.joinNagaDiscord,
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          const res = await trigger({ bonusTaskType: taskItem.type as number });
          if (res?.code === -402 || res?.code === -6) {
            toast.error(t('points-task-5-error'));
            discordLogin();
            return null;
          }
          await mutateAccount();
          await mutateStatus();
          toast.success(t('points-task-received-success'));
        },
      },
      {
        icon: '/images/icon/airdrop.png',
        title: t('points-task-6-title'),
        description: t('points-task-6-description'),
        tips: t('points-task-6-tips'),
        point: awardSetting?.earlyUser,
        buttonText: t('points-task-receive'),
        buttonDisabledText: t('points-task-received'),
        buttonLoading: currentTask?.type === 5 && isMutating,
        type: 5,
        status: taskStatus?.earlyUser,
        onClick: async (taskItem: TaskItemProps) => {
          setCurrentTask(taskItem);
          const res = await trigger({ bonusTaskType: taskItem.type as number });
          if (res?.code === -21) {
            toast.error(t('points-task-6-error'));
            return null;
          }
          await mutateAccount();
          await mutateStatus();
          toast.success(t('points-task-received-success'));
        },
      },
    ],
    [
      awardSetting,
      currentTask?.type,
      isMutating,
      linkTo,
      mutateAccount,
      mutateStatus,
      t,
      taskStatus,
      trigger,
    ]
  );

  return (
    <Stack marginTop="60px">
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="h4" sx={{ mr: '16px', textTransform: 'capitalize' }}>
          {t('game_detail_top_info_task')}
        </Typography>
      </Stack>
      <Box sx={{ overflowX: 'auto', marginTop: '16px' }}>
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </Box>
    </Stack>
  );
};

export default Task;
