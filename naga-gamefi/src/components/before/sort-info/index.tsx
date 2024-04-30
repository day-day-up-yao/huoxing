import React, { useMemo } from 'react';
import classNames from 'classnames';

import './index.scss';

const SortInfo = (props: {
  score?: any;
  isdetail?: any;
  isbanner?: any;
  className?: any;
  style?: any;
  isUser?: any;
}) => {
  const { score, isdetail, isbanner, className, style, isUser } = props;

  // 设置 评分 背景
  const sortBg = useMemo(() => {
    let sortbg = '';

    if (Number(score) === 0) {
      sortbg = '/images/bigimg/zerosort.png';
    } else if (Number(score) <= 4 && Number(score) > 0) {
      sortbg = '/images/bigimg/sortsmall.png';
    } else if (Number(score) > 4.1 && Number(score) <= 7) {
      sortbg = '/images/bigimg/sortlittle.png';
    } else if (Number(score) > 7) {
      sortbg = '/images/bigimg/sortbig.png';
    }

    return sortbg;
  }, [score]);

  // 评分Dom
  const scoreBox = useMemo(() => {
    const classes = classNames('game-score', className, {
      'detail-sore': isdetail,
      'banner-sort': isbanner,
      'zero-style': Number(score) === 0,
    });

    const show = (score && !isUser && Number(score) !== 0) || isUser;

    return (
      <>
        {show && (
          <div
            className={classes}
            style={{
              backgroundImage: `url(${sortBg})`,
              ...style,
            }}
          >
            {isUser && Number(score) === 0
              ? 'TBA'
              : Number(score) >= 10
              ? '10'
              : Number(score).toFixed(1)}
          </div>
        )}
      </>
    );
  }, [className, isdetail, isbanner, score, isUser, sortBg, style]);

  return scoreBox;
};

export default SortInfo;
