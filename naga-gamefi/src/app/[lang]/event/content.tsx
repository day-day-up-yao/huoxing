'use client';

import { useLocales } from 'src/locales';

const DemoContent = () => {
  const { t } = useLocales();
  // const result = useSWR({ url: gamefi.getGameNft, params: { gameId: 4453 } }, fetcher);
  // console.log('🚀 ~ file: content.tsx:10 ~ DemoContent ~ result:', result);
  return (
    <div>
      demo content: {t('ecommerce')} <br />
    </div>
  );
};

export default DemoContent;
