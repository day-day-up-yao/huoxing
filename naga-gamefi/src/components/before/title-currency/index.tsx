import React from 'react';
import { useSelector } from 'react-redux';
import { memoize } from 'proxy-memoize';
import { RootState } from 'src/models/store';

// 整体组件已迁移到外层
import Content from '../../title-currency';

const selectDatas = memoize((state: RootState) => ({ librarydata: state.common.librarydata }));
export default (props: any) => {
  const { librarydata } = useSelector((state: RootState) => selectDatas(state));
  return <Content {...props} librarydata={librarydata} />;
};
