'use client';

import { Box, Card, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useCallback, useMemo } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocales } from 'src/locales';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import SvgIcon from 'src/components/svg-icon';
import Image from 'src/components/image';
import { useResponsiveBreakpoint } from 'src/utils/hooks/use-responsive';
import { useBonusSignin, useGetBonusAwardSetting, useGetBonusTaskStatus } from 'src/fetchs/points';
import { toast } from 'src/components/toast';
import { useGetAccountInfo } from 'src/fetchs/user';

const CheckIn = () => {
  const { t } = useLocales();
  const popover = usePopover();

  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';

  const {
    data: accountInfo,
    isLoading: loadingAccount,
    mutate: mutateAccount,
  } = useGetAccountInfo();
  const {
    data: bonusAwardSetting,
    // isLoading: loadingAward,
    // mutate: mutateAward,
  } = useGetBonusAwardSetting();
  const { data: dataStatus, mutate: mutateStatus } = useGetBonusTaskStatus();

  const awardData = bonusAwardSetting?.data || null;
  const accountData = accountInfo?.data || null;

  const awards = useMemo(
    () => [
      {
        title: 'day1',
        icon: 'award-1',
        number: awardData?.signin1,
      },
      {
        title: 'day2',
        icon: 'award-1',
        number: awardData?.signin2,
      },
      {
        title: 'day3',
        icon: 'award-1',
        number: awardData?.signin3,
      },
      {
        title: 'day4',
        icon: 'award-2',
        number: awardData?.signin4,
      },
      {
        title: 'day5',
        icon: 'award-2',
        number: awardData?.signin5,
      },
      {
        title: 'day6',
        icon: 'award-3',
        number: awardData?.signin6,
      },
      {
        title: 'day7',
        icon: 'award-4',
        number: awardData?.signin7,
      },
    ],
    [awardData]
  );

  const { isLoading: loadingSignin, mutate: mutateSignin } = useBonusSignin();
  const checkInHandler = useCallback(async () => {
    const res = await mutateSignin();
    if (!res || res.code !== 0) {
      toast.error(res?.msg || 'Check in failed');
      return;
    }
    await mutateAccount();
    await mutateStatus();
    toast.success(t('points-check-in-success'));
  }, [mutateAccount, mutateSignin, mutateStatus, t]);
  return (
    <>
      <Stack marginTop="50px">
        <Stack flexDirection="row" alignItems="center">
          <Typography variant="h4" sx={{ mr: '16px', textTransform: 'capitalize' }}>
            {t('points-daily-quest')}
          </Typography>
          <Box
            onClick={popover.onOpen}
            sx={{ opacity: popover.open ? 1 : 0.9, height: '20px', width: '20px' }}
          >
            <SvgIcon style={{ height: '100%', width: '100%' }} name="exclamation" />
          </Box>
        </Stack>
        <Box sx={{ overflowX: 'auto', marginTop: '8px' }}>
          <Grid container spacing={isXs ? 1 : 2} minWidth={1060}>
            {awards.map((item, index) => (
              <Grid xs={1.7142} item key={index}>
                <Card
                  sx={{
                    padding: { xs: '8px', sm: '16px' },
                    background: '#242235',
                    borderRadius: '10px',
                    width: '100%',
                    height: { xs: '140px', sm: '185px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {accountData?.signInNumMod && index + 1 <= accountData.signInNumMod ? (
                    <Image
                      src="/images/points/checked.svg"
                      alt="checked"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: isXs ? '40px' : '50px',
                        height: isXs ? '40px' : '50px',
                      }}
                    />
                  ) : null}
                  <Typography variant="h6" textTransform="uppercase">
                    {item.title}
                  </Typography>
                  <Image
                    src={`/images/points/${item.icon}.png`}
                    alt={item.title}
                    style={{
                      width: isXs ? '120px' : '153px',
                      height: isXs ? '120px' : '153px',
                      position: 'absolute',
                      zIndex: '-1',
                    }}
                  />
                  <Typography variant="h6">X{item.number || 0}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <LoadingButton
          loading={loadingSignin}
          disabled={dataStatus?.data?.signin === 1 || loadingSignin}
          onClick={checkInHandler}
          sx={({ palette }) => ({
            minWidth: '200px',
            margin: '32px auto 0',
            textTransform: 'capitalize',
            background:
              dataStatus?.data?.signin === 1
                ? palette.background.paper
                : 'linear-gradient( 90deg, #613389 0%, #E6365E 100%)',
          })}
        >
          {t('points-check-in')}
        </LoadingButton>
      </Stack>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-center"
        sx={{ width: 200, fontSize: '12px', padding: '12px', mt: '12px' }}
      >
        {t('points-daily-quest-tips')}
      </CustomPopover>
    </>
  );
};

export default CheckIn;
