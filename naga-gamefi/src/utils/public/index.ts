import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import BN from 'bignumber.js';
import { Base64 } from 'js-base64';
import md5 from 'blueimp-md5';
import { toast } from 'src/components/toast';
import { getTwitterlink } from 'src/models/subs/common-fetchers';
import { getDiscordLink } from 'src/models/subs/user-fetchers';
import { inviteCodeQuery } from '../axios';

export const isEmail = (email?: string) => {
  if (!email) return false;
  const myreg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return myreg.test(email) || false;
};

export const isPsd = (password?: string) => {
  if (!password) return false;
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
  return reg.test(password) || false;
};

export const isUsername = (username?: string) => {
  if (!username) return false;
  const reg = /[a-zA-Z0-9]{4,12}$/;
  return reg.test(username) || false;
};

export const isThisYear = (date: any, serverTime: any) =>
  new Date(date).getFullYear() ===
  (serverTime ? new Date(serverTime).getFullYear() : new Date().getFullYear());

export const isToday = (date: any, serverTime: any) =>
  new Date(date).toDateString() ===
  (serverTime ? new Date(serverTime).toDateString() : new Date().toDateString());

export const queryParam = (key: string) => {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const result = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

export const downloadExcel = (binaryData: any, fileName: string) => {
  const a = document.createElement('a');
  a.download = fileName;
  a.style.display = 'none';
  a.href = URL.createObjectURL(new Blob([binaryData], { type: 'application/vnd.ms-excel' }));
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
};

export const TocopyText = (text: string, t?: any, ref?: any) => {
  if (!text) return;
  const aux = document.createElement('input');
  aux.setAttribute('value', text);
  if (ref) {
    ref.current.appendChild(aux);
  } else {
    document.body.append(aux);
  }
  aux.select();
  document.execCommand('copy');
  aux.remove();
  if (t) {
    toast.success(t('public_copy'));
  }
};

export const ajaxSignature = () => {
  const platform = 'naga_api_web';
  const appSecret = 'e5WxOit4wMePCAvB';
  const nonceArr = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890';
  const timestamp = parseInt(`${new Date().getTime() / 1000}`, 10);
  let nonce = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    const j = Math.round(Math.random() * nonceArr.length);
    nonce += nonceArr[j];
  }

  const sig = md5(`platform=${platform}&timestamp=${timestamp}&nonce=${nonce}&${appSecret}`);

  return Base64.encode(
    JSON.stringify({
      platform,
      nonce,
      timestamp,
      sig,
    })
  );
};

export const getDaiContractInfo = async (
  chainTitle: string,
  daiAddress?: string,
  isToken = false
) => {
  if (typeof window.ethereum === 'undefined') {
    alert('请安装 MetaMask！');
    return undefined;
  }
  const urlData: any = {
    Ethereum: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    'BNB Chain': 'https://bsc-dataseed1.defibit.io',
    Polygon: 'https://rpc-mainnet.maticvigil.com',
    Avalanche: 'https://api.avax.network/ext/bc/C/rpc',
    Optimism: 'https://mainnet.optimism.io',
    Arbitrum: 'https://arb1.arbitrum.io/rpc',
    zkSync: ' https://mainnet.era.zksync.io',
  };

  const { ethers, JsonRpcProvider } = require('ethers');

  const chainUrl = urlData[chainTitle];
  // const provider = new (ethers as any).providers.JsonRpcProvider(chainUrl);
  const provider = new JsonRpcProvider(chainUrl);
  const daiAbi = [
    // Some details about the token
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    // Get the account balance
    'function balanceOf(address) view returns (uint)',
    // Send some of your tokens to someone else
    'function transfer(address to, uint amount)',
    // An event triggered whenever anyone transfers to someone else
    'event Transfer(address indexed from, address indexed to, uint amount)',
  ];
  const daiContract = new ethers.Contract(daiAddress || '', daiAbi, provider);
  console.log('daiContract: ', daiContract.address);

  const obj: any = {};

  try {
    const name = await daiContract.name();
    obj.name = name;
  } catch (error) {
    return undefined;
  }

  if (isToken) {
    const symbol = await daiContract.symbol();
    obj.symbol = symbol;
  }

  return obj;
};

export const formatTime = (date: any, fmt: any) => {
  const This = new Date(date);
  const o = {
    'M+': This.getMonth() + 1, // 月份
    'd+': This.getDate(), // 日
    'h+': This.getHours(), // 小时
    'm+': This.getMinutes(), // 分
    's+': This.getSeconds(), // 秒
    'q+': Math.floor((This.getMonth() + 3) / 3), // 季度
    S: This.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${This.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? (o as any)[k]
          : `00${(o as any)[k]}`.substr(`${(o as any)[k]}`.length)
      );
    }
  }
  return fmt;
};

