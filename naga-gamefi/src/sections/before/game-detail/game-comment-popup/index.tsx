import React, { useMemo, useState } from 'react';
import { Rate, Input, Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import './index.scss';

import PopupPage from 'src/components/popup-page';
import SvgIcon from 'src/components/svg-icon';

// 星级 辅助文字
const rateTexts = {
  0: '',
  1: 'rate_text_poor',
  2: 'rate_text_poor',
  3: 'rate_text_generally',
  4: 'rate_text_recommend',
  5: 'rate_text_recommend',
};

const defaultStar = 0; // 默认星级
const maxLength = 300; // 评价最大字数

const GameDetailCommentPopup = (porps: any) => {
  const {
    onBtnCloseClick, // 关闭按钮事件
    onBtnOKClick, // 确定按钮事件
    content, // 编辑的文本
    star, // 编辑的星级
    id, // 评论id ———— 用来检验是否为编辑状态
    isNews, // 是否为 新闻/攻略 评论 ———— 没有评星评分功能
  } = porps;
  const { t } = useTranslation();
  const [hoverValue, setHoverValue] = useState(star || defaultStar); // 当前浮动星级
  const [starValue, setStarValue] = useState(star || defaultStar); // 当前确定星级
  const [inputValue, setInputValue] = useState(content || ''); // 当前输入框文字

  console.log(inputValue);

  // 评星框
  const rateBox = useMemo(
    () => (
      <div className="game-detail-comment-popup-rate-box">
        <Rate
          className="game-detail-comment-popup-rate"
          size="xs"
          defaultValue={star || defaultStar}
          color="red"
          onChangeActive={setHoverValue}
          onChange={setStarValue}
        />
        <div className="game-detail-comment-popup-rate-text">
          {t((rateTexts as any)[hoverValue])}
        </div>
      </div>
    ),
    [hoverValue, star, t]
  );

  // 字数
  const inputNum = useMemo(() => inputValue.length, [inputValue]);

  // 评论框
  const inputBox = useMemo(
    () => (
      <div className={classNames('game-detail-comment-popup-input-box', { isNews })}>
        <Input
          className="game-detail-comment-popup-input"
          as="textarea"
          placeholder="Add Reviews"
          spellCheck="false"
          maxLength={maxLength}
          defaultValue={inputValue}
          onChange={setInputValue}
        />
        <div className="game-detail-comment-popup-input-num">
          {inputNum}/{maxLength}
        </div>
      </div>
    ),
    [inputNum, inputValue, isNews]
  );

  // 是否可点击 ———— 资讯评论没有星级(暂时去掉星级)
  const isOK = useMemo(() => (isNews ? true : starValue > defaultStar), [starValue, isNews]);

  // 确定按钮
  const btnBox = useMemo(
    () => (
      <div className="game-detail-comment-popup-btn-box">
        <Button
          //   className={classNames('game-detail-comment-popup-btn', { active: isOK })}
          className={classNames('game-detail-comment-popup-btn', { active: true })}
          onClick={() => {
            // if (!isOK) return;
            onBtnOKClick(id, inputValue, starValue);
          }}
        >
          <SvgIcon className="game-detail-comment-popup-btn-img" name="btn_edit" />
          {t('rate_popup_btn')}
        </Button>
      </div>
    ),
    [id, inputValue, onBtnOKClick, starValue, t]
  );

  return (
    <PopupPage
      children={
        <div className="game-detail-comment-popup">
          <div className="game-detail-comment-popup-close-box" onClick={() => onBtnCloseClick()}>
            {/* <img
              className="game-detail-comment-popup-close-img"
              src="/images/icon/btn-close.png"
              alt=""
            /> */}
            <SvgIcon className="game-detail-comment-popup-close-img" name="closebtn" />
          </div>
          <div className="game-detail-comment-popup-title">{t('rate_popup_title')}</div>
          {/* {!isNews && rateBox} */}
          {inputBox}
          {btnBox}
        </div>
      }
    />
  );
};

export default GameDetailCommentPopup;
