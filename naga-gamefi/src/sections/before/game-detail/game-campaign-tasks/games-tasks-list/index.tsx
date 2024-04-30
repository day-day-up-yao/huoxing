import React, { useContext, useMemo, useCallback } from 'react';
import { Uploader } from 'rsuite';
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
  Button,
  Modal,
  Avatar,
} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ImageIcon from '@mui/icons-material/Image';

import Cookies from 'js-cookie';
import SvgIcon from 'src/components/svg-icon';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';
import VerifyBtn from './verift-btn';
import { Context } from '../../context';
import RewardNum from '../../components/reward-num';
// import TaskTip from '../tip-popup';

export const twittertype = [1, 2, 3, 4, 5, 11]; // 推特/discord/签到 操作类型
export const linktype = [7, 10];
export const checkInType = (type: number) => (type === 1 ? 'Daily' : 'Once');
const verifyTypeDom = (type: number) => (
  <div className="item-verify-type-btn">{type === 1 ? 'Daily' : 'Once'}</div>
);
export const twitterDiscordTxt = ({ info }: any) => {
  let text = '';
  let name = 'this twitter';
  let link = info.param1;
  let twittername = '';
  let twitterid = '';
  let lasttext = '';
  // const btntext = 'Verify';
  const linklist = info.param1?.split('/');
  if (linklist && linklist[3]) {
    twittername = linklist[3];
    twitterid = linklist[linklist.length - 1];
  }
  // 关注
  if (info.missionType === 1) {
    text = 'Follow';
    // const a = info.param1?.split('=');
    name = info.param1;
    lasttext = 'on Twitter';
    // btntext = 'Follow';
    link = `https://twitter.com/${info.param1}`;
  }
  // 签到
  if (info.missionType === 11) {
    text = 'Check In';
    name = info.param1;
    lasttext = '';
    // btntext = '';
    link = '';
  }
  // 转发
  if (info.missionType === 2) {
    name = `a twitter from @${twittername}`;
    link = `https://twitter.com/intent/retweet?tweet_id=${twitterid}`;
    // https://twitter.com/intent/retweet?tweet_id=1672252389460684800
    text = 'Retweet';
  }
  // 点赞
  if (info.missionType === 3) {
    // https://twitter.com/CryptoWhale1888/status/1672252389460684800
    link = `https://twitter.com/intent/like?tweet_id=${twitterid}`;
    text = 'Like';
    lasttext = 'on Twitter';
  }
  // 引用
  if (info.missionType === 4) {
    name = `a twitter from @${twittername}`;
    // https://twitter.com/GAGARIN_World/status/1672641298317074437
    text = 'Quote a Twitter';
  }
  // discord
  if (info.missionType === 5) {
    const discordname = info.param1?.split('/');
    // eslint-disable-next-line no-unsafe-optional-chaining
    name = info.param1 ? discordname[discordname?.length - 1] : 'This';
    // https://twitter.com/GAGARIN_World/status/1672641298317074437
    text = 'Join';
    lasttext = 'Discord';
  }

  return { name, text, lasttext, link };
};

export const linkTypeTxt = ({ info }: any) => {
  let title = '';
  let desc = '';
  let link = info.param1;
  if (info.missionType === 7) {
    title = 'Watch a video on Youtube';
    desc = info.param2 ? info.param2 : info.param1;
  }
  if (info.missionType === 10) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    title = info.param1?.slice(0, 1).toUpperCase() + info.param1?.slice(1);
    link = info.param3;
    desc = info.param2 ? info.param2 : info.param3;
  }
  return { link, title, desc };
};

export const taskIcon = ({ item }: any) => {
  let leftimg = '';
  if (twittertype.includes(item?.missionType)) leftimg = '/images/icon/tasktwitter.png';
  if (item?.missionType === 10) leftimg = '/images/icon/tasklink.png';
  if (item?.missionType === 7) leftimg = '/images/icon/taskyoutube.png';
  if (item?.missionType === 8 || item?.missionType === 9) return;
  // leftimg = '/images/icon/taskcar.png';
  if (item?.missionType === 5) leftimg = '/images/icon/taskdiscord.png';
  if (item.finishStatus === 1) leftimg = '/images/icon/successverify.png';
  if (item.missionType === 11) leftimg = '/images/icon/signinicon.png';

  return leftimg;
};

