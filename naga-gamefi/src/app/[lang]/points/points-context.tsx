import { ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useGetBonusAwardSetting } from 'src/fetchs/points';
import { useGetAccountInfo } from 'src/fetchs/user';

export type PointsContextProviderValue = {
  accountInfo: AccountInfo | null;
  bonusAwardSetting: BonusAwardSetting | null;
};

const pointsContextProviderInitialValue: PointsContextProviderValue = {
  accountInfo: null,
  bonusAwardSetting: null,
};

export const PointsContext = createContext(pointsContextProviderInitialValue);

export const usePoints = () => {
  const ctx = useContext(PointsContext);
  return ctx;
};

export const PointsProvider = ({ children }: { children: ReactNode }) => {
  const { mutate: mutateAccountInfo, data: accountInfoData } = useGetAccountInfo();
  console.log('🚀 ~ PointsProvider ~ accountInfoData:', accountInfoData);
  const { mutate: mutateAwardSetting, data: awardSettingData } = useGetBonusAwardSetting();

  const initData = useRef(false);
  useEffect(() => {
    if (initData.current) return;
    initData.current = true;
    console.log('request initial data by points context');
    mutateAccountInfo();
    mutateAwardSetting();
  }, [mutateAccountInfo, mutateAwardSetting]);

  const contextProviderValue = useMemo(
    () => ({
      accountInfo: accountInfoData?.data || null,
      bonusAwardSetting: awardSettingData?.data || null,
    }),
    [accountInfoData?.data, awardSettingData?.data]
  );

  return <PointsContext.Provider value={contextProviderValue}>{children}</PointsContext.Provider>;
};
