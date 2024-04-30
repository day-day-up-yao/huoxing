import React, {
  useMemo,
  useContext,
  useCallback,
  useState,
  EventHandler,
  FormEventHandler,
  FormEvent,
} from 'react';
import moment from 'moment';
import dynamic from 'next/dynamic';
import {
  Stack,
  Typography,
  Box,
  Button,
  Modal,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from '@mui/material';
// import { useReCaptcha } from 'src/utils/next-recaptcha-v3';
import { useReCaptcha } from 'next-recaptcha-v3';
import SvgIcon from 'src/components/svg-icon';
import TaskTimeBtn from 'src/components/before/task-time-btn';
import { sleep } from 'src/utils/sleep';
import { toast } from 'src/components/toast';
import { Context } from '../context';
import VerifyList from '../verify-list';
import SubmitBtn from '../submit-btn';
import TaskInfo from '../task-detail-right';
import './index.scss';

const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}) as any;

export default () => {
  const {
    questdetail,
    timestatus,
    seeMore,
    dominfo,
    t,
    verifylist,
    ismore,
    clickLess,
    reactQuillRef,
  } = useContext(Context);

  // 显示活动奖励
  const getRewardTypeDom = useCallback((item: any) => {
    if (item?.rewardType === 1) {
      return (
        <Stack direction="row" gap="2px">
          <div>{item.rewardNum}</div>
          <div>{item.rewardToken.toUpperCase()}</div>
        </Stack>
      );
    }
    if (item?.rewardType === 2) {
      return 'NFT';
    }
    if (item?.rewardType === 3) {
      return 'Whitelist';
    }
  }, []);
  // 时间和验证
  const timeandlink = useMemo(
    () => (
      <div className="taskdetail-left-top">
        <Stack direction="row" gap="10px" className="taskdetail-left-top-status">
          <TaskTimeBtn
            isdetail
            timetype={timestatus}
            children={
              <Box fontWeight="500">
                {timestatus === 0 && 'Upcoming'}
                {timestatus === 1 && 'Ongoing'}
                {timestatus === 2 && 'Ended'}
              </Box>
            }
          />
          <TaskTimeBtn
            isdetail
            timetype={0}
            children={<Box fontWeight="500">{getRewardTypeDom(questdetail)}</Box>}
          />
        </Stack>
        <TaskTimeBtn
          isdetail
          timetype={timestatus}
          children={
            <div className="taskdetail-left-top-left">
              <SvgIcon name="green_time" className={`detail-time-icon-${timestatus}`} />
              <span>
                (UTC+8) {moment(questdetail.beginTime * 1000).format('YYYY-MM-DD HH:mm')} ～
                {moment(questdetail.endTime * 1000).format('MM-DD HH:mm')}
              </span>
            </div>
          }
        />
        {/* <div className="taskdetail-left-top-right">
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(dominfo.title)}&url=${
              dominfo.link
              // }&via=${dominfo.host}`}
            }`}
            rel="noreferrer"
          >
            <div className="taskdetail-left-top-right-item">
              <img src="/images/icon/Twitter.png" alt="" />
              Share
            </div>
          </a>
        </div> */}
      </div>
    ),
    [timestatus, getRewardTypeDom, questdetail]
  );
  // img and detaildesc
  const imganddescDom = useMemo(
    () => (
      <div className="taskdetail-left-imganddesc">
        <div className="taskdetail-left-img">
          <img
            src={
              questdetail?.picUrl && questdetail?.picUrl !== 'string'
                ? questdetail.picUrl
                : '/images/bigimg/taskdetailimg.png'
            }
            alt=""
          />
        </div>
        <div
          className="taskdetail-left-desc"
          style={{ display: `${questdetail.description === '' && 'none'}` }}
        >
          <div className="taskdetail-left-desc-con" id="taskdetail-left-desc-con-id">
            {/* <div
                            dangerouslySetInnerHTML={{ __html: questdetail.description }}
                            id="taskdetail-left-desc-con-id-con"
                        /> */}
            <ReactQuill
              ref={reactQuillRef}
              //   id="taskdetail-left-desc-con-id-con"
              className="taskdetail-left-desc-con-text"
              theme="snow"
              value={questdetail.description}
              readOnly
            />
          </div>
          {/* {ismore && (
            <div className="taskdetail-left-desc-more" id="taskdetail-left-desc-more-id">
              <div
                className="taskdetail-left-desc-more-btn"
                onClick={() => {
                  seeMore();
                }}
              >
                {t('public_more')}
              </div>
            </div>
          )} */}
          {/* <div
            className="taskdetail-left-desc-less"
            id="taskdetail-left-desc-less-id"
            onClick={clickLess}
          >
            {t('public_taskdetail_less')}
          </div> */}
        </div>
      </div>
    ),
    [questdetail.description, questdetail.picUrl, reactQuillRef]
  );

  // google captcha
  const [googleCaptchaToken, setGoogleCaptchaToken] = useState<string | null>(null);
  const [gettingToken, setGettingToken] = useState(false);
  const { executeRecaptcha: executeCaptcha } = useReCaptcha();
  const handleSubmit = useCallback(
    async (event?: FormEvent) => {
      if (event) event.preventDefault();
      try {
        setGettingToken(true);
        const token = await executeCaptcha('submitQuest').catch((err) => {
          setGettingToken(false);
          throw err;
        });
        setGettingToken(false);
        setGoogleCaptchaToken(token);

        await sleep(115000); // reCAPTCHA v3 生成的令牌在大约2分钟后过期
        setGoogleCaptchaToken(null);
      } catch (error) {
        if (error?.message === 'Recaptcha has not been loaded') {
          toast.error(t('public_recaptcha_not_loaded'));
        } else {
          throw error;
        }
      }
    },
    [executeCaptcha, t]
  );

  return (
    <div className="taskdetail-left">
      {timeandlink}
      {verifylist.length > 0 && <VerifyList />}
      {verifylist.length > 0 && questdetail.googleCaptcha ? (
        <form onSubmit={handleSubmit}>
          <Box
            sx={({ palette }) => ({
              position: 'relative',
              background: palette.background.paper,
              padding: '8px 16px',
              borderRadius: '5px',
              maxWidth: '180px',
              marginBottom: '20px',
            })}
          >
            <FormControlLabel
              control={
                <Stack direction="row" alignItems="center" position="relative">
                  {gettingToken && (
                    <CircularProgress
                      style={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        left: '3px',
                        top: '3px',
                      }}
                    />
                  )}
                  <Checkbox checked={!!googleCaptchaToken} />
                </Stack>
              }
              label={<Typography variant="subtitle2">{t('I am not a robot')}</Typography>}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: '0',
                right: '0',
                opacity: 0,
                zIndex: 10,
              }}
            >
              Submit
            </button>
          </Box>
        </form>
      ) : null}
      {verifylist.length > 0 && (
        <SubmitBtn
          timestatus={timestatus}
          questdetail={questdetail}
          googleCaptchaToken={googleCaptchaToken}
        />
      )}
      <div className="task-detail-info-h5">
        <TaskInfo />
      </div>
      {imganddescDom}
    </div>
  );
};
