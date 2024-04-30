import React, { useContext } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import './index.scss';

import { Context } from '../context';

export default ({ timestatus, questdetail, googleCaptchaToken }: any) => {
  const { t } = useTranslation();
  const { taskSubmit, submitfinish } = useContext(Context);
  // const alltasknum = questdetail.taskList.length
  const classnames = classNames('task-detail-btn', {
    'task-not-start-btn': timestatus === 0,
    // 'task-detail-btn-ing': timestatus === 1,
    'task-detail-btn-ed': timestatus === 2,
    'task-detail-btn-finish': submitfinish === 1 && timestatus === 1,
  });
  let timeinfo = '';
  if (timestatus === 0)
    timeinfo = `${t('quest_detail_start_time')} ： （UTC+8） ${moment(
      questdetail.beginTime * 1000
    ).format('YYYY-MM-DD HH:mm')}`;
  if (timestatus === 1) {
    timeinfo = t('quest_detail_push_btn');
  }
  if (timestatus === 1 && submitfinish === 1) {
    timeinfo = t('quest_detail_push_btn_ed');
  }
  if (timestatus === 2) timeinfo = t('quest_detail_end_btn');
  return (
    <div
      className={classnames}
      style={{ opacity: questdetail.googleCaptcha ? (googleCaptchaToken ? '1' : '0.6') : '1' }}
      onClick={() => {
        if (questdetail.googleCaptcha && !googleCaptchaToken) return;
        taskSubmit({ reCaptchaToken: googleCaptchaToken });
      }}
    >
      {timeinfo}
    </div>
  );
};
