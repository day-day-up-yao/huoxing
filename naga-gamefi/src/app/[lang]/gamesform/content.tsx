'use client';

import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { uploadDeckFile } from 'src/fetchs/upload';
import { Formcommitviteapply } from 'src/fetchs/activity';
import { toast } from 'src/components/toast';
import { useUserPopup } from 'src/fetchs/store';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
// import { Link } from 'src/components/link';
import SvgIcon from 'src/components/svg-icon';
import FormProvider, {
  RHFTextField,
  RHFAutocomplete,
  RHFUpload,
  RHFUploadBox,
  RHFUploadAvatar,
} from 'src/components/hook-form';
import { AwardIcon } from 'src/assets/icons';
import { useIsDark } from 'src/utils/hooks/use-is-dark';

// const descriptionMaxLength = 50;

const taskTypes = [
  { code: 1, name: 'Once' },
  { code: 2, name: 'Daily' },
];

const FormTitle = (text: string, notmust?: boolean, isbogtext?: boolean) => (
  <Stack direction="row" mb="12px">
    <Typography
      variant={isbogtext ? 'h4' : 'body2'}
      sx={
        {
          fontSize: isbogtext && { xs: '16px', md: '24px' },
        } as any
      }
    >
      {text}
    </Typography>
    {!notmust && (
      <Box color="#E60000" ml="4px">
        *
      </Box>
    )}
  </Stack>
);

const TextNumber = (num: any) => (
  <InputAdornment sx={{ position: 'absolute', right: '14px', bottom: '20px' }} position="end">
    {num || 0}/2000
  </InputAdornment>
);