export const getFullNum = (num: any) => {
  // 处理非数字
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(num)) {
    return num;
  }
  // 处理不需要转换的数字
  const str = `${num}`;
  if (!/e/i.test(str)) {
    return num;
  }
  return num.toFixed(18).replace(/\.?0+$/, '');
};

const key = CryptoJS.enc.Utf8.parse('Tbz]OdjAyhpYOIKB'); // 十六位十六进制数作为密钥
export const javaEncrypt = (word: string) => {
  // const key = 'Tbz]OdjAyhpYOIKB'
  const bytes = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(word), key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const result = CryptoJS.enc.Base64.stringify(bytes.ciphertext);
  return result;
};

export const twitterLogin = () => {
  let twitterlink = '';
  const redirecttwitter = `${window.location.protocol}//${window.location.host}/twitter`;
  const path = window.location.pathname;
  window.localStorage.setItem('twitterpath', path);

  getTwitterlink().then((res: any) => {
    if (res.code === 0) {
      twitterlink = res.data?.replace('nagacallback', redirecttwitter);
      window.location.href = twitterlink;
    }
  });
  // https://twitter.com/i/oauth2/authorize?client_id=NTFXUExWS25KTVFzRzIwZTdzQ2I6MTpjaQ&redirect_uri=https://api.marslib.com/naga/twitter/callback&response_type=code&scope=tweet.read+users.read+like.read+follows.read+offline.access&code_challenge=challenge&code_challenge_method=plain&state=1
  // twitterlink = `${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&code_challenge=${code_challenge}&code_challenge_method=${code_challenge_method}&state=${state}`
  // window.location.href = twitterlink
};

export const formatNum = (number?: number) => {
  // 数字每3位用逗号分隔
  if (!number) return number;
  const n = Math.abs(number);
  const reg = /\.\d+/;
  const num = (n || 0).toString();
  const temp = reg.exec(num);
  // 获取小数部分，不存在小数则获取空字符串
  const decimal = temp && temp[0] ? temp[0] : '';
  // 获取小数点位置，不存在小数位置则获取字符串长度
  const decimalPointIndex = temp && temp.index ? temp.index : num.length;
  // 获取整数部分
  let integerNum = num.slice(0, decimalPointIndex);
  let result = '';
  // 逗号分隔操作
  while (integerNum.length > 3) {
    result = `,${integerNum.slice(-3)}${result}`;
    integerNum = integerNum.slice(0, integerNum.length - 3);
  }
  // 不足3位直接加到最前面
  if (integerNum) {
    result = integerNum + result;
  }
  // 最后面加上小数部分
  result += decimal;
  return number !== 0 ? (number > 0 ? result : `-${result}`) : 0;
};

export const discordLogin = () => {
  let twitterlink = '';
  const redirecttwitter = `${window.location.protocol}//${window.location.host}/discord`;
  const path = window.location.pathname;
  window.localStorage.setItem('discordpath', path);
  getDiscordLink().then((res: any) => {
    if (res.code === 0) {
      twitterlink = res.data?.replace('nagacallback', redirecttwitter);
      window.location.href = twitterlink;
    }
  });
};

export const formatPublishTime = (
  t: any,
  publishTime: number,
  requestTime?: number,
  mode?: any
) => {
  let hourMode = 'hh:mm';
  let dayMode = 'MM-dd hh:mm';
  let yearMode = 'yyyy-MM-dd hh:mm';
  if (mode) {
    if (mode.hour) hourMode = mode.hour;
    if (mode.day) dayMode = mode.day;
    if (mode.year) yearMode = mode.year;
  }
  requestTime = !requestTime ? new Date().getTime() : requestTime;
  const limit = parseInt(`${requestTime - publishTime}`, 10) / 1000;
  if (limit < 60) {
    return t('time_just');
  }
  if (limit >= 60 && limit < 3600) {
    return t('time_min_ago', { time: Math.floor(limit / 60) });
  }
  if (limit >= 3600 && limit < 86400) {
    return t('time_hour_ago', { time: Math.floor(limit / 3600) });
  }
  const timeFormat = isThisYear(publishTime, requestTime)
    ? isToday(publishTime, requestTime)
      ? hourMode
      : dayMode
    : yearMode;
  return formatTime(publishTime, timeFormat);
};

/**
 * @desc 普通数值显示保留几位小数
 * @Params (value, decimalDigits, params)
 * @method numberDecimal(value, decimalDigits, params)
 */
