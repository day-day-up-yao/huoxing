import React, { useCallback, useContext, useMemo } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import ActivityBoxDom from '../../_components/activity-box';
import { Context } from '../context';

const ActivityAbout = () => {
  const { t, aboutData, windowShowType } = useContext(Context);

  // 标题文字
  const logoIcon = useCallback(
    (icon: string, logoHeight: string) => (
      <Stack
        height={logoHeight}
        justifyContent="center"
        alignItems="center"
        sx={windowShowType === 2 ? { mb: '20px', transform: 'scale(0.7)' } : { mb: '30px' }}
      >
        <img src={icon} alt="" height="100%" />
      </Stack>
    ),
    [windowShowType]
  );

  // 内容文字
  const aboutText = useCallback(
    (text: string) => (
      <Typography
        sx={
          windowShowType === 2
            ? {
                fontSize: '14px',
                lineHeight: '22px',
                letterSpacing: '1px',
                textAlign: 'center',
              }
            : {
                fontSize: '20px',
                lineHeight: '32px',
                letterSpacing: '1px',
                textAlign: 'center',
              }
        }
      >
        {t(text)}
      </Typography>
    ),
    [t, windowShowType]
  );

  // 规则
  const ruleDom = useMemo(
    () => (
      <Box sx={windowShowType === 2 ? { p: '14px 10px' } : { p: '19px 24px' }}>
        {aboutData.content.map(
          (item: { logo: string; logoHeight: string; text: string }, index: number) => (
            <Box key={index} sx={{ mt: '50px', '&:first-of-type': { mt: '0' } }}>
              {logoIcon(item.logo, item.logoHeight)}
              {aboutText(item.text)}
            </Box>
          )
        )}
      </Box>
    ),
    [aboutData.content, aboutText, logoIcon, windowShowType]
  );

  return (
    <ActivityBoxDom
      title={t(aboutData.title)}
      bgImg={windowShowType === 2 ? aboutData.bgImgH5 : aboutData.bgImg}
      windowShowType={windowShowType}
    >
      {ruleDom}
    </ActivityBoxDom>
  );
};

export default ActivityAbout;
