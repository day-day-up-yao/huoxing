import React, { useMemo, useContext } from 'react';
// import { Table } from 'rsuite'

import './index.scss';

import { Context } from '../context';
import NewsMainItem from '../components/news-main-item';

// const { Column, HeaderCell, Cell } = Table
const NewsInformation = () => {
  const { nowArticleList, onBtnArticleClick, isNewsPage } = useContext(Context);

  // 资讯列表
  // const tableList = useMemo(
  //     () => (
  //         <Table
  //             style={{ width: '100%' }}
  //             virtualized
  //             rowHeight={274}
  //             showHeader={false}
  //             hover={false}
  //             data={nowArticleList}
  //             shouldUpdateScroll={false}
  //             autoHeight
  //             affixHeader
  //             affixHorizontalScrollbar
  //         >
  //             <Column flexGrow={1}>
  //                 <HeaderCell />
  //                 <Cell className="news-information-table-item-box">
  //                     {(rowData) => <NewsMainItem {...rowData} onBtnArticleClick={onBtnArticleClick} />}
  //                 </Cell>
  //             </Column>
  //         </Table>
  //     ),
  //     [nowArticleList]
  // )

  // 快讯列表
  const newsList = useMemo(
    () =>
      nowArticleList.map((item: any, index: number) => (
        <NewsMainItem
          {...item}
          key={index}
          isNewsPage={isNewsPage}
          onBtnArticleClick={onBtnArticleClick}
        />
      )),
    [isNewsPage, nowArticleList, onBtnArticleClick]
  );

  return <div className="news-information">{newsList}</div>;
};

export default NewsInformation;
