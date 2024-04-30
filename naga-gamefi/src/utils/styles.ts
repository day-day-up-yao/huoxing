export const oneLineTextOverflow = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
} as any;

export const multiLineTextOverflow = (lineCount: string = '3') =>
  ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    /* 几行后显示省略号 */
    // '-webkit-line-clamp': lineCount,
    WebkitLineClamp: lineCount,
    // '-webkit-box-orient': 'vertical',
    WebkitBoxOrient: 'vertical',
  }) as any;
