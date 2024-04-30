import React, { useMemo } from 'react';
import { Grid, Row, Col } from 'rsuite';
import TaskListItem, { TaskListItemSkeleton } from './task-list-item';
import NoData from '../not-data';
import Pagination from '../pagination';

export default (props: any) => {
  const { listinfo, loading, isUser, getPages, deleteClick, shownum, isgamedetail, isnewdetail } =
    props;
  const LoadingDom = useMemo(
    () => (
      <div>
        {Array.from({ length: 8 }).map((item, index) => (
          <Col xs={6} key={index}>
            <TaskListItemSkeleton />
          </Col>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={`task-explore-center-list ${isnewdetail && 'task-explore-center-list-newdetal'}`}
    >
      <Grid fluid className="task-explore-center-list-newdetail">
        <Row gutter={24} className="task-explore-center-list-con">
          {loading && LoadingDom}
          {listinfo &&
            listinfo?.inforList &&
            listinfo?.inforList.length > 0 &&
            !loading &&
            listinfo.inforList.map((item: any, index: number) => {
              // Mask data that cannot be displayed by the test environment： 1712910915082 == 2024.4.12
              if (process.env.ENV_CONFIG !== 'production' && process.env.ENV_CONFIG !== 'testnet') {
                if (item.endTime * 1000 < 1712910915082 && item.title.startsWith('demo')) {
                  return null;
                }
              }

              return (
                <Col xs={shownum || 6} key={index}>
                  <TaskListItem
                    key={index}
                    item={item}
                    {...{ shownum, isnewdetail, isUser, isgamedetail, deleteClick }}
                  />
                </Col>
              );
            })}
          {(!listinfo ||
            !listinfo?.inforList ||
            (listinfo && listinfo?.inforList && listinfo?.inforList.length === 0)) &&
            !loading && <NoData />}
        </Row>
      </Grid>
      {listinfo && listinfo?.inforList && listinfo?.recordCount > (isUser ? 16 : 28) && (
        <Pagination
          totalData={listinfo?.recordCount}
          pageSize={isUser ? 16 : 28}
          pageChange={(curPage: any) => {
            getPages(curPage);
            // console.log(curPage)
          }}
        />
      )}
    </div>
  );
};
