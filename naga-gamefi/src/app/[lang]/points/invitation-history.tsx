import { Stack, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/system';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { ReturnType } from 'src/utils/hooks/use-boolean';
import InfiniteScroll from 'src/components/infinite-scroll';
import { NoData } from 'src/components/no-data';
import { usePaginatedData } from 'src/utils/hooks/use-paginated-data';
import { useInviteRecord } from 'src/fetchs/points';
import { useGetAccountInfo } from 'src/fetchs/user';
import { oneLineTextOverflow } from 'src/utils/styles';
import { SkeletonComp } from '../manage/task/content';

export const InvitationHistory = () => {
  const { t } = useTranslation();
  const { data: accountInfo } = useGetAccountInfo();
  const { trigger, data, isMutating } = useInviteRecord();

  useEffect(() => {
    if (!accountInfo?.data?.inviteCode) return;
    trigger({ inviteCode: accountInfo.data.inviteCode, currentPage: 1, pageSize: 10 });
  }, [accountInfo?.data?.inviteCode, trigger]);

  const loadMore = useCallback(async () => {
    if (!accountInfo?.data?.inviteCode) return;
    await trigger({
      inviteCode: accountInfo.data.inviteCode,
      currentPage: (data?.data?.currentPage || 0) + 1,
      pageSize: 10,
    });
  }, [accountInfo?.data?.inviteCode, data?.data?.currentPage, trigger]);

  const list = usePaginatedData<InviteRecord>({ data: data?.data?.inforList });

  return (
    <Box>
      <Stack
        display="flex"
        flexDirection="row"
        alignContent="center"
        justifyContent="space-between"
        marginBottom="8px"
        sx={({ palette }) => ({ color: palette.text.secondary })}
      >
        <Typography sx={{ textTransform: 'capitalize' }}>{t('points-username')}</Typography>
        <Typography sx={{ textTransform: 'capitalize' }}>{t('points-state')}</Typography>
      </Stack>
      {isMutating &&
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonComp
            key={index}
            sx={({ palette }) => ({
              height: '40px',
              borderRadius: '4px',
              margin: '16px 0 0 0',
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
            <Stack
              key={index}
              padding="6px 0 8px"
              display="flex"
              flexDirection="row"
              alignContent="center"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle2"
                sx={{ width: '60%', ...oneLineTextOverflow, textTransform: 'capitalize' }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={({ palette }) => ({
                  color: item.status === 1 ? palette.success.main : palette.warning.main,
                  textTransform: 'capitalize',
                })}
              >
                {item.status === 1 ? t('points-invite-valid') : t('points-invite-invalid')}
              </Typography>
            </Stack>
          ))}
        </InfiniteScroll>
      )}
    </Box>
  );
};

const InvitationHistoryList = ({ value, onFalse, setValue }: ReturnType) => {
  const { t } = useTranslation();
  const { isMutating } = useInviteRecord();

  return (
    <ConfirmDialog
      maxWidth="xs"
      open={value}
      onClose={onFalse}
      title={
        <Typography sx={{ textTransform: 'capitalize' }}>
          {t('points-invitation-history')}
        </Typography>
      }
      titleProps={{ sx: { textAlign: 'center' } }}
      content={<InvitationHistory />}
      actionProps={{ sx: { marginTop: '10px' } }}
      action={
        <LoadingButton
          loading={isMutating}
          variant="outlined"
          size="small"
          sx={{ width: '100%', textTransform: 'capitalize' }}
          onClick={() => setValue(false)}
        >
          {t('public_close')}
        </LoadingButton>
      }
    />
  );
};
export default InvitationHistoryList;
