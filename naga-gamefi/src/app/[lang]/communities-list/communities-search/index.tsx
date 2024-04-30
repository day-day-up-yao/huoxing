import React, { useContext, useMemo } from 'react';

import { Box, Button, InputBase, Stack } from '@mui/material';
import { Context } from '../context';

const CommunitiesSearch = () => {
  const { t } = useContext(Context);

  const searchDom = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={({ palette }) => ({
          maxWidth: '628px',
          width: '100%',
          height: '64px',
          borderRadius: '5px',
          bgcolor: palette.background.paper,
          border: '1px solid',
          borderColor: 'border',
          p: '9px',
          boxSizing: 'border-box',
        })}
      >
        <Box width="24px" height="24px" sx={{ m: '0 14px' }}>
          <img src="/images/icon/icon-search.png" alt="" />
        </Box>
        <InputBase
          placeholder={t('search_placeholder_communities_list')}
          sx={{ flex: 1, input: { fontSize: '16px' } }}
        />
        <Button
          variant="contained"
          color="error"
          sx={{ width: '98px', height: '46px', fontSize: '16px', ml: '9px' }}
        >
          {t('search_title')}
        </Button>
      </Stack>
    ),
    [t]
  );

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ mt: '80px' }}>
      {searchDom}
    </Stack>
  );
};

export default CommunitiesSearch;
