import React from 'react';
import LazyLoad from 'react-lazy-load';
import classnames from 'classnames';

import './index.scss';

const ImageLazy = (props: {
  src: any;
  alt?: any;
  className?: any;
  onError?: any;
  onComplete?: any;
  height?: string;
}) => {
  const { src, alt, className, onError, onComplete, height } = props;
  const classes = classnames('img-lazy', className);

  return (
    <LazyLoad height={height}>
      <img
        className={classes}
        src={src || '/images/icon/icon-default-game.png'}
        alt={alt || 'Image'}
        onError={onError}
        onLoad={onComplete}
      />
    </LazyLoad>
  );
};

export default ImageLazy;
