import { Box } from '@mui/material';
import React from 'react';
import ActivityTitleDom from '../activity-box-title';

type ActivityBoxProps = {
  title?: string;
  bgImg?: string;
  children: React.ReactNode;
  windowShowType: number;
};

const ActivityBoxDom = (props: ActivityBoxProps) => {
  const { title, bgImg, children, windowShowType } = props;

  return (
    <Box>
      {title && <ActivityTitleDom title={title} windowShowType={windowShowType} />}
      <Box
        width="100%"
        minHeight="150px"
        sx={
          windowShowType === 2
            ? {
                backgroundImage: bgImg || 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                p: bgImg ? '16px' : '0',
              }
            : {
                backgroundImage: bgImg || 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                p: bgImg ? '42px' : '0',
              }
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default ActivityBoxDom;
