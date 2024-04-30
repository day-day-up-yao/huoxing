import React, { useContext, useMemo, useState } from 'react';

import { Box, Stack } from '@mui/material';
import TitleHeader from 'src/components/before/title-header';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { Context } from '../context';

type HomeCooperateLogoItemProps = {
  coverUrl: string;
  picUrl: string;
  clickUrl: string;
  isPC: boolean;
};

const HomeCooperateLogoItem = (props: HomeCooperateLogoItemProps) => {
  const { coverUrl, picUrl, clickUrl, isPC } = props;
  const isDark = useIsDark();

  return (
    <Box
      component={clickUrl && clickUrl !== '' ? 'a' : 'div'}
      href={clickUrl}
      target="_blank"
      width="auto"
      height={isPC ? '40px' : '24px'}
    >
      <img
        style={isPC ? { height: '40px' } : { height: '24px' }}
        src={isDark ? picUrl : coverUrl}
        alt=""
      />
    </Box>
  );
};

const HomeCooperateLogo = () => {
  const { t, homeinfo, isPC } = useContext(Context);

  const logoList = useMemo(
    () => (
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={
          isPC
            ? { mt: '28px', rowGap: '38px', columnGap: '56px' }
            : { mt: '24px', rowGap: '12px', columnGap: '24px' }
        }
      >
        {homeinfo.footLogoList &&
          homeinfo.footLogoList.map((item: any, index: number) => (
            <HomeCooperateLogoItem {...item} isPC={isPC} key={index} />
          ))}
      </Stack>
    ),
    [homeinfo.footLogoList, isPC]
  );

  return (
    <Box sx={isPC ? { mt: '50px' } : { mt: '45px', p: '0 16px' }}>
      <TitleHeader text={t('home_cooperate_logo')} fontsize={26} />
      {logoList}
    </Box>
  );
};

export default HomeCooperateLogo;
