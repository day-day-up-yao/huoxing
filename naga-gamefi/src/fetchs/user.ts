import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';
import useSWR from 'swr';
import { fetcher, inviteCodeQuery } from 'src/utils/axios';
import { user } from '../models/apis';

// ------------------submitEmail------------------
export const getElmailaddress = async (payload: { email: string; captcha: string }) => {
  const res = await fetcher<boolean>({
    type: 'get',
    url: user.getemail,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------getAccountinfo------------------
export const getAccountInfo = async () => {
  const res = await fetcher<AccountInfoRes>({
    type: 'get',
    url: user.accountinfo,
  });
  return res;
};

export const accountInfoKey = 'accountInfo';
export const useGetAccountInfo = () => {
  const res = useSWR<AccountInfoRes>(accountInfoKey, getAccountInfo, {
    revalidateOnMount: false, // 在挂载组件时启用或禁用自动重新验证
    revalidateOnFocus: false, // 窗口聚焦时自动重新验证
    revalidateOnReconnect: false, // 浏览器恢复网络连接时自动重新验证
    revalidateIfStale: false, // 即使存在陈旧数据，也自动重新验证
  });

  return res;
};

// ------------------todiscordLogin------------------
export const todiscordLogin = async (payload: { code?: string | null; callback?: string }) => {
  const res = await fetcher({
    type: 'post',
    url: user.discordLogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
};

// ------------------reauthorizeDiscord------------------
export const reauthorizeDiscord = async (payload: { code?: string | null; callback?: string }) => {
  const res = await fetcher({
    type: 'post',
    url: user.reauthorizediscord,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------connectDiscord------------------
export const connectDiscord = async (payload: {
  code?: string | null;
  callback?: string;
  email?: string;
}) => {
  const res = await fetcher({
    type: 'post',
    url: user.connectdiscord,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------reauthorizeDiscord------------------
export const totwitterLogin = async (payload: { code?: string | null; callback?: string }) => {
  const res = await fetcher({
    type: 'post',
    url: user.twitterLogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
};

// ------------------reauthorizeTwitter------------------
export const reauthorizeTwitter = async (payload: { code?: string | null; callback?: string }) => {
  const res = await fetcher({
    type: 'post',
    url: user.reauthorizeTwitter,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------connectTwitter------------------
export const connectTwitter = async (payload: {
  code?: string | null;
  callback?: string;
  email?: string;
}) => {
  const res = await fetcher({
    type: 'post',
    url: user.connecttwitter,
    params: {
      ...payload,
    },
  });
  return res;
};

// ------------------getcodeAdress------------------
export async function getcodeAdress(payload: {
  address?: string;
  ypAuthenticate?: string;
  ypToken?: string;
  captcha?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.getcodeadress,
    params: {
      ...payload,
    },
  });
  return res;
}

// ------------------metamasketLogin------------------
export async function metamasketLogin(payload: {
  address?: string;
  signature?: string;
  verifyId?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.metamasketLogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
}

// ------------------googletoLogin------------------
export async function googletoLogin(payload: { credential?: string }) {
  const res = await fetcher({
    type: 'post',
    url: user.googleLogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
}

// ------------------bindEmailForUserCenter------------------
export async function bindEmailForUserCenter(payload: {
  email?: string;
  verifyCode?: number;
  verifyId?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.bindEmailForUserCenter,
    params: {
      ...payload,
    },
  });
  return res;
}

// ------------------getEmailcode------------------
export async function getEmailcode(payload: {
  email?: string;
  ypAuthenticate?: string;
  ypToken?: string;
  captcha?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.getemailcode,
    params: {
      ...payload,
    },
  });
  return res;
}

// ------------------passwordLogin------------------
export async function passwordLogin(payload: { email?: string; password?: string }) {
  const res = await fetcher({
    type: 'post',
    url: user.passwordlogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
}

// ------------------verifycodeLogin------------------
export async function verifycodeLogin(payload: {
  email?: string;
  verifyCode?: number;
  verifyId?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.verifycodelogin,
    params: {
      ...inviteCodeQuery(),
      ...payload,
    },
  });
  return res;
}

// ------------------verifycodeLogin------------------
export async function changeNickname(payload: { name?: string }) {
  const res = await fetcher({
    type: 'post',
    url: user.changeName,
    params: {
      ...payload,
    },
  });
  return res;
}

// ------------------changePassword------------------
export async function changePassword(payload: {
  email?: string;
  newPassword?: string;
  verifyCode?: number;
  verifyId?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.verifycodepassword,
    params: {
      ...payload,
    },
  });
  return res;
}

// ------------------changePassword------------------
export async function changeEmail(payload: {
  email?: string;
  verifyCode?: number;
  verifyCodeOld?: number;
  verifyIdOld?: string;
  verifyId?: string;
}) {
  const res = await fetcher({
    type: 'post',
    url: user.changeEmail,
    params: {
      ...payload,
    },
  });
  return res;
}

// ----------------------getMyNft----------------------
export async function getMyNft() {
  const res = await fetcher<MyNftRes>({
    type: 'get',
    url: user.getMyNft,
    headers: {
      auToken: Cookies.get('auToken'),
    },
  });
  return res.data;
}
export const myNftKey = 'myNft';
export const useGetMyNftKey = () => {
  const result = useSWRMutation(myNftKey, async () => {
    const res = await getMyNft();
    return res;
  });
  return result;
};