export function numberDecimal(
  value: BN.Value | ((CloneBn: typeof BN) => BN.Value),
  decimalDigits = 2,
  params?: { toFixed?: boolean; roundUp?: boolean }
): string {
  const CloneBn = BN.clone();
  CloneBn.config({
    DECIMAL_PLACES: decimalDigits,
    ROUNDING_MODE: params && params.roundUp ? BN.ROUND_UP : BN.ROUND_DOWN,
    EXPONENTIAL_AT: 1e9,
  });
  const val = typeof value === 'function' ? value(CloneBn) : value;

  if (params && params.toFixed) {
    return new CloneBn(val).toFixed(decimalDigits);
  }
  return new CloneBn(val).toString(10);
}

export const formattingNum = (
  num: number | undefined | string,
  isman?: boolean,
  isFixed?: number,
  showK?: boolean
  // tip?: string
) => {
  if (!num || num === '') return '--';

  let newnum = '';
  if (Number(num) >= 1000000000) {
    newnum = `${numberDecimal(Number(Number(num) / 1000000000), 1)}B`;
    return newnum;
  }
  if (Number(num) >= 1000000) {
    newnum = `${numberDecimal(Number(Number(num) / 1000000), 1)}M`;
    return newnum;
  }
  if (Number(num) >= (showK ? 10000 : 1000)) {
    newnum = `${numberDecimal(Number(Number(num) / 1000), 1)}K`;
    return newnum;
  }
  if (!isman) {
    newnum =
      Number(num) < 10
        ? isFixed
          ? numberDecimal(Number(num), isFixed)
          : numberDecimal(Number(num), 2)
        : numberDecimal(Number(num), 1);
    return Number(newnum).toString();
  }
  if (isman) {
    return num.toString();
  }

  return '--';
};

// --------------------loginSuccess------
export const cookiesName = {
  username: 'username',
  uid: 'uid',
  email: 'email',
  auToken: 'auToken',
  lang: 'lang',
  avatarUrl: 'avatarUrl',
  isbindmetmask: 'isbindmetmask',
  adminGameId: 'adminGameId',
};
export const funcUrlDel = (name: any) => {
  const loca = window.location;
  // var baseUrl = loca.origin + loca.pathname + '?'
  const query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    const obj = {};
    const arr = query.split('&') as any;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=') as unknown as any;
      (obj as any)[arr[i][0]] = arr[i][1] as unknown as any;
    }
    delete (obj as any)[name] as unknown as any;
    const url = loca.origin;
    return url;
  }
  return window.location.href;
};
export const loginSuccess = (res: any) => {
  const info = res.data;
  // let domain = 'naga.io'
  let avatarUrl = '/images/icon/morenimg.png';
  if (info.avatarUrl) {
    // eslint-disable-next-line prefer-destructuring
    avatarUrl = info.avatarUrl;
  }
  Cookies.set(cookiesName.username, info.name);
  Cookies.set(cookiesName.uid, info.uid);
  Cookies.set(cookiesName.email, info.email);
  Cookies.set(cookiesName.auToken, info.auToken);
  Cookies.set(cookiesName.adminGameId, info.adminGameId);
  Cookies.set(cookiesName.avatarUrl, avatarUrl);
  //   const links = funcUrlDel('code');
  //   window.location.href = links;

  const { inviteCode } = inviteCodeQuery();
  if (inviteCode) {
    window.location.href = '/';
    return;
  }

  window.location.reload();
};

/**
 * @desc windows系统还是mac系统
 * @method getPosType()
 */
export const getPosType = () => {
  let postype = 0;
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (
    agent.indexOf('win32') >= 0 ||
    agent.indexOf('wow32') >= 0 ||
    agent.indexOf('win64') >= 0 ||
    agent.indexOf('wow64') >= 0
  ) {
    postype = 1;
  }
  if (isMac) {
    postype = 2;
  }
  return postype;
};

/**
 * @desc 域名判断https://launchapp.naga.io/ 客户端使用
 */
export const clientwebsitlist = ['launchapp.naga.io', 'launchapp.naga.one'];
export const clientWebsit = (req?: any) =>
  req && typeof window === 'undefined'
    ? clientwebsitlist.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1
    : clientwebsitlist.indexOf(window.location.hostname) > -1;

/**
 * @desc 域名判断https://testnet.naga.io/ 客户端使用
 */
export const testnetwebsitlist = ['testnet.naga.io', 'testnet.naga.one'];
export const testnetWebsit = (req?: any) =>
  req && typeof window === 'undefined'
    ? testnetwebsitlist.indexOf(req.hostname || req.headers['x-forwarded-host']) > -1
    : testnetwebsitlist.indexOf(window.location.hostname) > -1;
