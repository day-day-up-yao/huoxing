import React, { useContext } from 'react';
import { Stack } from '@mui/material';

import NotData from 'src/components/before/not-data';
import UserBodgesItem from './bodges-item';
import { Context } from '../context';

const UserBodgesDom = () => {
  const { myNftData, isPc } = useContext(Context);

  // const itemdata = [
  //   {
  //     meta: {
  //       image: 'https://naga-prod.mars-block.com/image/2024/02/1708500692496053.jpeg',
  //       name: '发大财',
  //     },
  //   },
  // ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={isPc ? '24px' : '12px'}
      sx={isPc ? { mt: '24px' } : { mt: '16px' }}
    >
      {myNftData && myNftData.length > 0 ? (
        myNftData.map((item: MyNftType, index: number) => (
          <UserBodgesItem data={item} isPc={isPc} key={index} />
        ))
      ) : (
        <NotData />
      )}
    </Stack>
  );
};

export default UserBodgesDom;
