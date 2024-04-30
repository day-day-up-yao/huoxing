import { ModeVals, useSettingsContext } from 'src/sections/layouts/settings';

export const useIsDark = () => {
  const { mode } = useSettingsContext();
  return mode === ModeVals.DARK;
};
