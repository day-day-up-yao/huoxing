'use client';

import { useDispatch, useSelector } from 'react-redux';
import { memoize } from 'proxy-memoize';
import { RootState } from 'src/models/store';

const selectDatas = memoize((state: RootState) => ({ theme: state.common.theme }));
export default function HomePage() {
  const dispatch = useDispatch();
  dispatch.common.setTheme('test rematch home');
  const { theme } = useSelector((state: RootState) => selectDatas(state));
  return (
    <div>
      demo
      <br />
      {theme}
    </div>
  );
}
