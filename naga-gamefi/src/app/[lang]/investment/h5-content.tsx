import { Box, Typography, Stack, Avatar, Drawer, Modal } from '@mui/material';
import { useContext, useCallback } from 'react';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import dayjs from 'dayjs';

import PricePercent from 'src/components/price-percent';
import { formattingNum } from 'src/utils/public/index';
import Pagination from 'src/components/before/pagination';
import NotData from 'src/components/before/not-data';

import InvestHeader from './component/header';
import { Context } from './context';
// import Select from './component/select';
import ScreenSelect from './screen-select';

export default () => {
  const {
    financingInfo,
    t,
    hanndleCloseSlect,
    hanndleOpenSlect,
    flagselect,
    handleGetPage,
    handleClickToDetail,
  } = useContext(Context);

  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemBox = (withnum: string, title: string, desc: any, type: number) => (
    <Box width={withnum}>
      <Typography variant="caption" color="text.secondary">
        {title}
      </Typography>
      {type === 0 && (
        <Typography mt="5px" fontWeight="bold" variant="body2">
          {desc}
        </Typography>
      )}
      {type === 1 && (
        <Box mt="5px" fontSize="14px" fontWeight="bold">
          {desc.price ? (
            <PricePercent h5other price={desc.price} change24h={desc.change24h} />
          ) : desc.tradable === 'No' ? (
            t('invest_not_busness')
          ) : (
            t('invest_can_busness')
          )}
        </Box>
      )}
      {type === 2 && desc}
    </Box>
  );

  const investListDom = useCallback(
    (list: any) => (
      <Stack direction="row" flexWrap="wrap" gap="0 18px">
        {list.map((inviiem: any, invindex: any) => (
          <Box
            key={invindex}
            sx={{
              position: 'relative',
              fontSize: '14px',
            }}
          >
            {inviiem.orgName}
            {list.length === invindex + 1 ? '' : ','}
            {!inviiem.follower && (
              <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  top: '-3px',
                  right: '-5px',
                }}
              >
                *
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    ),
    []
  );
  return (
    <Box>
      <InvestHeader clickBtn={hanndleOpenSlect} />
      {financingInfo?.inforList?.length > 0 ? (
        financingInfo?.inforList?.map((item: any, index: any) => {
          if (item.followerPojoList.length > 0) {
            item.followerPojoList.map((fl: any) => {
              fl.follower = true;
            });
          }
          const investorlist = item.leaderPojoList.concat(item.followerPojoList);
          const investDom = investListDom(investorlist);

          return (
            <Box
              key={index}
              sx={{
                p: '20px',
                bgcolor: 'background.paper',
                borderRadius: '5px',
                mt: '16px',
              }}
              onClick={() => handleClickToDetail(item.id)}
            >
              <Stack direction="row" alignItems="center">
                <Avatar src={item.iconUrl} variant="rounded" />
                <Typography ml="16px" variant="body1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography ml="10px" variant="body1" fontWeight="bold" color="text.secondary">
                  {item.symbol}
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  bgcolor: 'background.sub',
                  m: '20px 0 15px',
                }}
              />
              <Box>
                <Stack direction="row" flexWrap="wrap" gap="12px 0">
                  {ItemBox('50%', t('invest_table_title1'), item.round, 0)}
                  {ItemBox(
                    '50%',
                    t('invest_table_title2'),
                    item.raisedStr === '-1' ? 'TBA' : `${formattingNum(item.raisedStr)}`,
                    0
                  )}
                  {ItemBox(
                    '50%',
                    t('invest_table_title3'),
                    dayjs(item.inverstDateStamp * 1000).format(t('time_years_mouth')),
                    0
                  )}
                  {ItemBox('50%', t('invest_table_title4'), item, 1)}
                  {ItemBox('100%', t('invest_table_title5'), investDom, 2)}
                </Stack>
              </Box>
              <Drawer
                open={flagselect}
                anchor="bottom"
                onClose={hanndleCloseSlect}
                sx={{
                  '.MuiModal-backdrop': {
                    bgcolor: 'rgba(0, 0, 0, 0.1)',
                  },
                  '.MuiDrawer-paper': {
                    borderRadius: '5px 6px 0 0',
                    p: '22px 16px',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Typography variant="body1" textAlign="center" fontWeight="bold">
                    Filter
                  </Typography>
                  <Box>
                    <ScreenSelect />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute' as 'absolute',
                      top: '0',
                      right: '0',
                    }}
                    onClick={hanndleCloseSlect}
                  >
                    <CloseTwoToneIcon color="action" />
                  </Box>
                </Box>
              </Drawer>
            </Box>
          );
        })
      ) : (
        <NotData />
      )}
      {financingInfo?.recordCount > 20 && (
        <Pagination
          totalData={financingInfo?.recordCount}
          pageSize={20}
          pageChange={(curPage: any) => {
            handleGetPage(curPage);
          }}
        />
      )}
    </Box>
  );
};
