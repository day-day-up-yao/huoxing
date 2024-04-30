export enum SettingKeys {
  LANG = 'lang',
  MODE = 'mode',
  STRETCH = 'stretch',
  LAYOUT = 'layout',
  COLOR_PRESETS = 'colorPresets',
}

// 用户自定义
export enum LangVals {
  ZHCN = 'zh-cn',
  ZHHK = 'zh-hk',
  ENUS = 'en-us',
}
// 服务器值，与用户自定义对应
export const LangServerVals = {
  'zh-cn': 'zh-CN',
  'zh-hk': 'zh-TW',
  'en-us': 'en-US',
};

export enum ModeVals {
  LIGHT = 'light',
  DARK = 'dark',
}
export enum ColorPresetsVals {
  DEFAULT = 'default',
  CYAN = 'cyan',
  PURPLE = 'purple',
  BLUE = 'blue',
  ORANGE = 'orange',
  RED = 'red',
}
export enum LayoutVals {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  MINI = 'mini',
}

export type SettingsValueProps = {
  lang?: LangVals;
  mode?: ModeVals;
  // 暂未使用上，先使用默认值
  stretch?: boolean;
  layout?: LayoutVals;
  colorPresets?: ColorPresetsVals;
};

export type SettingsContextProps = SettingsValueProps & {
  onUpdate: (name: string, value: string | boolean) => void;
  canReset: boolean;
  onReset: VoidFunction;
};
