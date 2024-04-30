import { cookies, headers } from 'next/headers';
import { LangVals, ModeVals, SettingKeys } from 'src/sections/layouts/settings';
import { cookiesName } from 'src/utils/public';
// import { matchUrlLang } from 'src/utils/current-lang';

export const appDirCookies = () => {
  // -----lang
  // const languageUrl = matchUrlLang('request.nextUrl.pathname');
  const languageCookie = cookies().get(SettingKeys.LANG)?.value;
  const acceptLangHeader = headers().get('Accept-Language');
  const acceptLangs = acceptLangHeader ? acceptLangHeader.split(',') : null;

  // 用此code字段保持与navigator.language，其实此为服务端组件，服务端获取的lang会作为prop传给前端
  const acceptLang =
    acceptLangs && acceptLangs.length > 0 ? acceptLangs[0]?.toLowerCase() : undefined;
  const lang = (languageCookie || acceptLang) as LangVals;

  // -----mode
  const mode = cookies().get(SettingKeys.MODE)?.value as ModeVals;

  // -----auToken
  const token = cookies().get(cookiesName.auToken)?.value as ModeVals;

  return { lang, mode, token };
};
