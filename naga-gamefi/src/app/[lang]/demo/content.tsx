'use client';

import { Avatar, Box, ListItemText, Stack, Typography, Button } from '@mui/material';
import useSWR from 'swr';
import { useEffect, Fragment } from 'react';
import { useLocales } from 'src/locales';

const Content = () => {
  const { t } = useLocales();
  // const result = useSWR({ url: gamefi.getGameNft, params: { gameId: 4453 } }, fetcher);
  // console.log('🚀 ~ file: content.tsx:10 ~ DemoContent ~ result:', result);

  const list = [1, 2, 3, 3, 4];
  useEffect(() => {
    console.log('zhixingcishu');
  }, []);
  return (
    <div>
      demo content: {t('ecommerce')} <br />
      {list.map((item) => (
        <Fragment key={item}>
          <div>{item}</div>
        </Fragment>
      ))}
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Content;
