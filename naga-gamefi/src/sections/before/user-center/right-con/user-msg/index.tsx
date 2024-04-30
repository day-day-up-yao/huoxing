import React, { useMemo, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
// import Upload from 'rc-upload'
import PageNextIcon from '@rsuite/icons/PageNext';
import ReloadIcon from '@rsuite/icons/Reload';
import { Uploader, Avatar } from 'rsuite';
import Cookies from 'js-cookie';

import './index.scss';

import { useUserPopup } from 'src/fetchs/store';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';
import { Context } from '../../context';

export default () => {
  const { fileInfo, accountinfo, t } = useContext(Context);
  const dispatch = useDispatch();
  // const [fileInfo, setFileInfo] = useState()
  const userinfo = [
    {
      name: 'UID',
      text: accountinfo.uidStr,
      type: 'uid',
    },
    {
      name: t('user_avator'),
      text: accountinfo.avatarUrl,
      type: 'userimg',
    },
    {
      name: t('user_nickname'),
      text: accountinfo.name,
      type: 'username',
      changetype: 4,
    },
    // {
    //     name: 'Email',
    //     text: accountinfo.email || '',
    //     type: 'email',
    //     changetype: 5
    // },
    {
      name: t('user_password'),
      text: '········',
      type: 'password',
      changetype: 6,
    },
  ];

  // 更改用户资料弹窗
  const { mutate: mutateUserInfo } = useUserPopup();
  const ChangeUser = useCallback(
    (item: any) => {
      if (item) {
        if (item.changetype) {
          mutateUserInfo({ type: item.changetype, bool: true });
        }
      }
    },
    [mutateUserInfo]
  );

  // 上传/替换头像
  const avatarDom = useMemo(
    () => (
      <div className="avatar-con">
        <Uploader
          className="img-up-loader"
          name="uploadFile"
          action={`${HOST_API}/api/upload/uploadImage`}
          fileListVisible={false}
          listType="picture"
          headers={{
            auToken: Cookies.get('auToken'),
            'Sign-Param': ajaxSignature(),
          }}
          onError={(err) => {
            console.log(err, 'ERR');
          }}
          // headers={{
          //     auToken: Cookies.get('auToken')
          // }}
          onUpload={(filter) => {
            console.log(filter);
          }}
          onSuccess={(res) => {
            if (res.code === 0) {
              dispatch.user.updateAvatar({
                avatarUrl: res.data,
              });
              Cookies.set('avatarUrl', res.data);
              window.location.reload();
            }
          }}
        >
          <Avatar
            src={fileInfo}
            // isround
          />
        </Uploader>
        <div className="avatar-con-icon">
          <ReloadIcon />
        </div>
      </div>
    ),
    [dispatch.user, fileInfo]
  );
  return (
    <div className="user-message">
      {userinfo.map((item, index) => (
        <div className="user-message-item" key={index} onClick={() => ChangeUser(item)}>
          <div className="user-message-item-left">
            <div className="user-message-item-left-title">{item.name}</div>
            <div className="user-message-item-left-info">
              {item.type === 'userimg' ? avatarDom : item.text}
            </div>
          </div>
          {item.type !== 'uid' && item.type !== 'userimg' && (
            <div className="user-message-item-right">
              <PageNextIcon />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
