import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { nagaTwitterAccount } from 'src/config-global';
import { useGetActivityDetail } from 'src/fetchs/activity';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

// ---------------------------------主要设置-------------------------------------

const mainData = {
  titleMain: 'activity_fight2023_main_title',
  titleSub: 'activity_fight2023_sub_title',
  date: 'activity_fight2023_date',
  description: 'activity_fight2023_description',
  logoImg: '/images/activity/fight2023/bg/icon-top-logo.webp',
  titleImg: '/images/activity/fight2023/bg/icon-top-title.webp',
  titleImgH5: '/images/activity/fight2023/bg/icon-top-title-h5.webp',
  bgImg: 'url(/images/activity/fight2023/bg/bg-main-top.webp)',
};

// ----------------------------------------------------------------------

// ---------------------------------活动列表1-------------------------------------

const listData1 = {
  titleMain: 'activity_fight2023_list_1_title',
  titleSub: 'activity_fight2023_prize_title',
  bgImg: 'url(/images/activity/fight2023/bg/bg-list-border.webp)',
  bgImgH5: 'url(/images/activity/fight2023/bg/bg-list-border-h5.webp)',
  prizeNum: '💰$10,000',
  prizeList: [
    {
      img: '/images/activity/fight2023/prize/prize-1-01.webp',
      name: 'WeirdoGhostGang t-shirt',
      num: 'X 5',
      support: 'WeirdoGhostGang',
    },
    {
      img: '/images/activity/fight2023/prize/prize-1-02.webp',
      name: 'JSBO「人杰弟灵」Limited Box',
      num: 'X 5',
      support: 'WeirdoGhostGang',
    },
    {
      img: '/images/activity/fight2023/prize/prize-1-03.webp',
      name: 'NAGA Warrior Badge NFT',
      num: '?',
      support: 'NAGA Games',
    },
    {
      img: '/images/activity/fight2023/prize/prize-1-04.webp',
      name: 'Discord Role “NAGA Gamemaster”',
      num: 'X 100',
      support: 'NAGA Games',
    },
    {
      img: '/images/activity/fight2023/prize/prize-1-05.webp',
      name: '$HSK',
      num: 'X 3000',
      support: 'Hashkey',
    },
  ],
};

// ----------------------------------------------------------------------

// ---------------------------------活动列表2-------------------------------------

const listData2 = {
  titleMain: 'activity_fight2023_list_2_title',
  description: 'activity_fight2023_list_2_desc',
  bgImg: 'url(/images/activity/fight2023/bg/bg-prize-border.webp)',
  bgImgH5: 'url(/images/activity/fight2023/bg/bg-prize-border-h5.webp)',
  joinText: 'activity_fight2023_list_join',
  joinUrl: 'https://discord.gg/sszzQDRaN8',
  prizeList: [
    {
      img: '/images/activity/fight2023/prize/prize-2-01.webp',
      name: 'MetaCene Early Adventurer Chest',
      num: 'X 50',
      support: 'Metacene',
    },
    {
      img: '/images/activity/fight2023/prize/prize-2-02.webp',
      name: 'Genesis Mystery Box Closed Test Key',
      num: 'X 2',
      support: 'Seraph',
    },
    {
      img: '/images/activity/fight2023/prize/prize-2-03.webp',
      name: 'Preseason Code',
      num: 'X 10',
      support: 'Bigtime',
    },
    {
      img: '/images/activity/fight2023/prize/prize-2-04.webp',
      name: 'Mystery Boxes NFT',
      num: 'X 20',
      support: 'Lumiterra',
    },
  ],
};

// ----------------------------------------------------------------------

// ---------------------------------活动列表3-------------------------------------

