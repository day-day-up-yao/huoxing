import React, { useState, useCallback, useEffect, useRef } from 'react';
import { number } from 'prop-types';

import SvgIcon from 'src/components/svg-icon';

import './index.scss';

const Pagination = (props: any) => {
  const {
    currentPage, // 默认页面
    totalData, // 数据总条数
    pageSize, // 每页显示条数
    pageChange, // 点击时回调函数，返回curPage
    prevTxt, // 上一页按钮文字
    nextTxt, // 下一页按钮文字
    prevNextCount, // 当前页前后分页个数
    prevNextHide, // 是否显示上一页下一页
  } = props;

  const dotStr = '•••';
  const prevNextNum = parseInt(prevNextCount, 10);
  const totalPage = Math.ceil(parseInt(totalData, 10) / parseInt(pageSize, 10));
  const totalPagePrev = useRef(totalPage);
  const [curPage, setCurPage] = useState<any>(parseInt(currentPage, 10));
  const [pageArr, setPageArr] = useState<any>([]);

  // props更新时，useState数据不会更新。故在此currentPage更新时，重新设置curPage
  useEffect(() => {
    setCurPage(parseInt(currentPage, 10));
  }, [currentPage]);

  /** @desc 根据当前页两边页数计算: 中间开始于结束数字 */
  const getStartAndEnd = useCallback(() => {
    let start = 0;
    let end = 0;
    if (totalPage > prevNextNum * 2 + 3) {
      // 总页数大于前后个数+当前页+首尾页，需要省略
      if (curPage < prevNextNum * 2) {
        // curr=1,2,3页
        start = 2;
        end = start + 3;
      } else if (curPage > totalPage - prevNextNum * 2) {
        // curr=47,48,49,50
        end = totalPage - 1;
        start = end - 3;
      } else {
        // 如curr=45  分页1...43 44 45 46 47 ...50
        start = curPage - 2;
        end = curPage + 2;
      }
    } else {
      start = 2;
      end = totalPage - 1;
    }

    return {
      start,
      end,
    };
  }, [curPage, prevNextNum, totalPage]);

  /** @desc 点击设置当前页，并调用props回调函数 */
  const pageClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (curPage: any) => {
      pageChange(curPage);
      setCurPage(curPage);
    },
    [pageChange]
  );

  /** @desc 根据curPage自动计算页面显示数组 */
  useEffect(() => {
    const { start } = getStartAndEnd();
    const { end } = getStartAndEnd();
    const initArr: any = [1];
    const itemArr = [];
    let lastArr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = start; i <= end; i++) {
      itemArr.push(i);
    }
    if (start === 2) {
      if (end === totalPage - 1) {
        lastArr = initArr.concat(itemArr);
      } else {
        lastArr = initArr.concat(itemArr).concat([dotStr]);
      }
    } else if (end === totalPage - 1) {
      lastArr = initArr.concat([dotStr]).concat(itemArr);
    } else {
      lastArr = initArr.concat([dotStr]).concat(itemArr).concat([dotStr]);
    }

    if (totalPagePrev.current !== totalPage) {
      totalPagePrev.current = totalPage;
      setCurPage(1);
    }

    if (totalPage === 1) {
      setPageArr(lastArr);
    } else {
      setPageArr(lastArr.concat([totalPage]));
    }
  }, [curPage, getStartAndEnd, totalPage]);

  return (
    <div className="react-pagination">
      {!prevNextHide && (
        <a
          className={`prev ${curPage === 1 && 'disabled'}`}
          title={prevTxt}
          onClick={() => curPage > 1 && pageClick(curPage - 1)}
        >
          {prevTxt}
        </a>
      )}
      {pageArr.map((item: any, index: number) => (
        <a
          key={index}
          className={`${curPage === item && 'active'}`}
          onClick={() => {
            if (item === dotStr) return;
            pageClick(item);
          }}
        >
          {item}
        </a>
      ))}
      {!prevNextHide && (
        <a
          className={`next ${curPage === totalPage && 'disabled'}`}
          title={nextTxt}
          onClick={() => curPage < totalPage && pageClick(curPage + 1)}
        >
          {nextTxt}
        </a>
      )}
    </div>
  );
};

Pagination.defaultProps = {
  prevTxt: <SvgIcon name="pageleft" />,
  nextTxt: <SvgIcon name="pageright" />,
  prevNextCount: 2,
  prevNextHide: false,
  currentPage: 1,
} as any;

Pagination.propTypes = {
  totalData: number.isRequired,
  pageSize: number.isRequired,
};

export default Pagination;
