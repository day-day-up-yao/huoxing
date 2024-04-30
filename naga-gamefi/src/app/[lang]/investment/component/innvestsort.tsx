import { Stack } from '@mui/material';
import { useCallback, useState } from 'react';

import SvgIcon from 'src/components/svg-icon';

export default ({ handleInvestmentSort, types, isFlag }: any) => {
  const [sortflag, setSortflag] = useState(isFlag);
  console.log(isFlag);

  const handleSortSelect = useCallback(() => {
    let sortname = '';
    if ((types === 'money' && !sortflag) || (types === 'time' && !sortflag)) {
      setSortflag('desc');
      sortname = 'desc';
    }
    if (sortflag === 'desc') {
      setSortflag('asc');
      sortname = 'asc';
    }
    if (sortflag === 'asc') {
      setSortflag('desc');
      sortname = 'desc';
    }
    // setSortflag(!sortflag);
    handleInvestmentSort(types, sortname);
  }, [handleInvestmentSort, sortflag, types]);
  return (
    <Stack
      onClick={handleSortSelect}
      sx={{
        cursor: 'pointer',
      }}
    >
      <SvgIcon
        style={{
          color: sortflag === 'asc' ? 'var(--naga-font-hundred)' : 'var(--naga-font-seventy)',
        }}
        name="asc"
      />
      <SvgIcon
        name="desc"
        style={{
          color: sortflag === 'desc' ? 'var(--naga-font-hundred)' : 'var(--naga-font-seventy)',
        }}
      />
    </Stack>
  );
};
