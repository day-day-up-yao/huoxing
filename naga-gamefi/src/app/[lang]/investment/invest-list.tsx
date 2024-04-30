import { Box, Stack, Typography, Avatar, Skeleton } from '@mui/material';
import { useMemo, useContext, useCallback } from 'react';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import PricePercent from 'src/components/price-percent';
import { formattingNum } from 'src/utils/public/index';
import Pagination from 'src/components/before/pagination';
import NotData from 'src/components/before/not-data';
// import InvestLogoTitle from 'src/components/invest-info';
import SvgIcon from 'src/components/svg-icon';
// import InvestSort from './component/innvestsort';

import { Context } from './context';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxSizing: 'border-box',
    background: theme.palette.background.paper,
    borderRadius: '5px',
    padding: '10px 14px',
    color: theme.palette.text.primary,

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.background.paper,
    },
  },
}));

const titleStyle = {
  fontSize: '14px',
  color: 'text.secondary',
  lineHeight: '16px',
};

export default () => {
  const {
    financingInfo,
    t,
    openall,
    sortType,
    sortselect,
    investloading,
    handleOpenIcon,
    handleGetPage,
    institnum,
    isDark,
    handleClickToDetail,
    handleInvestSort,
    handleClickToInvestLink,
  } = useContext(Context);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const investTitleList = [
    {
      name: 'Game',
      right: false,
      sort: false,
      tip: false,
    },
    {
      name: t('invest_table_title1'),
      right: false,
      sort: false,
      tip: false,
    },
    {
      name: t('invest_table_title2'),
      right: false,
      sort: true,
      tip: false,
      type: 'money',
    },
    {
      name: t('invest_table_title3'),
      right: true,
      sort: true,
      tip: false,
      type: 'time',
    },
    {
      name: t('invest_table_title4'),
      right: true,
      sort: false,
      tip: false,
    },
    {
      name: t('invest_table_title5'),
      right: false,
      sort: false,
      tip: true,
    },
  ];

  // 排序
  const InvestSort = useCallback(
    (idx: any) => (
      <Stack
        sx={{
          cursor: 'pointer',
        }}
      >
        <SvgIcon
          style={{
            color:
              sortType === 'asc' && sortselect === idx
                ? 'var(--naga-font-hundred)'
                : 'var(--naga-font-twenty)',
          }}
          name="asc"
        />
        <SvgIcon
          name="desc"
          style={{
            color:
              sortType === 'desc' && sortselect === idx
                ? 'var(--naga-font-hundred)'
                : 'var(--naga-font-twenty)',
          }}
        />
      </Stack>
    ),
    [sortType, sortselect]
  );

  const invsetTitleDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '24% 11% 8% 7% 14% 35%',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'background.border',
          p: '12px 10px',
          boxSizing: 'border-box',
          mt: '20px',
        }}
      >
        {investTitleList.map((item, index) => (
          <Stack
            direction="row"
            alignItems="center"
            key={index}
            gap="4px"
            justifyContent={item.right ? 'flex-end' : 'left'}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              if (item.sort) handleInvestSort(index);
            }}
          >
            <Typography
              sx={
                {
                  ...titleStyle,
                  // mr: '8px',
                  // width: !item.tip ? '100%' : 'auto',
                  textAlign: item.right && 'right',
                  mr: index === 4 ? '25%' : '8px',
                } as any
              }
            >
              {item.name}
            </Typography>

            {item.sort && InvestSort(index)}

            {item.tip && (
              <HtmlTooltip title={t('invest_table_title5_desc')} arrow>
                <Typography
                  sx={{
                    width: '12px',
                    height: '12px',
                    fontSize: '8px',
                    border: '1px solid',
                    borderColor: 'text.secondary',
                    color: 'text.secondary',
                    borderRadius: '6px',
                    textAlign: 'center',
                  }}
                >
                  !
                </Typography>
              </HtmlTooltip>
            )}
          </Stack>
        ))}
      </Box>
    ),
    [InvestSort, handleInvestSort, investTitleList, t]
  );

  // 骨架屏
  const investSkeletonDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '24% 11% 8% 7% 14% 35%',
          p: '12px 10px',
          gap: '10px',
        }}
        // direction="row"
      >
        <Stack direction="row" gap="10px">
          <Skeleton variant="circular">
            <Avatar variant="rounded" />
          </Skeleton>
          <Skeleton width="200px">
            <Typography>.</Typography>
          </Skeleton>
        </Stack>

        <Skeleton width="100">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="100">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="100">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="100">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="100">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
    ),
    []
  );

  const IvestorLogoItem = useCallback(
    (info: any) => (
      <Box
        sx={{
          position: 'relative',
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleClickToInvestLink(info.orgWebsite);
        }}
      >
        {info.orgIcon ? (
          <img
            style={{
              minHeight: '9px',
              maxHeight: '23px',
              filter: isDark ? 'invert(0.6)' : 'none',
              maxWidth: '110px',
            }}
            src={info.orgIcon}
            alt=""
          />
        ) : (
          <Typography
            variant="body2"
            sx={{
              maxWidth: '130px',
              color: isDark && 'text.secondary',
            }}
          >
            {info.orgName}
          </Typography>
        )}
        {!info.follower && (
          <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              top: '-7px',
              right: '-8px',
              color: isDark && 'text.secondary',
            }}
          >
            *
          </Typography>
        )}
      </Box>
    ),
    [handleClickToInvestLink, isDark]
  );

  const InvestItemDom = useCallback(
    (finceinfo: any) => {
      if (finceinfo.followerPojoList.length > 0) {
        finceinfo.followerPojoList.map((fl: any) => {
          fl.follower = true;
        });
      }

      const haveicon = finceinfo.followerPojoList.filter((item: any) => item.orgIcon);
      const noticon = finceinfo.followerPojoList.filter((item: any) => !item.orgIcon);
      const investorlist = finceinfo.leaderPojoList.concat(haveicon?.concat(noticon));

      return (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '24% 11% 8% 7% 14% 35%',
            alignItems: 'center',
            minHeight: '56px',
            boxSizing: 'border-box',
            borderBottom: '1px solid',
            borderColor: 'background.border',
            padding: '15px 10px',
            cursor: 'pointer',
            '&:hover': {
              bgcolor: 'background.paper',
            },
          }}
          onClick={() => handleClickToDetail(finceinfo.gameId)}
        >
          <Stack direction="row" alignItems="center">
            <Avatar
              src={finceinfo.iconUrl}
              // variant="rounded"
              sx={{
                width: '24px',
                height: '24px',
              }}
            />
            <Typography
              sx={{
                maxWidth: '45%',
              }}
              variant="body2"
              ml="24px"
              fontWeight="bold"
            >
              {finceinfo.name}
            </Typography>
            <Typography variant="body2" ml="12px" fontWeight="bold" color="text.secondary">
              {finceinfo.symbol}
            </Typography>
          </Stack>
          <Typography variant="body2" fontWeight="bold">
            {finceinfo.round}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            {finceinfo.raisedStr === '-1' || finceinfo.raisedStr === ''
              ? 'TBA'
              : `$${formattingNum(finceinfo.raisedStr)}`}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: '100%',
              textAlign: 'right',
            }}
            fontWeight="bold"
          >
            {finceinfo.inverstDateStamp &&
              dayjs(finceinfo.inverstDateStamp * 1000).format(t('time_years_mouth'))}
          </Typography>
          <Stack
            direction="row"
            fontSize="14px"
            justifyContent="flex-end"
            mr="25%"
            fontWeight="bold"
          >
            {finceinfo.price ? (
              <PricePercent isother price={finceinfo.price} />
            ) : finceinfo.tradable === 'No' ? (
              t('invest_not_busness')
            ) : (
              t('invest_can_busness')
            )}
          </Stack>

          <Box>
            <Stack direction="row" alignItems="center" gap="16px">
              {investorlist.slice(0, institnum).map((itm: any, key: any) => (
                <Box
                  key={key}
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  {IvestorLogoItem(itm)}
                  {/* <InvestLogoTitle
                    logsrc={itm.orgIcon}
                    investname={itm.orgName}
                    isStar={itm.follower}
                  /> */}
                </Box>
              ))}
              {investorlist.length > institnum && openall !== finceinfo.id && (
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    border: '1px solid',
                    textAlign: 'center',
                    lineHeight: '30px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenIcon(finceinfo.id);
                  }}
                >
                  +{investorlist.length - institnum}
                </Box>
              )}
            </Stack>
            {openall === finceinfo.id && (
              <Stack direction="row" mt="16px" flexWrap="wrap" alignItems="center" gap="16px">
                {investorlist.length > institnum &&
                  investorlist.slice(institnum).map((itm: any, key: any) => (
                    <Box
                      key={key}
                      sx={{
                        flexShrink: 0,
                      }}
                    >
                      {IvestorLogoItem(itm)}
                      {/* <InvestLogoTitle
                        logsrc={itm.orgIcon}
                        investname={itm.orgName}
                        isStar={itm.follower}
                      /> */}
                    </Box>
                  ))}
              </Stack>
            )}
          </Box>
        </Box>
      );
    },
    [IvestorLogoItem, handleClickToDetail, handleOpenIcon, institnum, openall, t]
  );
  return (
    <>
      {invsetTitleDom}
      {investloading ? (
        Array.from({ length: 20 }).map((_, index) => <Box key={index}>{investSkeletonDom}</Box>)
      ) : (
        <Box>
          {financingInfo?.inforList?.length > 0 ? (
            financingInfo?.inforList?.map((item: any, index: any) => (
              <Box key={index}>{InvestItemDom(item)}</Box>
            ))
          ) : (
            <Box mt="40px">
              <NotData />
            </Box>
          )}
        </Box>
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
    </>
  );
};
