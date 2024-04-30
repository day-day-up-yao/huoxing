import React, { CSSProperties } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

import './index.scss';

interface SvgIconProps {
  className?: string;
  name: string;
  notmouse?: boolean;
  marginstyle?: boolean;
  is18px?: boolean;
  colorSeventyStyle?: boolean;
  isWhite?: boolean;
  isRed?: boolean;
  isGreen?: boolean;
  is14px?: boolean;
  style?: CSSProperties;
  isInALabel?: boolean;
}

export default (props: SvgIconProps) => {
  const {
    className,
    name,
    notmouse,
    marginstyle,
    colorSeventyStyle,
    isWhite,
    isRed,
    isGreen,
    is18px,
    is14px,
    style,
    isInALabel,
  } = props;
  const classname = classNames(className, 'svgstyle', {
    'notmouse-enter': notmouse,
    'color-seventy': colorSeventyStyle,
    is18px,
    is14px,
    marginstyle,
    'select-itemsvg': isWhite,
    'color-green': isGreen,
    'color-red': isRed,
  });

  const svgDom = <ReactSVG src={`/images/svg/${name}.svg`} className={classname} style={style} />;

  return isInALabel ? <object>{svgDom}</object> : svgDom;
};
