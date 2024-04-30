import React, { useMemo } from 'react';
import { Box } from '@mui/material';

type ActivityDecorateProps = {
  icon: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  boxSx?: any;
};

const ActivityDecorate = (props: ActivityDecorateProps) => {
  const { icon, top, bottom, left, right, boxSx } = props;

  const decorateDom = useMemo(
    () => (
      <Box
        sx={{
          position: 'fixed',
          top: top || undefined,
          bottom: bottom || undefined,
          left: left || undefined,
          right: right || undefined,
          ...boxSx,
        }}
      >
        <img src={icon} alt="" />
      </Box>
    ),
    [bottom, boxSx, icon, left, right, top]
  );

  return decorateDom;
};

export default ActivityDecorate;
