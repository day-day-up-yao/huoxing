import { Box, Stack, Typography } from '@mui/material';
import { useContext } from 'react';

import Select from './component/select';
import { Context } from './context';

export default () => {
  const {
    financingRoundInfo,
    handleSelectInfo,
    allpagenum,
    t,
    finacePageRef,
    detaultTime,
    detaultInvest,
    detaultMoney,
    detaultToken,
  } = useContext(Context);

  const atime = [
    {
      name: t('invest_time_one'),
      type: 1,
    },
    {
      name: t('invest_time_3'),
      type: 3,
    },
    {
      name: t('invest_time_6'),
      type: 6,
    },
    {
      name: t('invest_time_12'),
      type: 12,
    },
  ];

  const moneylist = [
    {
      name: '<$1M',
      type: 1,
    },
    {
      name: '$1M-$5M',
      type: 2,
    },
    {
      name: '$5M-$10M',
      type: 3,
    },
    {
      name: '$10M-$30M',
      type: 4,
    },
    {
      name: '$30M-$50M',
      type: 5,
    },
    {
      name: '$50M-$100M',
      type: 6,
    },
    {
      name: '≥ $100M',
      type: 7,
    },
  ];

  const infolist = [
    {
      name: t('invest_can_busness'),
      type: 'y',
    },
    {
      name: t('invest_not_busness'),
      type: 'n',
    },
  ];
  return (
    <>
      {Array.from({ length: allpagenum })?.map((itm, idx) => <div id={`page-${idx + 1}`} />)}

      <Stack direction={{ xs: 'column', sm: 'row' }} mt="32px" gap="16px 16px">
        <Select
          selectlist={atime}
          type="time"
          handleHaveType={handleSelectInfo}
          defaultvalue={`${t('invest_table_title3')}(${t('search_tab_all')})`}
          defaultinfo={detaultTime}
        />
        <Select
          selectlist={financingRoundInfo?.data}
          handleHaveType={handleSelectInfo}
          type="round"
          defaultvalue={`${t('invest_table_title1')}(${t('search_tab_all')})`}
          defaultinfo={detaultInvest}
        />
        <Select
          selectlist={moneylist}
          type="money"
          handleHaveType={handleSelectInfo}
          defaultvalue={`${t('invest_table_title2')}(${t('search_tab_all')})`}
          defaultinfo={detaultMoney}
        />
        <Select
          selectlist={infolist}
          type="token"
          handleHaveType={handleSelectInfo}
          defaultvalue={`${t('invest_table_title4')}(${t('search_tab_all')})`}
          defaultinfo={detaultToken}
        />
      </Stack>
    </>
  );
};
