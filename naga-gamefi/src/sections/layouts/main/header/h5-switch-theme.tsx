import ButtonBase from '@mui/material/ButtonBase';
import { Switch, Stack, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from 'src/components/svg-icon';
import { useSoloThemePageConfig } from 'src/utils/hooks/solo-theme-page-config';
import { ModeVals, useSettingsContext } from '../../settings';
import { bodyThemeSetter } from '../../settings/context/settings-provider';

export const ThemeSwitch = () => {
  const { mode, onUpdate } = useSettingsContext();
  const { t } = useTranslation();
  const nextMode = mode === ModeVals.DARK ? ModeVals.LIGHT : ModeVals.DARK;

  const [themeflag, setThemeflag] = useState(mode === 'dark');

  const clickHandler = useCallback(() => {
    setThemeflag(!themeflag);
    onUpdate('mode', nextMode);
    bodyThemeSetter(nextMode);
  }, [nextMode, onUpdate, themeflag]);

  const isSoloPage = useSoloThemePageConfig();
  if (isSoloPage) return null;

  return (
    <Stack direction="row" width="100%" justifyContent="space-between" onClick={clickHandler}>
      <Stack direction="row" alignItems="center">
        <SvgIcon name="theme-dark" />
        <Typography ml="12px" variant="body1">
          {t('public_theme_type')}
        </Typography>
      </Stack>
      <Switch checked={themeflag} />
    </Stack>
  );
};

export default ThemeSwitch;
