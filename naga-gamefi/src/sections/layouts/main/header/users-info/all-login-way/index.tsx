import React, { useContext, useCallback, useEffect } from 'react';
// import TwitterLogin from 'react-twitter-login'
import Cookies from 'js-cookie';

import './index.scss';

import classNames from 'classnames';
import WaitingLoading from 'src/components/waiting-loading';
import { ConnectOptions } from 'src/utils/wallet';
import TitleClose from '../components/titleand-close';
import { Context } from '../context';

const clientId = '129642972773-uqc65q75cjnusvudqpoqc840jlhmc44f.apps.googleusercontent.com'; // 谷歌 cliendid

export default () => {
  const {
    chanceType,
    t,
    googleLogin,
    loadingflag,
    getLoginLoading,
    twitterToLogin,
    discordToLogin,
  } = useContext(Context);
  // const [loadingflag, setLoadingflag] = useState(false)
  const loaginwaylist = [
    {
      title: 'user_pass_wallet_login',
      type: 1,
      comps: <ConnectOptions loginNextStep={() => chanceType(3)} setLoading={getLoginLoading} />,
      // list: [
      //   {
      //     icon: '/images/icon/martmask.png',
      //     name: 'MetaMask',
      //     link: '',
      //   },
      //   {
      //     icon: '/images/icon/wallconnect.png',
      //     name: 'WalletConnect',
      //     link: '',
      //   },
      // ],
    },
    {
      title: 'user_pass_other_login',
      type: 2,
      list: [
        {
          icon: '/images/icon/google.png',
          name: 'Google',
          link: '',
        },
        {
          icon: '/images/icon/Twitter.png',
          name: 'Twitter',
          link: '',
        },
        {
          icon: '/images/icon/discordicon.png',
          name: 'Discord',
          link: '',
        },
      ],
    },
  ];

  const handleCredentialResponse = useCallback(
    (res: any) => {
      console.log(res, 'google_back');
      getLoginLoading(false);
      if (res.credential) {
        Cookies.set('credential', res.credential);
        googleLogin(res.credential);
      }
    },
    [getLoginLoading, googleLogin]
  );

  const handleClicklistenter = useCallback(() => {
    console.log('google_start');
    getLoginLoading(true);
  }, [getLoginLoading]);

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        intermediate_iframe_close_callback: () => {
          console.log('close');
        },
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google_botton'),
        {
          theme: 'outline',
          size: 'large',
          type: 'standard',
          locale: 'en-US',
          width: 180,
          text: 'signin',
          logo_alignment: 'center',
          click_listener: handleClicklistenter,
        } // customization attributes
      );
    }
  }, [handleClicklistenter, handleCredentialResponse]);

  // 钱包/第三方登录点击事件
  const selectLogin = useCallback(
    (name: string) => {
      if (name === 'Twitter') {
        twitterToLogin();
      }
      if (name === 'Discord') {
        discordToLogin();
      }
    },
    [discordToLogin, twitterToLogin]
  );

  return (
    <div className="all-loginway">
      <TitleClose title={t('user_login_singinup')} />
      {loaginwaylist.map((item, index) => (
        <div className="loginway-item" key={index}>
          <h3>{t(item.title)}</h3>
          <div className="loginway-item-list">
            {item.comps}
            {item.list?.map((itm, idx) => (
              <div
                className={classNames('list-way-item', { 'list-way-item-two': item.type === 2 })}
                key={idx}
                onClick={() => selectLogin(itm.name)}
              >
                <div
                  className={classNames('list-way-item-info', {
                    'list-way-item-info-other': item.type === 2,
                  })}
                >
                  <img src={itm.icon} alt="" />
                  {item.type === 1 && <span>{itm.name}</span>}
                </div>
                {itm.name === 'Google' && <div id="google_botton" className="google-login-btn" />}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="haveaccount-tologin">
        <span>{t('user_have_account')}</span>
        <div
          className="to-login"
          onClick={() => {
            chanceType(1);
          }}
        >
          {t('user_to_login')}
        </div>
      </div>
      <div id="google_botton" />
      {loadingflag && (
        <WaitingLoading
          closeloading={() => {
            getLoginLoading(false);
          }}
        />
      )}
    </div>
  );
};
