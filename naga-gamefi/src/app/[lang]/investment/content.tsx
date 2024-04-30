'use client';

import { Typography, Box } from '@mui/material';
import { useMemo } from 'react';

import { useLocales } from 'src/locales';
import ScreenSelect from './screen-select';
import InvestList from './invest-list';
import InvestContext from './context';
import H5Content from './h5-content';
import InvestHeader from './component/header';

const InvestContent = () => {
  const { t } = useLocales();
  const PcContent = useMemo(
    () => (
      <Box>
        <InvestHeader />
        <ScreenSelect />
        <InvestList />
      </Box>
    ),
    []
  );
  return (
    <InvestContext>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        {PcContent}
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <H5Content />
      </Box>
    </InvestContext>
  );
};

export default InvestContent;
