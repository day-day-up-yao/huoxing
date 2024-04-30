import React, { useContext, useMemo, useCallback } from 'react';
import { Uploader } from 'rsuite';

import Cookies from 'js-cookie';
import SvgIcon from 'src/components/svg-icon';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';
import VerifyBtn from './verift-btn';
import { Context } from '../context';
import TaskTip from '../tip-popup';
import { tag3friend } from '../../campaign-create/components/item-task-list/task-items/task-item-quote-atweet-tag';

export default () => {
  const {
    questdetail,
    verifyClickFn,
    needLinkBtnClick,
    verifynum,
    timestatus,
    verifylist,
    verifyidlist,
    allVerifyIdList,
    getInputinfo,
    t,
    tiptext,
    tipflag,
    closeTip,
    verifyConnect,
    carurl,
    getCarUrl,
  } = useContext(Context);

  // console.log(verifyidlist, verifynum, 3444)
  // '类型:twitter(关注1,转发2,喜欢3,引用4),discord(加入5),telegram(加入6),youtube(观看7),QA:8,workproof:9,website:10'

  // 任务进度
  const taskSchedule = useMemo(() => {
    const alltaskamount = questdetail.taskList.length;
    return (
      <div className="taskdetail-left-selecttask-top">
        <h3>Task</h3>
        <div className="taskdetail-left-selecttask-schedule">
          <div className="taskdetail-left-selecttask-schedule-num">
            {verifynum} / {alltaskamount} Steps Completed
          </div>
          <div className="taskdetail-left-selecttask-schedule-line">
            <div
              className="taskdetail-left-selecttask-schedule-line-con"
              style={{
                width: `${(verifynum / alltaskamount) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }, [questdetail.taskList.length, verifynum]);

  // 已验证图标
  const finishVerifyDom = useMemo(
    () => (
      <div className="finfish-verify-img">
        <img src="/images/icon/binding.png" alt="" />
      </div>
    ),
    []
  );

  // 推特类型的显示
  const TwitterTypeDom = useCallback(
    (info: any) => {
      let text = '';
      let name = 'this twitter';
      let link = info.param1;
      let twittername = '';
      let twitterid = '';
      let lasttext = '';
      let btntext = 'Verify';
      const linklist = info.param1?.split('/');
      if (linklist && linklist[3]) {
        twittername = linklist[3];
        twitterid = linklist[linklist.length - 1];
      }
      // 关注
      if (info.taskType === 1) {
        text = 'Follow';
        const a = info.param1?.split('=');
        name = `@${a[1]}`;
        lasttext = 'on Twitter';
        btntext = 'Follow';
      }
      // 转发
      if (info.taskType === 2) {
        name = `a twitter from @${twittername}`;
        link = `https://twitter.com/intent/retweet?tweet_id=${twitterid}`;
        // https://twitter.com/intent/retweet?tweet_id=1672252389460684800
        text = 'Retweet';
      }
      // 点赞
      if (info.taskType === 3) {
        // https://twitter.com/CryptoWhale1888/status/1672252389460684800
        link = `https://twitter.com/intent/like?tweet_id=${twitterid}`;
        text = 'Like';
        lasttext = 'on Twitter';
      }
      // 引用
      if (info.taskType === 4) {
        if (info.param2 === tag3friend) {
          link = `https://twitter.com/intent/post?url=${encodeURIComponent(info.param1)}`;
          text = 'Quote ';
          name = `this tweet`;
          lasttext = '& Tag 3 friends on Twitter';
        }

        if (info.param2.startsWith('@')) {
          const lastTxt = info.param2.replace(/&/g, ' ');
          link = `https://twitter.com/intent/post?url=${encodeURIComponent(
            info.param1
          )}&text=${encodeURIComponent(lastTxt)}`;

          text = 'Quote ';
          name = 'this tweet';
          // lasttext = `& Tag specified friends ${lastTxt} on Twitter`;
          lasttext = `& Tag specified friends on Twitter`;
        }

        if (info.param2.startsWith('#')) {
          const lastTxt = info.param2.replace(/&/g, ' ');
          const linkTextParams = encodeURIComponent(`${lastTxt} #NAGA `);
          link = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            info.param1
          )}&text=${linkTextParams}`;

          text = 'Quote ';
          name = 'this tweet';
          // lasttext = `& Include ${lastTxt} on Twitter`;
          lasttext = `& Include specified tags  on Twitter`;
        }
      }

      // 推特
      if (info.taskType === 5) {
        name = info.param2 ? info.param2 : 'This';
        // https://twitter.com/GAGARIN_World/status/1672641298317074437
        text = 'Join';
        lasttext = 'Discord';
      }

      // 推特
      if (info.taskType === 11) {
        link = `https://twitter.com/intent/post?text=${encodeURIComponent(info.param1)}`;
        text = 'Post ';
        name = 'a tweet ';
        // lasttext = `with this ${info.param1} on Twitter`;
        lasttext = 'with specified content on Twitter';
      }

      return (
        <div className="taskdetail-left-selecttask-list-item-right">
          <div className="taskdetail-left-selecttask-list-item-left-linnkname">
            <div className="taskdetail-left-selecttask-list-item-left-linnkname-top">
              {text}
              <div
                className="verify-click-link"
                onClick={() => {
                  needLinkBtnClick(link, info);
                }}
              >
                {name}
              </div>
              {lasttext}
              {verifyidlist.includes(info.id) && finishVerifyDom}
            </div>
          </div>
          {timestatus === 1 && !verifyidlist.includes(info.id) && (
            <VerifyBtn
              text={btntext}
              verifyBtnClick={() => {
                verifyClickFn(info);
              }}
            />
          )}
        </div>
      );
    },
    [verifyidlist, finishVerifyDom, timestatus, needLinkBtnClick, verifyClickFn]
  );

  // 链接认证展示7 10
  const LinkTypeDom = useCallback(
    (info: any) => {
      let title = '';
      let desc = '';
      let link = info.param1;
      if (info.taskType === 7) {
        title = 'Watch a video on Youtube';
        desc = info.param2 ? info.param2 : info.param1;
      }
      if (info.taskType === 10) {
        title = info.param1;
        link = info.param3;
        desc = info.param2 ? info.param2 : info.param3;
      }
      return (
        <div className="taskdetail-left-selecttask-list-item-link">
          <div className="taskdetail-left-selecttask-list-item-link-top">
            {title}
            {verifyidlist.includes(info.id) && finishVerifyDom}
          </div>
          <div
            className="taskdetail-left-selecttask-list-item-link-bottom"
            onClick={() => {
              verifyConnect(info);
              window.open(link);
            }}
          >
            {desc}
          </div>
        </div>
      );
    },
    [finishVerifyDom, verifyConnect, verifyidlist]
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
      if (info.taskType === 8) {
        title = 'QA';
        answer = allVerifyIdList?.find((item: any) => item.taskId === info.id)?.param || '';
      }

      if (info.taskType === 9) title = 'Proof of Work';
      return (
        <div className="taskdetail-left-selecttask-list-item-link">
          <div className="taskdetail-left-selecttask-list-item-link-top">
            {title}
            {verifyidlist.includes(info.id) && finishVerifyDom}
          </div>
          <div className="taskdetail-selecttask-item-bottom">
            <div className="taskdetail-selecttask-item-bottom-desc">{info.param1}</div>
            {verifyidlist.includes(info.id) && info.taskType === 8 && (
              <div className="taskdetail-selecttask-item-bottom-desc">
                {t('quest_detail_task_tip_qa')} <span className="desc-span">{answer}</span>
              </div>
            )}
            {timestatus === 1 ? (
              info.taskType === 8 ||
              (info.taskType === 9 && info.param2 !== '1' && !verifyidlist.includes(info.id)) ? (
                <div className="taskdetail-selecttask-item-bottom-setting">
                  <input
                    type="text"
                    onChange={(e) => {
                      getInputinfo(e, info);
                    }}
                    placeholder="Enter Answer"
                  />
                  <VerifyBtn
                    text="Submit"
                    verifyBtnClick={() => {
                      verifyClickFn(info);
                    }}
                  />
                </div>
              ) : (
                !verifyidlist.includes(info.id) && (
                  <div className="taskdetail-selecttask-item-bottom-setting">
                    {updateDom}
                    <VerifyBtn
                      text="Submit"
                      verifyBtnClick={() => {
                        verifyClickFn(info);
                      }}
                      isTop
                    />
                  </div>
                )
              )
            ) : undefined}
          </div>
        </div>
      );
    },
    [
      allVerifyIdList,
      finishVerifyDom,
      getInputinfo,
      t,
      timestatus,
      updateDom,
      verifyClickFn,
      verifyidlist,
    ]
  );

  return (
    <div className="taskdetail-left-selecttask">
      {taskSchedule}
      <div className="taskdetail-left-selecttask-list">
        {verifylist.map((item: any, index: any) => {
          const twittertype = [1, 2, 3, 4, 5, 11]; // 推特/discord操作类型
          const linktype = [7, 10];
          let leftimg = '';
          if (twittertype.includes(item?.taskType)) leftimg = '/images/icon/tasktwitter.png';
          if (item?.taskType === 10) leftimg = '/images/icon/tasklink.png';
          if (item?.taskType === 7) leftimg = '/images/icon/taskyoutube.png';
          if (item?.taskType === 8 || item?.taskType === 9) leftimg = '/images/icon/taskcar.png';
          if (item?.taskType === 5) leftimg = '/images/icon/taskdiscord.png';
          return (
            <div className="taskdetail-left-selecttask-list-item" key={index}>
              <div className="taskdetail-left-selecttask-list-item-left">
                <div className="taskdetail-left-selecttask-list-item-left-linkimg">
                  <img src={leftimg} alt="" />
                </div>
              </div>
              {twittertype.includes(item.taskType) && TwitterTypeDom(item)}
              {linktype.includes(item.taskType) && LinkTypeDom(item)}
              {(item.taskType === 8 || item.taskType === 9) && QaTypeDom(item)}
            </div>
          );
        })}
      </div>
      {tipflag && <TaskTip tiptext={tiptext} closeTaskClick={closeTip} />}
    </div>
  );
};
