import React, { useCallback, useContext, useMemo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import TitleHeader from 'src/components/before/title-header';
import { Context } from '../context';

const HomeCategoryLogo = () => {
  const { t, categoryDataList, linkTo, isPC } = useContext(Context);

  const categoryItemDom = useCallback(
    (item: { img: string; title: string; link: string }, index: number) => (
      <Box
        sx={{
          position: 'relative',
          width: '268px',
          height: '150px',
          borderRadius: '15px',
          overflow: 'hidden',
          //   background: `url(${item.img})`,
          //   backgroundSize: 'cover',
          cursor: 'pointer',
        }}
        onClick={() => {
          linkTo(item.link);
        }}
        key={index}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            bottom: '0',
            zIndex: '0',
            transition: 'all 0.5',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <img src={item.img} alt="" />
        </Box>
        <Box sx={{ position: 'absolute', width: '100%', bottom: '0', zIndex: '1' }}>
          <img src="/images/bigimg/shadow-card.webp" alt="" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            bottom: '14px',
            zIndex: '2',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              lineHeight: '24px',
              color: 'text.primary',
            }}
          >
            {item.title}
          </Typography>
        </Box>
      </Box>
    ),
    [linkTo]
  );

  const list = useMemo(
    () => (
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        gap="24px"
        sx={{ mt: '28px' }}
      >
        {categoryDataList &&
          categoryDataList.map(
            (item: { img: string; title: string; link: string }, index: number) =>
              categoryItemDom(item, index)
          )}
      </Stack>
    ),
    [categoryDataList, categoryItemDom]
  );

  return (
    <Box sx={isPC ? { mt: '70px' } : { mt: '45px', p: '0 16px' }}>
      <TitleHeader text={t('home_category_logo')} fontsize={26} />
      {list}
    </Box>
  );
};

export default HomeCategoryLogo;
