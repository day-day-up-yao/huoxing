/* eslint-disable no-unsafe-optional-chaining */
import React, { useMemo, useState, useContext } from 'react';
import { AvatarGroup, Avatar, Button } from 'rsuite';
import { Stack, Typography, Box, Modal } from '@mui/material';

import SvgIcon from 'src/components/svg-icon';
// import dogimg from '../../../public/imgs/bigimg/5263267846078567677.png'
// import vimg from '../../../public/imgs/icon/vicon.png'
// import nftimg from '../../../public/imgs/bigimg/download_run7.png'
import PopupPage from 'src/components/popup-page';
import { useLink } from 'src/components/link';
import CountDown from 'src/components/before/count-down';
import TitleCurreny from 'src/components/before/title-currency';
import ShareList from 'src/components/before/share-list';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { Context } from '../context';
// import VerifyList from '../verify-list';
// import SubmitBtn from '../submit-btn';
import UploadWinnerlist from '../upload-winner-list';

import './index.scss';

export default () => {
  const {
    timestatus,
    questdetail,
    countdownEnd,
    winflag,
    t,
    verifylist,
    winnerinfo,
    winnerListSet,
    winneruploadflag,
    isshowwinnerbtn,
  } = useContext(Context);
  const [winlistflag, setWinlistflag] = useState(false);
  const isDark = useIsDark();
  const { linkTo } = useLink();

  // console.log(questdetail);

  // 时间显示
  const timeDom = useMemo(() => {
    let timetext = '';
    let timeinfo = new Date().getTime();
    if (timestatus === 0) {
      timetext = t('quest_detail_start_time_y');
      timeinfo = questdetail.beginTime * 1000;
    }
    if (timestatus === 1) {
      timetext = t('quest_detail_end_time_y');
      timeinfo = questdetail.endTime * 1000;
    }
    if (timestatus === 2) timetext = t('quest_list_finish');
    return (
      <div className="task-detail-right-time">
        <SvgIcon name={timestatus === 2 ? 'endtask' : 'green_time'} />
        <div className="task-detail-right-time-text">
          <span>{timetext} </span>
          {timestatus !== 2 && (
            <div className="task-detail-right-time-text-date">
              <CountDown
                endtime={timeinfo}
                FinishFn={() => {
                  countdownEnd();
                }}
                timetype={timestatus}
              />
            </div>
          )}
        </div>
      </div>
    );
  }, [timestatus, t, questdetail.beginTime, questdetail.endTime, countdownEnd]);

  // 上传/下载名单
  const rewardListDom = useMemo(
    () => (
      <div className="reward-list-info">
        <div className="reward-list-info-con">
          {/* 暂时开启 下载提交名单 */}
          <Button className="reward-list-info-item" onClick={() => winnerListSet(0)}>
            {t('quest_detail_reward_submitlist')}
          </Button>
          <Button className="reward-list-info-item" onClick={() => winnerListSet(1)}>
            {questdetail.status === 3 && t('quest_detail_reward_winnerlist_download')}
            {questdetail.status === 2 &&
              questdetail.drawWinnerMethod === 1 &&
              t('quest_detail_reward_winnerlist_uploader')}
          </Button>
        </div>
        {questdetail.status === 2 && questdetail.drawWinnerMethod === 1 && (
          <div className="reward-list-info-template">
            <a href="https://naga-prod.mars-block.com/template/submitsheet.xlsx">
              {t('quest_detail_reward_download_template')}
            </a>
          </div>
        )}
      </div>
    ),
    [questdetail.drawWinnerMethod, questdetail.status, t, winnerListSet]
  );

  // 任务信息列表
  const taskinfolist = useMemo(
    () => [
      {
        infoname: t('quest_detail_sport_j'),
        rightinfo:
          questdetail.rewardType === 1 ? (
            <div>
              <span>{questdetail.rewardNum}</span>
              {questdetail.rewardToken.toUpperCase()}
            </div>
          ) : questdetail.rewardType === 2 ? (
            'NFT'
          ) : questdetail.rewardType === 3 ? (
            'Whitelist'
          ) : (
            ''
          ),
        type: 0,
      },
      {
        infoname: t('quest_detail_sport_reward'),
        rightinfo:
          questdetail.winnerNum === -1 ? t('quest_detail_wuxian_winner') : questdetail.winnerNum,
        type: 0,
      },
      {
        infoname: t('game_detail_community'),
        rightinfo: (
          <ShareList
            size="small-icon game-detail-data-item-icon"
            linkitem={{
              tw: questdetail?.gameTwitter,
              me: questdetail?.gameMedium,
              te: questdetail?.gameTelegram,
              di: questdetail?.gameDiscord,
            }}
          />
        ),
        type: 1,
        isgame: true,
      },

      {
        infoname: 'Chain',
        rightinfo: (
          <div className="task-detail-chain">
            <TitleCurreny chain={questdetail.chain} size="big" istask />
            <div className="task-detail-chain-right">{questdetail.chain}</div>
          </div>
        ),
        type: 1,
      },
      {
        infoname: t('quest_detail_lucky_draw'),
        rightinfo:
          questdetail.drawWinnerMethod === 0 ? t('quest_detail_auto') : t('quest_detail_manual'),
        type: 1,
      },
      {
        infoname: t('quest_detail_reward_dist_type'),
        rightinfo:
          questdetail.rewardMethod === 0
            ? t('quest_detail_reward_dist_type_aver')
            : t('quest_detail_reward_dist_type_random'),
        type: 1,
        flag: true,
      },
      {
        infoname: t('quest_detail_submit_c'),
        rightinfo: questdetail.participantNum,
        type: 1,
      },
      {
        infoname: t('quest_detail_submit_num'),
        rightinfo: questdetail.submitNum ? questdetail.submitNum : 0,
        type: 1,
      },
    ],
    [
      questdetail.chain,
      questdetail.drawWinnerMethod,
      questdetail?.gameDiscord,
      questdetail?.gameMedium,
      questdetail?.gameTelegram,
      questdetail?.gameTwitter,
      questdetail.participantNum,
      questdetail.rewardMethod,
      questdetail.rewardNum,
      questdetail.rewardToken,
      questdetail.rewardType,
      questdetail.submitNum,
      questdetail.winnerNum,
      t,
    ]
  );

  // 头像显示的个数
  const max = 4;

  const winnerSelectDom = useMemo(
    () => (
      <div
        className="taskinfo-top-desc-item little-desc-item task-item-win"
        onClick={() => setWinlistflag(true)}
      >
        <div className="taskinfo-top-desc-item-left">
          {t('quest_detail_reward_list')} ({winnerinfo.recordCount})
        </div>
        <div className="taskinfo-top-desc-right">
          <AvatarGroup stack>
            {winnerinfo.inforList
              .filter((user: any, i: any) => i < max)
              .map((user: any, index: any) => (
                <Avatar size="sm" circle key={index} src={user.iconUrl} />
              ))}
            {winnerinfo.inforList?.length > max && (
              <Avatar size="sm" circle style={{ background: '#111' }}>
                +{winnerinfo.inforList?.length - max}
              </Avatar>
            )}
          </AvatarGroup>
        </div>
      </div>
    ),
    [t, winnerinfo.inforList, winnerinfo.recordCount]
  );
  // taskinfo
  const taskinfoDom = useMemo(() => {
    let newtaskinfolist = taskinfolist;
    if (questdetail.rewardType !== 1) {
      newtaskinfolist = taskinfolist.filter((item) => item.flag !== true);
    }
    if (!questdetail.gameIcon) {
      newtaskinfolist = taskinfolist.filter((item) => !item.isgame);
    }
    return (
      <div className="task-detail-right-taskinfo">
        <div
          className="taskinfo-avatar"
          onClick={() => {
            if (questdetail.gameIcon) {
              linkTo(`/game/${questdetail.gameId}`);
            }
          }}
        >
          <div className="taskinfo-avatar-img">
            <img
              className="taskinfo-avatar-img-i"
              src={questdetail.gameIcon ? questdetail.gameIcon : questdetail.userAvatarUrl}
              alt=""
            />
            {questdetail.nagaAuth === 1 && (
              <div className="taskinfo-avatar-img-v">
                <SvgIcon name="authentication" />
              </div>
            )}
          </div>
          <div className="taskinfo-avatar-title">
            {questdetail.gameName ? questdetail.gameName : questdetail.userName}
          </div>
        </div>
        <div className="taskinfo-top-desc">
          {newtaskinfolist.map((item, index) => (
            <div
              className={`taskinfo-top-desc-item ${item.type === 1 && 'little-desc-item'}`}
              key={index}
            >
              <div className="taskinfo-top-desc-item-left">{item.infoname}</div>
              <div className="taskinfo-top-desc-right">{item.rightinfo}</div>
            </div>
          ))}
          {winflag && winnerinfo.inforList.length > 0 && winnerSelectDom}
        </div>
      </div>
    );
  }, [
    linkTo,
    questdetail.gameId,
    questdetail.gameIcon,
    questdetail.gameName,
    questdetail.nagaAuth,
    questdetail.rewardType,
    questdetail.userAvatarUrl,
    questdetail.userName,
    taskinfolist,
    winflag,
    winnerSelectDom,
    winnerinfo.inforList.length,
  ]);

  // 中奖名单
  const winnerlist = useMemo(
    () => (
      <PopupPage
        children={
          <div className="task-winner">
            <div className="task-winner-top">
              {t('quest_detail_reward_list')}({winnerinfo.recordCount})
            </div>
            <div className="task-winner-list">
              {winnerinfo.inforList.map((item: any, index: any) => (
                <div className="task-winner-list-item" key={index}>
                  <div className="task-winner-list-item-img">
                    <img src={item.iconUrl} alt="" />
                  </div>
                  <div className="task-winner-list-item-address">
                    {item.address ? `${item.address.slice(0, 16)}...${item.address.slice(-6)}` : ''}
                  </div>
                  <div className="task-winner-list-item-num">{item.amount}</div>
                </div>
              ))}
            </div>
            <div className="task-winner-close" onClick={() => setWinlistflag(false)}>
              <img src="/images/icon/closeicon.webp" alt="" />
            </div>
          </div>
        }
      />
    ),
    [t, winnerinfo.inforList, winnerinfo.recordCount]
  );

  // NFT
  const nftDom = useMemo(
    () => (
      <div className="nft-preview">
        <h3>NFT {t('quest_detail_nft_title')}</h3>
        <div className="nft-preview-center">
          <img src={questdetail.nftPreviewUrl} alt="" />
        </div>
      </div>
    ),
    [questdetail.nftPreviewUrl, t]
  );

  const rewardDom = useMemo(
    () => (
      <Box mt="40px">
        <Typography variant="h3">Reward</Typography>
        <Stack
          sx={({ palette }) =>
            isDark
              ? {
                  mt: '18px',
                  backgroundImage: 'url(/images/bigimg/taskdetailreward.png)',
                  backgroundSize: '100% 100%',
                  padding: '24px',
                }
              : {
                  mt: '18px',
                  bgcolor: palette.background.paper,
                  padding: '24px',
                }
          }
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="400" variant="h6">
              {t('quest_detail_sport_j')}
            </Typography>
            <Typography variant="h6" color="#F4BC2C">
              {questdetail.rewardType === 1 ? (
                <div>
                  <span>{questdetail.rewardNum}</span>
                  {questdetail.rewardToken.toUpperCase()}
                </div>
              ) : questdetail.rewardType === 2 ? (
                'NFT'
              ) : questdetail.rewardType === 3 ? (
                'Whitelist'
              ) : (
                ''
              )}
            </Typography>
          </Stack>
          <Stack direction="row" mt="43px" alignItems="center" justifyContent="space-between">
            <Typography fontWeight="400" variant="h6">
              {t('quest_detail_sport_reward')}
            </Typography>
            <Typography variant="h6" color="#F4BC2C">
              {questdetail.winnerNum === -1
                ? t('quest_detail_wuxian_winner')
                : questdetail.winnerNum}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    ),
    [
      isDark,
      questdetail.rewardNum,
      questdetail.rewardToken,
      questdetail.rewardType,
      questdetail.winnerNum,
      t,
    ]
  );

  return (
    <div className="task-detail-right">
      {/* <h3>Reward</h3> */}
      {isshowwinnerbtn && rewardListDom}
      {timeDom}
      {taskinfoDom}
      {/* {rewardDom} */}
      {/* {verifylist.length > 0 && (
        <div className="h5-detail-task">
          <VerifyList />
        </div>
      )} */}
      {questdetail.rewardType !== 1 && questdetail.nftPreviewUrl && nftDom}
      {/* {nftDom} */}
      {/* {verifylist.length > 0 && (
        <div className="h5-detail-btn">
          <SubmitBtn timestatus={timestatus} questdetail={questdetail} />
        </div>
      )} */}
      {winlistflag && winnerlist}
      {winneruploadflag && <UploadWinnerlist />}
    </div>
  );
};
