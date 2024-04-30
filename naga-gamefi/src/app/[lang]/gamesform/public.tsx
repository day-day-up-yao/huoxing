import { ReactNode, useMemo, useState } from 'react';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Avatar, Button, InputAdornment, Stack, Switch } from '@mui/material';
import { DefaultComponentProps, OverridableTypeMap } from '@mui/material/OverridableComponent';
import { useTranslation } from 'react-i18next';
import { RHFTextField, RHFRadioGroup } from 'src/components/hook-form';
import {
  isValidDiscordInvite,
  isValidTweetUrl,
  isValidWebUrl,
  isValidYoutubeUrl,
} from 'src/utils/validation';

export interface TemplateSchema {
  [key: string]: Yup.StringSchema<string, Yup.AnyObject, undefined, ''>;
}

export const FormItemTitle = ({
  children,
  ...rest
}: { children: ReactNode } & DefaultComponentProps<OverridableTypeMap>) => (
  <Typography variant="body2" {...rest} sx={({ palette }) => ({ mb: '8px', ...rest.sx })}>
    {children}
  </Typography>
);

type CreateTaskItemProps = {
  disabled?: boolean;
  children?: ReactNode;
};

const FollowTwitter = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>{t('task_twitter_handle')}</FormItemTitle>
      <RHFTextField
        {...props}
        name="param1"
        placeholder={t('task_twitter_handle_tips')}
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
      />
    </Box>
  );
};

const Retweet = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>{t('task_tweet_link')}</FormItemTitle>
      <RHFTextField
        {...props}
        name="param1"
        placeholder="https://"
        // InputProps={{
        //   startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        // }}
      />
    </Box>
  );
};

const LikeTweet = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>{t('task_tweet_url')}</FormItemTitle>
      <RHFTextField
        {...props}
        name="param1"
        placeholder="https://"
        // InputProps={{
        //   startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        // }}
      />
    </Box>
  );
};

const JoinDiscord = ({ children, ...rest }: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>{t('task_discord_invite_link')}</FormItemTitle>
      <RHFTextField
        {...rest}
        name="param1"
        placeholder="https://"
        // InputProps={{
        //   startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        // }}
      />
      {children}
    </Box>
  );
};

const WatchYoutubeVideo = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>{t('task_video_link')}</FormItemTitle>
      <RHFTextField
        {...props}
        name="param1"
        placeholder="https://"
        // InputProps={{
        //   startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        // }}
      />
    </Box>
  );
};

const QA = (props: CreateTaskItemProps) => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  return (
    <Box>
      <Stack flexDirection="row" alignItems="center" sx={{ mb: '8px' }}>
        <FormItemTitle sx={{ mb: '0' }}>Auto-verified with correct answer</FormItemTitle>
        <Switch checked={toggle} onChange={() => setToggle(!toggle)} />
      </Stack>
      {toggle && (
        <RHFTextField
          {...props}
          name="param1"
          multiline
          rows={4}
          placeholder="Enter the answer to the question"
        />
      )}
    </Box>
  );
};

const proofWorkOptions = [
  { value: '2', label: 'URL' },
  { value: '1', label: 'IMAGE' },
];
const ProofWork = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormItemTitle>Task Method</FormItemTitle>
      <RHFRadioGroup {...props} row spacing={4} name="param1" options={proofWorkOptions} />
    </Box>
  );
};

const VisitWebPage = (props: CreateTaskItemProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <FormItemTitle>{t('task_task_name')}</FormItemTitle>
        <RHFTextField name="param1" placeholder={t('task_task_description')} />
      </Box>
      <Box>
        <FormItemTitle>{t('task_web_link')}</FormItemTitle>
        <RHFTextField
          {...props}
          name="param2"
          placeholder="https://"
          // InputProps={{
          //   startAdornment: <InputAdornment position="start">https://</InputAdornment>,
          // }}
        />
      </Box>
    </>
  );
};

