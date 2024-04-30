import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { Contract, ethers } from 'ethers';
import { useTranslation } from 'react-i18next';
import { toast } from 'src/components/toast';
import { useUserPopup } from 'src/fetchs/store';
import { useGetAccountInfo } from 'src/fetchs/user';

import { useDrawNft, useCanDrawNft, drawNftFinish } from 'src/fetchs/quest';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

// ---------------------------------fight2023  领奖-------------------------------------
// NAGA Warrior Badge NFT 领奖数据
const fight2023ClaimData = {
  // 标题
  title: 'claim_fight2023_title',
  // 合约地址
  proxyAddr: '0x2a69E021E44f4B50D5E6f4DCcc662157d31a742C',
  // 链数据
  chainData: {
    icon: '/images/activity/fight2023/claim/icon-chain.png',
    name: 'Polygon',
    chainId: 137,
  },
  // 领取成功
  mintSucceed: 'claim_fight2023_succeed',
  // 奖品数据
  prizeData: {
    bgImg: 'url(/images/activity/fight2023/claim/bg-claim-prize.webp)',
    iconImg: '/images/activity/fight2023/claim/icon-claim-prize.png',
    mintImg: 'https://naga-prod.mars-block.com/metadata/',
  },
  // 操作面板内容
  content: [
    {
      titleHref: '', // 不用跳转链接了
      titleSub: 'claim_fight2023_content_1_title_sub',
    },
    {
      title: 'claim_fight2023_content_2_title',
      titleSub1: 'claim_fight2023_content_2_title_sub_1',
      btnText: 'claim_fight2023_content_2_btn',
    },
    {
      title: 'claim_fight2023_content_3_title',
      text1: 'claim_fight2023_content_3_text_1',
      text2: 'claim_fight2023_content_3_text_2',
      btnText: 'claim_fight2023_content_3_btn',
    },
  ],
  // 按钮数据
  btnData: {
    text: 'claim_btn',
    text2: 'claim_btn_2',
    bgImg: 'url(/images/activity/fight2023/bg/icon-btn-box.webp)',
    bgDel: 'url(/images/activity/fight2023/bg/icon-btn-box-del.webp)',
  },
  // 说明数据
  expData: {
    bgImg: 'url(/images/activity/fight2023/claim/bg-claim-exp.webp)',
    bgImgH5: 'url(/images/activity/fight2023/claim/bg-claim-exp-h5.webp)',
    title: 'claim_explain_title',
    text: 'claim_fight2023_explain_text',
  },
};

