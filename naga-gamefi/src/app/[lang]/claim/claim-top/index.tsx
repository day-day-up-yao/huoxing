import React, { useContext, useMemo } from 'react';

import { Avatar, Box, Stack, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import LoadingButton from '@mui/lab/LoadingButton';
import { TocopyText } from 'src/utils/public';
import { Context } from '../context';
import ClaimInfoItem from '../_components/claim-info-item';

const ClaimTop = () => {
  const {
    t,
    isPC,
    data,
    loading,
    isOK,
    isClaimed,
    userFlage,
    accountInfo,
    taskFinish,
    finishQuest10,
    finishSelfQuest,
    needFinishQuest10,
    onBtnLogInClick,
    onBtnLinkToTaskClick,
    onBtnMintClick,
  } = useContext(Context);

  // 左侧图片
  const leftDom = useMemo(
    () => (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={
          isPC
            ? {
                width: '500px',
                height: '500px',
                p: '40px',
                boxSizing: 'border-box',
                backgroundImage: data.prizeData.bgImg || 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
              }
            : {
                width: '100%',
                height: 'auto',
                p: '28px',
                boxSizing: 'border-box',
                backgroundImage: data.prizeData.bgImg || 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
              }
        }
      >
        <img src={data.prizeData.iconImg} alt="" />
      </Stack>
    ),
    [data.prizeData.bgImg, data.prizeData.iconImg, isPC]
  );

  // 标题
  const claimTitle = useMemo(
    () => (
      <Typography
        sx={
          isPC
            ? {
                fontSize: '32px',
                lineHeight: '38px',
                minHeight: '38px',
                fontWeight: 'bold',
              }
            : {
                fontSize: '20px',
                lineHeight: '24px',
                minHeight: '24px',
                fontWeight: 'bold',
                mb: '16px',
              }
        }
      >
        {t(data.title)}
      </Typography>
    ),
    [data.title, isPC, t]
  );

  // 面板1 ———— 所属链
  const claimInfoChain = useMemo(
    () => (
      <Stack direction="row" alignItems="center" gap={isPC ? '16px' : '10px'}>
        <Stack height={isPC ? '24px' : '18px'} width={isPC ? '24px' : '18px'}>
          <img src={data.chainData.icon} alt="" />
        </Stack>
        <Typography
          sx={
            isPC
              ? {
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#B8B9C1',
                }
              : {
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#B8B9C1',
                }
          }
        >
          {data.chainData.name}
        </Typography>
        <Typography
          sx={
            isPC
              ? {
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }
              : {
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }
          }
          onClick={() => {
            TocopyText(data.proxyAddr, t);
          }}
        >{`${data.proxyAddr?.slice(0, 8)}...${data.proxyAddr?.slice(-8)}`}</Typography>
      </Stack>
    ),
    [data.chainData.icon, data.chainData.name, data.proxyAddr, isPC, t]
  );

  // 面板1 ———— 合约地址
  const claimInfoItem1 = useMemo(() => {
    const contentId = 0;

    return (
      <ClaimInfoItem
        t={t}
        isPC={isPC}
        id={contentId}
        titleChild={claimInfoChain}
        titleSub={data.content[contentId].titleSub}
        isText
      />
    );
  }, [claimInfoChain, data.content, isPC, t]);

  // 面板2 ———— 账号信息
  const claimInfoUser = useMemo(
    () => (
      <Stack
        direction={isPC ? 'row' : 'column'}
        alignItems={isPC ? 'center' : 'flex-start'}
        gap={isPC ? '32px' : '4px'}
      >
        <Stack direction="row" alignItems="center" gap="12px">
          <Avatar
            src={Cookies.get('avatarUrl')}
            sx={
              isPC
                ? {
                    width: '40px',
                    height: '40px',
                  }
                : {
                    width: '24px',
                    height: '24px',
                  }
            }
          />
          <Typography
            sx={
              isPC
                ? {
                    fontSize: '24px',
                    lineHeight: '28px',
                  }
                : {
                    fontSize: '16px',
                    lineHeight: '20px',
                  }
            }
          >
            {accountInfo?.name}
          </Typography>
        </Stack>
        <Box
          sx={
            isPC
              ? {
                  width: '1px',
                  height: '23px',
                  bgcolor: '#4E4C6B',
                }
              : {
                  display: 'none',
                }
          }
        />
        <Stack>
          <Typography
            sx={
              isPC
                ? { fontSize: '16px', color: '#B8B9C1' }
                : {
                    fontSize: '12px',
                  }
            }
          >
            {accountInfo?.metamaskAddr
              ? `${accountInfo?.metamaskAddr?.slice(0, 6)}...${accountInfo?.metamaskAddr?.slice(
                  -4
                )}`
              : ''}
          </Typography>
        </Stack>
      </Stack>
    ),
    [accountInfo?.metamaskAddr, accountInfo?.name, isPC]
  );

  // 面板2 ———— 登录账号
  const claimInfoItem2 = useMemo(() => {
    const contentId = 1;

    return (
      <ClaimInfoItem
        t={t}
        isPC={isPC}
        id={contentId}
        title={userFlage ? undefined : data.content[contentId].title}
        isTitleT
        titleChild={userFlage ? claimInfoUser : undefined}
        titleSub={data.content[contentId].titleSub1}
        statusNum={userFlage ? 2 : 1}
        btnText={userFlage ? undefined : data.content[contentId].btnText}
        onBtnClick={() => {
          onBtnLogInClick();
        }}
      />
    );
  }, [claimInfoUser, data.content, isPC, onBtnLogInClick, t, userFlage]);

  // 面板3 ———— 任务列表
  const claimInfoTaskList = useMemo(() => {
    const contentId = 2;

    return (
      <Stack gap="8px">
        <Stack direction="row" alignItems="center" gap="8px">
          <Typography
            sx={
              isPC
                ? { fontSize: '20px', lineHeight: '24px', width: '80%' }
                : { fontSize: '12px', lineHeight: '14px', width: '70%' }
            }
          >
            {t(data.content[contentId].text1)}
          </Typography>
          <Typography
            sx={
              isPC
                ? { fontSize: '20px', lineHeight: '24px', color: '#FCBF23' }
                : { fontSize: '12px', lineHeight: '14px', color: '#FCBF23' }
            }
          >
            {`(${finishSelfQuest}/1)`}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="8px">
          <Typography
            sx={
              isPC
                ? { fontSize: '20px', lineHeight: '24px' }
                : { fontSize: '12px', lineHeight: '14px' }
            }
          >
            {t(data.content[contentId].text2)}
          </Typography>
          <Typography
            sx={
              isPC
                ? { fontSize: '20px', lineHeight: '24px', color: '#FCBF23' }
                : { fontSize: '12px', lineHeight: '14px', color: '#FCBF23' }
            }
          >
            {`(${finishQuest10}/${needFinishQuest10})`}
          </Typography>
        </Stack>
      </Stack>
    );
  }, [data.content, finishQuest10, finishSelfQuest, isPC, needFinishQuest10, t]);

  // 面板3 ———— 完成任务
  const claimInfoItem3 = useMemo(() => {
    const contentId = 2;

    return (
      <ClaimInfoItem
        t={t}
        isPC={isPC}
        id={contentId}
        titleSub={data.content[contentId].title}
        titleChild={claimInfoTaskList}
        statusNum={taskFinish ? 2 : 1}
        btnText={taskFinish ? undefined : data.content[contentId].btnText}
        onBtnClick={() => {
          onBtnLinkToTaskClick();
        }}
      />
    );
  }, [t, isPC, data.content, claimInfoTaskList, taskFinish, onBtnLinkToTaskClick]);

  // 领取Mint按钮
  const mintBtnDom = useMemo(
    () => (
      <Box
        width={isPC ? '262px' : '148px'}
        height={isPC ? '72px' : '40px'}
        sx={{
          backgroundImage: (isOK ? data.btnData.bgImg : data.btnData.bgDel) || 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          cursor: isOK ? 'pointer' : 'not-allowed',
          alignSelf: isPC ? 'flex-start' : 'center',
          mt: isPC ? '0' : '24px',
        }}
        onClick={() => onBtnMintClick()}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: ' 100%',
            height: '100%',
            fontSize: isPC ? '24px' : '14px',
            fontWeight: 600,
            color: isOK ? '#450C04' : '#837AA3',
            lineHeight: '28px',
            letterSpacing: '1px',
          }}
        >
          {loading ? (
            <LoadingButton
              loading
              variant="text"
              sx={{
                '.MuiLoadingButton-loadingIndicator': {
                  span: {
                    width: '26px !important',
                    height: '26px !important',
                    color: '#450C04',
                  },
                },
              }}
            />
          ) : isClaimed ? (
            t(data.btnData.text2)
          ) : (
            t(data.btnData.text)
          )}
        </Stack>
      </Box>
    ),
    [
      data.btnData.bgDel,
      data.btnData.bgImg,
      data.btnData.text,
      data.btnData.text2,
      isClaimed,
      isOK,
      isPC,
      loading,
      onBtnMintClick,
      t,
    ]
  );

  // 右侧面板
  const rightDom = useMemo(
    () => (
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={isPC ? { flex: '1', height: '640px' } : { flex: '1' }}
      >
        {claimTitle}
        <Stack
          sx={isPC ? { bgcolor: '#121530', p: '0 30px' } : { bgcolor: '#121530', p: '0 20px' }}
        >
          {claimInfoItem1}
          {claimInfoItem2}
          {claimInfoItem3}
        </Stack>
        {mintBtnDom}
      </Stack>
    ),
    [claimInfoItem1, claimInfoItem2, claimInfoItem3, claimTitle, isPC, mintBtnDom]
  );

  return (
    <Stack
      direction={isPC ? 'row' : 'column'}
      gap={isPC ? '40px' : '24px'}
      sx={isPC ? { mt: '82px' } : { mt: '66px' }}
    >
      {leftDom}
      {rightDom}
    </Stack>
  );
};

export default ClaimTop;
