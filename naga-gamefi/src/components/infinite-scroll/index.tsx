import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useCallback, ReactNode } from 'react';

interface InfiniteScrollProps {
  onBottomHit: () => void; // 当滚动到底部时触发的回调函数
  isLoading: boolean; // 是否正在加载更多数据
  hasMore: boolean; // 是否还有更多数据可以加载
  useWindowScroll?: boolean; // 是否使用window的滚动事件，默认为false
  loadingComponent?: ReactNode; // 自定义的加载组件
  children?: ReactNode; // 子元素
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onBottomHit,
  isLoading,
  hasMore,
  useWindowScroll = false,
  loadingComponent,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isBottom = useCallback(
    (el: HTMLElement) => el.getBoundingClientRect().bottom <= window.innerHeight,
    []
  );

  const onScroll = useCallback(() => {
    const el = useWindowScroll ? document.documentElement : ref.current!;
    if (!isLoading && hasMore && isBottom(el)) {
      onBottomHit();
    }
  }, [isLoading, hasMore, onBottomHit, useWindowScroll, isBottom]);

  useEffect(() => {
    const el = useWindowScroll ? window : ref.current!;
    el.addEventListener('scroll', onScroll);

    return () => {
      el.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, useWindowScroll]);

  return (
    <div ref={!useWindowScroll ? ref : null} style={{ overflow: 'auto', height: '100%' }}>
      {children}
      {isLoading &&
        (loadingComponent || (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: '20px',
            }}
          >
            <CircularProgress style={{ width: '20px', height: '20px' }} />
          </Box>
        ))}
    </div>
  );
};

export default InfiniteScroll;
