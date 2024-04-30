'use client';

import { useContext, useMemo } from 'react';
import { Box, Container } from '@mui/material';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { Context } from './context';
import { CommunitiesItem, CommunitiesSkeletonItem } from './_components/communities-item';
import CommunitiesSearch from './communities-search';

const ActivityContent = () => {
  const { isMob } = useBreakPoint();
  const { ceshiList } = useContext(Context);

  // 列表
  const listDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          m: '80px 0 148px',
        }}
      >
        {ceshiList &&
          ceshiList.map((item: any, index: number) => (
            <CommunitiesSkeletonItem {...item} key={index} />
          ))}
      </Box>
    ),
    [ceshiList]
  );

  return (
    <Container maxWidth="xl">
      <CommunitiesSearch />
      {listDom}
    </Container>
  );
};

export default ActivityContent;