export const useTemplates = () => {
  const { t } = useTranslation();
  const btns = useMemo(
    () => [
      {
        icon: '/images/icon/tasktwitter.png',
        name: t('task_follow_twitter'),
        type: 1,
        comp: FollowTwitter,
        schema: [
          {
            // prefix: '@',
            param1: Yup.string().required(t('campaign_create_tasks_task_list_error2')),
          },
        ],
      },
      {
        icon: '/images/icon/tasktwitter.png',
        name: t('task_retweet'),
        type: 2,
        comp: Retweet,
        schema: [
          {
            // prefix: 'https://',
            param1: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .test('is-valid-tweet-url', t('invalid_tweet_url'), (value) =>
                isValidTweetUrl(value || '')
              ),
          },
        ],
      },
      {
        icon: '/images/icon/tasktwitter.png',
        name: t('task_like_tweet'),
        type: 3,
        comp: LikeTweet,
        schema: [
          {
            param1: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .test('is-valid-tweet-url', t('invalid_tweet_url'), (value) =>
                isValidTweetUrl(value || '')
              ),
          },
        ],
      },
      {
        icon: '/images/icon/taskdiscord.png',
        name: t('task_join_discord'),
        type: 5,
        comp: JoinDiscord,
        schema: [
          {
            param1: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .test('is-valid-discord-invite-url', t('invalid_discord_invite_url'), (value) =>
                isValidDiscordInvite(value || '')
              ),
          },
        ],
      },
      {
        icon: '/images/icon/taskyoutube.png',
        name: t('task_watch_youtube'),
        type: 7,
        comp: WatchYoutubeVideo,
        schema: [
          {
            param1: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .test('is-valid-youtube-video-url', t('invalid_youtube_video_url'), (value) =>
                isValidYoutubeUrl(value || '')
              ),
          },
        ],
      },
      // {
      //   icon: '/images/icon/taskcar.png',
      //   name: 'QA',
      //   type: 8,
      //   comp: QA,
      //   schema: [
      //     {
      //       param1: Yup.string().required('Question answer is required'),
      //     },
      //   ],
      // },
      // {
      //   icon: '/images/icon/taskcar.png',
      //   name: 'Proof of Work',
      //   type: 9,
      //   comp: ProofWork,
      //   schema: [
      //     {
      //       param1: Yup.string().required('Task method is required'),
      //     },
      //   ],
      // },
      {
        icon: '/images/icon/tasklink.png',
        name: t('task_visit_page'),
        type: 10,
        comp: VisitWebPage,
        schema: [
          {
            param1: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .max(100, t('character_limit')),
          },
          {
            param2: Yup.string()
              .required(t('campaign_create_tasks_task_list_error2'))
              .test('is-valid-web-url', t('invalid_web_url'), (value) =>
                isValidWebUrl(value || '')
              ),
          },
        ],
      },
      {
        icon: '/images/icon/daily-check-in.svg',
        name: t('task_daily_check_in'),
        type: 11,
      },
    ],
    [t]
  );
  const [currentTemp, setCurrentTemp] = useState(btns[0]);
  const btnsComps = useMemo(
    () => (
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{ mb: '24px' }}
      >
        {btns.map((item) => (
          <Button
            key={item.name}
            variant={item.type === currentTemp.type ? 'contained' : 'outlined'}
            sx={({ palette }) => ({
              background: item.type === currentTemp.type ? '' : palette.grey[800],
              padding: '9px 16px',
              margin: '0 10px 10px 0',
              border: '1px solid',
              borderColor: item.type === currentTemp.type ? '' : palette.grey[600],
            })}
            onClick={() => setCurrentTemp(item)}
          >
            <Avatar
              alt={item.name}
              src={item.icon}
              variant="rounded"
              sx={{ width: 26, height: 26, mr: '16px', borderRadius: '6px' }}
            />
            {item.name}
          </Button>
        ))}
      </Stack>
    ),
    [btns, currentTemp]
  );

  return {
    btnsComps,
    currentTemp,
  };
};
