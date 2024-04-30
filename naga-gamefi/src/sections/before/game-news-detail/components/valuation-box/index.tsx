import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

const GameEvaluationBox = (props: any) => {
  const { name, score, summary, advantage, disadvantage } = props;
  const { t } = useTranslation();

  // 测评总结 ———— 移动端
  const summaryMDom = useMemo(
    () => <div className="game-news-detail-evaluation-summary-m">{summary}</div>,
    [summary]
  );

  // 设置 评分 说明
  const sortText = useMemo(() => {
    let text = '';

    if (Number(score) === 0) {
      text = t('rate_text_poor');
    } else if (Number(score) <= 4 && Number(score) > 0) {
      text = t('rate_text_poor');
    } else if (Number(score) > 4.1 && Number(score) <= 7) {
      text = t('rate_text_generally');
    } else if (Number(score) > 7) {
      text = t('rate_text_recommend');
    }

    return text;
  }, [score, t]);

  // 左侧
  const leftDom = useMemo(
    () => (
      <div className="game-news-detail-evaluation-left">
        {summaryMDom}
        <div className="game-news-detail-evaluation-name">{name}</div>
        <div className="game-news-detail-evaluation-score-box">
          <div className="game-news-detail-evaluation-score-num">{score}</div>
          <div className="game-news-detail-evaluation-score-text">{sortText}</div>
        </div>
      </div>
    ),
    [name, score, sortText, summaryMDom]
  );

  // 测评总结
  const summaryDom = useMemo(
    () => <div className="game-news-detail-evaluation-summary">{summary}</div>,
    [summary]
  );

  // 测评优点
  const prosDom = useMemo(
    () => (
      <div className="game-news-detail-evaluation-pros-cons" style={{ marginBottom: '32px' }}>
        <div className="game-news-detail-evaluation-pros-cons-title">
          <div className="game-news-detail-evaluation-pros-cons-line pros" />
          {t('evaluation_pros')}
        </div>
        {advantage?.split(',').map((item: any, index: number) => (
          <div className="game-news-detail-evaluation-pros-cons-text-box" key={index}>
            <div className="game-news-detail-evaluation-pros-cons-dot">·</div>
            <div className="game-news-detail-evaluation-pros-cons-text">{item}</div>
          </div>
        ))}
      </div>
    ),
    [advantage, t]
  );

  // 测评缺点
  const consDom = useMemo(
    () => (
      <div className="game-news-detail-evaluation-pros-cons">
        <div className="game-news-detail-evaluation-pros-cons-title">
          <div className="game-news-detail-evaluation-pros-cons-line cons" />
          {t('evaluation_cons')}
        </div>
        {disadvantage?.split(',').map((item: any, index: any) => (
          <div className="game-news-detail-evaluation-pros-cons-text-box" key={index}>
            <div className="game-news-detail-evaluation-pros-cons-dot">·</div>
            <div className="game-news-detail-evaluation-pros-cons-text">{item}</div>
          </div>
        ))}
      </div>
    ),
    [disadvantage, t]
  );

  // 右侧
  const rightDom = useMemo(
    () => (
      <div className="game-news-detail-evaluation-right">
        {summaryDom}
        {prosDom}
        {consDom}
      </div>
    ),
    [consDom, prosDom, summaryDom]
  );

  return (
    <div className="game-news-detail-evaluation-box">
      {leftDom}
      {rightDom}
    </div>
  );
};

export default GameEvaluationBox;
