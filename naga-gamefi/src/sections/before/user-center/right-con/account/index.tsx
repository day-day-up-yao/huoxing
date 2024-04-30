import React, { useMemo, useContext } from 'react';
// import Cookies from 'js-cookie'

import TitleCurreny from 'src/components/before/title-currency';
import WaitingLoading from 'src/components/before/waiting-loading';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../../context';
// import useComingsoon from '../../../../public/hooks/useComingsoon'

import './index.scss';

export default () => {
  // const ComingShow = useComingsoon()
  const {
    t,
    isloading,
    unbindFunction,
    accountinfo,
    closeWarteFn,
    unBindMetamask,
    handleChangePasd,
    connectMatemask,
    userBindOther,
  } = useContext(Context);
  // console.log(accountinfo.isBindGoogle)
  const otherlist = useMemo(
    () => [
      {
        icon: '/images/icon/google.png',
        name: 'Google',
        link: '',
        isbind: accountinfo.isBindGoogle === 1,
      },
      {
        icon: '/images/icon/Twitter.png',
        name: 'Twitter',
        link: '',
        isbind: accountinfo.isBindTwitter === 1,
        twittername: accountinfo.twitterUserName,
      },
      {
        icon: '/images/icon/discordicon.png',
        name: 'Discord',
        link: '',
        isbind: accountinfo.isBindDiscord === 1,
        twittername: accountinfo.discordUserName,
      },
      {
        icon: '/images/icon/emailway.png',
        name: 'Email',
        link: '',
        isbind: accountinfo.isBindEmail === 1,
        twittername: accountinfo.email,
      },
    ],
    [
      accountinfo.discordUserName,
      accountinfo.email,
      accountinfo.isBindDiscord,
      accountinfo.isBindEmail,
      accountinfo.isBindGoogle,
      accountinfo.isBindTwitter,
      accountinfo.twitterUserName,
    ]
  );

  // 钱包
  const walletlist = useMemo(
    () => [
      {
        title: 'EVM Chain',
        chain: 'ETH,BSC,Polygon,Solana,Avalanche',
        isbind: accountinfo.isBindMetamask === 1,
        address: accountinfo.metamaskAddr,
        isconnect: true,
      },
      {
        title: 'Aptos',
        chain: '',
        isbind: false,
        address: '',
        isconnect: false,
      },
      {
        title: 'Sui',
        chain: 'Sui',
        isbind: false,
        address: '',
        isconnect: false,
      },
    ],
    [accountinfo.isBindMetamask, accountinfo.metamaskAddr]
  );
  // 钱包账号
  const walletDom = useMemo(
    () => (
      <div className="usercenter-account-con">
        {walletlist.map((item, index) => (
          <div className="usercenter-account-con-info" key={index}>
            <div className="account-wallet-info-left">
              <div className="account-wallet-info-left-top">
                <TitleCurreny title={item.title} chain={item.chain} size="only" />
                {item.chain === '' && <SvgIcon name="aptos" />}
                {item.address && (
                  <div
                    style={{
                      marginLeft: '16px',
                      color: 'var(--naga-font-fourty)',
                    }}
                    className="user-center-address"
                  >{`${item.address?.slice(0, 6)}...${item.address?.slice(-4)}`}</div>
                )}
              </div>

              {/* <div className="account-wallet-info-right">222</div> */}
              {/* {item.isbind ? (
                <div className="account-wallet-info-address">
                  {`${item.address?.slice(0, 16)}...${item.address?.slice(-10)}`}
                </div>
              ) : (
                <div
                  className={`wallet-connect-btn ${!item.isconnect && 'other-waller-comingsoon'}`}
                  onClick={() => {
                    if (item.isconnect) {
                      connectMatemask();
                    }
                  }}
                >
                  {item.isconnect ? 'Connect wallet' : 'ComingSoon'}
                </div>
              )} */}
            </div>
            <div
              className={`account-wallet-connect ${!item.isconnect && 'wallet-comingsoon'} ${
                item.isbind && 'bindeditem-account'
              }`}
              onClick={() => {
                if (item.isbind) {
                  unBindMetamask();
                }
                if (item.isconnect && !item.isbind) {
                  connectMatemask();
                }
              }}
            >
              {item.isbind ? 'Disconnect' : item.isconnect ? 'Connect' : 'ComingSoon'}
            </div>
            {/* {item.isconnect && item.isbind && (
              <div className="account-wallet-info-unbind" onClick={unBindMetamask}>
                <SvgIcon name="closebtn" />
              </div>
            )} */}
          </div>
        ))}
      </div>
    ),
    [connectMatemask, unBindMetamask, walletlist]
  );

  // 连接钱包账号
  // const ConnectwalletDom = useMemo(
  //     () => (
  //         <div className="usercenter-account-con">
  //             <div className="usercenter-account-con-info to-connect-wallet" onClick={() => connectMatemask()}>
  //                 <span>Connect wallet</span>
  //             </div>
  //         </div>
  //     ),
  //     []
  // )

  // 其他账号 —— 谷歌，推特，Discord
  const OtherAccount = useMemo(
    () => (
      <div className="usercenter-account-con">
        {otherlist.map((item, index) => (
          <div
            className="usercenter-account-con-info other-account-item"
            key={index}
            onClick={() => {
              userBindOther(item.name);
            }}
          >
            <div className="account-wallet-info-other-left">
              <div className="other-left-type">
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </div>
              <div className="selected-img">
                {item.isbind && (
                  <div className="selected-img-info">
                    {item.name !== 'Google' && (
                      <div className="account-wallet-info-right-l-name">{item.twittername}</div>
                    )}
                    <img src="/images/icon/binding.png" alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="account-wallet-info-right">
              <div
                className={`account-wallet-connect ${item.isbind && 'bindeditem-account'}`}
                onClick={() => {
                  if (item.isbind) {
                    unbindFunction(item.name);
                  }
                }}
              >
                {item.isbind ? 'Disconnect' : 'Connect'}
              </div>
              {/* {item.isbind ? (
                <div
                  className="account-wallet-info-right-l"
                  onClick={() => unbindFunction(item.name)}
                >
                  <SvgIcon name="closebtn" />
                </div>
              ) : (
                <div className="to-other-bind">
                  <div className="go-loginorbind">
                    <img src="/images/icon/pointbind.png" alt="" />
                  </div>
                  {item.name === 'Google' && <div id="google_bind" className="bind-google" />}
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    ),
    [otherlist, unbindFunction, userBindOther]
  );

  // change password
  const ChangePassword = useMemo(
    () => (
      <div className="usercenter-account-con">
        <div className="usercenter-account-con-info">
          <div className="account-wallet-info-left">
            <div className="account-wallet-info-left-top">
              <TitleCurreny title="Change Password" size="only" />
            </div>
          </div>
          <div className="account-wallet-connect" onClick={handleChangePasd}>
            Revise
          </div>
        </div>
      </div>
    ),
    [handleChangePasd]
  );
  return (
    <div className="usercenter-account">
      <div className="usercenter-account-item">
        <h3>{t('user_connect_wallet')}</h3>
        {walletDom}
      </div>
      <div className="usercenter-account-item other-account">
        <h3>{t('user_connect_other')}</h3>
        {OtherAccount}
      </div>
      <div className="usercenter-account-item">
        <h3>{t('user_password')}</h3>
        {ChangePassword}
      </div>
      {isloading && (
        <WaitingLoading
          closeloading={() => {
            closeWarteFn();
          }}
        />
      )}
    </div>
  );
};
