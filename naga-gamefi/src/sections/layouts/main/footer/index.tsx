import React, { useMemo } from 'react';
import './index.scss';

import { useTranslation } from 'react-i18next';
import SvgIcon from 'src/components/svg-icon';
import { toast } from 'src/components/toast';
import ShareList from 'src/components/share-list';
import { footerlinklist } from 'src/utils/public/datas';
import { nagaTwitterAccount } from 'src/config-global';
// import { isEmail, javaEncrypt } from 'src/utils/public/index';
// import { getElmailaddress } from 'src/fetchs/user';

export default () => {
  const { t } = useTranslation();
  // const [email, setEmail] = useState();
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  // 左侧链接跳转列表
  const LinkCon = useMemo(
    () => (
      <div className="layout-footer-top-left">
        {footerlinklist.map((item, index) => (
          <div className="other-jump-linklist" key={index}>
            <div className="other-jump-linklist-name">{item.name}</div>
            <div className="other-jump-linklist-list">
              {item.list.map((itm, idx) => (
                <div className="other-jump-linklist-list-item" key={idx}>
                  {/* <a href="#" className="linklist-list-item-a">{itm.title}</a> */}
                  <span
                    className="linklist-list-item-a"
                    onClick={() => {
                      if (itm.link === '#') {
                        toast.warning('Coming soon');
                      } else {
                        window.open(itm.link);
                      }
                    }}
                  >
                    {'img' in itm && <SvgIcon className="icon" name={itm.img} />}
                    {itm.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
    []
  );

  // const getEmail = useCallback(
  //   (e: any) => {
  //     if (error) {
  //       setError(false);
  //     }
  //     setEmail(e.target.value);
  //   },
  //   [error]
  // );

  // 分享链接
  const sharelink = useMemo(
    () => (
      <div className="footer-sharelink">
        <ShareList
          isname
          size="small-icon"
          linkitem={{
            tw: `https://twitter.com/${nagaTwitterAccount}`,
            // me: '#',
            di: 'https://discord.gg/jgxjRqyfXR',
            te: 'https://t.me/gamefinaga',
            sub: 'https://forms.gle/PJZWy582Y6rvPFM68',
          }}
        />
        <div className="copyright-naga">NAGA · 2024 Copyright</div>
      </div>
    ),
    []
  );

  // 邮箱订阅
  // const getemailFn = useCallback(() => {
  //   if (email && isEmail(email)) {
  //     getElmailaddress({
  //       email,
  //       captcha: javaEncrypt(`${parseInt(`${new Date().getTime() / 1000}`, 10)}`),
  //     }).then((res: any) => {
  //       if (res.code === 0) {
  //         toast.error('success');
  //         setSuccess(true);
  //       } else {
  //         toast.error(res.msg);
  //       }
  //     });
  //   } else {
  //     setError(true);
  //   }
  // }, [email]);

  return (
    <div className="layout-footer" id="footerWrapper">
      <div className="layout-footer-con">
        <div className="layout-footer-top">
          <div className="footer-logo">
            <SvgIcon className="footer-logo-img" name="footer_logo" />
            {/* <img className="footer-logo-img" src="/images/bigimg/newlogo.png" alt="" /> */}
            <p className="footer-logo-text">{t('public_footer_title')}</p>
            <div className="copyright-naga-h5">NAGA · 2024 Copyright</div>
          </div>
          {sharelink}
          {/* {LinkCon} */}
          {/* <div className="layout-footer-top-right">
            <h3>Join our community</h3>
            {success ? (
              <div className="whiter-email-success">
                <img src="/images/icon/selectedsub.png" alt="" />
                <span>You have joined the waitlist.</span>
              </div>
            ) : (
              <div className="layout-footer-top-right-whaite">
                <input type="text" placeholder="Email Address" onChange={getEmail} />
                <div className="layout-footer-top-right-whaite-btn" onClick={getemailFn}>
                  <span>Join Waitlist</span>
                  <img src="/images/icon/pointinput.png" alt="" />
                </div>
              </div>
            )}
            {error && <div className="email-error-info">Please enter a valid email address</div>}
            {sharelink}
          </div> */}
        </div>
        {/* <div className="layout-footer-right">
          <p className="layout-footer-bottom-text">© NAGA · 2023 Copyright</p>
        </div> */}
      </div>
    </div>
  );
};
