import { Box, Grid, Stack, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import moment from 'moment';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useResponsiveBreakpoint } from 'src/utils/hooks/use-responsive';
import { multiLineTextOverflow } from 'src/utils/styles';
import TaskTimeBtn from '../task-time-btn';
import ImageLazy from '../image-lazy';
import SvgIcon from '../../svg-icon';
import Image from '../../image';
import './index.scss';

export const TaskListItemSkeleton = () => (
  <Box className="task-explore-center-list-con-col">
    <div className="task-explore-center-list-con-item">
      <div className="task-explore-center-list-con-item-con">
        <div className="task-explore-center-list-con-item-con-top not-task-item-top all-loading-square-bg-c3" />
        <div className="task-explore-center-list-con-item-con-bottom">
          <div className="task-explore-center-list-con-item-con-bottom-not1 all-loading-bg-c3" />
          <div className="task-explore-center-list-con-item-con-bottom-not1 all-loading-bg-c3" />
        </div>
      </div>
    </div>
  </Box>
);

const TaskListItem = ({
  item,
  shownum,
  isnewdetail,
  isUser,
  isgamedetail,
  deleteClick,
  point,
  responsive,
}: any) => {
  const { linkTo } = useLink();
  const breakpoint = useResponsiveBreakpoint();
  const isXs = responsive ? breakpoint === 'xs' : false;
  const isSm = breakpoint === 'sm';

  let questimg = '/images/bigimg/task2.png';
  if (item?.picUrl && item?.picUrl !== 'string') {
    questimg = item.picUrl;
  }
  let timestatus = 0;
  if (item?.beginTime && item.endTime) {
    if (item.beginTime * 1000 > new Date().getTime()) {
      timestatus = 0;
    }
    if (
      item.beginTime * 1000 < new Date().getTime() &&
      new Date().getTime() < item.endTime * 1000
    ) {
      timestatus = 1;
    }
    if (item.endTime * 1000 < new Date().getTime()) {
      timestatus = 2;
    }
  }

  // ----------------显示活动奖励----------------
  const getRewardTypeDom = useCallback((item: any) => {
    if (item?.rewardType === 1) {
      return (
        <div className="task-explore-center-list-con-item-con-bottom-set-item">
          <div className="item-token-num">{item.rewardNum}</div>
          <div className="item-token-curreny">{item.rewardToken.toUpperCase()}</div>
        </div>
      );
    }
    if (item?.rewardType === 2) {
      return 'NFT';
    }
    if (item?.rewardType === 3) {
      return 'Whitelist';
    }
  }, []);

  // ----------------左上角显示任务类型----------------
  const tasktypeDom = useCallback(
    (timestatus: any, item: any) => {
      const btnStyles = {
        height: '32px',
        padding: '0 6px',
        borderRadius: '15px',
        bgcolor: 'rgba(46, 48, 54, 0.75)',
        backdropFilter: 'blur(5px)',
        color: '#F4BC2C',
        zIndex: 2,
        '& .time-be-finish': {
          color: '#F4BC2C !important;',
        },
        '& .time-be-ing': {
          color: '#F4BC2C !important;',
        },
      };
      return (
        <Box
          sx={({ palette }) => ({
            position: 'absolute',
            top: '8px',
            left: '8px',
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <Box sx={btnStyles}>
            <TaskTimeBtn
              className="task-type-nobg"
              timetype={timestatus}
              children={getRewardTypeDom(item)}
              style={{}}
            />
          </Box>
          {!isXs && point && (
            <Box sx={{ ...btnStyles, marginLeft: '8px' }}>
              <Stack flexDirection="row" alignItems="center" padding="0 8px 0 2px">
                <Image src="/images/points/summary-point.png" height="32px" width="32px" />
                <Typography variant="subtitle1" color="#B061FF">
                  {point}
                </Typography>
              </Stack>
            </Box>
          )}
        </Box>
      );
    },
    [getRewardTypeDom, isXs, point]
  );

  // 游戏详情submit / unsubmited标签;
  const labeldetalDom = useCallback(
    (timestatus: number) => (
      <div className="gamedetail-label">
        <img
          src={timestatus === 2 ? '/images/bigimg/unsubmited.png' : '/images/bigimg/submittask.png'}
          alt=""
        />
      </div>
    ),
    []
  );

  // ----------------taskrewardInfo----------------
  const deleteDom = useCallback(
    (id: any) => (
      <div
        className="task-list-item-delete"
        onClick={(e) => {
          deleteClick(id);
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }}
      >
        <SvgIcon name="delete" />
      </div>
    ),
    [deleteClick]
  );

  const getsurplusTime = useCallback((surptime: number) => {
    const timeinfo = new Date().getTime();
    let daytime = '';
    let housetime = '';
    const finshtime = surptime * 1000 - timeinfo;
    daytime = `${Math.floor(finshtime / 1000 / 3600 / 24)}`;
    housetime = `${Math.floor((finshtime / 1000 / 3600) % 24)}`;
    if (parseInt(housetime, 10) < 10) {
      housetime = `0${housetime}`;
    }
    return `${daytime}d ${housetime}h`;
  }, []);

  // 按钮显示
  const itemBtnDom = useCallback(
    (timetype: number, item: any) => {
      let btntext = '';
      if (timetype === 0) {
        btntext = `Starts In ${getsurplusTime(item.beginTime)}`;
      }
      if (timetype === 1) {
        btntext = `Ends In ${getsurplusTime(item.endTime)}`;
      }
      if (timetype === 2) {
        btntext = 'Ended';
      }
      return <div>{btntext}</div>;
    },
    [getsurplusTime]
  );

  const taskrewardInfo = useCallback(
    (timestatus: any, item: any) => (
      <div className="task-explore-center-list-con-item-con-bottom-set-box">
        <div className="task-explore-center-list-con-item-con-bottom-set">
          {/* {isnewdetail && integralDom()} */}
          {/* <TaskTimeBtn timetype={timestatus} children={getRewardTypeDom(item)} /> */}
          {isUser && timestatus === 0 && deleteDom(item.id)}
        </div>
        {!isnewdetail && (
          <div className="task-explore-center-list-con-item-con-bottom-set">
            {/* {item.status === 1 && (
              <TaskTimeBtn
                className="task-list-item-btn"
                timetype={1}
                children={getTimeTypeDom(timestatus)}
              />
            )}
            {(item.status === 2 || item.status === 3) && (
              <TaskTimeBtn
                className="task-list-item-btn"
                timetype={2}
                children={getTimeTypeDom(timestatus, true)}
              />
            )} */}
            {!isgamedetail && (
              <TaskTimeBtn
                className="task-list-item-btn"
                timetype={timestatus}
                children={itemBtnDom(timestatus, item)}
              />
            )}
          </div>
        )}
      </div>
    ),
    [deleteDom, isUser, isgamedetail, isnewdetail, itemBtnDom]
  );

  // ----------------任务时间----------------
  const taskTimeinfo = useCallback(
    (timestatus: any, item: any) => (
      <TaskTimeBtn
        isdetail
        timetype={timestatus}
        children={
          <div className="task-list-item-time">
            <SvgIcon name="green_time" className={`detail-time-icon-${timestatus}`} />
            <span>
              {moment(item.beginTime * 1000).format('YYYY-MM-DD HH:mm')} ～
              {moment(item.endTime * 1000).format('MM-DD HH:mm')}
            </span>
          </div>
        }
      />
    ),
    []
  );

  const winnerBtn = useMemo(() => <div className="task-otem-winner-style">🎉 WIN！</div>, []);

  return (
    <Box className="task-explore-center-list-con-col">
      <div
        className="task-explore-center-list-con-item"
        onClick={() => {
          linkTo(`${paths.taskDetail}/${item?.id}`);
        }}
      >
        {tasktypeDom(timestatus, item)}
        {isnewdetail && labeldetalDom(timestatus)}
        <img src={questimg} alt="" className="task-explore-center-list-con-item-bgimg" />
        <div className="task-explore-center-list-con-item-con">
          <div
            className={`task-explore-center-list-con-item-con-top ${
              isUser ? 'task-item-top-user' : ''
            }`}
            style={{ height: isXs ? '92px' : '140px' }}
          >
            <div className="task-explore-center-list-con-item-con-top-con">
              <div className="task-explore-center-list-con-item-con-top-img">
                <ImageLazy height="100%" src={questimg} />
              </div>
            </div>
            {!isXs && !isgamedetail && !isnewdetail && (
              <div className="task-explore-center-list-con-item-con-top-aviter">
                <img
                  src={
                    item.gameIcon
                      ? item.gameIcon
                      : item?.userAvatarUrl
                      ? item.userAvatarUrl
                      : '/images/bigimg/5263267846078567677.png'
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          {isgamedetail ? (
            <div className="task-explore-center-list-con-item-con-bottom">
              {taskrewardInfo(timestatus, item)}
              <div className="task-explore-center-list-con-item-con-bottom-title">
                {item?.title}
              </div>
              {taskTimeinfo(timestatus, item)}
            </div>
          ) : (
            <div
              className="task-explore-center-list-con-item-con-bottom"
              style={{ padding: isXs ? '10px 12px' : '16px 20px' }}
            >
              {/* {!isnewdetail && (
                <div className="task-explore-center-list-con-item-con-bottom-desc">
                  <span>{item?.userName}</span>
                  {item?.nagaAuth === 1 && <SvgIcon name="authentication" />}
                </div>
              )} */}
              <div
                className="task-explore-center-list-con-item-con-bottom-title"
                style={{
                  fontSize: isXs ? '14px' : '18px',
                  marginTop: isXs ? '0' : '8px',
                  whiteSpace: isXs ? 'normal' : 'nowrap',
                  lineHeight: isXs ? '18px' : '34px',
                  ...(isXs && multiLineTextOverflow('2')),
                }}
              >
                {item?.title}
              </div>
              {}
              {/* {!isXs && taskrewardInfo(timestatus, item)} */}
              {item.isWin === 1 ? winnerBtn : !isXs && taskrewardInfo(timestatus, item)}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

export default TaskListItem;
