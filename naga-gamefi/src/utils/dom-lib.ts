import { debounce } from 'lodash';

/**
 * @desc 滚动条的滚动位置
 * @returns {top,  left}
 * @method scrollOffset()
 */
export const scrollOffset = (element?: Element | null): { top: number; left: number } => {
  if (element) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop,
    };
  }

  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset,
    };
  }

  const el = document.scrollingElement || document.documentElement;
  return {
    left: el.scrollLeft,
    top: el.scrollTop,
  };
};

/**
 * @desc 可视区域高宽
 * @returns {width,  height}
 * @method windowOffset()
 */
export const windowOffset = (): { width: number; height: number } => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  if (typeof height !== 'number') {
    width =
      document.compatMode === 'CSS1Compat'
        ? document.documentElement.clientWidth
        : document.body.clientWidth;
    height =
      document.compatMode === 'CSS1Compat'
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
  }

  return { width, height };
};

/**
 * @desc 获取元素相对于文档的绝对位置和高宽/getBoundingClientRect元素相对于可视区域的位置与高宽
 * @returns {top,  left}
 * @method elementOffset()
 */
export const elementOffset = (
  ele: Element
): { top: number; left: number; bottom: number; right: number; height: number; width: number } => {
  const rect = ele.getBoundingClientRect();
  const scroll = scrollOffset();

  return {
    top: rect.top + scroll.top,
    left: rect.left + scroll.left,
    bottom: rect.bottom + scroll.top,
    right: rect.right + scroll.left,
    height: rect.height,
    width: rect.width,
  };
};

/**
 * @desc window滚动，可判断滚动方向：上下
 * @method windowScroll(function(direction){
 * direction === 'down' / 'up'
 * })
 */
export const windowScroll = (
  callback: { call: (arg0: undefined, arg1: string) => void },
  element?: Element | null
): (() => false | undefined) => {
  let beforeScrollTop = element ? scrollOffset(element).top : scrollOffset().top;

  const scrollFunc = debounce(() => {
    const afterScrollTop = element ? scrollOffset(element).top : scrollOffset().top;
    const delta = afterScrollTop - beforeScrollTop;
    console.log(delta, 3333);
    if (delta === 0) return false;
    callback.call(this, delta > 0 ? 'down' : 'up');
    beforeScrollTop = afterScrollTop;
    return undefined;
  }, 50);

  if (element) {
    element.addEventListener('scroll', scrollFunc, false);
  } else {
    window.addEventListener('scroll', scrollFunc, false);
  }

  return scrollFunc;
};
