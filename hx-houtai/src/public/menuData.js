/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：menu data
 * , {
        key: 'postUser',
        icon: 'icon-postUser',
        link: '/postUser',
        text: '用户管理'
    }, {
        key: 'images',
        icon: 'icon-images',
        link: '/images',
        text: '图片鉴别'
    }, {
        key: 'language',
        icon: 'icon-language',
        link: '/language',
        text: '多语言词条管理'
    }
 */
import Cookies from 'js-cookie'
const basic = [
    {
        key: 'push',
        icon: 'icon-push',
        link: '/push-flash',
        symbol: 30,
        text: 'App推送列表'
    },
    {
        key: 'mobile',
        icon: 'icon-push',
        link: '',
        text: `移动排版`,
        children: [
            {
                key: 'mobile-index',
                icon: 'icon-push',
                link: '/mobile-index',
                text: '移动首页'
            }
            // ,
            // {
            //     key: 'mobile-ad',
            //     icon: 'icon-pc-list',
            //     link: '',
            //     text: `移动广告`
            // },
            // {
            //     key: 'mobile-live',
            //     icon: 'icon-video',
            //     link: '',
            //     text: '移动直播'
            // },
            // {
            //     key: 'mobile-flash',
            //     icon: 'icon-flash-send',
            //     link: '',
            //     text: '移动快讯'
            // }
        ]
    },
    {
        key: 'count',
        icon: 'icon-count',
        link: '',
        text: `简单数据统计`,
        children: [
            {
                key: 'count-total',
                icon: 'icon-count',
                link: '/count-total',
                text: '发布数量统计'
            }, {
                key: 'count-news',
                icon: 'icon-count',
                link: '/count-news',
                text: '新闻阅读统计'
            }
        ]
    }, /* {
        key: 'sto',
        symbol: 27,
        icon: 'icon-sto',
        link: '',
        text: 'STO',
        children: [
            {
                key: 'sto-userList',
                icon: 'icon-accountManager',
                link: '/sto-userList',
                text: '顾问管理'
            }, {
                key: 'sto-notice',
                icon: 'icon-flash',
                link: '/sto-notice',
                text: '公告管理'
            }, {
                key: 'sto-partner',
                icon: 'icon-accountManager',
                link: '/sto-partner',
                text: '报名人员管理'
            }
        ]
    }, */ {
        key: 'socialMedia',
        symbol: 24,
        icon: 'icon-socialMedia',
        link: '/socialMedia-twitter',
        text: '工作台'
    }, {
        key: 'post',
        symbol: 1,
        icon: 'icon-post',
        link: '',
        text: '新闻管理',
        children: [
            {
                key: 'post-list',
                icon: 'icon-post-list',
                link: '/post-list',
                text: '新闻列表'
            }, {
                key: 'post-send',
                icon: 'icon-post-send',
                link: '/post-send',
                text: '新闻添加/编辑'
            }, {
                key: 'post-channel',
                icon: 'icon-post-channel',
                link: '/post-channel',
                text: '频道管理'
            }, {
                key: 'post-account',
                icon: 'icon-post-channel',
                link: '/post-account',
                text: '新闻账号管理'
            }, {
                key: 'post-tactics',
                icon: 'icon-post-tactics',
                link: '/post-tactics',
                text: '策略分类管理'
            }, {
                key: 'post-notice',
                icon: 'icon-post-notice',
                link: '/post-notice',
                text: '公告管理'
            }
        ]
    }, {
        key: 'flash',
        symbol: 4,
        icon: 'icon-flash',
        link: '',
        text: '快讯管理',
        children: [
            {
                key: 'flash-lists',
                icon: 'icon-flash-list',
                link: '/flash-lists',
                text: '快讯列表'
            }, {
                key: 'flash-edit',
                icon: 'icon-flash-send',
                link: '/flash-edit',
                text: '快讯添加/编辑'
            }, {
                key: 'flash-type',
                icon: 'icon-post-channel',
                link: '/flash-type',
                text: '快讯频道管理'
            }, {
                key: 'flash-audit',
                icon: 'icon-flash-audit',
                link: '/flash-audit',
                text: '快讯审核'
            }
        ]
    },
    {
        key: 'cc',
        symbol: 55,
        icon: 'icon-flash-rili',
        link: '',
        text: '日历机会管理',
        children: [
            {
                key: 'cc-calendarAdd',
                icon: 'icon-flash-send',
                link: '/cc-calendarAdd',
                text: '新增日历'
            },
            {
                key: 'cc-calendarLists',
                icon: 'icon-flash-list',
                link: '/cc-calendarLists',
                text: '日历列表'
            }, {
                key: 'cc-chanceAdd',
                icon: 'icon-flash-send',
                link: '/cc-chanceAdd',
                text: '新增机会'
            }, {
                key: 'cc-chanceLists',
                icon: 'icon-flash-list',
                link: '/cc-chanceLists',
                text: '机会列表'
            }
        ]
    }, {
        key: 'audit',
        symbol: 3,
        icon: 'icon-audit',
        link: '',
        text: 'MarsBit专栏管理',
        children: [
            {
                key: 'audit-identify',
                icon: 'icon-identify',
                link: '/audit-identify',
                text: '用户认证审核'
            },
            {
                key: 'audit-official',
                icon: 'icon-identify',
                link: '/audit-official',
                text: '用户管理列表'
            },
            {
                key: 'audit-list',
                icon: 'icon-article',
                link: '/audit-list',
                text: '文章审核'
            },
            {
                key: 'audit-draft',
                icon: 'icon-article',
                link: '/audit-draft',
                text: '草稿审核'
            },
            {
                key: 'audit-video',
                icon: 'icon-video',
                link: '/audit-video',
                text: '视频审核'
            },
            {
                key: 'audit-whitelist',
                icon: 'icon-baimingdan',
                link: '/audit-whitelist',
                text: '白名单列表'
            },
            {
                key: 'audit-mprank',
                icon: 'icon-bangdan',
                link: '/audit-mprank',
                text: 'MarsBit专栏榜单管理'
            }
        ]
    }, /* {
        key: 'merge',
        symbol: 2,
        icon: 'icon-merge',
        link: '/merge-list',
        text: '新闻聚合'
        // children: [
        //     {
        //         key: 'merge-list',
        //         icon: 'icon-post-list',
        //         link: '/merge-list',
        //         text: '新闻主体列表'
        //     }
        // ]
    }, */
    // {
    //     key: 'video',
    //     symbol: 6,
    //     icon: 'icon-video',
    //     link: '/video-list',
    //     text: '视频管理'
    //     // children: [
    //     //     {
    //     //         key: 'video-list',
    //     //         icon: 'icon-video-list',
    //     //         link: '/video-list',
    //     //         text: '视频内容列表'
    //     //     }, {
    //     //         key: 'video-send',
    //     //         icon: 'icon-video-send',
    //     //         link: '/video-send',
    //     //         text: '视频添加/编辑'
    //     //     }, {
    //     //         key: 'video-type',
    //     //         icon: 'icon-video-type',
    //     //         link: '/video-type',
    //     //         text: '视频分类/编辑'
    //     //     }
    //     // ]
    // },
    // {
    //     key: 'miniNews',
    //     symbol: 7,
    //     icon: 'icon-miniApp',
    //     link: '',
    //     text: '小程序管理',
    //     children: [
    //         {
    //             key: 'miniNews',
    //             icon: 'icon-miniNews',
    //             link: '/miniNews-list',
    //             text: '精选新闻'
    //         }, {
    //             key: 'miniVideo',
    //             icon: 'icon-miniVideo',
    //             link: '/miniVideo-list',
    //             text: '精选视频'
    //         }
    //     ]
    // },
    {
        key: 'ad',
        symbol: 5,
        icon: 'icon-ad',
        link: '',
        text: '广告管理',
        children: [
            {
                key: 'ad-pc',
                icon: 'icon-pc-list',
                link: '/ad-pc',
                text: 'WEB端广告'
                // children: [
                //     {
                //         key: 'ad-pc',
                //         icon: 'icon-ad-list',
                //         link: '/ad-pc',
                //         text: 'PC端广告'
                //     }
                // ]
            },
            {
                key: 'ad-mobile',
                icon: 'icon-mobile-list',
                link: '/ad-mobile',
                text: 'App端广告'
                // children: [
                //     {
                //         key: 'ad-mobile',
                //         icon: 'icon-ad-list',
                //         link: '/ad-mobile',
                //         text: '手机端广告'
                //     }
                // ]
            }
        ]
    }, /* {
        key: 'banner',
        symbol: 16,
        icon: 'icon-banner',
        link: '',
        text: '旧版App首页Banner',
        children: [
            {
                key: 'banner-topList',
                icon: 'icon-top-list',
                link: '/banner-topList',
                text: '旧版App顶部轮播'
            }
            //, {
            //     key: 'banner-trList',
            //     icon: 'icon-tr-list',
            //     link: '/banner-trList',
            //     text: '顶部右侧'
            // }, {
            //     key: 'banner-productList',
            //     icon: 'icon-product-list',
            //     link: '/banner-productList',
            //     text: '产品轮播'
            // }, {
            //     key: 'banner-activeList',
            //     icon: 'icon-active-list',
            //     link: '/banner-activeList',
            //     text: '活动轮播'
            // }
        ]
    }, */ {
        key: 'columnAuthor',
        symbol: 8,
        icon: 'icon-columnAuthor',
        link: '/columnAuthor-list',
        text: '专栏作者管理'
        // children: [
        //     {
        //         key: 'columnAuthor-list',
        //         icon: 'icon-post-list',
        //         link: '/columnAuthor-list',
        //         text: '专栏作者列表'
        //     }
        // ]
    },
    {
        key: 'tagv2',
        symbol: 27,
        icon: 'icon-comment',
        link: '/tagv2-list',
        text: '新版标签管理',
        chileren: [
            {
                key: 'tagv2-list',
                icon: 'icon-comment-list',
                link: '/comment-list',
                text: '评论列表'
            }
        ]
    },
    {
        key: 'conference',
        symbol: 10,
        icon: 'icon-comment',
        link: '',
        text: '大会管理',
        children: [
            {
                key: 'agenda-list',
                icon: 'icon-post-list',
                link: '/agenda-list',
                text: '议程列表'
            }, {
                key: 'guest-list',
                icon: 'icon-post-send',
                link: '/guest-list',
                text: '嘉宾列表'
            }, {
                key: 'media-list',
                icon: 'icon-post-channel',
                link: '/media-list',
                text: '合作媒体'
            }
        ]
    },
    // {
    //     key: 'comment',
    //     icon: 'icon-comment',
    //     link: '/comment-list',
    //     text: '文章评论管理'
    //     // children: [
    //     //     {
    //     //         key: 'comment-list',
    //     //         icon: 'icon-comment-list',
    //     //         link: '/comment-list',
    //     //         text: '评论列表'
    //     //     }
    //     // ]
    // },
    // {
    //     key: 'live',
    //     symbol: 10,
    //     icon: 'icon-live',
    //     link: '',
    //     text: '直播管理',
    //     children: [
    //         {
    //             key: 'live-userList',
    //             icon: 'icon-live-user',
    //             link: '/live-userList',
    //             text: '用户列表'
    //         }, {
    //             key: 'live-list',
    //             icon: 'icon-post-list',
    //             link: '/live-list',
    //             text: '直播列表'
    //         }, {
    //             key: 'live-edit',
    //             icon: 'icon-ico-edit',
    //             link: '/live-edit',
    //             text: '直播添加/编辑'
    //         }
    //         // , {
    //         //     key: 'live-commentList',
    //         //     icon: 'icon-comment-list',
    //         //     link: '/live-commentList',
    //         //     text: '直播评论列表'
    //         // }
    //     ]
    // },
    /* {
        key: 'specialTopic',
        symbol: 11,
        icon: 'icon-st',
        link: '/specialTopic-list',
        text: '新闻专题管理'
        // children: [
        //     {
        //         key: 'specialTopic-list',
        //         icon: 'icon-post-list',
        //         link: '/specialTopic-list',
        //         text: '专题列表'
        //     }, {
        //         key: 'specialTopic-add',
        //         icon: 'icon-ico-edit',
        //         link: '/specialTopic-add',
        //         text: '新增专题'
        //     }
        // ]
    }, */
    // {
    //     key: 'activity',
    //     symbol: 12,
    //     icon: 'icon-activity',
    //     link: '',
    //     text: '峰会专题管理',
    //     children: [
    //         {
    //             key: 'activity-power-sz',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(深圳)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuestSZ-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuestSZ-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestSZ-collaborate',
    //                     icon: 'iconfont-hezuofang',
    //                     link: '/activity-powerGuestSZ-collaborate',
    //                     text: '合作方管理'
    //                 },
    //                 // {
    //                 //     key: 'activity-powerGuestSZ-agendaType',
    //                 //     icon: 'iconfont-yichenfl',
    //                 //     link: '/activity-powerGuestSZ-agendaType',
    //                 //     text: '议程分类'
    //                 // },
    //                 {
    //                     key: 'activity-powerGuestSZ-agendaList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestSZ-agendaList',
    //                     text: '议程管理'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-power-sh',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(上海)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuestSH-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuestSH-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestSH-collaborate',
    //                     icon: 'iconfont-hezuofang',
    //                     link: '/activity-powerGuestSH-collaborate',
    //                     text: '合作方管理'
    //                 },
    //                 // {
    //                 //     key: 'activity-powerGuestSH-agendaType',
    //                 //     icon: 'iconfont-yichenfl',
    //                 //     link: '/activity-powerGuestSH-agendaType',
    //                 //     text: '议程分类'
    //                 // },
    //                 {
    //                     key: 'activity-powerGuestSH-agendaList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestSH-agendaList',
    //                     text: '议程管理'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-power-yn',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(云南)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuestYN-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuestYN-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestYN-collaborate',
    //                     icon: 'iconfont-hezuofang',
    //                     link: '/activity-powerGuestYN-collaborate',
    //                     text: '合作方管理'
    //                 },
    //                 // {
    //                 //     key: 'activity-powerGuestYN-agendaType',
    //                 //     icon: 'iconfont-yichenfl',
    //                 //     link: '/activity-powerGuestYN-agendaType',
    //                 //     text: '议程分类'
    //                 // },
    //                 {
    //                     key: 'activity-powerGuestYN-agendaList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestYN-agendaList',
    //                     text: '议程管理'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-power-zh',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(珠海)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuestZH-prizeList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestZH-prizeList',
    //                     text: '奖项管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestZH-agendaList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestZH-agendaList',
    //                     text: '议程管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestZH-activityList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestZH-activityList',
    //                     text: '周边活动'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestZH-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuestZH-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestZH-collaborate',
    //                     icon: 'iconfont-hezuofang',
    //                     link: '/activity-powerGuestZH-collaborate',
    //                     text: '合作方管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestZH-imgList',
    //                     icon: 'iconfont-bjtuji',
    //                     link: '/activity-powerGuestZH-imgList',
    //                     text: '现场图集'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-power-bj',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(北京)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuestBJ-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuestBJ-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestBJ-collaborate',
    //                     icon: 'iconfont-hezuofang',
    //                     link: '/activity-powerGuestBJ-collaborate',
    //                     text: '合作方管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestBJ-agendaType',
    //                     icon: 'iconfont-yichenfl',
    //                     link: '/activity-powerGuestBJ-agendaType',
    //                     text: '议程分类'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestBJ-agendaList',
    //                     icon: 'iconfont-yichenggl',
    //                     link: '/activity-powerGuestBJ-agendaList',
    //                     text: '议程管理'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestBJ-recommend',
    //                     icon: 'iconfont-bjtuijian',
    //                     link: '/activity-powerGuestBJ-recommend',
    //                     text: '内容推荐'
    //                 },
    //                 {
    //                     key: 'activity-powerGuestBJ-imgList',
    //                     icon: 'iconfont-bjtuji',
    //                     link: '/activity-powerGuestBJ-imgList',
    //                     text: '现场图集'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-power',
    //             icon: 'icon-power',
    //             link: '',
    //             text: 'power峰会(重庆)',
    //             children: [
    //                 {
    //                     key: 'activity-powerGuest-list',
    //                     icon: 'icon-guest',
    //                     link: '/activity-powerGuest-list',
    //                     text: '嘉宾管理'
    //                 },
    //                 {
    //                     key: 'activity-powerFame-list',
    //                     icon: 'icon-fame',
    //                     link: '/activity-powerFame-list',
    //                     text: '榜单管理'
    //                 },
    //                 {
    //                     key: 'activity-powerPoke-list',
    //                     icon: 'icon-poke',
    //                     link: '/activity-powerPoke-list',
    //                     text: '扑克牌管理'
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'activity-list',
    //             icon: 'icon-18',
    //             link: '/activity-list',
    //             text: '18年峰会'
    //         }
    //     ]
    // },
    // {
    //     key: 'activityPublish',
    //     symbol: 13,
    //     icon: 'icon-activityPublish',
    //     link: '',
    //     text: '活动发布管理',
    //     children: [
    //         {
    //             key: 'activityPublish-list',
    //             icon: 'icon-post-list',
    //             link: '/activityPublish-list',
    //             text: '活动列表'
    //         }, {
    //             key: 'activityPublish-city',
    //             icon: 'icon-ico-edit',
    //             link: '/activityPublish-city',
    //             text: '举办城市'
    //         }
    //     ]
    // },
    /* {
        key: 'appTopic',
        symbol: 14,
        icon: 'icon-banner',
        link: '/appTopic-list',
        text: 'App发现页轮播'
        // children: [
        //     {
        //         key: 'appTopic-list',
        //         icon: 'icon-post-list',
        //         link: '/appTopic-list',
        //         text: '轮播图列表'
        //     }, {
        //         key: 'appTopic-add',
        //         icon: 'icon-ico-edit',
        //         link: '/appTopic-add',
        //         text: '新增Banner'
        //     }
        // ]
    }, */ {
        key: 'coinRecommend',
        symbol: 15,
        icon: 'icon-cr',
        link: '',
        text: 'APP 词条管理',
        children: [
            {
                key: 'appGuideCoin-list',
                icon: 'icon-homecr',
                link: '/appGuideCoin-list',
                text: '引导页币种'
            },
            {
                key: 'coinRecommend-list',
                icon: 'icon-coinRecommend-list',
                link: '/coinRecommend-list',
                text: '币种推荐列表'
            },
            {
                key: 'hotCoin-list',
                icon: 'icon-hotCoin-list',
                link: '/hotCoin-list',
                text: '热搜币种列表'
            },
            {
                key: 'newsHotWords-list',
                icon: 'icon-newsHotWords-list',
                link: '/newsHotWords-list',
                text: '热搜新闻列表'
            }
        ]
    }, {
        key: 'tagsAndAuthor',
        symbol: 25,
        icon: 'icon-hotTags',
        link: '/tagsAndAuthor-list',
        text: '热门标签管理'
    }, {
        key: 'wordsFilter',
        symbol: 17,
        icon: 'icon-wordsFilter',
        link: '/wordsFilter',
        text: '敏感词过滤'
    },
    // {
    //     key: 'webCoinRecommend',
    //     symbol: 18,
    //     icon: 'icon-homecr',
    //     link: '/webCoinRecommend-list',
    //     text: '首页币种推荐'
    // },
    // {
    //     key: 'exchangeRecommend',
    //     symbol: 22,
    //     icon: 'icon-exchangeRecommend-list',
    //     link: '/exchangeRecommend-list',
    //     text: '交易所展示'
    // },
    // {
    //     key: 'ico',
    //     icon: 'icon-ico',
    //     link: '',
    //     text: 'ICO 管理',
    //     children: [
    //         {
    //             key: 'ico-list',
    //             icon: 'icon-post-list',
    //             link: '/ico-list',
    //             text: 'ICO 列表'
    //         }, {
    //             key: 'ico-edit',
    //             icon: 'icon-ico-edit',
    //             link: '/ico-edit',
    //             text: 'ICO 添加/编辑'
    //         }
    //     ]
    // },
    {
        key: 'account',
        symbol: 19,
        icon: 'icon-accountManager',
        link: '',
        text: '账号管理',
        children: [
            {
                key: 'account-flashAccount',
                icon: 'icon-post-list',
                link: '/account-flashAccount',
                text: '快讯账号管理'
            },
            {
                key: 'account-blackList',
                icon: 'icon-heimingdan',
                link: '/account-blackList',
                text: '黑名单管理'
            }
        ]
    },
    // {
    //     key: 'cooperation',
    //     symbol: 21,
    //     icon: 'icon-hezuo',
    //     link: '/cooperation',
    //     text: '底部链接管理'
    // },
    // {
    //     key: 'feedBack',
    //     symbol: 20,
    //     icon: 'icon-feedBack',
    //     link: '/feedBack-list',
    //     text: '反馈管理'
    // },
    {
        key: 'amendPhone',
        symbol: 32,
        icon: 'icon-phoneB',
        link: '/amendPhone',
        text: '用户手机号替换'
    }
]

