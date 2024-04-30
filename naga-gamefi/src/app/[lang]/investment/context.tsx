import { createContext, useMemo, useEffect, useCallback, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetFinanceRoundInfo, useGetFinancingListInfo } from 'src/fetchs/financing';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';

export const Context = createContext({} as any);
export default ({ children, props }: any) => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const { linkTo } = useLink();
  const { trigger: getFinancingInfo, data: financingInfo } = useGetFinancingListInfo();
  const { trigger: getFinancingRoundInfo, data: financingRoundInfo } = useGetFinanceRoundInfo();

  const [flagselect, setFlagselect] = useState(false);

  const [investloading, setInvestloading] = useState(true);

  const [institnum, setInstitnum] = useState(3);

  const finacePageRef = useRef(1); // 分页页码
  const startTimeRef = useRef<any>(); // 开始时间
  const endTimeRef = useRef<any>(); // 结束时间
  const roundRef = useRef<any>(); // 投融资轮次
  const startMoneyRef = useRef<any>(); // 起始金额
  const endMoneyRef = useRef<any>(); // 最终金额
  const tradableRef = useRef<any>(); // 是否交易
  const sorttypeRef = useRef<any>('desc'); // 排序 desc：降序 asc：升序
  const sortbyRef = useRef<any>('inverst_date'); // 排序字段name,inverst_date,raised

  const [sortType, setsortType] = useState('desc');
  const [sortselect, setSortselect] = useState(3);

  const [allpagenum, setAllpagenum] = useState(0);

  const [detaultTime, setDetaultTime] = useState({
    defalitvalue: `${t('invest_table_title3')}(${t('search_tab_all')})`,
    value: '',
  });

  const [detaultInvest, setDetaultInvest] = useState({
    defalitvalue: `${t('invest_table_title1')}(${t('search_tab_all')})`,
    value: '',
  });

  const [detaultMoney, setDetaultMoney] = useState({
    defalitvalue: `${t('invest_table_title2')}(${t('search_tab_all')})`,
    value: '',
  });

  const [detaultToken, setDetaultToken] = useState({
    defalitvalue: `${t('invest_table_title4')}(${t('search_tab_all')})`,
    value: '',
  });

  // 获取投融资列表
  const toGetInvestListInfo = useCallback(() => {
    setInvestloading(true);
    getFinancingInfo({
      startTime: startTimeRef.current,
      endTime: endTimeRef.current,
      round: roundRef.current,
      startRaised: startMoneyRef.current,
      endRaised: endMoneyRef.current,
      tradable: tradableRef.current,
      sortBy: sortbyRef.current,
      sort: sorttypeRef.current,
      currentPage: finacePageRef.current,
      pageSize: 20,
    }).then(() => {
      setInvestloading(false);
    });
  }, [getFinancingInfo]);
  useEffect(() => {
    toGetInvestListInfo();
    getFinancingRoundInfo();
  }, [getFinancingRoundInfo, toGetInvestListInfo]);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setInstitnum(2);
    }
    if (financingInfo) {
      if (allpagenum !== financingInfo?.pageCount) {
        setAllpagenum(financingInfo?.pageCount);
      }
    }
  }, [allpagenum, financingInfo]);

  useEffect(() => {
    const handleResize = (e: any) => {
      if (e.target.innerWidth <= 1200 && institnum === 3) {
        setInstitnum(2);
        console.log('xiaoyu');
      }
      if (e.target.innerWidth >= 1200 && institnum === 2) {
        setInstitnum(3);
        console.log('dayu');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [institnum]);

  const [openall, setOpenall] = useState();

  const hanndleOpenSlect = useCallback(() => {
    setFlagselect(true);
  }, []);

  const hanndleCloseSlect = useCallback(() => {
    setFlagselect(false);
  }, []);

  // 展开融投资logo
  const handleOpenIcon = useCallback((id: any) => {
    setOpenall(id);
  }, []);

  // 分页
  const handleGetPage = useCallback(
    (page: any) => {
      finacePageRef.current = page;
      window.location.hash = `#page-${page}`;
      toGetInvestListInfo();
    },
    [toGetInvestListInfo]
  );

  function monthsAgo(months: number) {
    const now = new Date(); // 当前日期
    now.setMonth(now.getMonth() - months); // 减去指定的月份数
    return now;
  }

  // select onClick type类型：time：时间 round：投融资类型 money：金额 token：是否可交易
  const handleSelectInfo = useCallback(
    (type: any, info: any) => {
      if (type === 'time') {
        setDetaultTime({
          defalitvalue: info.children,
          value: info.value,
        });
        if (info.value !== '') {
          startTimeRef.current = Number(
            Date.parse(monthsAgo(info.value) as any)
              .toString()
              .replace(/\.?0+$/, '')
          );
          endTimeRef.current = Number(
            Date.parse(new Date() as any)
              .toString()
              .replace(/\.?0+$/, '')
          );
        } else {
          startTimeRef.current = null;
          endTimeRef.current = null;
        }
      }
      if (type === 'round') {
        setDetaultInvest({
          defalitvalue: info.children,
          value: info.value,
        });
        roundRef.current = info.value === '' ? null : info.value;
      }
      if (type === 'money') {
        setDetaultMoney({
          defalitvalue: info.children,
          value: info.value,
        });

        switch (info.value) {
          case '':
            startMoneyRef.current = null;
            endMoneyRef.current = null;
            break;
          case 1:
            startMoneyRef.current = 0;
            endMoneyRef.current = 1;
            break;
          case 2:
            startMoneyRef.current = 1;
            endMoneyRef.current = 5;
            break;
          case 3:
            startMoneyRef.current = 5;
            endMoneyRef.current = 10;
            break;
          case 4:
            startMoneyRef.current = 10;
            endMoneyRef.current = 30;
            break;
          case 5:
            startMoneyRef.current = 30;
            endMoneyRef.current = 50;
            break;
          case 6:
            startMoneyRef.current = 50;
            endMoneyRef.current = 100;
            break;
          case 7:
            startMoneyRef.current = 100;
            endMoneyRef.current = 100000;
            break;
          default:
            break;
        }
      }
      if (type === 'token') {
        setDetaultToken({
          defalitvalue: info.children,
          value: info.value,
        });
        if (info.value) {
          tradableRef.current = info.value === 'y' ? 'Yes' : 'No';
        } else {
          tradableRef.current = null;
        }
      }
      toGetInvestListInfo();
    },
    [toGetInvestListInfo]
  );

  const handleClickToDetail = useCallback(
    (id: any) => {
      linkTo(`${paths.game}/${id}`);
    },
    [linkTo]
  );

  const handleClickToInvestLink = useCallback((link: any) => {
    window.open(link);
  }, []);

  const handleInvestSort = useCallback(
    (type: any) => {
      setSortselect(type);

      if (type === 3) {
        sortbyRef.current = 'inverst_date';
      }

      if (type === 2) {
        sortbyRef.current = 'raised';
      }

      if (sortType === 'asc') {
        setsortType('desc');
        sorttypeRef.current = 'desc';
      }
      if (sortType === 'desc') {
        setsortType('asc');
        sorttypeRef.current = 'asc';
      }
      toGetInvestListInfo();
    },
    [sortType, toGetInvestListInfo]
  );

  const result = useMemo(
    () => ({
      t,
      openall,
      isDark,
      institnum,
      flagselect,
      handleInvestSort,
      detaultTime,
      allpagenum,
      sortType,
      finacePageRef,
      sortselect,
      investloading,
      detaultInvest,
      detaultMoney,
      detaultToken,
      handleOpenIcon,
      handleGetPage,
      handleClickToDetail,
      handleClickToInvestLink,
      handleSelectInfo,
      hanndleCloseSlect,
      hanndleOpenSlect,
      financingInfo,
      financingRoundInfo,
    }),
    [
      t,
      openall,
      isDark,
      institnum,
      flagselect,
      handleInvestSort,
      detaultTime,
      allpagenum,
      sortType,
      sortselect,
      investloading,
      detaultInvest,
      detaultMoney,
      detaultToken,
      handleOpenIcon,
      handleGetPage,
      handleClickToDetail,
      handleClickToInvestLink,
      handleSelectInfo,
      hanndleCloseSlect,
      hanndleOpenSlect,
      financingInfo,
      financingRoundInfo,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
