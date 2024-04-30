import { useEffect, useMemo, useState } from 'react';
import { windowOffset } from 'src/utils/dom-lib';

export const useBreakPoint = () => {
  const [windowWidth, setWindowWidth] = useState<number>();
  useEffect(() => {
    const func = () => {
      setWindowWidth(windowOffset().width);
    };
    func();
    window.addEventListener('resize', func);
    return () => {
      window.removeEventListener('resize', func);
    };
  }, []);

  const isMob = useMemo(() => !!(windowWidth && windowWidth <= 768), [windowWidth]);
  const isPad = useMemo(
    () => !!(windowWidth && windowWidth > 768 && windowWidth <= 1039),
    [windowWidth]
  );
  const isPc = useMemo(() => !!(windowWidth && windowWidth > 1039), [windowWidth]);
  const isSmallLaptop = useMemo(
    () => !!(windowWidth && windowWidth > 768 && windowWidth <= 1440),
    [windowWidth]
  );
  const isHomeSmallLaptop = useMemo(
    () => !!(windowWidth && windowWidth > 768 && windowWidth <= 1600),
    [windowWidth]
  );

  return { isMob, isPad, isPc, isSmallLaptop, isHomeSmallLaptop };
};
