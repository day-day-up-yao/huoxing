import React, { createContext, useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import md5 from 'blueimp-md5';
import Cookies from 'js-cookie';
import sha1 from 'js-sha1';
import {
  isEmail,
  isPsd,
  loginSuccess,
  isUsername,
  queryParam,
  javaEncrypt,
  twitterLogin,
  discordLogin,
} from 'src/utils/public';
import { toast } from 'src/components/toast';
import { useUserPopup } from 'src/fetchs/store';
import {
  bindEmailForUserCenter,
  changeEmail,
  changeNickname,
  changePassword,
  getEmailcode,
  googletoLogin,
  metamasketLogin,
  passwordLogin,
  verifycodeLogin,
} from 'src/fetchs/user';

export const Context = createContext({} as any);
export default (props: any) => {
  const { t } = useTranslation();
  const emailRef = useRef<string>();
  const verifyidRef = useRef();
  const newverifyidRef = useRef();
  const newEmailRef = useRef<string>();
  const twovrifyRef = useRef<number>();
  const isnewCodeRef = useRef<boolean>();
  const { children } = props;
  // const { showType, pageflag } = useSelector(
  //   (state: RootState) => selectDatas(state),
  //   shallowEqual
  // );

  const {
    data: { showType, pageflag },
  } = useUserPopup();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logintype, setLogintype] = useState<string>(); // metamask google twitter
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [metamaskinfo, setMetamaskinfo] = useState({
    address: '',
    sign: '',
    verifyId: '',
  });

  const [showtypes, setShowtypes] = useState(showType);
  const [emailtype, setEmailtype] = useState(0);
  const [padcode, setPadcode] = useState<string>();
  const [emailcode, setEmailcode] = useState<number>();
  const [sendtime, setSendtime] = useState<number | boolean>(false);
  const [againtime, setAgaintime] = useState(false);
  const [nickname, setNickname] = useState<string>();
  const [codeerror, setCodeerror] = useState(false);
  const [loadingflag, setLoadingflag] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [redirecttwitter, setRedirecttwitter] = useState<string>();
  // 修改弹窗现实类型
  const chanceType = useCallback(
    (type: number) => {
      setShowtypes(type);
      let clienttype = 'toAuthCode';
      if (type === 1) clienttype = 'toAuthCode';
      if (type === 2) clienttype = 'toRetPassword';
      if (type === 3) clienttype = 'toBindMail';
      // if (type === 4) clienttype = 'toBindMail'
      if (type === 5) clienttype = 'toChangeMial';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      /* global NimCefWebInstance NimCefWebInstance:true */
      /* eslint no-undef: ["error", { "typeof": true }] */
      if (pageflag) {
        window.NimCefWebInstance.call('SwitchWindow', { clienttype }, (error: any, result: any) => {
          console.log(result);
        });
      }
    },
    [pageflag]
  );

  useEffect(() => {
    setShowtypes(showType);
  }, [showType]);

  useEffect(() => {
    const websithost = `${window.location.protocol}//${window.location.host}`;
    setRedirecttwitter(websithost);
    if (Cookies.get('email')) {
      emailRef.current = Cookies.get('email');
    }
  }, []);

  // 获取邮箱
  const getEmail = useCallback((mail: string) => {
    emailRef.current = mail;
    if (!isEmail(mail)) {
      setSendtime(0);
    } else {
      setSendtime(false);
    }
  }, []);

  // 获取新邮箱地址
  const getNewemail = useCallback((email?: string) => {
    newEmailRef.current = email;
  }, []);

  // 获取密码
  const getPassword = useCallback((psd?: string) => {
    setPadcode(psd);
  }, []);

  // 获取验证码
  const getEmailCode = useCallback((code?: number) => {
    setEmailcode(code);
  }, []);

  // 修改邮箱获取验证码
  const getNewemailCode = useCallback((code?: number) => {
    twovrifyRef.current = code;
  }, []);

  // 获取昵称
  const getName = useCallback((name?: string) => {
    setNickname(name);
  }, []);

  // 倒计时开关
  const sendTimeflag = useCallback(() => {
    if (isnewCodeRef.current) {
      setAgaintime(false);
    } else {
      setSendtime(false);
    }
  }, [isnewCodeRef]);

  // 登录loading
  const getLoginLoading = useCallback((load: boolean) => {
    setLoadingflag(load);
  }, []);

  // 第三方谷歌登录
  const googleLogin = useCallback(
    (coding: string) => {
      setLogintype('google');
      googletoLogin({
        credential: coding,
      }).then((res: any) => {
        if (res.code === 0) {
          if (res.data === null) {
            chanceType(3);
          } else if (pageflag) {
            loginsuccClient(res);
          } else {
            loginSuccess(res);
          }
        } else {
          toast.error(res.msg);
        }
      });
    },
    [chanceType, pageflag]
  );

  // 推特授权登录
  const twitterToLogin = useCallback(() => {
    setLogintype('twitter');
    twitterLogin();
  }, []);

  // Discord授权登录
  const discordToLogin = useCallback(() => {
    setLogintype('discord');
    discordLogin();
  }, []);

  // 绑定邮箱
  const bindEmailFn = useCallback(() => {
    // console.log(queryParam('code'), Cookies.get('codetwitter'))
    const successBind = (res: any) => {
      if (res.code === 0) {
        // 取消强制邮箱绑定 登录
        // if (pageflag) {
        //     loginsuccClient(res)
        // } else {
        //     loginSuccess(res)
        // }
        window.location.reload();
      } else if (res.code === -10104) {
        setCodeerror(true);
      } else {
        toast.error(res.msg);
      }
    };

    if (isEmail(emailRef.current) && emailcode && verifyidRef.current) {
      bindEmailForUserCenter({
        email: emailRef.current,
        verifyCode: emailcode,
        verifyId: verifyidRef.current,
      }).then((res: any) => {
        successBind(res);
      });
    }
  }, [emailcode]);

  // 关闭弹窗
  const { mutate: mutateUserInfo } = useUserPopup();
  const closePopup = useCallback(() => {
    mutateUserInfo({ type: 0, bool: false });
    if (!Cookies.get('uid')) setShowtypes(0);
    getEmailCode();
    setNickname(undefined);
    setEmailcode(undefined);
    setPadcode(undefined);
  }, [getEmailCode, mutateUserInfo]);

  // 切换登录方式 验证码登录or密码登录 0 验证码 1 密码
  const selectEmailtype = useCallback(() => {
    let clienttype = 'toAuthCode';
    if (emailtype === 0) {
      setEmailtype(1);
      clienttype = 'toLogin';
    } else {
      setEmailtype(0);
      clienttype = 'toAuthCode';
    }
    if (pageflag) {
      window.NimCefWebInstance.call('SwitchWindow', { clienttype }, (error: any, result: any) => {
        console.log(result);
      });
    }
  }, [emailtype, pageflag]);

  // 获取验证码
  const getVerifycode = useCallback(() => {
    if (isnewCodeRef.current) {
      setAgaintime(true);
    } else {
      setSendtime(true);
    }
    getEmailcode({
      email: isnewCodeRef.current ? newEmailRef.current : emailRef.current,
      ypAuthenticate: 'string',
      ypToken: 'string',
      captcha: javaEncrypt(parseInt(`${new Date().getTime() / 1000}`, 10).toString()),
    }).then((res: any) => {
      if (res.code === 0) {
        if (isnewCodeRef.current) {
          newverifyidRef.current = res.data.verifyId;
        } else {
          verifyidRef.current = res.data.verifyId;
        }
      } else {
        toast.error(res.msg);
      }
    });
  }, []);

  // 登录成功以后客户端需要调用的方法
  const loginsuccClient = (res: any) => {
    // const message = document.getElementById('message_input').value
    // 调用一个 C++ 注册过的方法
    // const SwitchWindow = {}
    const client_token = queryParam('client_token');
    const signtrue = sha1(client_token + res.data.auToken + res.data.uid);
    const clientobj = {
      avatarUrl: res.data.avatarUrl,
      name: res.data.name,
      uid: res.data.uid,
      au_token: res.data.auToken,
      sign: signtrue,
    };
    const clientUserinfo = JSON.stringify(clientobj);
    window.NimCefWebInstance.call('LoginFinish', { clientUserinfo }, (error: any, result: any) => {
      console.log(result);
    });
  };

  // sendEmailcode
  const sendEmailcode = useCallback(
    (type: string) => {
      if (type === 'new') {
        isnewCodeRef.current = true;
        if (isEmail(newEmailRef.current)) {
          getVerifycode();
        }
      } else {
        isnewCodeRef.current = false;
        if (isEmail(emailRef.current)) {
          getVerifycode();
        }
      }
    },
    [getVerifycode]
  );

  // 密码/验证码登录
  const PsdLogin = useCallback(() => {
    if (emailtype === 1) {
      if (!padcode || !isEmail(emailRef.current) || !isPsd(padcode)) return;
      passwordLogin({
        email: emailRef.current,
        password: md5(padcode),
      }).then((res: any) => {
        if (res.code === 0) {
          if (pageflag) {
            loginsuccClient(res);
          } else {
            loginSuccess(res);
          }
          toast.success(t('message_login_success'));
        } else {
          toast.error(res.msg);
        }
      });
    } else {
      if (!emailRef.current || !emailcode) return;
      verifycodeLogin({
        email: emailRef.current,
        verifyCode: emailcode,
        verifyId: verifyidRef.current,
      }).then((res: any) => {
        if (res.code === 0) {
          if (pageflag) {
            loginsuccClient(res);
          } else {
            loginSuccess(res);
          }
        } else if (res.code === -10104) {
          setCodeerror(true);
        } else {
          toast.error(res.msg);
        }
      });
    }
  }, [emailtype, padcode, pageflag, t, emailcode]);

  // 修改昵称
  const modifyNickname = useCallback(() => {
    if (!isUsername(nickname)) return;
    changeNickname({
      name: nickname,
    }).then((res: any) => {
      if (res.code === 0) {
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    });
  }, [nickname]);

  // 修改密码
  const modifyPassword = useCallback(() => {
    if (!padcode || !isEmail(emailRef.current) || !isPsd(padcode)) return;
    changePassword({
      email: emailRef.current,
      newPassword: md5(padcode),
      verifyCode: emailcode,
      verifyId: verifyidRef.current,
    }).then((res: any) => {
      if (res.code === 0) {
        window.location.reload();
      } else if (res.code === -10104) {
        setCodeerror(true);
      } else {
        toast.error(res.code);
      }
    });
  }, [padcode, emailcode]);

  // 修改邮箱
  const modifyEmail = useCallback(() => {
    if (!isEmail(newEmailRef.current) || !emailcode || !twovrifyRef || !newverifyidRef?.current)
      return;
    changeEmail({
      email: newEmailRef.current,
      verifyCode: twovrifyRef.current,
      verifyCodeOld: emailcode,
      verifyIdOld: verifyidRef.current,
      verifyId: newverifyidRef.current,
    }).then((res: any) => {
      if (res.code === 0) {
        window.location.reload();
      } else if (res.code === -10104) {
        setCodeerror(true);
      } else {
        toast.error(res.code);
      }
    });
  }, [emailcode]);

  // 确认btn type：login登录
  const sureBtn = useCallback(
    (type: string) => {
      switch (type) {
        case 'login':
          PsdLogin();
          break;
        case 'changename':
          modifyNickname();
          break;
        case 'changepsd':
          modifyPassword();
          break;
        case 'changeemail':
          modifyEmail();
          break;
        case 'forgetpsd':
          modifyPassword();
          break;
        case 'bindemail':
          bindEmailFn();
          break;
        default:
          bindEmailFn();
      }
    },
    [PsdLogin, modifyNickname, modifyPassword, modifyEmail, bindEmailFn]
  );

  const values = useMemo(
    () => ({
      t,
      loginsuccClient,
      loadingflag,
      getLoginLoading,
      pageflag,
      sendtime,
      sendTimeflag,
      bindEmailFn,
      googleLogin,
      codeerror,
      showtypes,
      chanceType,
      closePopup,
      emailRef,
      againtime,
      twitterToLogin,
      discordToLogin,
      getEmail,
      getPassword,
      getEmailCode,
      selectEmailtype,
      sendEmailcode,
      getNewemail,
      getNewemailCode,
      getName,
      emailtype,
      sureBtn,
    }),
    [
      againtime,
      bindEmailFn,
      chanceType,
      closePopup,
      codeerror,
      discordToLogin,
      emailtype,
      getEmail,
      getEmailCode,
      getLoginLoading,
      getName,
      getNewemail,
      getNewemailCode,
      getPassword,
      googleLogin,
      loadingflag,
      pageflag,
      selectEmailtype,
      sendEmailcode,
      sendTimeflag,
      sendtime,
      showtypes,
      sureBtn,
      t,
      twitterToLogin,
    ]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
