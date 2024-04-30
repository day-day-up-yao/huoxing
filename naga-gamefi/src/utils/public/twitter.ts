import Cookies from 'js-cookie';

import { toast } from 'src/components/toast';
// import { paths } from 'src/routes/paths';
import { connectTwitter, reauthorizeTwitter, totwitterLogin } from 'src/fetchs/user';
import { loginSuccess, queryParam } from './index';

const resHanle = (res: any, linkTo: any) => {
  const linkpath = window.localStorage.getItem('twitterpath');
  // const taskdetailid = window.localStorage.getItem('taskdetail');
  // const gamedetailid = window.localStorage.getItem('gamedetail');
  window.localStorage.removeItem('againcode');
  // window.localStorage.removeItem('taskdetail');
  window.localStorage.removeItem('linkpath');
  if (res.code === 0) {
    // linkTo(linkpath);
    if (linkpath) window.location.href = linkpath;
    // if (taskdetailid) {
    //   linkTo(linkpath);
    // } else if (gamedetailid) {
    //   linkTo(`${paths.game}/${gamedetailid}`);
    // } else {
    //   linkTo(paths.userSetting);
    // }
  } else {
    toast.error(res.msg);
    if (linkpath) window.location.href = linkpath;
    // linkTo(linkpath);
    // if (!taskdetailid) {
    //   linkTo(paths.userSetting);
    // } else {
    //   linkTo(`${paths.taskDetail}/${taskdetailid}`);
    // }
  }
};

export const ConnectTwitter = (mutateUserPopup: any, linkTo: any) => {
  const redirect_uri = `${window.location.protocol}//${window.location.host}/twitter`;
  const againcode = window.localStorage.getItem('againcode');
  if (!Cookies.get('auToken')) {
    totwitterLogin({
      code: queryParam('code'),
      callback: redirect_uri,
    }).then((res: any) => {
      if (res.code === 0) {
        Cookies.set('codetwitter', queryParam('code') as string);
        if (res.data === null) {
          mutateUserPopup({ type: 3, bool: true });
        } else {
          loginSuccess(res);
        }
      } else {
        toast.error(res.msg);
        window.location.href = '/';
      }
    });
  } else if (againcode && againcode === '-401') {
    reauthorizeTwitter({
      code: queryParam('code'),
      callback: redirect_uri,
    }).then((res: any) => {
      resHanle(res, linkTo);
    });
  } else {
    connectTwitter({
      email: Cookies.get('email'),
      code: queryParam('code'),
      callback: redirect_uri,
    }).then((res: any) => {
      resHanle(res, linkTo);
    });
  }
  // if (queryParam('error')) {
  //     console.log('titter授权失败', queryParam('error'))
  // }
};
