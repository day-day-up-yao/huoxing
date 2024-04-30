import React, { useMemo } from 'react';
import { Box } from '@mui/material';

type ManageCalendarItemProps = {
  item: any;
};

const ManageCalendarItem = (props: ManageCalendarItemProps) => {
  const { item } = props;

  const itemDom = useMemo(() => <Box>1</Box>, []);

  return itemDom;
};

export default ManageCalendarItem;