const listData3 = {
  titleMain: 'activity_fight2023_list_3_title',
  description: 'activity_fight2023_list_3_desc',
  bgImg: 'url(/images/activity/fight2023/bg/bg-prize-border.webp)',
  bgImgH5: 'url(/images/activity/fight2023/bg/bg-prize-border-h5.webp)',
  joinText: 'activity_fight2023_list_join',
  joinUrl: `https://twitter.com/${nagaTwitterAccount}`,
  prizeList: [
    {
      img: '/images/activity/fight2023/prize/prize-3-01.webp',
      name: 'MEME VIP PASS FCFS Whitelist spot',
      num: 'X 5',
      support: 'Cards Ahoy',
    },
    {
      img: '/images/activity/fight2023/prize/prize-3-02.webp',
      name: 'Lyra Free mint access',
      num: 'X 25',
      support: 'Yuliverse',
    },
    {
      img: '/images/activity/fight2023/prize/prize-3-03.webp',
      name: '$CFUN',
      num: 'X 2500',
      support: 'Outerverse',
    },
    {
      img: '/images/activity/fight2023/prize/prize-3-04.webp',
      name: 'Mystery Boxes NFT',
      num: '∞',
      support: 'NAGA Games',
    },
  ],
};

// ----------------------------------------------------------------------

// ---------------------------------活动规则-------------------------------------

const ruleData = {
  title: 'activity_fight2023_rule_title',
  bgImg: 'url(/images/activity/fight2023/bg/bg-rule-border.webp)',
  bgImgH5: 'url(/images/activity/fight2023/bg/bg-rule-border-h5.webp)',
  content: [
    {
      title: 'activity_fight2023_rule_content_1_title',
      text: 'activity_fight2023_rule_content_1_text',
    },
    {
      title: 'activity_fight2023_rule_content_2_title',
      text: 'activity_fight2023_rule_content_2_text',
    },
    {
      title: 'activity_fight2023_rule_content_3_title',
      text: 'activity_fight2023_rule_content_3_text',
    },
    {
      title: '',
      text: 'activity_fight2023_rule_content_4_text',
      linkTitle: 'Discord',
      linkUrl: 'https://discord.com/invite/nSb22PUfte',
    },
  ],
};

// ----------------------------------------------------------------------

// ---------------------------------关于NAGA-------------------------------------

const aboutData = {
  title: 'activity_fight2023_about_title',
  bgImg: 'url(/images/activity/fight2023/bg/bg-rule-border.webp)',
  bgImgH5: 'url(/images/activity/fight2023/bg/bg-rule-border-h5.webp)',
  content: [
    {
      logo: '/images/activity/fight2023/bg/icon-about-1.webp',
      logoHeight: '36px',
      text: 'activity_fight2023_about_content_1_text',
    },
    {
      logo: '/images/activity/fight2023/bg/icon-about-2.webp',
      logoHeight: '36px',
      text: 'activity_fight2023_about_content_2_text',
    },
    {
      logo: '/images/activity/fight2023/bg/icon-about-3.webp',
      logoHeight: '44px',
      text: 'activity_fight2023_about_content_3_text',
    },
  ],
};

// ----------------------------------------------------------------------

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();

  // 当前活动列表
  const { trigger: triggerGetActivityDetail, data: activityDetailData } = useGetActivityDetail();
  // 横幅数据
  const [bannerList, setBannerList] = useState<ActivityBannerListType[]>();
  // 任务列表
  const [questList, setQuestList] = useState<QuestListType[]>();
  // 赞助数据
  const [logoGroupList, setLogoGroupList] = useState<ActivityLogoGroupListType[]>();

  // 初始数据请求
  useEffect(() => {
    triggerGetActivityDetail({
      activityId: 1,
    });
  }, [triggerGetActivityDetail]);

  useEffect(() => {
    // console.log('activityDetailData', activityDetailData);
    if (activityDetailData?.bannerList) {
      setBannerList(activityDetailData?.bannerList);
    }
    if (activityDetailData?.logoGroupList) {
      setLogoGroupList(activityDetailData?.logoGroupList);
    }
    if (activityDetailData?.questList) {
      setQuestList(activityDetailData?.questList);
    }
  }, [activityDetailData]);

  // 3档视窗适配
  const { isMob, isSmallLaptop } = useBreakPoint();
  const windowShowType = useMemo(() => {
    let show = 0;
    if (isMob) {
      show = 2;
    } else if (isSmallLaptop) {
      show = 1;
    } else {
      show = 0;
    }

    return show;
  }, [isMob, isSmallLaptop]);

  const values = useMemo(
    () => ({
      t,
      mainData,
      listData1,
      listData2,
      listData3,
      ruleData,
      aboutData,
      windowShowType,
      bannerList,
      questList,
      logoGroupList,
    }),
    [bannerList, logoGroupList, questList, t, windowShowType]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
