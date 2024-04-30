import Cookies from 'js-cookie';

import { toast } from 'src/components/toast';
// import { paths } from 'src/routes/paths';
import { connectDiscord, reauthorizeDiscord, todiscordLogin } from 'src/fetchs/user';
import { loginSuccess, queryParam } from './index';

const resHanle = (res: any, linkTo: any) => {
  const linkpath = window.localStorage.getItem('discordpath');
  // const taskdetailid = window.localStorage.getItem('taskdetail');
  // const gamedetailid = window.localStorage.getItem('gamedetail');
  window.localStorage.removeItem('againcode');
  // window.localStorage.removeItem('taskdetail');
  window.localStorage.removeItem('linkpath');
  if (res.code === 0 && linkpath) {
    window.location.href = linkpath;
    // linkTo(linkpath);
    // if (taskdetailid) {
    //   linkTo(`${paths.taskDetail}/${taskdetailid}`);
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

export const ConnectDiscord = (
  mutateUserPopup: (params: MutateUserPopupParams) => void,
  linkTo: any
) => {
  const redirect_uri = `${window.location.protocol}//${window.location.host}/discord`;
  const againcode = window.localStorage.getItem('againcode');
  if (!Cookies.get('auToken')) {
    todiscordLogin({
      code: queryParam('code'),
      callback: redirect_uri,
    }).then((res: any) => {
      if (res.code === 0) {
        Cookies.set('codediscord', queryParam('code') as string);
        if (res.data === null) {
          mutateUserPopup({ type: 3, bool: true });
        } else {
          //   console.log(res.data);
          loginSuccess(res);
        }
      } else {
        toast.error(res.msg);
        window.location.href = '/';
      }
    });
  } else if (againcode && againcode === '-402') {
    reauthorizeDiscord({
      code: queryParam('code'),
      callback: redirect_uri,
    }).then((res: any) => {
      resHanle(res, linkTo);
    });
  } else {
    connectDiscord({
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
