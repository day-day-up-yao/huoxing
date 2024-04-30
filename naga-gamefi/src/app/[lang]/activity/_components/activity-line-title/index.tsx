import React, { useMemo } from 'react';
import { Box, Stack, Typography } from '@mui/material';

type ActivityTitleBoxProps = {
  title: string;
  m?: string;
  windowShowType: number;
};

const ActivityLineTitleDom = (props: ActivityTitleBoxProps) => {
  const { title, m, windowShowType } = props;

  const titleDom = useMemo(
    () => (
      <Stack direction="row" justifyContent="center" alignItems="center" height="30px" gap="24px">
        <Box
          sx={
            windowShowType === 2
              ? {
                  width: '60px',
                  height: '0',
                  border: '3px solid',
                  borderImage:
                    'linear-gradient(270deg, rgba(55, 60, 164, 1), rgba(70, 166, 236, 0)) 3 3',
                }
              : {
                  width: '120px',
                  height: '0',
                  border: '3px solid',
                  borderImage:
                    'linear-gradient(270deg, rgba(55, 60, 164, 1), rgba(70, 166, 236, 0)) 3 3',
                }
          }
        />
        <Typography
          sx={
            windowShowType === 2
              ? {
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  mt: '2px',
                }
              : {
                  fontSize: '26px',
                  lineHeight: '30px',
                  fontWeight: '600',
                  mt: '2px',
                }
          }
        >
          {title}
        </Typography>
        <Box
          sx={
            windowShowType === 2
              ? {
                  width: '60px',
                  border: '3px solid',
                  borderImage:
                    'linear-gradient(270deg, rgba(70, 166, 236, 0), rgba(55, 60, 164, 1)) 3 3',
                }
              : {
                  width: '120px',
                  border: '3px solid',
                  borderImage:
                    'linear-gradient(270deg, rgba(70, 166, 236, 0), rgba(55, 60, 164, 1)) 3 3',
                }
          }
        />
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
              m: m || '90px 0 30px',
            }
          : {
              m: m || '60px 0 40px',
            }
      }
    >
      {titleDom}
    </Stack>
  );
};

export default ActivityLineTitleDom;
