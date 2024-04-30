import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'src/components/toast';
import { useGetAccountInfo } from 'src/fetchs/user';

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();

  // ---------------------------------用户信息-------------------------------------
  // 用户信息接口
  const { mutate: triggerAccountInfo, data: accountInfoData } = useGetAccountInfo();
  // 用户信息参数
  const [accountInfo, setAccountinfo] = useState<AccountInfo>();

  // 请求用户信息
  useEffect(() => {
    triggerAccountInfo();
  }, [triggerAccountInfo]);

  // 设置用户信息初始值
  useEffect(() => {
    if (accountInfoData) {
      if (accountInfoData.code === 0) {
        console.log('accountInfoData', accountInfoData);
        setAccountinfo(accountInfoData.data);
        if (accountInfoData.data && accountInfoData.data.name !== '') {
          document.title = `${accountInfoData.data.name} | NAGA-Discover The Best Web3 Gaming`;
        } else {
          document.title = 'NAGA | NAGA-Discover The Best Web3 Gaming';
        }
      } else {
        toast.error(accountInfoData.msg || '');
      }
    }
  }, [accountInfoData]);

  // ----------------------------------------------------------------------

  const values = useMemo(
    () => ({
      t,
      accountInfo,
    }),
    [accountInfo, t]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