// ----------------------------------------------------------------------

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const { linkTo } = useLink();
  const { isPc } = useBreakPoint();
  const [isPC, setIsPC] = useState(true); // 界面匹配
  const [isOK, setIsOK] = useState(false); // 是否可以点击 Mint领取按钮
  const [userFlage, setUserFlage] = useState(false); // 用户是否登录
  const [isCanDraw, setIsCanDraw] = useState(false); // 用户是否可以点击
  const [taskFinish, setTaskFinish] = useState(false); // 用户是否完成任务
  const [accountInfo, setAccountInfo] = useState<AccountInfo>(); // 用户信息参数
  const [isDrawFinish, setIsDrawFinish] = useState(false); // 是否有领取数据
  const [isClaimed, setIsClaimed] = useState(false); // 是否有领取过
  const { mutate: mutateUserInfo } = useUserPopup(); // 登录弹窗
  const { mutate: triggerAccountInfo, data: accountInfoData } = useGetAccountInfo(); // 用户信息接口
  const { trigger: triggerDrawNft, data: drawNft } = useDrawNft(); // 用户 领奖信息
  const { trigger: triggerCanDrawNft, data: canDrawNftData } = useCanDrawNft(); // 用户 是否可以领奖
  const [infoData, setInfoData] = useState<DrawNftType>(); // 用户信息
  const [finishQuest10, setFinishQuest10] = useState(0); // 完成 10个其他任务 的数量
  const [needFinishQuest10, setNeedFinishQuest10] = useState(10); // 需要完成的 其他任务数量
  const [finishSelfQuest, setFinishSelfQuest] = useState(0); // 完成 主要任务 的数量
  const [loading, setLoading] = useState(false); // 是否正在请求
  const [popupState, setPopupState] = useState({
    isShow: false, // 弹窗是否开启
    type: 0, // 1.领取成功 2.错误提示
    text: '', // 文字说明
    tokenId: 0, // 铸造成功后的 tokenId
  });

  const timer = useRef<any>();
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsPC(isPc);
    }, 500);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isPc]);

  // 判断是否登录
  useEffect(() => {
    if (Cookies.get('uid')) {
      setUserFlage(true);
      triggerAccountInfo();
      triggerDrawNft();
      triggerCanDrawNft();
    } else {
      setUserFlage(false);
    }
  }, [triggerAccountInfo, triggerCanDrawNft, triggerDrawNft]);

  // 获取用户数据
  useEffect(() => {
    if (accountInfoData) {
      if (accountInfoData.code === 0) {
        setAccountInfo(accountInfoData.data);
      } else {
        toast.error(accountInfoData.msg || '');
      }
    }
  }, [accountInfoData]);

  // 获取用户信息
  useEffect(() => {
    if (drawNft) {
      if (drawNft.code === 0 && drawNft.data) {
        setInfoData(drawNft.data);
        setIsDrawFinish(true);
      } else {
        if (drawNft.code === -2) {
          setIsClaimed(true);
        }

        setIsDrawFinish(false);
      }
    }
  }, [drawNft]);

  // 获取任务信息
  useEffect(() => {
    if (canDrawNftData) {
      setFinishQuest10(canDrawNftData.finishQuest10);
      setFinishSelfQuest(canDrawNftData.finishSelfQuest);
      setNeedFinishQuest10(canDrawNftData.needFinishQuest10);
      if (canDrawNftData.canDraw === 1) {
        setIsCanDraw(true);
      }

      if (
        canDrawNftData.finishQuest10 >= canDrawNftData.needFinishQuest10 &&
        canDrawNftData.finishSelfQuest > 0
      ) {
        setTaskFinish(true);
      }
    }
  }, [canDrawNftData]);

  // 是否可以点击
  useEffect(() => {
    if (userFlage === true && taskFinish === true && isCanDraw === true && isDrawFinish === true) {
      setIsOK(true);
    }
  }, [isCanDraw, isDrawFinish, taskFinish, userFlage]);

  // 点击登录按钮事件
  const onBtnLogInClick = useCallback(() => {
    mutateUserInfo({ type: 0, bool: true });
  }, [mutateUserInfo]);

  // 点击完成活动任务 —— 不跳详情页，跳转到活动列表页
  const onBtnLinkToTaskClick = useCallback(() => {
    // if (canDrawNftData?.questId) {
    //   linkTo(`${paths.taskDetail}/${canDrawNftData?.questId}`);
    // } else {
    //   linkTo('');
    // }

    linkTo(`${paths.activity}/fight2023`);
  }, [linkTo]);

  // 点击关闭弹窗
  const onBtnClosePopupClick = useCallback(() => {
    setPopupState({
      isShow: false,
      type: 0,
      text: '',
      tokenId: 0,
    });
  }, []);

  // 检查 是否已有NFT
  //   const getBalanceOf = useCallback(async () => {
  //     if (!accountInfo?.metamaskAddr) return;

  //     const provider = new ethers.BrowserProvider(window.ethereum);
  //     const signer = await provider.getSigner();
  //     const abi = ['function balanceOf(address owner) view returns (uint256)'];
  //     const contract = new Contract(fight2023ClaimData.proxyAddr, abi, signer);
  //     const res = await contract.balanceOf(accountInfo?.metamaskAddr);

  //     return res;
  //   }, [accountInfo?.metamaskAddr]);

  // 获取tokenId 上传完成事件
  const firstFinish = useRef(0); // 确定1次上传
  const getTokenId = useCallback(async (txHash: string, to: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const receipt = await provider.getTransactionReceipt(txHash);

    if (receipt) {
      const transferEvent = receipt.logs.find((l) => l.transactionHash === txHash);

      if (transferEvent && firstFinish.current === 0) {
        const tokenId = Number(transferEvent.topics[3]);

        drawNftFinish({
          contractAddress: fight2023ClaimData.proxyAddr,
          userAddress: to,
          tokenId,
        })
          .then(() => {
            setPopupState({
              isShow: true,
              type: 1,
              text: fight2023ClaimData.mintSucceed,
              tokenId,
            });
            setLoading(false);
            firstFinish.current = 1;
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        toast.error('Claim Error');
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        getTokenId(txHash, to);
      }, 3000);
    }
  }, []);

  // mint
  const getMint = useCallback(
    async (data: DrawNftType) => {
      const { chainId } = fight2023ClaimData.chainData;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      // 验证 钱包链是否正确
      if (Number(network.chainId) === chainId) {
        const signer = await provider.getSigner();
        const addr = await signer.getAddress();

        // 验证 钱包用户地址是否正确
        if (data.to.toLowerCase() !== addr.toLowerCase()) {
          toast.error(t('claim_error_3'));
          setLoading(false);
          return;
        }

        const abi = ['function mint(address toAddress, bytes memory signature)'];
        const contract = new Contract(fight2023ClaimData.proxyAddr, abi, signer);
        try {
          const res = await contract.mint(data.to, data.sign);

          if (res) {
            const txHash = res.hash;

            setTimeout(() => {
              getTokenId(txHash, data.to);
            }, 3000);
          }
        } catch (error) {
          console.log('error', error);

          toast.error('Claim Error');
          setLoading(false);
        }
      } else {
        await provider.send('wallet_switchEthereumChain', [
          { chainId: `0x${chainId.toString(16)}` },
        ]);
        setLoading(false);
      }
    },
    [getTokenId, t]
  );

  // 点击Mint领取 按钮事件
  const onBtnMintClick = useCallback(async () => {
    if (!isOK || !infoData || loading === true) return;
    setLoading(true);
    getMint(infoData);
  }, [getMint, infoData, isOK, loading]);

  // 点击弹窗查看按钮
  const onBtnViewClick = useCallback(() => {
    linkTo(paths.userCenter);
  }, [linkTo]);

  const values = useMemo(
    () => ({
      t,
      isPC,
      data: fight2023ClaimData,
      isOK,
      isClaimed,
      loading,
      userFlage,
      taskFinish,
      accountInfo,
      popupState,
      finishQuest10,
      finishSelfQuest,
      needFinishQuest10,
      onBtnLogInClick,
      onBtnLinkToTaskClick,
      onBtnClosePopupClick,
      onBtnMintClick,
      onBtnViewClick,
    }),
    [
      accountInfo,
      finishQuest10,
      finishSelfQuest,
      isClaimed,
      isOK,
      isPC,
      loading,
      needFinishQuest10,
      onBtnClosePopupClick,
      onBtnLinkToTaskClick,
      onBtnLogInClick,
      onBtnMintClick,
      onBtnViewClick,
      popupState,
      t,
      taskFinish,
      userFlage,
    ]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
