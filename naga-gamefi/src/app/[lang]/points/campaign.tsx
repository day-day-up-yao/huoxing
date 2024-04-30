'use client';

import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useLocales } from 'src/locales';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import SvgIcon from 'src/components/svg-icon';
import TaskListItem from 'src/components/before/all-task-list/task-list-item';
import { useGetLimitedQuests } from 'src/fetchs/points';
import { NoData } from 'src/components/no-data';

export const SkeletonComp = () => (
  <Skeleton
    variant="rounded"
    width="100%"
    sx={({ palette }) => ({
      height: { xs: '146px', sm: '328px' },
      borderRadius: '5px',
      background: palette.background.paper,
    })}
  >
    <Skeleton
      variant="rounded"
      width="100%"
      sx={{
        height: { xs: '92px', sm: '192px' },
        width: '100%',
        visibility: 'visible',
        borderRadius: '0',
      }}
    />
    <Box sx={{ padding: { xs: '10px 12px', sm: '16px 20px' } }}>
      <Skeleton
        variant="rounded"
        width="100%"
        sx={{
          height: '34px',
          marginTop: { xs: '0', sm: '8px' },
          borderRadius: '5px',
          visibility: 'visible',
        }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        sx={{
          display: { xs: 'none', sm: 'block' },
          height: '44px',
          marginTop: '9px',
          borderRadius: '5px',
          visibility: 'visible',
        }}
      />
    </Box>
  </Skeleton>
);

const Campaign = () => {
  const { t } = useLocales();
  const popover = usePopover();
  const { data, isLoading } = useGetLimitedQuests();
  return (
    <>
      <Stack marginTop="50px">
        <Stack flexDirection="row" alignItems="center">
          <Typography variant="h4" sx={{ mr: '16px', textTransform: 'capitalize' }}>
            {t('points-campaign')}
          </Typography>
          <Box
            onClick={popover.onOpen}
            sx={{ opacity: popover.open ? 1 : 0.9, height: '20px', width: '20px' }}
          >
            <SvgIcon style={{ height: '100%', width: '100%' }} name="exclamation" />
          </Box>
        </Stack>
        <Box sx={{ overflowX: 'auto', marginTop: '16px' }}>
          <Grid container spacing={2}>
            {isLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <SkeletonComp key={index} />
                </Grid>
              ))}
            {!isLoading &&
              data?.data?.map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <TaskListItem item={item} point={item.rewardBonus} responsive />
                </Grid>
              ))}
            {!isLoading && (!data?.data || data?.data?.length === 0) && (
              <NoData style={{ minHeight: '192px' }} />
            )}
          </Grid>
        </Box>
      </Stack>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-center"
        sx={{ width: 200, fontSize: '12px', padding: '12px', mt: '12px' }}
      >
        {t('points-campaign-tips')}
      </CustomPopover>
    </>
  );
};

export default Campaign;
