import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { CSSProperties, ReactNode, useCallback, useRef } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useLocales } from 'src/locales';
import SvgIcon from 'src/components/svg-icon';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { formatNum } from 'src/utils/public';
import { useCopyToClipboard } from 'src/utils/hooks/use-copy-to-clipboard';
import { toast } from 'src/components/toast';
import Image from 'src/components/image';
import { useBoolean } from 'src/utils/hooks/use-boolean';
import { useResponsiveBreakpoint } from 'src/utils/hooks/use-responsive';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useGetAccountInfo } from 'src/fetchs/user';
import InvitationHistoryList from './invitation-history';

interface TriangleBarProps {
  sx?: CSSProperties;
  children?: ReactNode;
}
const TriangleBar = ({ sx, children }: TriangleBarProps) => {
  const height = sx?.height || '16px';
  const backgroundColor = sx?.backgroundColor || '#790EE4';
  const width = sx?.width || '100%';

  const {
    height: sxHeight,
    backgroundColor: sxBackgroundColor,
    width: sxWidth,
    ...restSx
  } = sx || {};
  return (
    <Box
      sx={{
        ...restSx,
        height,
        width,
        minWidth: height,
        // backgroundColor,
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          width: 0,
          height: 0,
          borderStyle: 'solid',
          zIndex: 0,
          transform: 'translateY(-50%)', // 确保三角形与横条垂直居中
        },
        '&::before': {
          left: `-${parseInt(height as string, 10) / 2}px`, // 三角形的宽度设置为横条高度的一半
          borderWidth: `${parseInt(height as string, 10) / 2}px`,
          borderColor: `transparent ${backgroundColor} transparent transparent`, // 仅设置左边框颜色
        },
        '&::after': {
          right: `-${parseInt(height as string, 10) / 2}px`, // 三角形的宽度设置为横条高度的一半
          borderWidth: `${parseInt(height as string, 10) / 2}px`,
          borderColor: `transparent transparent transparent ${backgroundColor}`, // 仅设置右边框颜色
        },
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 2,
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          backgroundColor,
          left: `${parseInt(height as string, 10) / 2}px`,
          height: '100%',
          width: `calc(100% - ${parseInt(height as string, 10)}px)`,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

const CardContent = ({ children, sx }: { children: ReactNode; sx?: SxProps<Theme> }) => {
  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';

  return (
    <Card
      sx={{
        position: 'relative',
        background: 'linear-gradient(177deg, #8463EC 0%, #2C1D5F 100%)',
        borderRadius: '11px',
        height: isXs ? 'auto' : '154px',
        padding: '30px 25px',
        marginTop: '8px',
        ...sx,

        '&:before': {
          content: '""',
          position: 'absolute',
          top: '1px',
          left: '1px',
          height: 'calc(100% - 2px)',
          width: 'calc(100% - 2px)',
          background: 'linear-gradient(177deg, #44377E 0%, #2C2157 40%, #13092D 100%)',
          borderRadius: '10px',
          zIndex: '-1',
        },
      }}
    >
      {children}
    </Card>
  );
};

export const Invite = () => {
  const { t } = useLocales();
  const { copy } = useCopyToClipboard();
  const shareLinkDom = useRef<HTMLInputElement>(null);
  const confirm = useBoolean();
  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';
  const { data: accountInfo } = useGetAccountInfo();
  const accountData = accountInfo?.data || null;

  const inviteLink = useCallback(
    (params?: { style?: CSSProperties }) => (
      <Stack
        sx={{
          height: isXs ? '30px' : '56px',
          alignItems: 'flex-start',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: isXs ? '8px' : '0',
          ...params?.style,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#332761',
            height: '40px',
            borderRadius: isXs ? '15px' : '20px',
            overflow: 'hidden',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            lineHeight: '56px',
            width: '90%',
          }}
        >
          <TextField
            ref={shareLinkDom}
            variant="standard"
            value={`https://www.naga.io?inviteCode=${accountData?.inviteCode}`}
            sx={{
              width: 'calc(100% - 24px)',
              marginRight: '8px',
              '> div::before': {
                display: 'none',
              },
              '& input': {
                color: '#9FACBF',
              },
            }}
          />
          <IconButton
            aria-label="delete"
            sx={{ margin: '0', padding: 0 }}
            onClick={() => {
              const val = shareLinkDom.current?.querySelector('input')?.value;
              if (!val) return;
              copy(val);
              toast.success(t('public_copy'));
            }}
          >
            <ContentCopyIcon
              sx={{ height: { xs: '16px', sm: '20px' }, width: { xs: '16px', sm: '20px' } }}
            />
          </IconButton>
        </Box>
      </Stack>
    ),
    [accountData?.inviteCode, copy, isXs, t]
  );

  return (
    <>
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          {t('game_detail_top_info_toinvite')}
        </Typography>
      </Stack>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: isXs ? 'flex-start' : 'center',
          paddingTop: '36px',
          paddingBottom: '24px',
        }}
      >
        <Stack flexDirection="row" height="100%" width="100%" justifyContent="space-between">
          <Stack height="100%" justifyContent="space-between">
            <Typography
              variant={isXs ? 'subtitle2' : 'h6'}
              sx={{
                color: '#9FACBF',
                textTransform: 'capitalize',
                fontWeight: { xs: 'normal', sm: 'bold' },
              }}
            >
              {t('points-valid-invitation')}
            </Typography>

            <Typography
              variant={isXs ? 'h4' : 'h3'}
              sx={{ height: isXs ? '48px' : '56px', lineHeight: isXs ? '48px' : '56px' }}
            >
              {accountData?.inviteNum || '0'}
            </Typography>
          </Stack>
          <Stack height="100%" justifyContent="space-between">
            <Typography
              variant={isXs ? 'subtitle2' : 'h6'}
              sx={{
                color: '#9FACBF',
                textTransform: 'capitalize',
                fontWeight: { xs: 'normal', sm: 'bold' },
              }}
            >
              {t('points-award')}
            </Typography>
            <Typography variant={isXs ? 'h4' : 'h3'} display="flex" alignItems="center">
              <img
                style={{ marginLeft: '-12px' }}
                height={isXs ? 48 : 56}
                width={isXs ? 48 : 56}
                src="/images/points/summary-point.png"
                alt="award"
              />
              {accountData?.strInviteAwardBonus
                ? formatNum(parseInt(accountData?.strInviteAwardBonus, 10))
                : '0'}
            </Typography>
          </Stack>
          <Stack height="100%" justifyContent="space-between" display={isXs ? 'none' : 'flex'}>
            <Typography
              variant="h6"
              sx={{
                color: '#9FACBF',
                textTransform: 'capitalize',
                cursor: 'pointer',
                '&:hover': {
                  color: '#FFFFFF',
                },
              }}
              onClick={() => confirm.setValue(true)}
            >
              {t('points-invitation-history')}
            </Typography>
            {confirm.value && <InvitationHistoryList {...confirm} />}
            {inviteLink({ style: { display: isXs ? 'none' : 'flex' } })}
          </Stack>
        </Stack>
        {inviteLink({ style: { display: isXs ? 'flex' : 'none' } })}
      </CardContent>
    </>
  );
};

const totalLevel = 5;
const Summary = () => {
  const { t } = useLocales();
  const popover = usePopover();
  const { linkTo } = useLink();
  const breakpoint = useResponsiveBreakpoint();
  const isXs = breakpoint === 'xs';
  const { data: accountInfo } = useGetAccountInfo();
  const accountData = accountInfo?.data || null;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Stack flexDirection="row" alignItems="center">
            <Typography variant="h4" sx={{ mr: '16px', textTransform: 'capitalize' }}>
              {t('points-point')}
            </Typography>
            <Box
              onClick={popover.onOpen}
              sx={{ opacity: popover.open ? 1 : 0.9, height: '20px', width: '20px' }}
            >
              <SvgIcon style={{ height: '100%', width: '100%' }} name="exclamation" />
            </Box>
          </Stack>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: {
                xs: '16px 16px 24px 16px',
                sm: '30px 25px',
              },
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width={isXs ? '100%' : 'auto'}
              sx={{
                marginRight: {
                  xs: '0',
                  sm: '64px',
                },
              }}
            >
              <Stack flexDirection="row" alignItems="center">
                <Image
                  sx={{
                    height: { xs: '60px', sm: '90px' },
                    width: { xs: '60px', sm: '90px' },
                    marginLeft: { xs: '-16px', sm: 0 },
                  }}
                  src="/images/points/summary-point.png"
                  alt="points"
                />
                <Typography variant={isXs ? 'h4' : 'h3'}>
                  {accountData?.strBonus ? formatNum(parseInt(accountData?.strBonus, 10)) : '0'}
                </Typography>
              </Stack>
              <Button
                onClick={() => {
                  linkTo(paths.points.invitationHistory);
                }}
                sx={{
                  background: 'linear-gradient( 90deg, #613389 0%, #E6365E 100%)',
                  padding: '6px 24px',
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {t('game_detail_top_info_toinvite')}
              </Button>
            </Stack>
            <Stack flexGrow={isXs ? 0 : 1} sx={{ width: isXs ? '100%' : 'auto' }}>
              <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">LV {accountData?.level || '0'}</Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: 'flex', alignItems: 'center', color: '#8463EC', ml: '16px' }}
                  >
                    {accountData?.level || '0'}/
                    <object>
                      <Typography variant="subtitle2" marginTop="2px">
                        4
                      </Typography>
                    </object>
                  </Typography>
                </Stack>
                {/* <Typography variant="h6">LV2</Typography> */}
              </Stack>

              <TriangleBar
                sx={{
                  marginTop: isXs ? '8px' : '14px',
                  backgroundColor: 'rgba(161,14,228,0.3)',
                  height: isXs ? '8px' : '16px',
                }}
              >
                <TriangleBar
                  sx={{
                    width: accountData?.level
                      ? `${((parseInt(accountData.level, 10) + 1) / totalLevel) * 100}%`
                      : '0',
                    height: isXs ? '8px' : '16px',
                  }}
                />
              </TriangleBar>
            </Stack>
          </CardContent>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Invite />
        </Grid>
      </Grid>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-center"
        sx={{ width: 200, fontSize: '12px', padding: '12px', mt: '12px' }}
      >
        {t('points-point-tips')}
      </CustomPopover>
    </>
  );
};

export default Summary;
