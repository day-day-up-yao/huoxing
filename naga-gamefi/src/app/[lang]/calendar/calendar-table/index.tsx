import React, { useContext, useMemo } from 'react';
import { Box, Stack, Typography, Table, TableContainer, TableBody } from '@mui/material';

import dayjs from 'dayjs';
import { Context } from '../context';
import CalendarTableRow from '../calendar-table-row';

type Props = {
  data: EventCalendarListType[];
  objKey: string;
};

const CalendarTable = ({ data, objKey }: Props) => {
  const { t, nowDay, smUp, eventCalendarCatData } = useContext(Context);
  const title = useMemo(
    () => (
      <Stack direction="row" alignItems="center" sx={{ mb: smUp ? '16px' : '0' }}>
        <Box
          sx={{
            width: '8px',
            height: '8px',
            bgcolor: 'text.secondary',
            borderRadius: '50%',
            mr: '8px',
          }}
        />
        <Typography variant="body1" color="text.secondary" component="div" noWrap>
          <Box component="span" sx={{ color: 'text.primary', typography: 'h4', mr: '8px' }}>
            {Number(objKey) === nowDay && t('event_calendar_today')}
          </Box>
          {dayjs(Number(objKey)).format(t('event_calendar_time'))}
          （UTC）
        </Typography>
      </Stack>
    ),
    [nowDay, objKey, smUp, t]
  );

  return (
    <Box sx={{ mt: smUp ? '40px' : '24px' }}>
      {title}

      <TableContainer sx={{ overflow: 'hidden' }}>
        <Table
          sx={{
            borderSpacing: '0 16px',
          }}
        >
          <TableBody>
            {data &&
              data.map((item, index) => (
                <CalendarTableRow
                  t={t}
                  item={item}
                  catData={eventCalendarCatData}
                  smUp={smUp}
                  key={index}
                />
              ))}
            {/* <TableEmptyRows height={110} emptyRows={emptyRows(1, 1, 1)} /> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CalendarTable;
