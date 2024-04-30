import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Schema } from 'rsuite';
import { isArray, isObject } from 'lodash';
import dayjs from 'dayjs';
import badMutable from 'dayjs/plugin/badMutable';
import Cookies from 'js-cookie';
import { memoize } from 'proxy-memoize';
import { RootState } from 'src/models/store';

import { getDaiContractInfo } from 'src/utils/public';

import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { getAccountInfo } from 'src/fetchs/user';
import { useUserPopup } from 'src/fetchs/store';
import { toast } from 'src/components/toast';

const iconTaskDiscord = '/images/icon/taskdiscord.png';
const iconTaskYoutube = '/images/icon/taskyoutube.png';
const iconTaskCar = '/images/icon/taskcar.png';
const iconTaskLink = '/images/icon/tasklink.png';
const iconTaskTwitter = '/images/icon/tasktwitter.png';
const iconTaskNaga = '/images/icon/tasknaga.png';

export const Context = createContext({} as any);

/* ———————————————————————————————————————— 公共数据 ———————————————————————————————————————— */
// 步骤数据
const stepListData = [
  {
    // 基本信息
    id: 1,
    title: 'campaign_create_basic_info',
    icon: 'campaign-create-basic-info',
  },
  {
    // 奖励
    id: 2,
    title: 'campaign_create_rewards',
    icon: 'campaign-create-rewards',
  },
  {
    // 任务
    id: 3,
    title: 'campaign_create_tasks',
    icon: 'campaign-create-tasks',
  },
];
// 起始步骤
const stepFirstId = 1;
// 结束步骤
const stepEndId = 3;

/* ———————————————————————————————————————— 奖励数据 ———————————————————————————————————————— */
// 奖励类型数据
const rewardTypeData = [
  {
    // Whitelist 白名单
    label: 'campaign_create_reward_type_whitelist',
    value: 3,
  },
  {
    // NFT
    label: 'campaign_create_reward_type_nft',
    value: 2,
  },
  {
    // Token 代币
    label: 'campaign_create_reward_type_token',
    value: 1,
  },
];

// 奖励发放方式
const rewardDistributeByData = [
  {
    // 用户自己发放
    label: 'campaign_create_reward_distributed_by_yourself',
    value: 1,
  },
  {
    // NAGA自动发放
    label: 'campaign_create_reward_distributed_by_naga',
    value: 0,
  },
];

// 奖励分配方式
const rewardsDistributionData = [
  {
    // 平均分配
    label: 'campaign_create_reward_distribution_equally',
    value: 0,
  },
  {
    // 随机分配
    label: 'campaign_create_reward_distribution_randomly',
    value: 1,
  },
];

// 抽奖方式
const drawWinnersMethodData = [
  {
    // 自动
    label: 'campaign_create_reward_draw_winners_method_automatically',
    value: 0,
  },
  {
    // 手动
    label: 'campaign_create_reward_draw_winners_method_manually',
    value: 1,
  },
];

// 自动获奖者 设置
const autoWinnersMethodData = [
  {
    // 随机选择N个用户作为获胜者
    label: 'campaign_create_reward_auto_winners_method_random',
    value: 0,
  },
  {
    // 选择前N个用户作为获胜者
    label: 'campaign_create_reward_auto_winners_method_first',
    value: 1,
  },
];

