import React, { useContext, useMemo } from 'react';
import { Box } from '@mui/material';

import ActivityDecorate from '../../_components/activity-decorate';
import { Context } from '../context';

const ActivityDecorateBox = () => {
  const { windowShowType } = useContext(Context);

  const peanutsDom = useMemo(
    () => (
      <ActivityDecorate
        icon="/images/activity/fight2023/bg/icon-decorate-01.webp"
        bottom="-30px"
        right="80px"
        boxSx={{
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-30px)',
          },
        }}
      />
    ),
    []
  );

  return windowShowType !== 2 ? <Box>{peanutsDom}</Box> : undefined;
};

export default ActivityDecorateBox;
