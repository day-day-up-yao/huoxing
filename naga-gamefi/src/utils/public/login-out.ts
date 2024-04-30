import Cookies from 'js-cookie';
import { cookiesName } from './index';

export const loginOut = (params?: { reload?: boolean; isfail?: boolean }) => {
  // Cookies.remove('wagmi.store');
  // Cookies.remove('wagmi.recentConnectorId');

  Cookies.remove(cookiesName.username);
  Cookies.remove(cookiesName.uid);
  Cookies.remove(cookiesName.email);
  Cookies.remove(cookiesName.auToken);
  Cookies.remove(cookiesName.avatarUrl);
  Cookies.remove('credential');
  Cookies.remove(cookiesName.isbindmetmask);

  if (params?.reload) {
    if (params?.isfail) {
      // 鉴权失败重新登录
      window.reduxStore.dispatch.common.setUserPopup({ type: 0, bool: true });
    } else {
      window.location.href = '/';
    }
  }
};