export default function TaskCreate() {
  const { t } = useTranslation();
  const router = useRouter();
  const { mutate: mutateUserInfo } = useUserPopup();
  const { isMob } = useBreakPoint();
  const isDark = useIsDark();

  // eslint-disable-next-line react/no-unstable-nested-components
  const PcDom = (t: any) => (
    <Box
      sx={{
        height: { xs: '350px', md: '385px' },
        position: 'relative',
        pt: { xs: '145px', md: '0' },
      }}
      className="vote-pc-header"
    >
      <Box
        pt="55px"
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          zIndex: '1',
          width: { xs: '100%' },
          top: { xs: '-26px', md: '0' },
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <img
          style={{
            width: isMob ? '130px' : '160px',
          }}
          src="/images/bigimg/formlogo.png"
          alt=""
        /> */}
        <SvgIcon name="formlogo" />
        <Typography
          mt={{ xs: '5px', md: '25px' }}
          variant="h1"
          sx={{
            fontSize: { xs: '28px', md: '34px' },
          }}
        >
          {t('game_form_big_title')}
        </Typography>

        <Typography
          variant="body2"
          textAlign={{ xs: 'center', md: 'left' }}
          mt={{ xs: '5px', md: '27px' }}
        >
          {t('game_form_big_desc')}
        </Typography>
      </Box>
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          top: 0,
          right: 0,
          height: '100%',
        }}
      >
        <img
          style={{
            height: '100%',
          }}
          src={isDark ? '/images/bigimg/voterightimg.png' : '/images/bigimg/voterightimglight.png'}
          alt=""
        />
      </Box>
    </Box>
  );

  // ----------------------表单部分----------------------
  const Schema = Yup.object().shape({
    param1: Yup.string(), // 此处用于defaultValues的param1类型匹配，实际被templateSchema覆盖
    name: Yup.string().required(t('game_form_error_name')).max(50, t('character_limit')),
    email: Yup.string().required(t('game_form_error_email')).email(t('message_email_rule')),
    gamesname: Yup.string().required(t('game_form_error_gamename')).max(100, t('character_limit')),
    linkedin: Yup.string().test('is-linkedin-url', t('game_form_error_surenet'), (value) =>
      value ? value.indexOf('linkedin') > -1 : true
    ),
    gameplay: Yup.string()
      .required(t('game_form_error_text'))
      .max(2000, t('game_form_error_moremax')),
    gameswebsit: Yup.string()
      .required(t('game_form_error_surenet'))
      .url(t('game_form_error_surenet')),
    twitter: Yup.string().test('is-twitter-url', t('game_form_error_surenet'), (value) =>
      value ? value.indexOf('twitter') > -1 : true
    ),
    discord: Yup.string().test('is-discord-url', t('game_form_error_surenet'), (value) =>
      value ? value.indexOf('discord') > -1 : true
    ),
    telegram: Yup.string().test('is-telegram-url', t('game_form_error_surenet'), (value) =>
      value ? value.indexOf('t.me') > -1 : true
    ),
    decklink: Yup.string().url(t('game_form_error_surenet')),
    neednaga: Yup.string()
      .required(t('game_form_error_text'))
      .max(2000, t('game_form_error_moremax')),
    howmake: Yup.string()
      .required(t('game_form_error_text'))
      .max(2000, t('game_form_error_moremax')),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [uploadinfo, setUploadinfo] = useState({
    loading: false,
    success: false,
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(Schema),
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

  const [deckfile, setDeckfile] = useState('');

  const handleFilterDrop = useCallback(async (acceptedFiles: File[]) => {
    // if (!Cookies.get('uid')) {
    //   mutateUserInfo({ type: 0, bool: true });
    //   return;
    // }
    setUploadinfo({
      loading: true,
      success: false,
    });
    // const newFile = acceptedFiles[0];
    const newFile = acceptedFiles[0];
    const formData = new FormData();
    formData.append('uploadFile', newFile, newFile.name);
    await uploadDeckFile(formData).then((res: any) => {
      if (res.code === 0 && res.data) {
        setDeckfile(res.data);
        setUploadinfo({
          loading: false,
          success: true,
        });
      } else {
        toast.error(res.msg);
        setUploadinfo({
          loading: false,
          success: false,
        });
      }
    });
  }, []);

  const onSubmit = handleSubmit(async (data: any) => {
    // 验证成功结果参数
    // console.log('🚀 ~ onSubmit ~ data:', data);
    // if (!Cookies.get('uid')) {
    //   mutateUserInfo({ type: 0, bool: true });
    //   return;
    // }

    const param = {
      // careQa: data.whatjion, personaltelegram
      corePlay: data.gameplay,
      tg: data.personaltelegram,
      deckUrl: deckfile,
      discord: data.discord,
      deckPage: data.decklink,
      email: data.email,
      gameName: data.gamesname,
      linkedin: data.linkedin,
      name: data.name,
      needQa: data.neednaga,
      telegram: data.telegram,
      twitter: data.twitter,
      useQa: data.howmake,
      website: data.gameswebsit,
    };
    console.log(param);

    // setIsSuccess(true);
    try {
      // 结构提交函数
      await Formcommitviteapply(param as any);
      setIsSuccess(true);
      // toast.success(t('task_create_success'));
      // linkTo(paths.manage.task, { client: true });
    } catch (error) {
      console.error('onSubmit ~ error:', error);
      if (error?.msg) {
        toast.error(error.msg);
      } else {
        toast.error(t('public_upload_error'));
      }
    }
  });

  return (
    <Box
      sx={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {PcDom(t)}
      <Box
        sx={{
          position: 'relative',
          top: '-80px',
          padding: { xs: '24px 16px', md: '64px' },
          bgcolor: isDark ? 'background.paper' : '#fff',
          borderRadius: '5px',
        }}
      >
        {isSuccess ? (
          <Stack justifyContent="center" alignItems="center">
            <img
              style={{
                width: '114px',
                height: '114px',
              }}
              src="/images/icon/formsucc.png"
              alt=""
            />
            <Typography mt="24px" variant="h5">
              {t('game_form_submit_success')}
            </Typography>
            <Typography mt="8px" variant="body2" color="text.secondary">
              {t('game_form_submit_our_connect')}
            </Typography>
            <Stack direction="row" mt="32px" alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {t('game_form_submit_lx')}
              </Typography>
              <Stack direction="row" alignItems="center">
                <SvgIcon name="tg" />
                <Link
                  sx={{
                    color: '#1D9BF0',
                    marginLeft: '8px',
                    '&:hover': {
                      color: '#1D9BF0',
                    },
                  }}
                  href="https://t.me/NAGA_Andrew"
                >
                  t.me
                </Link>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={4}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '16px', md: '24px' },
                }}
              >
                1. {t('game_form_one_title')}
              </Typography>
              {/* --------------name-------------- */}
              <Box>
                {FormTitle(t('game_form_one_title_name'))}
                <RHFTextField name="name" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------Email-------------- */}
              <Box>
                {FormTitle('Email')}
                <RHFTextField name="email" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------Linkedin-------------- */}
              <Box>
                {FormTitle('Linkedin', true)}
                <RHFTextField name="linkedin" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------Linkedin-------------- */}
              <Box>
                {FormTitle(t('game_form_persontm'), true)}
                <RHFTextField name="personaltelegram" placeholder="" disabled={isSubmitting} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '16px', md: '24px' },
                }}
              >
                2. {t('game_form_two_title')}
              </Typography>
              {/* --------------gamesname-------------- */}
              <Box>
                {FormTitle(t('game_form_two_gamesname'))}
                <RHFTextField name="gamesname" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------gameswebsit-------------- */}
              <Box>
                {FormTitle(t('game_form_two_gamesweb'))}
                <RHFTextField name="gameswebsit" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------twitter-------------- */}
              <Box>
                {FormTitle('Twitter', true)}
                <RHFTextField name="twitter" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------Discord-------------- */}
              <Box>
                {FormTitle('Discord', true)}
                <RHFTextField name="discord" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------Telegram-------------- */}
              <Box>
                {FormTitle('Telegram', true)}
                <RHFTextField name="telegram" placeholder="" disabled={isSubmitting} />
              </Box>
              {/* --------------gameplay-------------- */}
              <Box>
                {FormTitle(t('game_form_two_mostplay'))}
                <RHFTextField
                  name="gameplay"
                  placeholder=""
                  multiline
                  rows={5}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 2000 }}
                  InputProps={{
                    endAdornment: TextNumber(values.gameplay?.length),
                  }}
                />
              </Box>
              {/* --------------Economic-------------- */}
              {/* <Box>
                {FormTitle(t('game_form_two_jm'), true)}
                <RHFTextField
                  name="economic"
                  placeholder=""
                  multiline
                  rows={5}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 2000 }}
                  InputProps={{
                    endAdornment: TextNumber(values.howmake?.length),
                  }}
                />
              </Box> */}
              {/* --------------deckfilter-------------- */}
              <Box>
                {FormTitle('Deck（update）', true)}
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Box>
                    <RHFUploadBox
                      sx={{
                        width: '164px',
                        height: '54px',
                      }}
                      onDrop={handleFilterDrop}
                      // multiple
                      // thumbnail
                      name="deckfilter"
                    />
                  </Box>
                  {uploadinfo.loading && (
                    <LoadingButton
                      loading
                      sx={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bgcolor: 'background.sub',
                        width: '168px',
                        height: '60px',
                      }}
                    />
                  )}

                  <Typography ml="16px" variant="body2" color="text.secondary">
                    {t('game_form_filter_desc')}
                  </Typography>
                </Stack>
                {uploadinfo.success && (
                  <Typography mt="12px" variant="body2" color="#15BD44">
                    {t('public_upload_success')}
                  </Typography>
                )}
              </Box>
              <Box>
                {FormTitle('Deck（link）', true)}
                <RHFTextField name="decklink" disabled={isSubmitting} />
              </Box>
              {/* --------------whatjion-------------- */}
              {/* <Box>
                {FormTitle(`3. ${t('game_form_three_title')}`, false, true)}
                <RHFTextField
                  name="whatjion"
                  placeholder=""
                  multiline
                  rows={5}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 2000 }}
                  InputProps={{
                    endAdornment: TextNumber(values.whatjion?.length),
                  }}
                />
              </Box> */}
              {/* --------------neednaga-------------- */}
              <Box>
                {FormTitle(`3. ${t('game_form_four_title')}`, false, true)}
                <RHFTextField
                  name="neednaga"
                  placeholder="Please elaborate on how NAGA can assist you, for example, Blockchain Collaboration 、 Brand Enablement、 Grant、 Game Publishing and  etc"
                  multiline
                  rows={5}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 2000 }}
                  InputProps={{
                    endAdornment: TextNumber(values.neednaga?.length),
                  }}
                />
              </Box>
              {/* --------------howmake-------------- */}
              <Box>
                {FormTitle(`4. ${t('game_form_five_title')}`, false, true)}
                <RHFTextField
                  name="howmake"
                  placeholder=""
                  multiline
                  rows={5}
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 2000 }}
                  InputProps={{
                    endAdornment: TextNumber(values.howmake?.length),
                  }}
                />
              </Box>
            </Stack>

            {/* --------------buttons-------------- */}
            <Stack display="flex" flexDirection="row" justifyContent="center" sx={{ mt: '32px' }}>
              {/* <Button
              variant="outlined"
              size="large"
              sx={{ width: 'calc(40% - 8px)' }}
              disabled={isSubmitting}
              onClick={() => router.push(paths.manage.task)}
            >
              {t('public_btn_cancel')}
            </Button> */}
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                sx={{ width: { xs: '100%', md: 'calc(30% - 8px)' } }}
                loading={isSubmitting}
              >
                {t('public_btn_submit')}
              </LoadingButton>
            </Stack>
          </FormProvider>
        )}
      </Box>
    </Box>
  );
}
