'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { useRouter } from 'src/routes/hooks';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
import { AwardIcon } from 'src/assets/icons';
import { createTask } from 'src/fetchs/task';
import { cookiesName, discordLogin } from 'src/utils/public';
import { toast } from 'src/components/toast';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { sleep } from 'src/utils/sleep';
import { extractDiscordInviteCode } from 'src/utils/validation';
import { getDiscordInviteInfo } from 'src/models/subs/quest';
import { useTemplates, FormItemTitle, TemplateSchema } from './public';
import { MyGameButton } from '../content';

const twitterString1 = 'https://twitter.com/';
const twitterString2 = 'https://x.com/';
const twitterString3 = '/status/';
const twitterIdNum = 19;
const descriptionMaxLength = 240;

const taskTypes = [
  { code: 1, name: 'Once' },
  { code: 2, name: 'Daily' },
];

export default function TaskCreate() {
  const { t } = useTranslation();
  const router = useRouter();

  // ----------------------模板参数与描述等整理----------------------
  const { btnsComps, currentTemp } = useTemplates();
  const descriptionTitle = useMemo(
    () => (currentTemp.type === 8 ? t('task_question') : t('task_description')),
    [currentTemp.type, t]
  );
  const descriptionPlaceholder = useMemo(
    () => (currentTemp.type === 8 ? t('task_question_tips') : t('task_description_tips')),
    [currentTemp.type, t]
  );
  const templateSchema = useMemo(
    () =>
      (currentTemp.schema as unknown as TemplateSchema[])?.reduce((acc: TemplateSchema, obj) => {
        Object.keys(obj).forEach((key) => {
          if (key in obj) {
            if (key !== 'prefix') {
              acc[key] = obj[key];
            }
          }
        });
        return acc;
      }, {}),
    [currentTemp.schema]
  );

  // ----------------------表单部分----------------------
  const Schema = Yup.object().shape({
    param1: Yup.string(), // 此处用于defaultValues的param1类型匹配，实际被templateSchema覆盖
    ...templateSchema,
    description: Yup.string()
      .required(t('campaign_create_tasks_task_list_error2'))
      .max(descriptionMaxLength, t('character_limit')),
    cat: Yup.number().required(t('campaign_create_tasks_task_list_error2')),
    awardNum: Yup.number().required(t('campaign_create_tasks_task_list_error2')),
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(Schema),
    defaultValues: {
      awardNum: 35,
      cat: taskTypes[0].code,
      param1: '2', // 主要给proof of work任务设置，其它默认为空
    },
  });

  const {
    reset,
    trigger,
    watch,
    setValue,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();
  useEffect(() => {
    reset();
    setValue('description', '');
    if (currentTemp.type === 9) {
      setValue('param1', '2');
    } else {
      setValue('param1', '');
    }
  }, [currentTemp.type, reset, setValue]);

  const [currentTempChildren, setCurrentTempChildren] = useState<ReactNode | null>(null);

  const { linkTo } = useLink();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const gameId = Number(Cookies.get(cookiesName.adminGameId));
      if (!gameId || !currentTemp.type) throw Error('gameId or currentTemp.type null');
      const params = {
        gameId,
        missionType: currentTemp.type,
        ...data,
        param1: (currentTemp.type === 9 ? Number(data.param1) : data.param1) as string,
      };

      // 任务自动纠错 ===> 转发推特 || 喜欢推文
      if (params.missionType === 2 || params.missionType === 3) {
        const value = params.param1;
        if (
          (value.includes(twitterString1) || value.includes(twitterString2)) &&
          value.includes(twitterString3)
        ) {
          params.param1 =
            value.split(twitterString3)[0] +
            twitterString3 +
            value.split(twitterString3)[1].slice(0, twitterIdNum);
        }
      }

      // 验证discord邀请地址是否过期
      if (params.missionType === 5) {
        const inviteCode = extractDiscordInviteCode(params.param1);
        const res = await getDiscordInviteInfo({
          inviteCode,
        });

        let errors = null;
        let dcName = null;
        let dcTime = null;
        setCurrentTempChildren(null);
        setError('param1', {
          type: 'manual',
          message: '',
        });

        if (res.code === 0) {
          dcName = res.data.guildName;
          if (res.data.expireAt) {
            dcTime = dayjs(res.data.expireAt).format('YYYY-MM-DD HH:mm:ss');
          }
        } else if (res.code === -1) {
          errors = t('campaign_create_tasks_task_list_join_discord_error2');
        } else if (res.code === -402) {
          window.localStorage.removeItem('taskdetail');
          window.localStorage.setItem('againcode', res.code);
          discordLogin();
        } else {
          errors = t('campaign_create_tasks_task_list_join_discord_error');
        }

        if (dcName || dcTime) {
          setCurrentTempChildren(
            <Typography sx={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
              {dcName}
              {dcTime}
            </Typography>
          );
        }

        if (errors) {
          setError('param1', {
            type: 'manual',
            message: errors,
          });
        }
        if (errors) return;
      }

      await createTask(params);
      toast.success(t('task_create_success'));
      linkTo(paths.manage.task, { client: true });
    } catch (error) {
      console.error('onSubmit ~ error:', error);
      if (error?.msg) {
        toast.error(error.msg);
      } else {
        toast.error(t('task_create_fail'));
      }
    }
  });

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h4" sx={{ mb: '24px', textTransform: 'capitalize' }}>
          {t('task_create')}
        </Typography>
        <MyGameButton />
      </Stack>
      <FormItemTitle sx={{ textTransform: 'capitalize' }}>{t('task_task_template')}</FormItemTitle>
      {btnsComps}
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={4}>
          {currentTemp?.comp && (
            <currentTemp.comp disabled={isSubmitting} children={currentTempChildren} />
          )}

          {/* --------------Description-------------- */}
          <Box>
            <FormItemTitle
              sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'row' }}
            >
              {descriptionTitle}
              <Stack
                sx={{
                  marginLeft: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography
                  sx={({ palette }) => ({
                    fontSize: '12px',
                    lineHeight: '1.4rem',
                    color:
                      values.description?.length && values.description.length > descriptionMaxLength
                        ? palette.error.main
                        : palette.grey[300],
                  })}
                >
                  {values.description?.length || 0}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.4rem',
                  }}
                >
                  /{descriptionMaxLength}
                </Typography>
              </Stack>
            </FormItemTitle>
            <RHFTextField
              name="description"
              placeholder={descriptionPlaceholder}
              multiline
              rows={4}
              disabled={isSubmitting}
            />
          </Box>

          {/* --------------Repeat-------------- */}
          <Box>
            <FormItemTitle sx={{ textTransform: 'capitalize' }}>{t('task_repeat')}</FormItemTitle>
            <RHFAutocomplete
              name="cat"
              disabled={isSubmitting || currentTemp?.type !== 11}
              // defaultValue={taskTypes[0].code}
              options={taskTypes.map((item) => item.code)}
              getOptionLabel={(option) =>
                taskTypes.find((item) => item.code === option)?.name || 'Repeat'
              }
              isOptionEqualToValue={(option, value) => `${option}` === `${value}`}
              renderOption={(props, option) => {
                const { name } = taskTypes.filter((item) => item.code === option)[0];
                if (!name) return null;
                return (
                  <li {...props} key={name}>
                    {name}
                  </li>
                );
              }}
            />
          </Box>

          {/* --------------Reward-------------- */}
          <Box>
            <FormItemTitle sx={{ textTransform: 'capitalize' }}>{t('task_reward')}</FormItemTitle>
            <RHFTextField
              disabled={isSubmitting}
              name="awardNum"
              type="number"
              sx={{
                '& .MuiInputBase-input': {
                  color: 'rgba(244, 188, 44, 1)',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <>
                      <AwardIcon sx={{ width: '18px' }} />
                      <Typography
                        variant="body2"
                        sx={({ palette }) => ({
                          color: 'rgba(244, 188, 44, 1)',
                          margin: '0 -4px 0 8px',
                        })}
                      >
                        +
                      </Typography>
                    </>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>

        {/* --------------buttons-------------- */}
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mt: '32px' }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{ width: 'calc(40% - 8px)' }}
            disabled={isSubmitting}
            onClick={() => router.push(paths.manage.task)}
          >
            {t('public_btn_cancel')}
          </Button>
          <LoadingButton
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            sx={{ width: 'calc(60% - 8px)' }}
            loading={isSubmitting}
          >
            {t('public_btn_submit')}
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
