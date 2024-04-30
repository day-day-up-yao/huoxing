import { Box, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

type UserBodgesItemProps = {
  data: MyNftType;
  isPc?: boolean;
};

const UserBodgesItem = (props: UserBodgesItemProps) => {
  const { data, isPc } = props;

  // 徽章图标
  const iconDom = useMemo(
    () => (
      <Box sx={isPc ? { width: '160px', height: '160px' } : { width: '110px', height: '110px' }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={data.meta.image}
          alt=""
        />
      </Box>
    ),
    [data.meta.image, isPc]
  );

  // 徽章名称
  const titleDom = useMemo(
    () => (
      <Stack
        justifyContent="center"
        alignItems="center"
        mt="24px"
        textAlign="center"
        sx={({ palette }) =>
          isPc
            ? {
                minWidth: '160px',
                // p: '10px 24px',
                // background: palette.background.neutral,
                // borderRadius: '10px',
              }
            : {
                minWidth: '156px',
                // p: '6px 10px',
                // background: palette.background.neutral,
                // borderRadius: '10px',
              }
        }
      >
        <Typography
          sx={
            isPc
              ? { fontSize: '20px', lineHeight: '26px', fontWeight: '900' }
              : { fontSize: '11px', lineHeight: '14px', fontWeight: '900' }
          }
        >
          {data.meta.name}
        </Typography>
      </Stack>
    ),
    [data.meta.name, isPc]
  );

  const itemDom = useMemo(
    () => (
      <Stack
        direction="column"
        // justifyContent="space-between"
        alignItems="center"
        sx={({ palette }) =>
          isPc
            ? {
                width: '253px',
                height: '312px',
                background: palette.background.paper,
                p: '40px 20px 30px',
                borderRadius: '5px',
                border: `1px solid ${palette.background.neutral}`,
              }
            : {
                width: '166px',
                height: '192px',
                background: palette.background.paper,
                p: '20px 5px',
                borderRadius: '5px',
                border: `0.5px solid ${palette.background.neutral}`,
              }
        }
      >
        {iconDom}
        {titleDom}
      </Stack>
    ),
    [iconDom, isPc, titleDom]
  );

  return itemDom;
};

export default UserBodgesItem;
