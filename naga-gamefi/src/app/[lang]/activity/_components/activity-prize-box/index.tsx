import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography } from '@mui/material';

type ActivityPrizeBoxProps = {
  type: 'big' | 'small';
  img: string;
  name: string;
  num: string;
  support: string;
  windowShowType: number;
};

const ActivityPrizeBox = (props: ActivityPrizeBoxProps) => {
  const { type, name, img, num, support, windowShowType } = props;
  const { t } = useTranslation();

  const activePrizeDom = useMemo(
    () => (
      <Stack
        width={
          windowShowType === 2
            ? type === 'big'
              ? '96px'
              : '148px'
            : type === 'big'
            ? '280px'
            : '245px'
        }
        height={
          windowShowType === 2
            ? type === 'big'
              ? '134px'
              : '168px'
            : type === 'big'
            ? '390px'
            : '275px'
        }
        alignItems="center"
        sx={
          windowShowType === 2
            ? {
                position: 'relative',
                backgroundImage:
                  type === 'big'
                    ? 'url(/images/activity/fight2023/bg/bg-prize-big-box-h5.webp)'
                    : 'url(/images/activity/fight2023/bg/bg-prize-small-box-h5.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'bottom',
              }
            : {
                position: 'relative',
                backgroundImage:
                  type === 'big'
                    ? 'url(/images/activity/fight2023/bg/bg-prize-big-box.webp)'
                    : 'url(/images/activity/fight2023/bg/bg-prize-small-box.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'bottom',
              }
        }
      >
        <Box
          width={
            windowShowType === 2
              ? type === 'big'
                ? '78px'
                : '145px'
              : type === 'big'
              ? '230px'
              : '238px'
          }
          sx={
            windowShowType === 2
              ? {
                  mt: type === 'big' ? '8px' : '-20px',
                }
              : {
                  mt: type === 'big' ? '25px' : '-33px',
                }
          }
        >
          <img src={img} alt="" />
        </Box>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={
            windowShowType === 2
              ? {
                  mt: '-2px',
                  height: '28px',
                  width: 'calc(100% - 15px)',
                }
              : {
                  mt: type === 'big' ? '10px' : '-20px',
                  height: type === 'big' ? '64px' : '56px',
                  width: type === 'big' ? 'calc(100% - 56px)' : 'calc(100% - 40px)',
                }
          }
        >
          <Typography
            sx={
              windowShowType === 2
                ? {
                    fontSize: '8px',
                    fontWeight: 600,
                    lineHeight: '14px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                  }
                : {
                    fontSize: type === 'big' ? '22px' : '18px',
                    fontWeight: 600,
                    lineHeight: type === 'big' ? '32px' : '28px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                  }
            }
          >
            {name}
          </Typography>
        </Stack>
        {/* 数量，特殊字符显示图片 */}
        <Typography
          sx={
            windowShowType === 2
              ? {
                  position: 'absolute',
                  bottom: type === 'big' ? '1px' : '6px',
                  fontSize: '9px',
                  fontWeight: 600,
                  lineHeight: '14px',
                  letterSpacing: '1px',
                  textAlign: 'center',
                }
              : {
                  position: 'absolute',
                  bottom: '12px',
                  fontSize: type === 'big' ? '22px' : '18px',
                  fontWeight: 600,
                  lineHeight: type === 'big' ? '26px' : '21px',
                  letterSpacing: '1px',
                  textAlign: 'center',
                }
          }
        >
          {num === '∞' ? (
            <Stack
              component="span"
              justifyContent="center"
              alignItems="center"
              sx={
                windowShowType === 2
                  ? {
                      height: '21px',
                    }
                  : {
                      height: '16px',
                    }
              }
            >
              <img
                height={windowShowType === 2 ? '9px' : '12px'}
                src="/images/activity/fight2023/bg/icon-text-infinite.webp"
                alt=""
              />
            </Stack>
          ) : (
            num
          )}
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={
            windowShowType === 2
              ? {
                  position: 'absolute',
                  bottom: '-40px',
                  minHeight: '28px',
                }
              : {
                  position: 'absolute',
                  bottom: '-50px',
                }
          }
        >
          <Typography
            sx={
              windowShowType === 2
                ? {
                    fontSize: '9px',
                    color: '#5273C7',
                    lineHeight: '14px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                  }
                : {
                    fontSize: type === 'big' ? '14px' : '18px',
                    color: '#5273C7',
                    lineHeight: type === 'big' ? '16px' : '21px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                  }
            }
          >
            {t('activity_fight2023_list_support', { support })}
          </Typography>
        </Stack>
      </Stack>
    ),
    [img, name, num, support, t, type, windowShowType]
  );

  return activePrizeDom;
};

export default ActivityPrizeBox;
