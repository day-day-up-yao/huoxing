import React, { createContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();

  const values = useMemo(
    () => ({
      t,
    }),
    [t]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
