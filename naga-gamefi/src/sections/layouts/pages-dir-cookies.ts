import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { LangVals, ModeVals, SettingKeys } from 'src/sections/layouts/settings';
import { canUseDom } from 'src/utils/can-use-dom';
import { matchUrlLang } from 'src/utils/current-lang';
import { cookiesName } from 'src/utils/public';
import { defaultSettings } from './settings/context/settings-provider';

export type PagesNextRequest = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
export const pagesDirCookies = ({ req }: { req: PagesNextRequest }) => {
  if (canUseDom) return undefined;
  // -----lang
  const languageUrl = matchUrlLang(req?.url);
  const languageCookie = req.cookies[SettingKeys.LANG];
  const acceptLangHeader = req.headers['accept-language'];
  const acceptLangs = acceptLangHeader ? acceptLangHeader.split(',') : null;
  const acceptLang =
    acceptLangs && acceptLangs.length > 0 ? acceptLangs[0]?.toLowerCase() : undefined;
  const lang = (languageUrl || languageCookie || acceptLang) as LangVals;

  // -----mode
  const mode = (req.cookies[SettingKeys.MODE] || defaultSettings.mode) as ModeVals;

  // auToken
  const token = req.cookies[cookiesName.auToken];

  // adminGameId
  const adminGameId = req.cookies[cookiesName.adminGameId];

  return { lang, mode, token, adminGameId };
};
