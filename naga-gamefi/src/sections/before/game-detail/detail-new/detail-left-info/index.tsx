import React, { useContext } from 'react';
import { Box } from '@mui/material';

import LeftInfoTop from './info-top';
import LaborunionList from './labor-union-list';
import { Context } from '../../context';

export default () => {
  const { userFlage } = useContext(Context);
  return (
    <Box component="div">
      {userFlage && <LeftInfoTop />}
      <LaborunionList />
    </Box>
  );
};
