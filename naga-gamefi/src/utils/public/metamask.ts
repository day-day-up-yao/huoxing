import Cookies from 'js-cookie';
import { toast } from 'src/components/toast';
import { getcodeAdress } from 'src/fetchs/user';
import { javaEncrypt } from './index';

export const ConnectMetamask = async () => {
  if (!window.ethereum) {
    toast.error('Get MetaMask!');
    return undefined;
  }

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  let address = '';
  let sign = '';
  let verifyId = '';

  if (accounts[0]) {
    address = accounts[0];
    Cookies.set('address', address);

    try {
      // 获取签名提示信息
      const resCode = await getcodeAdress({
        address,
        ypAuthenticate: 'string',
        ypToken: 'string',
        captcha: javaEncrypt(parseInt(`${new Date().getTime() / 1000}`, 10).toString()),
      });

      if (resCode && resCode.code === 0) {
        try {
          const { message } = resCode.data;
          // eslint-disable-next-line prefer-destructuring
          verifyId = resCode.data.verifyId;
          sign = await window.ethereum.request({
            method: 'personal_sign',
            params: [message, address],
          });
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
      } else {
        toast.error(resCode.msg);
      }
    } catch (error) {
      toast.error('Network issue,please ty again');
    }
  }

  return {
    address,
    sign,
    verifyId,
  };
};
