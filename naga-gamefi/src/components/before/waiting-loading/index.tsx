import React from 'react';
import { Loader } from 'rsuite';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@rsuite/icons/Close';

import PopupPage from '../../popup-page';

import './index.scss';

export default (props: any) => {
  const { closeloading } = props;
  const { t } = useTranslation();
  return (
    <PopupPage
      children={
        <div className="wait-loading">
          <div className="wait-loading-con">
            <Loader size="md" />
          </div>
          <div className="wait-loading-desc">{t('user_other_loading')}...</div>
          <div className="close-loading" onClick={closeloading}>
            <CloseIcon />
          </div>
        </div>
      }
    />
  );
};
