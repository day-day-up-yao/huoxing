import React, { useContext } from 'react';

import { Stack } from '@mui/material';

import { Context } from '../context';

const HomeTopTopper = () => {
  const { isPC } = useContext(Context);

  return (
    <Stack
      height="40px"
      width="100%"
      direction="row"
      overflow="hidden"
      position="sticky"
      top="73px"
      zIndex="9"
      display={isPC ? 'flex' : 'none'}
    >
      <img style={{ width: '100%' }} src="/images/festival/christmas/home-top-topper.webp" alt="" />
    </Stack>
  );
};

export default HomeTopTopper;
