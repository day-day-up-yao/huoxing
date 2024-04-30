import React, { useContext, useMemo } from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { Context } from '../context';

const CalendarDate = () => {
  const { dateValue, onDateValueChange } = useContext(Context);

  const DateDom = useMemo(
    () => <DateCalendar value={dateValue} onChange={(newValue) => onDateValueChange(newValue)} />,
    [dateValue, onDateValueChange]
  );

  return (
    <Box sx={({ palette }) => ({ bgcolor: palette.background.paper, borderRadius: '16px' })}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>{DateDom}</LocalizationProvider>
    </Box>
  );
};

export default CalendarDate;
