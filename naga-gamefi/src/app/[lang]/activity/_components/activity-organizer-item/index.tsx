import { Box } from '@mui/material';
import React, { useMemo } from 'react';

type ActivityOrganizerItemProps = {
  bgImg?: string;
  picUrl: string;
  jumpUrl?: string;
  windowShowType: number;
};

const ActivityOrganizerItem = (props: ActivityOrganizerItemProps) => {
  const { picUrl, jumpUrl, bgImg, windowShowType } = props;

  const iconDom = useMemo(
    () => (
      <Box
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${picUrl})` || 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
    ),
    [picUrl]
  );

  return (
    <Box
      component={jumpUrl ? 'a' : 'div'}
      href={jumpUrl}
      target="_blank"
      sx={
        windowShowType === 2
          ? {
              width: '78px',
              height: '28px',
              backgroundImage: bgImg || 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }
          : {
              width: '160px',
              height: '56px',
              backgroundImage: bgImg || 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }
      }
    >
      {iconDom}
    </Box>
  );
};

export default ActivityOrganizerItem;
