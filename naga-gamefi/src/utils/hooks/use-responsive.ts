// @mui
import { useTheme, Breakpoint } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

type ReturnType = boolean;

type Query = 'up' | 'down' | 'between' | 'only';

type Value = Breakpoint | number;

export function useResponsive(query: Query, start?: Value, end?: Value): ReturnType {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Value, end as Value));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

type BreakpointOrNull = Breakpoint | null;

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export const useResponsiveBreakpoint = () => {
  // 使用 'up' 方法来判断当前尺寸是否至少达到某个断点
  const xsUp = useResponsive('up', 'xs');
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const lgUp = useResponsive('up', 'lg');
  const xlUp = useResponsive('up', 'xl');

  let breakpoint = '';
  if (xsUp && !smUp) {
    breakpoint = 'xs';
  } else if (smUp && !mdUp) {
    breakpoint = 'sm';
  } else if (mdUp && !lgUp) {
    breakpoint = 'md';
  } else if (lgUp && !xlUp) {
    breakpoint = 'lg';
  } else if (xlUp) {
    breakpoint = 'xl';
  }

  return breakpoint;
};
