import React, { useMemo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import SvgIcon from 'src/components/svg-icon';

type CommunitiesItemProp = {
  icon: string;
  title: string;
  desc: string;
};

const CommunitiesItem = (prop: CommunitiesItemProp) => {
  const { icon, title, desc } = prop;

  // 图标标题
  const titleDom = useMemo(
    () => (
      <Stack direction="row" alignItems="center">
        <Box
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '5px',
            overflow: 'hidden',
            mr: '12px',
          }}
        >
          <img src={icon} alt="" />
        </Box>
        <Typography variant="h5">{title}</Typography>
      </Stack>
    ),
    [icon, title]
  );

  // 简介
  const descDom = useMemo(
    () => (
      <Box height="72px">
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            whiteSpace: 'normal',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {desc}
        </Typography>
      </Box>
    ),
    [desc]
  );

  // 数据
  const dataDom = useMemo(() => {
    const iconList = ['item-star', 'item-user', 'item-twitter-x', 'item-discord'];
    const numList = [235, 3, 9021, 40];

    return (
      <Stack direction="row" alignItems="center" gap="8px">
        {Array.from({ length: 4 }).map((_, index) => (
          <Stack
            direction="row"
            alignItems="center"
            key={index}
            sx={{
              p: '8px 10px',
              boxSizing: 'border-box',
              bgcolor: 'background.sub',
              borderRadius: '5px',
            }}
          >
            <Box width="16px" height="16px">
              <SvgIcon name={iconList[index]} isWhite />
            </Box>
            <Typography variant="body2">{numList[index]}</Typography>
          </Stack>
        ))}
      </Stack>
    );
  }, []);

  // ({ palette }) => ()
  // palette.background.paper

  const itemDom = useMemo(
    () => (
      <Stack
        sx={({ palette }) => ({
          p: '30px',
          borderRadius: '5px',
          bgcolor: palette.background.paper,
          border: '1px solid',
          borderColor: 'border',
          gap: '16px',
        })}
      >
        {titleDom}
        {descDom}
        {dataDom}
      </Stack>
    ),
    [dataDom, descDom, titleDom]
  );

  return itemDom;
};

export default CommunitiesItem;
