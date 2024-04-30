import React, { useContext } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context';
import './index.scss';

export default (props: any) => {
  const { closePopup } = useContext(Context);
  const { t } = useTranslation();
  const { btnFn, isconcal } = props;
  return (
    <div className={classNames({ 'user-btn': isconcal })}>
      {isconcal && (
        <Button className="sure-btn concal-btn" onClick={closePopup}>
          {t('public_cancal')}
        </Button>
      )}
      <Button className="sure-btn" onClick={btnFn}>
        {t('public_sure')}
      </Button>
    </div>
  );
};