/* ———————————————————————————————————————— 任务数据 ———————————————————————————————————————— */
// 任务类型
const taskListData = [
  {
    platform: 'twitter',
    type: 1,
    icon: iconTaskTwitter,
    tasks: [
      {
        // 推特 —— 关注
        id: 1,
        label: 'campaign_create_tasks_task_list_follow_twitter',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_follow_twitter_text',
        type: 1,
      },
      {
        // 推特 —— 转发
        id: 2,
        label: 'campaign_create_tasks_task_list_retweet_a_tweet',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_retweet_a_tweet_text',
        type: 2,
      },
      {
        // 推特 —— 喜欢
        id: 3,
        label: 'campaign_create_tasks_task_list_like_a_tweet',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_like_a_tweet_text',
        placeholder: 'campaign_create_tasks_task_list_like_a_tweet_placeholder',
        type: 3,
      },
      {
        // 推特 —— 发布带有指定内容的tweet
        id: 11,
        label: 'campaign_create_tasks_task_list_post_tweet',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_post_tweet_content',
        placeholder: 'campaign_create_tasks_task_list_post_tweet_content_placeholder',
        type: 11,
      },
      {
        // 推特 —— 发布带标签引用推文
        id: 12,
        label: 'campaign_create_tasks_task_list_quote_hashtag_tweet',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_like_a_tweet_text',
        text1: 'campaign_create_tasks_task_list_post_tweet_hashtag',
        placeholder: 'campaign_create_tasks_task_list_like_a_tweet_placeholder',
        type: 4,
      },
      {
        // 推特 —— 发布带用户引用推文
        id: 13,
        label: 'campaign_create_tasks_task_list_quote_tag_tweet',
        icon: iconTaskTwitter,
        text: 'campaign_create_tasks_task_list_like_a_tweet_text',
        text1: 'campaign_create_tasks_task_list_post_tweet_tag',
        text2: 'campaign_create_tasks_task_list_post_tweet_tag_3_friends',
        text3: 'campaign_create_tasks_task_list_post_tweet_tag_specified',
        placeholder: 'campaign_create_tasks_task_list_like_a_tweet_placeholder',
        type: 4,
      },
      // {
      //     // 推特 —— 引用
      //     id: 4,
      //     label: 'campaign_create_tasks_task_list_quote_a_tweet',
      //     icon: iconTaskTwitter,
      //     text: 'campaign_create_tasks_task_list_quote_a_tweet_tag_text',
      //     // text2: 'campaign_create_tasks_task_list_quote_a_tweet_tag_text2',
      //     text2: '',
      //     type: 4
      // },
    ],
  },
  {
    platform: 'discord',
    type: 2,
    icon: iconTaskDiscord,
    tasks: [
      {
        // Discord —— 加入
        id: 5,
        label: 'campaign_create_tasks_task_list_join_discord',
        icon: iconTaskDiscord,
        text: 'campaign_create_tasks_task_list_join_discord_text',
        type: 5,
      },
    ],
  },
  {
    platform: 'youtube',
    type: 3,
    icon: iconTaskYoutube,
    tasks: [
      {
        // Youtube —— 观看链接
        id: 7,
        label: 'campaign_create_tasks_task_list_watch_a_video_on_youtube',
        icon: iconTaskYoutube,
        title1: 'campaign_create_tasks_task_list_watch_a_video_on_youtube_title1',
        title2: 'campaign_create_tasks_task_list_watch_a_video_on_youtube_title2',
        placeholder1: 'campaign_create_tasks_task_list_watch_a_video_on_youtube_placeholder1',
        placeholder2: 'campaign_create_tasks_task_list_watch_a_video_on_youtube_placeholder2',
        type: 7,
      },
    ],
  },
  {
    platform: 'naga',
    type: 4,
    icon: iconTaskNaga,
    tasks: [
      // {
      //     // 飞书 —— 加入
      //     id: 6,
      //     label: 'campaign_create_tasks_task_list_join_telegram',
      //     icon: iconTaskFasbook,
      //     text: 'campaign_create_tasks_task_list_join_telegram_text',
      //     placeholder: 'campaign_create_tasks_task_list_join_telegram_placeholder',
      //     type: 6
      // },

      {
        // QA
        id: 8,
        label: 'campaign_create_tasks_task_list_q_a',
        icon: iconTaskCar,
        title1: 'campaign_create_tasks_task_list_q_a_title1',
        title2: 'campaign_create_tasks_task_list_q_a_title2',
        placeholder1: 'campaign_create_tasks_task_list_q_a_placeholder1',
        placeholder2: 'campaign_create_tasks_task_list_q_a_placeholder2',
        type: 8,
      },
      {
        // 工作完成证明 —— 地址或者图片地址
        id: 9,
        label: 'campaign_create_tasks_task_list_proof_of_work',
        icon: iconTaskCar,
        title: 'campaign_create_tasks_task_list_proof_of_work_title',
        placeholder: 'campaign_create_tasks_task_list_proof_of_work_placeholder',
        type: 9,
      },
      {
        // 访问指定的网页
        id: 10,
        label: 'campaign_create_tasks_task_list_visit_a_specified_web_page',
        icon: iconTaskLink,
        text1: 'campaign_create_tasks_task_list_visit_a_specified_web_page_text1',
        text2: 'campaign_create_tasks_task_list_visit_a_specified_web_page_text2',
        text3: 'campaign_create_tasks_task_list_visit_a_specified_web_page_text3',
        placeholder1: 'campaign_create_tasks_task_list_visit_a_specified_web_page_placeholder1',
        placeholder2: 'campaign_create_tasks_task_list_visit_a_specified_web_page_placeholder2',
        type: 10,
      },
    ],
  },
];

