// 首页媒体与个人评价
import React, { useEffect } from 'react'
import services from '../../public/imgs/newpage/services.png'
import mmimg from '../../public/imgs/newpage/mm.jpg'
import wjdimg from '../../public/imgs/newpage/wjd.jpg'
import lyimg from '../../public/imgs/newpage/ly.jpg'
import boss from '../../public/imgs/newpage/wangf.png'
import huojiang1 from '../../public/imgs/newpage/huojiang1.jpg'
import huojiang2 from '../../public/imgs/newpage/huojiang2.jpg'
import mtsl from '../../public/imgs/newpage/mtsl.jpg'
import mterd from '../../public/imgs/newpage/mterd.jpg'
import mtten from '../../public/imgs/newpage/mtten.jpg'
import mthx from '../../public/imgs/newpage/mthx.jpg'
import mtfour from '../../public/imgs/newpage/mtfour.jpg'
import mtfive from '../../public/imgs/newpage/mtfive.jpg'
import wf from '../../public/imgs/newpage/wf.png'
import ssl from '../../public/imgs/newpage/ssl.jpg'
import Swiper from 'swiper/js/swiper'
export default ({ t, i18n }) => {
    useEffect(() => {
        /* eslint-disable no-new */
        new Swiper('.media-swiper', {
            pagination: {
                el: '.media-swiper-paination',
                type: 'bullets', // 分页器样式类型
                clickable: true // 点击分页器切换
            },
            direction: 'horizontal', // 水平切换选项
            autoplayDisableOnInteraction: false, // 一张不轮播
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: true
            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        })
        /* eslint-disable no-new */
        new Swiper('.customer-swiper', {
            direction: 'horizontal', // 水平切换选项
            autoplayDisableOnInteraction: false, // 一张不轮播
            loop: true, // 循环模式选项
            speed: 1000,
            observer: true,
            observerParent: false,
            initialSlide: 0,
            autoplay: 5000,
            // // 如果需要前进后退按钮
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev'
            }
        })
    }, [])
    // 英文媒体评价
    const Medialist = [
        { imgs: services,
            links: 'https://www.bloomberg.com/news/articles/2019-09-17/binance-s-first-strategic-chinese-investment-is-a-coindesk-rival',
            title: t('newpage.home.mediaonet'),
            explainone: t('newpage.home.mediatl')
        },
        { imgs: boss,
            links: 'https://www.prnewswire.com/news-releases/mars-finance-explores-the-future-of-blockchain-technology-with-founder-fred-wang-and-tech-pioneers-keith-teare-reese-jones-and-blockchains-brightest-stars-300705094.html',
            title: "Mars Finance Explores the Future of Blockchain Technology with Founder Fred Wang and Tech Pioneers Keith Teare, Reese Jones, and Blockchain's Brightest Stars",
            explainone: "Fred Wang, the founder of Mars Finance and host of the popular Chinese blockchain interview series '10 Questions with Fred Wang' opened the event with a discussion on the future of blockchain development, the new vocabulary in China around 'Blockchain+' companies, and with a call to service for his organization and its expansion into 3 major areas: 'Platform, Community, and Ecology' with Consensus Labs' blockchain incubator, as well as Mars Training Camp, community events, and the blockchain ecosystem as a whole where he promised to 'actively join Blockchain experts to facilitate more communication' in a collaborative effort to promote blockchain technology growth globally."
        }
    ]

    // 日文媒体评价
    const Medialistjp = [
        { imgs: 'https://thebridge.jp/wp-content/uploads/2019/09/binance-market-trend-640x403.jpg',
            links: 'https://thebridge.jp/2019/09/binance-invests-in-chinese-crypto-media-outlet-mars-finance',
            title: '仮想通貨取引所のBinance（幣安）、中国の仮想通貨特化メディア「Mars Finance（火星財経）」に出資——Mars Financeの評価額は2億米ドルに',
            explainone: '今回の投資は Binance にとって中国国内初の戦略的投資となる。Mars Finance と同社のブロックチェーンデータによって、Binance はアジアにおける規模拡大に必要なリソースを手に入れることになる。Binance は世界中へのサービス拡大を目指している。Mars Finance によると、同社は検索トラフィックベースでは中国で最も影響力のある仮想通貨報道機関だという。設立者の Wang Feng（王峰）氏によると、Mars Finance が1日に扱うブロックチェーン業界関連の情報は1万件近くになるという。同社のユーザ数は300万人を超える。'
        }
    ]

    // 中文媒体评价
    const Medialistzh = [
        { imgs: huojiang2,
            links: 'https://www.odaily.com/newsflash/226054',
            title: '火星云矿荣获星球日报&36氪“2020 FAT年度矿业品牌”奖项',
            explainone: '星球日报讯 1月7日，在「价值时代」行业高峰论坛暨2020 FAT颁奖典礼发布的2020 FAT区块链胖榜单中，火星云矿荣获星球日报&36氪“2020 FAT年度矿业品牌”奖项 。行业亲历者和坚守者共同出席颁奖盛典，探讨由「价值」推动的行业变革、转型与创新。'
        },
        { imgs: huojiang1,
            links: 'https://www.lieyuncj.com/news/27780',
            title: '火星云矿荣获猎云网&猎云财经“二零二零年度最具口碑云算力平台”',
            explainone: '11月24日，由猎云网、猎云财经主办的“BEYOND-2020区块链产业大会暨年度颁奖盛典”在深圳湾万丽酒店隆重召开。火星云矿受邀出席会议，荣获“二零二零年度最具口碑云算力平台”。'
        },
        { imgs: mthx,
            links: 'https://tech.qq.com/a/20190912/003617.htm',
            title: '火星财经获币安、策源等联合投资 估值2亿美元',
            explainone: '近日，火星财经宣布完成新一轮融资。此轮融资由币安、策源资本及吴忌寒刚刚创立的Matrixport等机构联合投资，投后估值达2亿美元。这是火星财经自去年创办以来的第三次融资。火星财经于2018年2月8日正式上线，由互联网连续创业者王峰创办，早期创业团队绝大部分来自蓝港互动，现有团队核心拥有腾讯、华为、搜狐、知乎及火币等知名科技公司的从业背景。目前主要提供区块链资讯、行情及加密数字货币资管服务。旗下加密数字资产投资及研究机构共识实验室（Consensus Lab）活跃在区块链投资领域第一线。'
        },
        { imgs: mtfive,
            links: 'https://new.qq.com/rain/a/20200429A0DZ7000',
            title: '入场两个月即打破挖矿电费底价！火星云矿誓做行业破坏者？',
            explainone: '4月28日，火星财经联合创始人、火星云矿总裁商思林做客深链学堂线上沙龙，围绕“电价低至0.19元 矿机全网最低价出售，火星云矿为何成为行业破坏者”这一主题进行分享，以下为分享实录，深链财经略有整理。'
        },
        { imgs: mtfour,
            links: 'https://news.huoxing24.com/20200227204402505014.html',
            title: '火星云矿—一站式实体矿机挖矿平台正式发布，千台矿机免费试挖活动同步开启',
            explainone: '2月27日17:00，火星财经正式发布一站式实体矿机挖矿平台——火星云矿，并举办了千人线上发布会，首期推出蚂蚁、阿瓦隆、神马及蜂鸟四个矿机品牌的永久产权及分时租赁主流机型。全球主流矿机、矿池、矿场品牌主要负责人出席了发布会，与火星云矿共同探讨在减半临近之际，矿工应该如何行动，及矿机、矿池、矿场在当前形势下如何开展专业服务等话题。'
        },
        { imgs: 'https://hx24.huoxing24.com/image/news/2020/07/24/1595582401670214.jpg',
            links: 'https://cointelegraphcn.com/news/the-biggest-progress-of-mining-industry',
            title: '火星云矿总裁商思林：矿业最大的进步是保证每个人可以轻松进入挖矿领域',
            explainone: '在主题为「从CPU到ASIC，如何开启挖矿新时代」的圆桌论坛上，火星区块链合伙人&火星云矿总裁商思林表示，矿业最大的进步是保证每个人可以轻松进入挖矿领域。今年5月，火星云矿针对散户的挖矿产品已经实现回本。其实，目前个人投资者依然还有机会进入矿圈。'
        },
        { imgs: wf,
            links: 'https://news.huoxing24.com/20200227173903733266.html',
            title: '火星财经发布火星云矿，王峰建议普通人学习了解区块链不如直接从比特币挖矿开始',
            explainone: '火星财经APP（微信：hxcj24h）一线报道，2月27日下午5点，火星财经举办千人线上发布会，正式发布一站式实体矿机挖矿平台——火星云矿，首期推出蚂蚁、阿瓦隆、神马及蜂鸟四个矿机品牌的永久产权及分时租赁主流机型。'
        },
        { imgs: mtsl,
            links: 'https://www.shenliancaijing.com/a/71009.html',
            title: '火星云矿荣获“2020年度最具影响力矿业品牌”',
            explainone: '12月23日，在2020非共识大会暨DeepChain年度影响力颁奖典礼上，火星云矿荣获“22020年度最具影响力矿业品牌”。'
        },
        { imgs: mterd,
            links: 'https://news.huoxing24.com/flash/20201109160138163103.html',
            title: '火星云矿荣获“EBTC·2020年度十大黑马”',
            explainone: '2020年11月6日，由耳朵财经主办的“EBTC·2020未来洞见者大会暨EBTC2020颁奖盛典”在成都希尔顿酒店举行。在本次大会中，火星云矿荣获“EBTC·2020年度十大黑马”。'
        },
        { imgs: mtten,
            links: 'https://huoxun.com/lives/593731.html',
            title: '火星云矿荣获“2020年度观火最具影响力云算力平台品牌”',
            explainone: '火讯财经讯，由火讯财经主办的《观火中国行深圳大会暨“超越未见”2020年度颁奖晚宴》于2020年12月20日在深圳欢乐海岸成功举办，大会主题为《新基建下“数字化/新金融/新人才”之百年巨变》。 观火大会合作媒体包含：证券时报、证券日报、中国证券报、经济日报、腾讯科技、第一财经、大公报、每日经济新闻、凤凰科技、网易科技等。 火星云矿（www.mclouds.io）是火星区块链旗下全球化加密算力资产服务平台，集合了来自IBM、摩托罗拉、腾讯、金山等知名公司最精英的产品、技术、精算团队，与业界头部企业有广泛且深度的战略合作，提供矿业供应链管理、支付与资产管理、金融衍生服务等一站式算力资产服务，通过专业的产业整合能力和丰富的后端服务体系，使投资者可以安全、高效、透明地通过算力投资获得加密资产世界的长期回报。'
        },
        { imgs: ssl,
            links: 'https://m.sohu.com/a/453698738_120873238/?share_token=c404ebde-e8da-4369-a183-6a0ca8ae6aa6',
            title: '中央人民广播电台经济之声对话商思林：马斯克为何给比特币站台？普通投资者该怎么办？',
            explainone: '火星云矿总裁商思林：确实比特币过去一年是在一个增长的牛市，回报率上是比较惊人的，从去年的3月份到今年也是大概有10~15倍的涨幅，尤其是一枚比特币价格突破5万美金，然后中间有过2万美金带来的财富数字最大的冲击是比较强烈的。'
        }
        // { imgs: 'https://hx24.huoxing24.com/image/news/2020/07/24/1595582401670214.jpg',
        //     links: 'https://news.huoxing24.com/20200724171732170118.html',
        //     title: '火星云矿总裁商思林：从比特币到Filecoin，新矿工的越级之战',
        //     explainone: '商思林认为比特币挖矿和filecoin挖矿的区别在于：1、比特币挖矿逻辑简单，随着算力提升安全性和稳定性不断增加，简单说是“大力出奇迹”；2、filecoin挖矿需要支持商业化的网络，对存储网络稳定性要求严格，虽然对个人挖矿不算友好，但可以通过云算力实现低门槛投资回报。关于挖矿金融化、衍生品增多的趋势，商思林表示主要原因是比特币现有的挖矿回报率在逐渐降低，但相反行业规模在逐渐扩大，导致吸引越来越多体量资金，从业者开始开发各种保障性更强的衍生品。未来会有更加丰富的挖矿产品诞生，这对整个行业来说是好事。'
        // },
        // { imgs: 'https://hx24.huoxing24.com/image/news/2020/08/12/1597201322576922.png?x-oss-process=style/image_jpg',
        //     links: 'https://news.huoxing24.com/20200812104323469969.html',
        //     title: '火星云矿总裁商思林：Filecoin、DeFi以及BTC将成为加密资产领域铁三角，为2021年大牛市提供驱动力',
        //     explainone: '他表示，Filecoin、DeFi以及BTC会成为加密资产领域铁三角，彼此呼应，成为彼此的动力，并为2021年大牛市提供三大核心驱动力。商思林同时表示，Filecoin不仅仅是一个项目，它还是整个区块链领域，甚至Web 3.0的基础设施。区块链的核心是去中心化，无须信任。如果在这样一个系统中，没有去中心化的存储和传输网络，那么它是不健全的。“正是基于这样的愿景，Filecoin的理念在中国广大的社区中引起强烈共鸣。这是我看好Filecoin的原因之一。”'
        // }
    ]

    // 用户评价
    const evallist = [
        { text: t('newpage.home.feedtwo'), pic: wjdimg, name: t('newpage.home.feedtwoname') },
        { text: t('newpage.home.feedone'), pic: mmimg, name: t('newpage.home.feedonename') },
        { text: t('newpage.home.feedthree'), pic: lyimg, name: t('newpage.home.feedthreename') }
    ]
    return <div className="eval">
        <div className="eval-one">
            <h3>{t('newpage.home.feedback')}</h3>
            <div className="eval-one-con">
                <div className="swiper-container customer-swiper">
                    <div className="swiper-wrapper">
                        {evallist.map((item, index) => {
                            return <div className="swiper-slide" key={index}>
                                <div className="eval-one-con-center">
                                    <div className="eval-one-con-ls">
                                        <span>"</span>
                                        <span>{item.text}</span>
                                        <span>"</span>
                                    </div>
                                    <div className="eval-one-con-auth">
                                        <div></div>
                                        <div className="eval-one-con-auth-r">
                                            <div className="eval-one-con-auth-r-img">
                                                <img src={item.pic} alt=""/>
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    {/* <div className="swiper-pagination media-swiper-paination"></div> */}
                    <div className="swiper-button-prev custom-swiper-button-prev"></div>
                    <div className="swiper-button-next custom-swiper-button-next"></div>
                </div>
            </div>
        </div>

        <div className="eval-bottom">
            <div className="eval-two">
                <h3>{t('newpage.home.media')}</h3>
                <div className="eval-two-con">
                    <div className="swiper-container media-swiper">
                        <div className="swiper-wrapper">
                            {((i18n.language).toLowerCase().substring(0, 2) === 'en' ? Medialist : (i18n.language).toLowerCase().substring(0, 2) === 'ja' ? Medialistjp : Medialistzh).map((item, index) => {
                                return <div className="swiper-slide" key={index}>
                                    <a href={item.links} target="_blank">
                                        <div className="eval-two-con-s">
                                            <div className="eval-two-con-l">
                                                <img src={item.imgs} alt=""/>
                                            </div>
                                            <div className="eval-two-con-r">
                                                <h4>{item.title}</h4>
                                                <div className="eval-two-con-r-text">
                                                    <p>{item.explainone}</p>
                                                </div>
                                                <div className="eval-two-con-r-btn">{t('newpage.home.check')}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            })}
                        </div>
                        <div className="swiper-pagination media-swiper-paination"></div>
                        {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
