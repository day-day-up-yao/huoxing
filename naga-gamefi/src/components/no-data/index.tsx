import { Stack, Typography } from '@mui/material';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsDark } from 'src/utils/hooks/use-is-dark';

export const NoData = ({ style }: { style?: CSSProperties }) => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={{ width: '100%', minHeight: '320px', ...style }}
    >
      <img
        src={isDark ? '/images/bigimg/notdata.png' : '/images/bigimg/notdatalighter.png'}
        alt="no data"
        style={{ width: '120px' }}
      />
      <Typography sx={({ palette }) => ({ color: palette.text.secondary })}>
        {t('public_not_data')}
      </Typography>
    </Stack>
  );
};
