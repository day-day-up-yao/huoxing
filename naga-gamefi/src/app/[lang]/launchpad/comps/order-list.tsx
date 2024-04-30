import {
  Button,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography,
  TableRow as TableRowMui,
  TableCell,
} from '@mui/material';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableHeadCustom, TableNoData, useTable } from 'src/components/table';
import { useOrderList } from 'src/fetchs/launchpad';
import { usePathname } from 'src/routes/hooks/use-pathname';
import { mergeDeduplicateArrays } from 'src/utils/merge-deduplicate-arrays';
import Scrollbar from 'src/components/scrollbar';
import TableRow from './order-list-table-row';
import { launchpadNavData } from './navigation';

const SkeletonRow = ({
  tableHead,
}: {
  tableHead: { id: string; label: ReactNode; width?: number }[];
}) => (
  <TableRowMui hover>
    <TableCell sx={{ padding: { xs: '12px 8px !important', sm: '12px 24px !important' } }}>
      <Stack flexDirection="row" alignItems="center">
        <Skeleton height="70px" width="70px" sx={{ borderRadius: '5px', marginRight: '24px' }} />
        <Skeleton height="24px" width="70%" sx={{ borderRadius: '5px' }} />
      </Stack>
    </TableCell>
    {Object.keys(tableHead)
      .slice(0, 5)
      .map((item) => (
        <TableCell
          key={item}
          sx={{ padding: { xs: '12px 8px !important', sm: '12px 24px !important' } }}
        >
          <Skeleton height="24px" sx={{ borderRadius: '5px' }} />
        </TableCell>
      ))}
  </TableRowMui>
);

export default () => {
  const { t } = useTranslation();
  const pathname = usePathname({ pure: true });
  const category = pathname === launchpadNavData[0].path ? 1 : 2;

  const table = useTable();

  // 数据亲求结果
  const pageSize = 10;
  const { isMutating, data, trigger } = useOrderList();
  const hasNextPage = (data?.data?.currentPage || 0) < (data?.data?.pageCount || 0);

  // 默认请求列表
  const [list, setList] = useState<OrderListItem[]>([]);
  useEffect(() => {
    setList([]);
    trigger({ category, currentPage: 1, pageSize });
  }, [category, trigger]);

  // 加载更多
  const loadMore = useCallback(async () => {
    await trigger({ category, currentPage: (data?.data?.currentPage || 0) + 1, pageSize });
  }, [category, data?.data?.currentPage, pageSize, trigger]);

  // 组合最终渲染列表
  useEffect(() => {
    if (!data?.data?.inforList) return;
    setList((list) =>
      mergeDeduplicateArrays<LaunchpadListItem>(list, data?.data?.inforList || [], 'id')
    );
  }, [data?.data]);

  // 是否有数据
  const isNoData = !isMutating && list.length === 0;

  // table cell
  const TABLE_HEAD = useMemo(
    () => [
      {
        id: 'game',
        label: <Stack sx={{ textAlign: 'left' }}>{t('launchpad-performance')}</Stack>, // 让内容占满整个th，冲掉默认text-align: right,第一行居左显示
      },
      { id: 'ath-roi', label: t('launchpad-ath-roi'), width: 180 },
      { id: 'price', label: t('launchpad-price'), width: 180 },
      { id: 'token-price', label: t('launchpad-token-price'), width: 180 },
      { id: 'total-raise', label: t('launchpad-total-raise'), width: 180 },
      { id: 'platform', label: t('launchpad-platform'), width: 180 },
    ],
    [t]
  );

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textTransform: 'capitalize', marginTop: '32px', marginBottom: '16px' }}
      >
        {t('launchpad-performance')}
      </Typography>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar
          sx={{
            '& .simplebar-placeholder': {
              display: 'none',
            },
          }}
        >
          <Table
            size={table.dense ? 'small' : 'medium'}
            sx={{
              minWidth: 880,
              '& .mui-16a3erm-MuiTableCell-root': {
                minWidth: '240px !important;',
              },
            }}
          >
            <TableHeadCustom
              order={table.order}
              orderBy={table.orderBy}
              headLabel={TABLE_HEAD}
              rowCount={list.length}
              headCellStyle={({ palette }) => ({
                background: 'none',
                fontWeight: 'normal',
                padding: { xs: '8px 8px !important', sm: '8px 24px !important' },
                lineHeight: '1rem',
                borderBottom: `1px solid ${palette.background.neutral} !important`,
                textAlign: 'right',
                textTransform: 'capitalize',
              })}
            />

            <TableBody>
              {!isNoData && list.map((row) => <TableRow key={row.id} row={row} />)}
              {!isNoData &&
                isMutating &&
                Array.from({ length: pageSize }).map((item, index) => (
                  <SkeletonRow key={index} tableHead={TABLE_HEAD} />
                ))}
              {!isNoData && <TableNoData notFound={isNoData} />}
            </TableBody>
          </Table>
          <Stack sx={{ marginTop: '32px' }} alignItems="center">
            {!isNoData && hasNextPage && (
              <Button
                onClick={loadMore}
                variant="soft"
                size="medium"
                sx={{
                  padding: '8px 72px',
                  width: 'auto',
                  fontSize: '14px',
                  textTransform: 'capitalize',
                }}
              >
                {t('public_load_more')}
              </Button>
            )}
          </Stack>
        </Scrollbar>
      </TableContainer>
    </>
  );
};
