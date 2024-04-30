import React, { useCallback, useContext, useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import ActivityBoxDom from '../../_components/activity-box';
import { Context } from '../context';

const ActivityRules = () => {
  const { t, ruleData, windowShowType } = useContext(Context);

  // 标题文字
  const ruleTitle = useCallback(
    (title: string) => (
      <Typography
        sx={
          windowShowType === 2
            ? {
                fontSize: '14px',
                lineHeight: '22px',
                letterSpacing: '1px',
                mt: '32px',
              }
            : {
                fontSize: '20px',
                lineHeight: '32px',
                letterSpacing: '1px',
                mt: '50px',
              }
        }
      >
        {t(title)}
      </Typography>
    ),
    [t, windowShowType]
  );

  // 内容文字
  const ruleText = useCallback(
    (text: string, linkTitle?: string, linkUrl?: string) => (
      <Typography
        sx={
          windowShowType === 2
            ? {
                fontSize: '12px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '20px',
                letterSpacing: '1px',
                mt: '12px',
              }
            : {
                fontSize: '16px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '28px',
                letterSpacing: '1px',
                mt: '24px',
              }
        }
      >
        {linkTitle && linkUrl ? (
          <>
            {`${t(text)}`.split(linkTitle)[0]}
            <Typography
              component="a"
              href={linkUrl}
              target="_blank"
              sx={
                windowShowType === 2
                  ? {
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      lineHeight: '20px',
                      letterSpacing: '1px',
                      mt: '12px',
                    }
                  : {
                      fontSize: '16px',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      lineHeight: '28px',
                      letterSpacing: '1px',
                      mt: '24px',
                    }
              }
            >
              {linkTitle}
            </Typography>
            {`${t(text)}`.split(linkTitle)[1]}
          </>
        ) : (
          t(text)
        )}
      </Typography>
    ),
    [t, windowShowType]
  );

  // 规则
  const ruleDom = useMemo(
    () => (
      <Box
        sx={
          windowShowType === 2
            ? { mt: '0', mb: '28px', p: '0 20px' }
            : { mt: '-30px', mb: '28px', p: '0 24px' }
        }
      >
        {ruleData.content.map(
          (
            item: { title: string; text: string; linkTitle?: string; linkUrl?: string },
            index: number
          ) => (
            <Box key={index}>
              {ruleTitle(item.title)}
              {ruleText(item.text, item.linkTitle, item.linkUrl)}
            </Box>
          )
        )}
      </Box>
    ),
    [ruleData.content, ruleText, ruleTitle, windowShowType]
  );

  return (
    <ActivityBoxDom
      title={t(ruleData.title)}
      bgImg={windowShowType === 2 ? ruleData.bgImgH5 : ruleData.bgImg}
      windowShowType={windowShowType}
    >
      {ruleDom}
    </ActivityBoxDom>
  );
};

export default ActivityRules;
