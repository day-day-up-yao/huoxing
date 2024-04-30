import { enUS, zhCN, zhHK } from '@mui/material/locale';
import { LangVals } from 'src/sections/layouts/settings';
import translationEnUS from './langs/en-us.json';
import translationZhCN from './langs/zh-cn.json';
import translationZhHK from './langs/zh-hk.json';

export const allLangs = [
  {
    label: 'English',
    value: LangVals.ENUS,
    systemValue: enUS,
    icon: 'flagpack:gb-nir',
  },
  {
    label: '中文简体',
    value: LangVals.ZHCN,
    systemValue: zhCN,
    icon: 'flagpack:cn',
  },
  {
    label: '中文繁体',
    value: LangVals.ZHHK,
    systemValue: zhHK,
    icon: 'flagpack:hk',
  },
];

// 对应src/sections/layouts/settings/types.ts中的LangVals
export const resources = {
  'en-us': { translations: translationEnUS },
  'zh-cn': { translations: translationZhCN },
  'zh-hk': { translations: translationZhHK },
};

export const fallbackLng = Object.values(LangVals);

export const defaultLang = allLangs[0]; // English
