import classNames from 'classnames';
import React from 'react';
import { Avatar } from 'rsuite';

export default (props: any) => {
  const {
    className, // 类名
    src, // 图片url
    size, // 大小lg' | 'md' | 'sm' | 'xs' ('md')
    isround, // 是否是圆形图
    onClick, // 点击事件
  } = props;
  return (
    <Avatar
      className={classNames(className)}
      circle={isround}
      src={src}
      size={size}
      alt=""
      onClick={onClick}
    />
  );
};
