import { Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import LoadingButton from '@mui/lab/LoadingButton';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useCompletedList } from 'src/fetchs/common';
import { ReturnType } from 'src/utils/hooks/use-boolean';
import { cookiesName } from 'src/utils/public';
import InfiniteScroll from 'src/components/infinite-scroll';
import { mergeDeduplicateArrays } from 'src/utils/merge-deduplicate-arrays';
import { NoData } from 'src/components/no-data';
import { SkeletonComp } from './content';

const CompletedList = ({ value, onFalse }: ReturnType) => {
  const { t } = useTranslation();
  const { trigger, data, isMutating } = useCompletedList();

  useEffect(() => {
    const gameId = Cookies.get(cookiesName.adminGameId);
    if (!gameId) return;
    trigger({ missionId: gameId, currentPage: 1 });
  }, [trigger]);

  const loadMore = useCallback(async () => {
    const gameId = Cookies.get(cookiesName.adminGameId);
    if (!gameId) return;
    await trigger({
      missionId: gameId,
      currentPage: (data?.data?.currentPage || 0) + 1,
    });
  }, [data?.data?.currentPage, trigger]);

  const [list, setList] = useState<CompletedListData['inforList']>([]);
  useEffect(() => {
    if (!data?.data?.inforList) return;
    setList((list) =>
      mergeDeduplicateArrays<CompletedListData['inforList'][0]>(
        list,
        data?.data?.inforList || [],
        'uid'
      )
    );
  }, [data?.data]);

  return (
    <ConfirmDialog
      open={value}
      onClose={onFalse}
      title={t('task_completed_list')}
      titleProps={{ sx: { textAlign: 'center' } }}
      content={
        <Grid spacing={2} container>
          <Grid
            item
            xs={24}
            display="flex"
            flexDirection="row"
            alignContent="center"
            justifyContent="space-between"
            sx={({ palette }) => ({ color: palette.text.secondary })}
          >
            <Typography sx={{ textTransform: 'capitalize' }}>
              {t('task_completed_address')}
            </Typography>
            <Typography sx={{ textTransform: 'capitalize' }}>{t('task_completed_date')}</Typography>
          </Grid>
          {isMutating &&
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonComp
                key={index}
                sx={({ palette }) => ({
                  height: '40px',
                  borderRadius: '4px',
                  margin: '16px 0 0 16px',
                  background: palette.background.sub,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 8px',
                })}
                slotSx={({ palette }) => ({
                  borderRadius: '4px',
                  background: palette.background.neutral,
                  visibility: 'visible',
                })}
              />
            ))}
          {!isMutating && list.length === 0 && <NoData />}
          {!isMutating && (
            <InfiniteScroll
              onBottomHit={loadMore}
              isLoading={isMutating}
              hasMore={(data?.data?.currentPage || 0) < (data?.data?.pageCount || 0)}
            >
              {list.map((item, index) => (
                <Grid
                  key={item.uid}
                  item
                  xs={24}
                  display="flex"
                  flexDirection="row"
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Typography>{item.address}</Typography>
                  <Typography>{dayjs(item.date).format('YYYY-MM-DD')}</Typography>
                </Grid>
              ))}
            </InfiniteScroll>
          )}
        </Grid>
      }
      actionProps={{ sx: { marginTop: '10px' } }}
      action={
        <LoadingButton
          loading={isMutating}
          disabled={isMutating || list.length === 0}
          variant="contained"
          color="error"
          size="large"
          sx={{ width: '100%', textTransform: 'capitalize' }}
          onClick={() => {}}
        >
          {t('task_completed_list_download')}
        </LoadingButton>
      }
    />
  );
};
export default CompletedList;
