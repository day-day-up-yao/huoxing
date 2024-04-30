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
import { ReactNode, useState } from 'react';
import { useRouter } from 'src/routes/hooks';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
import { AwardIcon } from 'src/assets/icons';
import { toast } from 'src/components/toast';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { FormItemTitle } from './public';

const descriptionMaxLength = 240;

const taskTypes = [
  { code: 1, name: 'Once' },
  { code: 2, name: 'Daily' },
];

export default function TaskCreate() {
  const { t } = useTranslation();
  const router = useRouter();

  // ----------------------表单部分----------------------
  const Schema = Yup.object().shape({
    param1: Yup.string(), // 此处用于defaultValues的param1类型匹配，实际被templateSchema覆盖
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

  const { linkTo } = useLink();
  const onSubmit = handleSubmit(async (data) => {
    // 验证成功结果参数
    console.log('🚀 ~ onSubmit ~ data:', data);
    try {
      // 结构提交函数
      // await createTask(data);
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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        {/* --------------Description-------------- */}
        <Box>
          <FormItemTitle
            sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'row' }}
          >
            {t('task_description')}
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
            placeholder={t('task_description')}
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
            disabled={isSubmitting}
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
      <Stack display="flex" flexDirection="row" justifyContent="space-between" sx={{ mt: '32px' }}>
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
  );
}
