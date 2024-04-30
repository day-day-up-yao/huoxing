import Cookies from 'js-cookie';
import { upload } from 'src/models/apis';
import { fetcher } from 'src/utils/axios';

export const uploadFile = async (payload: FormData) => {
  const res = await fetcher<UploadRes>({
    type: 'post',
    url: upload.uploadFile,
    timeout: 15000,
    headers: {
      auToken: Cookies.get('auToken'),
    },
    params: payload,
  });
  return res;
};

export const uploadDeckFile = async (payload: FormData) => {
  const res = await fetcher<UploadRes>({
    type: 'post',
    url: upload.uploadDeckfile,
    timeout: 15000,
    headers: {
      auToken: Cookies.get('auToken'),
    },
    params: payload,
  });
  return res;
};

export const uploadImage = async (payload: FormData) => {
  const res = await fetcher<UploadRes>({
    type: 'post',
    url: upload.uploadImage,
    timeout: 15000,
    headers: {
      auToken: Cookies.get('auToken'),
    },
    params: payload,
  });
  return res;
};
