import React, { useMemo } from 'react';
import { Stack, Typography } from '@mui/material';

type ActivityTitleBoxProps = {
  title: string;
  windowShowType: number;
};

const ActivityBoxTitleDom = (props: ActivityTitleBoxProps) => {
  const { title, windowShowType } = props;

  const titleDom = useMemo(
    () => (
      <Stack
        justifyContent="center"
        alignItems="center"
        width={windowShowType === 2 ? '160px' : '320px'}
        height={windowShowType === 2 ? '50px' : '104px'}
        sx={{
          backgroundImage: 'url(/images/activity/fight2023/bg/icon-title-box.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          sx={
            windowShowType === 2
              ? {
                  fontSize: '13px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  mt: '4px',
                }
              : {
                  fontSize: '26px',
                  lineHeight: '30px',
                  fontWeight: '600',
                  mt: '4px',
                }
          }
        >
          {title}
        </Typography>
      </Stack>
    ),
    [title, windowShowType]
  );

  return (
    <Stack
      width="100%"
      alignItems="center"
      sx={
        windowShowType === 2
          ? {
              m: '60px 0 30px',
            }
          : {
              m: '100px 0 70px',
            }
      }
    >
      {titleDom}
    </Stack>
  );
};

export default ActivityBoxTitleDom;
