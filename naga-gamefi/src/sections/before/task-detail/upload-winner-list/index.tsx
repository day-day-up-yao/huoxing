import React, { useContext } from 'react';
import { Uploader } from 'rsuite';
import Cookies from 'js-cookie';

import PopupPage from 'src/components/popup-page';
import SvgIcon from 'src/components/svg-icon';
import { HOST_API } from 'src/config-global';
import { Context } from '../context';

import './index.scss';

export default () => {
  const { questdetail, winnerPopup, upLoaderFn, t } = useContext(Context);
  return (
    <PopupPage
      children={
        <div className="upload-task-winnerlist">
          <div className="upload-task-winnerlist-title">Upload the list of winners</div>
          <div className="upload-task-winnerlist-con">
            <Uploader
              className="upload-task-winnerlist-con-up"
              action={`${HOST_API}/api/quest/uploadWinnerSheet`}
              fileListVisible={false}
              // listType="picture-text"
              data={{ questId: questdetail.id }}
              name="file"
              headers={{
                auToken: Cookies.get('auToken'),
              }}
              onError={(err) => {
                console.log(err, 'ERR');
              }}
              onUpload={(filter) => {
                console.log(filter);
              }}
              onSuccess={(res) => {
                upLoaderFn(res);
              }}
            >
              <div className="upload-task-winnerlist-con-btn">
                <SvgIcon name="taskupload" />
                <span>{t('public_uploader')}</span>
              </div>
            </Uploader>
          </div>
          <div className="upload-task-winnerlist-close" onClick={() => winnerPopup(false)}>
            <img src="/images/icon/closeicon.webp" alt="" />
          </div>
        </div>
      }
    />
  );
};
