import React, { useContext, useMemo } from 'react';
import { Box } from '@mui/material';

import { LaunchpadItem } from 'src/app/[lang]/launchpad/comps/launchpad-list-item';
import { Context } from '../context';

const responsiveData = {
  sm: 3,
  bg: 4,
};
type ResponsiveDataType = typeof responsiveData;
type ColumnsDataType = { [K in keyof ResponsiveDataType]: string };

export default ({ num = 4 }: { num?: number }) => {
  const { homeinfo } = useContext(Context);
  // 一行显示多少列
  const columnsData: ColumnsDataType = useMemo(
    () =>
      Object.keys(responsiveData).reduce((acc, key) => {
        const typedKey = key as keyof ResponsiveDataType; // 明确 key 的类型
        acc[typedKey] = `repeat(${responsiveData[typedKey]}, 1fr)`;
        return acc;
      }, {} as ColumnsDataType),
    []
  );
  return (
    <Box mt="28px" gap={2.6} display="grid" gridTemplateColumns={columnsData}>
      {homeinfo?.lauchpadList
        ?.slice(0, num)
        .map((item: LaunchpadListItem, index: number) => (
          <LaunchpadItem key={item.id} data={item} isLittleSize />
        ))}
    </Box>
  );
};
