import { Box, Button, Stack } from '@mui/material';
import React, { useMemo } from 'react';

type ActivityBtnProps = {
  text: string;
  href: string;
  m?: string;
  windowShowType: number;
};

const ActivityBtn = (props: ActivityBtnProps) => {
  const { text, href, m, windowShowType } = props;

  const btnDom = useMemo(
    () => (
      <Box
        width={windowShowType === 2 ? '130px' : '262px'}
        height={windowShowType === 2 ? '34px' : '72px'}
        sx={{
          backgroundImage: 'url(/images/activity/fight2023/bg/icon-btn-box.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          component="a"
          href={href}
          target="_blank"
          sx={
            windowShowType === 2
              ? {
                  width: ' 100%',
                  height: '100%',
                  fontSize: '12px',
                  color: '#450C04',
                  lineHeight: '14px',
                  letterSpacing: '1px',
                }
              : {
                  width: ' 100%',
                  height: '100%',
                  fontSize: '24px',
                  color: '#450C04',
                  lineHeight: '28px',
                  letterSpacing: '1px',
                }
          }
        >
          {text}
        </Stack>
      </Box>
    ),
    [href, text, windowShowType]
  );

  return (
    <Stack
      width="100%"
      alignItems="center"
      sx={
        windowShowType === 2
          ? {
              m: m || '75px 0 30px',
            }
          : {
              m: m || '117px 0 0 0',
            }
      }
    >
      {btnDom}
    </Stack>
  );
};

export default ActivityBtn;
