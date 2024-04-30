import React, { useCallback, useContext } from 'react';
import { Box, Button, Stack } from '@mui/material';

import { Context } from '../context';

const CalendarType = () => {
  const { smUp, eventCalendarCatData, typeValue, onBtnTypeValueClick } = useContext(Context);

  const typeButton = useCallback(
    (item: EventCalendarCatType, index: number) => (
      <Button
        size={smUp ? 'large' : 'medium'}
        // color={item.id === typeValue ? 'error' : 'info'}
        variant="contained"
        key={index}
        onClick={() => onBtnTypeValueClick(item.id)}
        sx={({ palette }) => ({
          display: 'block',
          bgcolor: item.id === typeValue ? palette.primary.main : palette.background.paper,
          color: item.id === typeValue ? '#fff' : palette.text.primary,
          '&:hover': {
            bgcolor: item.id === typeValue ? palette.primary.main : palette.background.paper,
          },
        })}
      >
        {item.name}
      </Button>
    ),
    [onBtnTypeValueClick, smUp, typeValue]
  );

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={smUp ? '24px' : '10px'}
        sx={{ display: '-webkit-box' }}
      >
        {eventCalendarCatData?.map((item: EventCalendarCatType, index: number) =>
          typeButton(item, index)
        )}
      </Stack>
    </Box>
  );
};

export default CalendarType;
