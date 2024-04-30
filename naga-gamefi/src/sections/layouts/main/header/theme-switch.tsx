import ButtonBase from '@mui/material/ButtonBase';
import { useCallback } from 'react';
import SvgIcon from 'src/components/svg-icon';
import { useSoloThemePageConfig } from 'src/utils/hooks/solo-theme-page-config';
import { ModeVals, useSettingsContext } from '../../settings';
import { bodyThemeSetter } from '../../settings/context/settings-provider';

export const ThemeSwitch = () => {
  const { mode, onUpdate } = useSettingsContext();
  const nextMode = mode === ModeVals.DARK ? ModeVals.LIGHT : ModeVals.DARK;

  const clickHandler = useCallback(() => {
    onUpdate('mode', nextMode);
    bodyThemeSetter(nextMode);
  }, [nextMode, onUpdate]);

  const isSoloPage = useSoloThemePageConfig();
  if (isSoloPage) return null;

  return (
    <ButtonBase className="switch-theme-header" onClick={clickHandler} sx={{ borderRadius: '3px' }}>
      <SvgIcon name={`theme-${nextMode}`} />
    </ButtonBase>
  );
};

export default ThemeSwitch;