let menuData = () => {
    let role = parseInt(Cookies.get('hx_role'))
    if (role === 4) {
        return [{
            key: 'push',
            icon: 'icon-push',
            link: '/push-flash',
            text: 'App推送列表'
        }]
    } else if (role === 3) {
        return [{
            key: 'systemAccount',
            icon: 'icon-systemAccount',
            link: '/systemAccount-list',
            symbol: 28,
            text: '系统账号管理'
        }, {
            key: 'push',
            icon: 'icon-push',
            link: '/push-flash',
            symbol: 30,
            text: 'App推送列表'
        },
        // {
        //     key: 'adData',
        //     symbol: 26,
        //     icon: 'icon-pc-list',
        //     link: '/adData-list',
        //     text: '广告数据管理'
        // },
        {
            key: 'version',
            symbol: 23,
            icon: 'icon-version',
            link: '/version-list',
            text: 'APP 版本更新'
        }, ...basic]
    } else if (role === 5) {
        return [{
            key: 'marsTrip',
            icon: 'icon-mars',
            link: '/marsTrip-list',
            symbol: 29,
            text: 'MarsBit中国行'
        }]
    } else if (role === 6) {
        return [{
            key: 'adData',
            symbol: 26,
            icon: 'icon-pc-list',
            link: '/adData-list',
            text: '广告数据管理'
        }]
    // } else if (role === 7) {
    //     return [{
    //         key: 'college',
    //         symbol: 31,
    //         icon: 'icon-college',
    //         link: '',
    //         text: 'MarsBit大学',
    //         children: [
    //             {
    //                 key: 'college-courseList',
    //                 icon: 'icon-courseList',
    //                 link: '/college-courseList',
    //                 text: '课程管理'
    //             }, {
    //                 key: 'college-lecList',
    //                 icon: 'icon-lecList',
    //                 link: '/college-lecList',
    //                 text: '讲师管理'
    //             }
    //         ]
    //     }]
    } else if (role === 7) {
        return [{
            key: 'mobile',
            icon: 'icon-push',
            link: '',
            text: `移动排版`,
            children: [
                {
                    key: 'mobile-index',
                    icon: 'icon-push',
                    link: '/mobile-index',
                    text: '移动首页'
                }
            ]
        }, {
            key: 'socialMedia',
            symbol: 24,
            icon: 'icon-socialMedia',
            link: '/socialMedia-twitter',
            text: '工作台'
        }, {
            key: 'post',
            symbol: 1,
            icon: 'icon-post',
            link: '',
            text: '新闻管理',
            children: [
                {
                    key: 'post-list',
                    icon: 'icon-post-list',
                    link: '/post-list',
                    text: '新闻列表'
                }, {
                    key: 'post-send',
                    icon: 'icon-post-send',
                    link: '/post-send',
                    text: '新闻添加/编辑'
                }, {
                    key: 'post-channel',
                    icon: 'icon-post-channel',
                    link: '/post-channel',
                    text: '频道管理'
                }, {
                    key: 'post-account',
                    icon: 'icon-post-channel',
                    link: '/post-account',
                    text: '新闻账号管理'
                }, {
                    key: 'post-tactics',
                    icon: 'icon-post-tactics',
                    link: '/post-tactics',
                    text: '策略分类管理'
                }, {
                    key: 'post-notice',
                    icon: 'icon-post-notice',
                    link: '/post-notice',
                    text: '公告管理'
                }
            ]
        }, {
            key: 'flash',
            symbol: 4,
            icon: 'icon-flash',
            link: '',
            text: '快讯管理',
            children: [
                {
                    key: 'flash-lists',
                    icon: 'icon-flash-list',
                    link: '/flash-lists',
                    text: '快讯列表'
                }, {
                    key: 'flash-edit',
                    icon: 'icon-flash-send',
                    link: '/flash-edit',
                    text: '快讯添加/编辑'
                }, {
                    key: 'flash-type',
                    icon: 'icon-post-channel',
                    link: '/flash-type',
                    text: '快讯频道管理'
                }, {
                    key: 'flash-audit',
                    icon: 'icon-flash-audit',
                    link: '/flash-audit',
                    text: '快讯审核'
                }
            ]
        }]
    } else if (role === 2) {
        return basic
    } else {
        return []
    }
}
export default { menuData }
