import { Box, Button, Skeleton } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/system';
import { useResponsiveBreakpoint } from 'src/utils/hooks/use-responsive';
import { useLaunchpadList } from 'src/fetchs/launchpad';
import { usePathname } from 'src/routes/hooks';
import { mergeDeduplicateArrays } from 'src/utils/merge-deduplicate-arrays';
import { NoData } from 'src/components/no-data';
import Filter, { LaunchpadStage } from './launchpad-filter';
import { launchpadNavData } from './navigation';
import { LaunchpadItem } from './launchpad-list-item';
import { LaunchpadItemSkeleton } from './launchpad-list-skeleton';

const responsiveData = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 4,
};
type ResponsiveDataType = typeof responsiveData;
type ColumnsDataType = { [K in keyof ResponsiveDataType]: string };

export default () => {
  const { t } = useTranslation();

  // 当前断点下一行应该有几列
  const breakpoint = useResponsiveBreakpoint();
  const currentColumnCount = responsiveData[breakpoint as keyof typeof responsiveData];
  const pageSize =
    (currentColumnCount ? (currentColumnCount >= 2 ? currentColumnCount : 2) : 4) * 4;

  // 请求列表参数
  const pathname = usePathname({ pure: true });
  const category = pathname === launchpadNavData[0].path ? 1 : 2;
  const [stage, setStage] = useState(LaunchpadStage.Upcoming);

  // 数据亲求结果
  const { isMutating, data, trigger } = useLaunchpadList();
  const hasNextPage = (data?.data?.currentPage || 0) < (data?.data?.pageCount || 0);

  // 默认请求列表
  const [list, setList] = useState<LaunchpadListItem[]>([]);
  useEffect(() => {
    setList([]);
    trigger({ stage, category, currentPage: 1, pageSize });
  }, [category, pageSize, stage, trigger]);

  // 加载更多
  const loadMore = useCallback(async () => {
    await trigger({ stage, category, currentPage: (data?.data?.currentPage || 0) + 1, pageSize });
  }, [category, data?.data?.currentPage, pageSize, stage, trigger]);

  // 组合最终渲染列表
  useEffect(() => {
    if (!data?.data?.inforList) return;
    setList((list) =>
      mergeDeduplicateArrays<LaunchpadListItem>(list, data?.data?.inforList || [], 'id')
    );
  }, [data?.data]);

  // 是否有数据
  const isNoData = !isMutating && data?.data?.inforList?.length === 0;

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
    <>
      <Filter type={stage} onClick={(type) => setStage(type)} />
      {isNoData && <NoData style={{ minHeight: '500px' }} />}
      <Box gap={2} display="grid" gridTemplateColumns={columnsData}>
        {!isNoData && list?.map((item, index) => <LaunchpadItem key={item.id} data={item} />)}
        {!isNoData &&
          isMutating &&
          Array.from({ length: pageSize }).map((item, index) => (
            <LaunchpadItemSkeleton key={index} />
          ))}
      </Box>
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
    </>
  );
};
