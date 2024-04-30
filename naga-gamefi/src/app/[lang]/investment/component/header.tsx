import { Typography, Stack, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import SigIcon from 'src/components/svg-icon';

export default ({ clickBtn }: any) => {
  const { t } = useTranslation();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        sx={{
          fontSize: { xs: '20px', sm: '32px' },
          fontWeight: 'bold',
        }}
      >
        {t('invest_title')}
      </Typography>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
        onClick={clickBtn}
      >
        <SigIcon name="screen" />
      </Box>
    </Stack>
  );
};