export default () => {
  const {
    verifyidlist,
    allVerifyIdList,
    getInputinfo,
    handleClickVerify,
    missionlist,
    t,
    isPc,
    handleclickLink,
    handleClickWithoutLink,
    handleClose,
    handleOpen,
    iteminfo,
    openpopup,
    carurl,
    getCarUrl,
  } = useContext(Context);

  // '类型:twitter(关注1,转发2,喜欢3,引用4),discord(加入5),telegram(加入6),youtube(观看7),QA:8,workproof:9,website:10'

  // 推特类型的显示
  const TwitterTypeDom = useCallback(
    (info: any) => {
      const { text, name, lasttext, link } = twitterDiscordTxt({ info });
      return (
        <div className="taskdetail-left-selecttask-list-item-right">
          <div className="taskdetail-left-selecttask-list-item-left-linnkname">
            <div className="taskdetail-left-selecttask-list-item-left-linnkname-top">
              {text}
              <div
                className="verify-click-link"
                style={{ display: name === '' ? 'none' : 'block' }}
                onClick={() => {
                  handleclickLink(link, info);
                }}
              >
                {name}
              </div>
              {lasttext}
              {verifyTypeDom(info.isDaily)}
            </div>
          </div>
        </div>
      );
    },
    [handleclickLink]
  );

  // 链接认证展示7 10
  const LinkTypeDom = useCallback(
    (info: any) => {
      const { title, link, desc } = linkTypeTxt({ info });
      return (
        <div className="taskdetail-left-selecttask-list-item-link">
          <div className="taskdetail-left-selecttask-list-item-link-top">
            {title}
            {verifyTypeDom(info.isDaily)}
          </div>
          <div
            className="taskdetail-left-selecttask-list-item-link-bottom"
            onClick={() => {
              if (!openpopup) return;
              // verifyConnect(info);
              // window.open(link);
              handleClickWithoutLink(link);
            }}
          >
            {desc}
          </div>
        </div>
      );
    },
    [handleClickWithoutLink, openpopup]
  );

  // 上传图片
  const updateDom = useMemo(
    () => (
      <Uploader
        className="taskdetail-selecttask-item-bottom-update"
        action={`${HOST_API}/api/upload/uploadImage`}
        fileListVisible={false}
        listType="picture"
        name="uploadFile"
        headers={{
          auToken: Cookies.get('auToken'),
          'Sign-Param': ajaxSignature(),
        }}
        onError={(err) => {
          console.log(err, 'ERR');
        }}
        onUpload={(filter) => {
          console.log(filter);
        }}
        onSuccess={(res) => {
          if (res.code === 0) {
            getCarUrl(res.data);
          }
        }}
      >
        {carurl ? (
          <img src={carurl} alt="" />
        ) : (
          <div className="taskdetail-selecttask-item-bottom-update-info">
            <SvgIcon name="uploader-icon" />
            <span>{t('campaign_create_campaign_cover_image_placeholder1')}</span>
          </div>
        )}
      </Uploader>
    ),
    [carurl, getCarUrl, t]
  );

  // 任务QA和工作证明
  const QaTypeDom = useCallback(
    (info: any) => {
      let title = '';
      let answer = '';
      if (info.missionType === 8) {
        title = 'QA';
        answer = allVerifyIdList?.find((item: any) => item.taskId === info.id)?.param || '';
      }

      if (info.missionType === 9) title = 'Proof of Work';
      return (
        <div className="taskdetail-left-selecttask-list-item-link">
          <div className="taskdetail-left-selecttask-list-item-link-top">{title}</div>
          <div className="taskdetail-selecttask-item-bottom">
            <div className="taskdetail-selecttask-item-bottom-desc">{info.param1}</div>
            {verifyidlist.includes(info.id) && info.missionType === 8 && (
              <div className="taskdetail-selecttask-item-bottom-desc">
                {t('quest_detail_task_tip_qa')} <span className="desc-span">{answer}</span>
              </div>
            )}
            {openpopup &&
              (info.missionType === 8 ||
              (info.missionType === 9 && info.param2 !== '1' && !verifyidlist.includes(info.id)) ? (
                <div className="taskdetail-selecttask-item-bottom-setting">
                  <input
                    type="text"
                    onChange={(e) => {
                      getInputinfo(e, info);
                    }}
                    placeholder="Enter Answer"
                  />
                  <VerifyBtn text="Submit" />
                </div>
              ) : (
                !verifyidlist.includes(info.id) && (
                  <div className="taskdetail-selecttask-item-bottom-setting">
                    {updateDom}
                    <VerifyBtn text="Submit" isTop />
                  </div>
                )
              ))}
          </div>
        </div>
      );
    },
    [allVerifyIdList, getInputinfo, t, openpopup, updateDom, verifyidlist]
  );

  const h5style = {
    width: '80%',
    fontSize: 14,
    flexWrap: 'wrap',
  };

  const pcstyle = {
    fontSize: 18,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isPc ? 630 : '90%',
    bgcolor: 'background.paper',
    p: isPc ? 5 : 2,
    borderRadius: '10px',
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closestyle = {
    position: 'absolute' as 'absolute',
    top: '7%',
    right: '7%',
    cursor: 'pointer',
    zIndex: 2,
  };

  const TasksItemDom = useCallback(
    (imgs: any, info?: any, popup?: any) => (
      <div
        className="taskdetail-left-selecttask-list-item"
        onClick={() => {
          if (!popup) handleOpen(imgs, info);
        }}
        key={info?.id}
      >
        <div className="taskdetail-left-selecttask-list-item-left">
          <div className="taskdetail-left-selecttask-list-item-left-linkimg">
            <img src={imgs} alt="" />
          </div>
        </div>
        {twittertype.includes(info?.missionType) && TwitterTypeDom(info)}
        {linktype.includes(info?.missionType) && LinkTypeDom(info)}
        {/* {(info?.missionType === 8 || info?.missionType === 9) && QaTypeDom(info)} */}
        {!popup && <RewardNum starnum={info.rewardNum} />}
      </div>
    ),
    [LinkTypeDom, TwitterTypeDom, handleOpen]
  );

  const tasksPopup = useMemo(
    () => (
      <Modal
        open={openpopup}
        onClose={handleClose}
        // closeAfterTransition={true}
        // aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={closestyle} onClick={handleClose}>
            <CloseTwoToneIcon color="action" />
          </Box>
          {TasksItemDom(iteminfo?.icon, iteminfo.info, true)}
          <Typography variant="body2" id="modal-modal-description" sx={{ mt: 3 }}>
            {iteminfo.info.description}
          </Typography>
          <Stack
            sx={{
              height: 44,
              border: '1px solid #F4BC2C',
              borderRadius: 5 / 8,
              px: 4,
              mt: 3,
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: '#F4BC2C',
              }}
              variant="body1"
            >
              Energy
            </Typography>
            <RewardNum starnum={iteminfo.info.rewardNum} />
          </Stack>
          <Button
            sx={[
              {
                width: '100%',
                mt: 3,
                color: '#fff',
                bgcolor: '#E60000',
                height: 44,
              },
              {
                '&:hover': {
                  bgcolor: '#E60000',
                },
              },
            ]}
            onClick={() => {
              handleClickVerify(iteminfo.info);
            }}
          >
            {iteminfo.info.missionType === 1 ? 'Follow' : 'Verify'}
          </Button>
        </Box>
      </Modal>
    ),
    [
      openpopup,
      handleClose,
      style,
      closestyle,
      TasksItemDom,
      iteminfo?.icon,
      iteminfo.info,
      handleClickVerify,
    ]
  );

  return (
    <div className="taskdetail-left-selecttask">
      <div className="taskdetail-left-selecttask-list">
        {missionlist?.map((item: any, index: any) => {
          const leftimg = taskIcon({ item });
          return TasksItemDom(leftimg, item);
        })}
        {tasksPopup}
      </div>
    </div>
  );
};