const selectDatas = memoize((state: RootState) => ({
  questTokenMap: state.quest.questTokenMap,
}));
export default ({ children }: any) => {
  /* ———————————————————————————————————————— 公共参数 ———————————————————————————————————————— */
  dayjs.extend(badMutable);
  const { t } = useTranslation();
  const { Model, Types } = Schema;
  const { StringType, NumberType, ArrayType, MixedType, ObjectType } = Types;
  const { linkTo } = useLink();
  const dispatch = useDispatch();
  const { questTokenMap } = useSelector((state: RootState) => selectDatas(state));

  // 用户登录状态
  // const [userInfo, setUserInfo] = useState();
  const { mutate: mutateUserInfo } = useUserPopup();
  useEffect(() => {
    if (Cookies.get('uid')) {
      getAccountInfo().then((res: any) => {
        if (res.code === 0) {
          // setUserInfo(res.data);
        }
      });
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // loading 等待接口返回，上传图片，合约地址等功能
  const [isLoading, setIsLoading] = useState(false);

  // 弹窗参数
  const [popover, setPopover] = useState({
    deletePop: false,
    deleteIndex: undefined,
  });

  // 弹窗参数改变
  const onPopoverChange = useCallback(
    (props: any) => {
      setPopover({ ...popover, ...props });
    },
    [popover]
  );

  /* ———————————————————————————————————————— 左侧步骤面板 ———————————————————————————————————————— */
  // 当前步骤
  const [nowStep, setNowStep] = useState(stepFirstId);

  // 点击切换步骤事件
  const onChangeNowStepClick = useCallback(
    (id: any) => {
      if (nowStep !== id) {
        setNowStep(id);
      }
    },
    [nowStep]
  );

  /* ———————————————————————————————————————— 表单参数 ———————————————————————————————————————— */
  // 表单实例
  const formRef = useRef<any>();
  // 表单错误提示
  const [formError, setFormError] = useState<any>({});
  // 表单参数
  const [formValue, setFormValue] = useState<any>({
    title: '',
    time: [
      dayjs().add(1, 'hour').startOf('minute').toDate(),
      dayjs().add(1, 'hour').add(1, 'day').startOf('minute').toDate(),
    ],
    picUrl: '',
    description: '',
    rewardType: 0,
    chain: '',
    rewardExtra: '',
    winnerNum: undefined,
    drawWinnerMethod: 0,
    autoWinnerMethod: 0,
    taskList: [],
    products: [],
    rewardToken: '',
    rewardTokenAddr: '',
    rewardMethod: 0,
    rewardNum: 0,
    rewardNumUsdt: 0,
    nftCollectionAddress: '', // NFT合约地址
    nftPreviewUrl: '', // NFT图片地址
    gameInfo: {}, // 关联游戏

    // 新增参数
    rewardDistributedBy: 1, // 奖励发放方式  0.NAGA发放 1.用户自己发放
  });

  /* ———————————————————————————————————————— 奖励参数 ———————————————————————————————————————— */

  // 链列表
  const rewardChainListData = useMemo(() => {
    const list: any = [];
    if (isArray(questTokenMap)) {
      questTokenMap.map((item) => {
        const obj = {
          label: item.chain,
          value: item.chain,
          icon: item.iconUrl,
        };
        list.push(obj);
      });
    }

    return list;
  }, [questTokenMap]);

  // Token列表
  const rewardTokenObjData = useMemo(() => {
    const obj: any = {};
    if (isArray(questTokenMap)) {
      questTokenMap.map((item) => {
        const objKey = item.chain;
        const objValue = item.tokenList.map((data: any) => ({
          label: data.token,
          value: data.token,
          icon: data.iconUrl,
        }));

        obj[objKey] = objValue;
      });
    }

    return obj;
  }, [questTokenMap]);

  // Token类型 切换 0.选择币种列表 1.添加币种地址
  const [tokenType, setTokenType] = useState<any>(0);
  // NFT 合约地址 内容
  const [nftInfo, setNftInfo] = useState<any>({
    name: '',
  });
  // Token 合约地址 内容
  const [tokenInfo, setTokenInfo] = useState<any>({
    name: '',
    symbol: '',
  });
  // Token价值是否启用 USDT
  const [isUseUSDT, setIsUseUSDT] = useState<any>(false);
  /* ———————————————————————————————————————— 表单方法 ———————————————————————————————————————— */
  useEffect(() => {
    console.log('Form Value1111', formValue);
  }, [formValue]);
  useEffect(() => {
    console.log('Form formError', formError);
  }, [formError]);

  // 链数据表单规则
  const chainRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();

    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 1 || schema.rewardType.value === 3) {
        return StringType().isRequired(t('campaign_create_reward_network_error'));
      }
      const winnerNumCheckResult = schema.winnerNum.check();
      if (!winnerNumCheckResult.hasError) {
        return StringType().isRequired(t('campaign_create_reward_network_error'));
      }

      return StringType();
    }

    return StringType();
  });

  // NFT合约地址 表单规则
  const nftCollectionAddressRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 2) {
        const winnerNumCheckResult = schema.winnerNum.check();
        if (!winnerNumCheckResult.hasError) {
          return StringType()
            .isRequired(t('campaign_create_reward_nft_contract_address_error'))
            .addRule(
              () => nftInfo.name !== '',
              t('campaign_create_reward_nft_contract_address_error')
            );
        }
        return StringType();
      }
    }
    return StringType();
  });

  // NFT图片 表单规则
  const nftPreviewUrlRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 2) {
        const winnerNumCheckResult = schema.winnerNum.check();
        if (!winnerNumCheckResult.hasError) {
          return StringType().isRequired(t('campaign_create_reward_nft_image_error'));
        }
        return StringType();
      }
      return StringType();
    }
    return StringType();
  });

  // Token代币名称 表单规则
  const rewardTokenRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 1) {
        const chainCheckResult = schema.chain.check();
        if (!chainCheckResult.hasError) {
          return tokenType === 0
            ? StringType().isRequired(t('campaign_create_reward_token_pick_from_list_error'))
            : StringType();
        }
        return StringType();
      }
      return StringType();
    }
    return StringType();
  });

  // Token合约地址 表单规则
  const rewardTokenAddrRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 1) {
        const chainCheckResult = schema.chain.check();
        if (!chainCheckResult.hasError) {
          return tokenType === 1
            ? StringType()
                .isRequired(t('campaign_create_reward_token_add_error'))
                .addRule(
                  () => typeof tokenInfo.name !== 'undefined' && tokenInfo.name !== '',
                  t('campaign_create_reward_token_add_error')
                )
            : StringType();
        }
        return StringType();
      }
      return StringType();
    }
    return StringType();
  });

  // Token数量
  const rewardNumRule = MixedType().when((schema: any): any => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 1) {
        const chainCheckResult = schema.chain.check();
        if (!chainCheckResult.hasError) {
          return isUseUSDT
            ? Number()
            : NumberType()
                .isRequired(t('campaign_create_reward_token_reward_amount_error'))
                .pattern(
                  /^([1-9]\d*|0)(\.\d*)?$/,
                  t('campaign_create_reward_token_reward_amount_error')
                );
        }
        return NumberType();
      }
      return NumberType();
    }
    return NumberType();
  });

  const rewardNumUsdtRule = MixedType().when((schema: any) => {
    const rewardTypeCheckResult = schema.rewardType.check();
    if (!rewardTypeCheckResult.hasError) {
      if (schema.rewardType.value === 1) {
        const chainCheckResult = schema.chain.check();
        if (!chainCheckResult.hasError) {
          return isUseUSDT
            ? NumberType()
                .isRequired(t('campaign_create_reward_token_reward_amount_error'))
                .pattern(
                  /^([1-9]\d*|0)(\.\d*)?$/,
                  t('campaign_create_reward_token_reward_amount_error')
                )
            : NumberType();
        }
        return NumberType();
      }
      return NumberType();
    }
    return NumberType();
  });

  // 任务表单规则 —— key类型： taskListData参数 type
  const taskListRule = ArrayType()
    .minLength(1, t('campaign_create_tasks_task_list_error'))
    .addRule((value) => {
      // 是否验证通过：true: 通过没错误
      let isOK = true;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const type = item.taskType;

        if (
          type === 1 ||
          type === 2 ||
          type === 3 ||
          type === 4 ||
          type === 6 ||
          type === 7 ||
          type === 8 ||
          type === 9 ||
          type === 11
        ) {
          if (!item.param1 || item.param1 === '') {
            isOK = false;
            break;
          }
          if (type === 4) {
            if (!item.param2 || item.param2 === '') {
              isOK = false;
              break;
            }
          }
        } else if (type === 5) {
          if (!item.param1 || item.param1 === '' || !item.param2 || item.param2 === '') {
            isOK = false;
            break;
          }
        } else if (type === 10) {
          if (
            !item.param1 ||
            item.param1 === '' ||
            !item.param2 ||
            item.param2 === '' ||
            !item.param3 ||
            item.param3 === ''
          ) {
            isOK = false;
            break;
          }
        }
      }

      return isOK;
    }, t('campaign_create_tasks_task_list_error2'));

  // 表单规则校验
  const model = Model({
    title: StringType().isRequired(t('campaign_create_campaign_name_error')),
    picUrl: StringType().isRequired(t('campaign_create_campaign_cover_image_error')),
    description: StringType().isRequired(t('campaign_create_campaign_description_error')),
    rewardType: NumberType().isOneOf([1, 2, 3], t('campaign_create_reward_type_error')),
    // gameInfo: ObjectType().addRule(
    //   (value) => !!value.gameId,
    //   t('campaign_create_campaign_game_info_error')
    // ),
    chain: chainRule,
    winnerNum: NumberType().isRequired(t('campaign_create_reward_number_of_winners_error')),
    // nftCollectionAddress: nftCollectionAddressRule,
    // nftPreviewUrl: nftPreviewUrlRule,
    rewardToken: rewardTokenRule,
    rewardTokenAddr: rewardTokenAddrRule,
    rewardNum: rewardNumRule,
    rewardNumUsdt: rewardNumUsdtRule,
    taskList: taskListRule,
  } as any);

  // 提交表单 按钮事件
  const onBtnHandleSubmitClick = useCallback(() => {
    // if (!formRef.current.check()) {
    //     console.error('Form Error', formError)
    //     return
    // }

    // 不是认证用户不让提交 ———— 暂时关闭
    // if (!userInfo || !userInfo.nagaAuth) {
    //     error({ title: t('campaign_create_error2') })
    //     return
    // }

    formRef.current.checkAsync().then((result: any) => {
      console.log('校验返回', result);

      if (result.hasError) {
        const resFormError = result.formError;
        console.log('错误结果，resFormError', resFormError);
        if (resFormError.title || resFormError.picUrl || resFormError.description) {
          setNowStep(1);
        } else if (
          resFormError.rewardType ||
          resFormError.chain ||
          resFormError.winnerNum ||
          //   resFormError.nftCollectionAddress ||
          //   resFormError.nftPreviewUrl ||
          resFormError.rewardToken ||
          resFormError.rewardTokenAddr ||
          resFormError.rewardNum ||
          resFormError.rewardNumUsdt
        ) {
          setNowStep(2);
        }

        toast.error(t('campaign_create_error'));
      } else {
        // 参数处理
        const obj: any = { ...formValue };

        // 时间赋值
        if (formValue.time[0] && formValue.time[1]) {
          const time1 = dayjs(formValue.time[0]).unix();
          const time2 = dayjs(formValue.time[1]).unix();
          if (time1 < time2) {
            obj.beginTime = time1;
            obj.endTime = time2;
          } else {
            obj.beginTime = time2;
            obj.endTime = time1;
          }

          delete obj.time;
        }

        // 关联游戏
        if (typeof formValue.gameInfo.gameId !== 'undefined') {
          obj.gameId = formValue.gameInfo.gameId;
          obj.gameLogo = formValue.gameInfo.gameLogo;
          obj.gameName = formValue.gameInfo.gameName;

          delete obj.gameInfo;
        }

        // Token名称
        if (
          formValue.rewardType === 1 &&
          tokenType === 1 &&
          formValue.rewardTokenAddr !== '' &&
          typeof tokenInfo.name !== 'undefined' &&
          tokenInfo.name !== ''
        ) {
          obj.rewardToken = tokenInfo.symbol;
        }

        // Token代币总额 数量
        if (isUseUSDT) {
          obj.rewardNum = 0;
          obj.rewardNumUsdt = Number(obj.rewardNumUsdt);
        } else {
          obj.rewardNum = Number(obj.rewardNum);
          obj.rewardNumUsdt = 0;
        }

        // 合约名称
        if (
          formValue.rewardType === 2 &&
          formValue.nftCollectionAddress !== '' &&
          nftInfo.name !== ''
        ) {
          obj.nftCollectionName = nftInfo.name;
        }

        // 任务自动纠错
        if (formValue.taskList) {
          // 推特地址判断
          const twitterString1 = 'https://twitter.com/';
          const twitterString2 = 'https://x.com/';
          const twitterString3 = '/status/';
          const twitterIdNum = 19;

          for (let i = 0; i < formValue.taskList.length; i += 1) {
            const item = formValue.taskList[i];

            // 转发推特 || 喜欢推文
            if (item.taskType === 2 || item.taskType === 3) {
              const value = item.param1;
              if (
                (value.includes(twitterString1) || value.includes(twitterString2)) &&
                value.includes(twitterString3)
              ) {
                obj.taskList[i].param1 =
                  value.split(twitterString3)[0] +
                  twitterString3 +
                  value.split(twitterString3)[1].slice(0, twitterIdNum);
              }
            }
          }
        }

        // 是否包含google验证码
        obj.googleCaptcha = 0;
        if ('googleCaptcha' in formValue) {
          obj.googleCaptcha = 1;
        }

        // 状态：0.存草稿 1.发布
        obj.status = 1;

        console.log('Form 表单结果', obj);
        dispatch.quest
          .addQuest(obj)
          .then((res: any) => {
            console.log('创建', res);
            if (res.code === 0) {
              toast.success(t('campaign_create_success'));
              setTimeout(() => {
                // 前端跳转node不请求，改成后端刷新跳转
                linkTo(`${paths.taskDetail}/${res.data.questId}`);
              }, 2000);
            } else {
              toast.error(t('campaign_create_error'));
              console.log('创建失败：', res.code, res.msg);
            }
          })
          .catch((error: any) => {
            // error({ title: t('campaign_create_error') });
            console.log('创建失败：', error);
          });
      }
    });
  }, [
    t,
    formValue,
    tokenType,
    tokenInfo.name,
    tokenInfo.symbol,
    isUseUSDT,
    nftInfo.name,
    dispatch.quest,
    linkTo,
  ]);

  /* ———————————————————————————————————————— 奖励面板方法 ———————————————————————————————————————— */

  // 点击 Token类型 切换事件
  const onBtnTokenTypeClick = useCallback((type: any) => {
    setTokenType(type);
  }, []);

  // 点击 Token价值类型 切换事件
  const onBtnTokenIsUseUSDTChange = useCallback((isUse: any) => {
    setIsUseUSDT(isUse);
  }, []);

  // 通过 合约地址 获取NFT名称
  const getNFTName = useCallback(
    async (chain: any, address: any) => {
      const delError = () => {
        const obj = { ...formError };
        delete obj.nftCollectionAddress;
        setFormError(obj);
      };

      // 通过链上接口 获取数据
      setIsLoading(true);
      const info: any = await getDaiContractInfo(chain, address);
      if (isObject(info) && (info as any).name) {
        delError();
        setNftInfo({ ...info });
        setIsLoading(false);
      } else {
        const obj = {
          chain,
          contract_address: address,
        };

        // 通过Element接口 获取数据
        dispatch.element
          .getCollectionWithChain(obj)
          .then((res: any) => {
            console.log('Element', res);
            if (res.code === 0) {
              const name = res.data?.collection?.name || '';
              if (name !== '') {
                const data = {
                  name,
                };
                delError();
                setNftInfo({ ...data });
                setIsLoading(false);
              }
            } else {
              setIsLoading(false);
            }
          })
          .catch(() => {
            setIsLoading(false);
          });
      }
    },
    [dispatch.element, formError]
  );

  // 通过 合约地址 获取Token名称
  const getTokenName = useCallback(
    async (chain: any, address: any) => {
      const delError = () => {
        const obj = { ...formError };
        delete obj.rewardTokenAddr;
        setFormError(obj);
      };

      setIsLoading(true);
      const info = await getDaiContractInfo(chain, address, true);
      if (isObject(info) && (info as any).name) {
        delError();
        setTokenInfo({ ...info });
      }
      setIsLoading(false);
    },
    [formError]
  );

  // 监听 合约地址输入 请求链上信息
  const debounce = useRef(-1); // 防抖动计时
  const oldTokenAddr = useRef('');
  const oldNFTAddr = useRef('');
  useEffect(() => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    if (formValue.rewardType === 1) {
      if (
        tokenType === 1 &&
        formValue.chain !== '' &&
        formValue.rewardTokenAddr !== '' &&
        oldTokenAddr.current !== formValue.rewardTokenAddr
      ) {
        setIsLoading(true);
        debounce.current = window.setTimeout(() => {
          getTokenName(formValue.chain, formValue.rewardTokenAddr);
          oldTokenAddr.current = formValue.rewardTokenAddr;
        }, 400);
      } else {
        if (tokenType !== 1 || formValue.chain === '' || formValue.rewardTokenAddr === '') {
          setTokenInfo({
            name: '',
            symbol: '',
          });
          oldTokenAddr.current = '';
          setIsLoading(false);
        }

        if (debounce.current) {
          clearTimeout(debounce.current);
        }
      }
    } else {
      setTokenInfo({
        name: '',
        symbol: '',
      });
      oldTokenAddr.current = '';
    }

    if (formValue.rewardType === 2) {
      if (
        formValue.chain !== '' &&
        formValue.nftCollectionAddress !== '' &&
        oldNFTAddr.current !== formValue.nftCollectionAddress
      ) {
        setIsLoading(true);
        debounce.current = window.setTimeout(() => {
          getNFTName(formValue.chain, formValue.nftCollectionAddress.toLocaleLowerCase());
          oldNFTAddr.current = formValue.nftCollectionAddress;
        }, 400);
      } else {
        if (formValue.chain === '' || formValue.nftCollectionAddress === '') {
          setNftInfo({
            name: '',
          });
          oldNFTAddr.current = '';
          setIsLoading(false);
        }

        if (debounce.current) {
          clearTimeout(debounce.current);
        }
      }
    } else {
      setNftInfo({
        name: '',
      });
      oldNFTAddr.current = '';
    }

    return () => {
      if (debounce.current) {
        clearTimeout(debounce.current);
      }
    };
  }, [tokenType, formValue, getTokenName, getNFTName]);

  /* ———————————————————————————————————————— 任务面板方法 ———————————————————————————————————————— */

  /* ———————————————————————————————————————— 传递参数 ———————————————————————————————————————— */
  const result = useMemo(
    () => ({
      t,
      stepListData,
      rewardTypeData,
      rewardChainListData,
      rewardTokenObjData,
      drawWinnersMethodData,
      autoWinnersMethodData,
      rewardDistributeByData,
      rewardsDistributionData,
      taskListData,
      nowStep,
      stepFirstId,
      stepEndId,
      formRef,
      formValue,
      formError,
      model,
      tokenType,
      tokenInfo,
      nftInfo,
      popover,
      isUseUSDT,
      isLoading,
      onPopoverChange,
      onChangeNowStepClick,
      setFormValue,
      setFormError,
      setIsLoading,
      onBtnHandleSubmitClick,
      onBtnTokenTypeClick,
      onBtnTokenIsUseUSDTChange,
    }),
    [
      formError,
      formValue,
      isLoading,
      isUseUSDT,
      model,
      nftInfo,
      nowStep,
      onBtnHandleSubmitClick,
      onBtnTokenIsUseUSDTChange,
      onBtnTokenTypeClick,
      onChangeNowStepClick,
      onPopoverChange,
      popover,
      rewardChainListData,
      rewardTokenObjData,
      t,
      tokenInfo,
      tokenType,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
