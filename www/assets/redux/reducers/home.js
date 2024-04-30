import {
    GETDEFITOTALLOCKED,
    GETDEFIMARKETCAP,
    GETDEFIITEMINFO,
    GETADDATA,
    GETADIMGDATA,
    GETADRECOMMEND,
    GETRANKNEWS,
    GETSUBJECT,
    GETVIDEO,
    GETTAGS,
    GETLEFTNEWSCHANNELID,
    GETNEWSHEADLINES,
    GETNEWSHEADLINESMORE,
    GETNEWSTOTALLIST,
    GETNEWSTOTALLISTMORE,
    GETHOMESHOWAUTHORLIST,
    GETEXCHANGERATES,
    GETMARKERQUOTATIONS,
    GETHOMEROOMLIST,
    FESTIVALCLOSE,
    GETELEMNETBANNER,
    GETCOLLECTIONDEATIL
} from '../constants/home'

import { mixUrl } from 'multiPublic/index'

const initState = {
    // Defi数据
    defiData: {
        totallocked: '', // 总锁仓
        marketCap: '', // 总市值
        infoData: {} // 单项内容
    },
    // 广告数据
    adData: {},
    // 首页右侧app下载 —— adData[10]
    adOneselfData: [],
    // 首页顶部滚动数据 —— adData[11]
    slideTopAdData: [],
    // 广告图片数据
    adImgData: {},
    // 首页图片广告 —— adImgData[1]
    primaryImgData: [],
    // 首页文字广告 —— adImgData[17]
    recommendImgData: [],
    // 直播详情页广告 —— adImgData[30]
    liveDetailImgData: [],
    // 直播列表页广告 —— adImgData[31]
    liveListImgData: [],
    // 首页顶部横幅广告 —— adImgData[32]
    homeTopAdImgData: [],
    // 精选内容
    adRecommend: [],
    // 新闻排行数据
    rankNews: [],
    // 最新专题
    subjectData: [],
    // 精选视频
    videoData: [],
    // 精选标签
    tagsData: [],
    // 新闻导航
    newsChannelIdData: [],
    // 新闻头条
    newsHeadlinesData: [],
    // 新闻全部内容
    newsTotalListData: {},
    // 作者数据
    authorListData: [],
    // 右侧MarsBit作者滚动数据
    mpAuthorData: [],
    // 当前汇率
    usdToCnyRate: 1,
    // 当前货币行情列表
    slideTopCoinData: [],
    // 可控直播入口
    controllerLiveData: [],
    // 关闭节日背景
    festivalCloseState: false,
    // element banner列表
    elementBannerList: [],
    // 获取合集详情列表
    collectionlist: []
}

export default (state = initState, action) => {
    const newDefiData = state.defiData
    const newsAdImgData = state.adImgData
    const newsAuthorData = state.authorListData
    const oldNewsTotalListData = state.newsTotalListData
    switch (action.type) {
        case GETDEFITOTALLOCKED:
            newDefiData.totallocked = action.data.extend.totalLocked
            return { ...state, defiData: newDefiData }
        case GETDEFIMARKETCAP:
            let list = action.data
            if (list.length !== 0) {
                newDefiData.marketCap = list[list.length - 1].marketCap
                return { ...state, defiData: newDefiData }
            } else {
                return state
            }
        case GETDEFIITEMINFO:
            newDefiData.infoData = action.data
            return { ...state, defiData: newDefiData }
        case GETADDATA:
            let adOneselfData = []
            if (action.data[10] && action.data[10].length !== 0) {
                adOneselfData = action.data[10].concat()
                adOneselfData.map((item, index) => {
                    let appUrl = '' // 点击地址
                    let appType = ''
                    switch (item.title) {
                        case 'MarsBit云矿':
                            appUrl = 'https://www.mclouds.io/'
                            appType = '下载APP'
                            break
                        case 'MarsBit交易大师':
                            appUrl = 'https://trade.huoxing24.com/'
                            appType = '下载APP'
                            break
                        case '可可金融':
                            appUrl = 'https://www.cococoin.com/m/other/download'
                            appType = '下载APP'
                            break
                        case 'MarsBitDeFi矿池':
                            appUrl = item.url
                            appType = '去挖矿'
                            break
                        case 'MarsBit闪贷':
                            appUrl = item.url
                            appType = '去借贷'
                            break
                        case 'MarsBit存币宝':
                            appUrl = item.url
                            appType = '去存币'
                            break
                        default:
                            appUrl = ''
                            appType = 0
                            break
                    }
                    item.appUrl = appUrl
                    item.appType = appType
                })
            }

            const adLen = 7
            let slideData = []
            if (action.data[11] && action.data[11].length !== 0) {
                let listData = action.data[11].concat()
                let adGroup = Math.ceil(listData.length / adLen)
                if (adGroup * adLen > listData.length) {
                    let addLen = adGroup * adLen - listData.length
                    let addNewArr = listData.slice(0, addLen)
                    for (let i = 0; i < addNewArr.length; i++) {
                        listData.push(addNewArr[i])
                    }
                }

                for (let i = 0; i < listData.length; i += adLen) {
                    slideData.push(listData.slice(i, i + adLen))
                }
            }

            return { ...state, adData: action.data, slideTopAdData: slideData, adOneselfData: adOneselfData }
        case GETADIMGDATA:
            let listPrimary = []
            if (action.data[1] && action.data[1].length !== 0) {
                listPrimary = action.data[1].concat()
                listPrimary.map((item) => {
                    if (!item.pcImgSrc) {
                        item.pcImgSrc = mixUrl.static('/images/2018/03/05/1520243882098653.svg')
                    }

                    switch (item.useType) {
                        case 1:
                        case 2:
                            break
                        case 3:
                            item.url = mixUrl.news(`/${item.url}.html`)
                            break
                        case 4:
                            item.url = mixUrl.news(`/list/${item.url}`)
                            break
                        case 5:
                            item.url = mixUrl.news(`/feature/${item.url.split('/')[1]}`)
                            break
                        case 6:
                            item.url = mixUrl.news(`/tags/${item.url}`)
                            break
                        default:
                            break
                    }
                })
            }

            let recommendList = []
            if (action.data[17] && action.data[17].length !== 0) {
                let listRecommend = action.data[17].concat()
                let recommendItem = []
                listRecommend.map((item, index) => {
                    switch (item.useType) {
                        case 1:
                        case 2:
                            break
                        case 3:
                            item.url = mixUrl.news(`/newsdetail/${item.url}`)
                            break
                        case 4:
                            item.url = mixUrl.news(`/list/${item.url}`)
                            break
                        case 5:
                            item.url = mixUrl.news(`/feature/${item.url.split('/')[1]}`)
                            break
                        case 6:
                            item.url = mixUrl.news(`/tags/${item.url}`)
                            break
                    }

                    if (index < 6) {
                        if (index % 2 === 0) {
                            recommendItem = []
                            recommendItem.push(item)
                        } else {
                            recommendItem.push(item)
                            recommendList.push(recommendItem)
                        }
                    }
                })
            }

            let liveDetailImgList = []
            if (action.data[30] && action.data[30].length !== 0) {
                liveDetailImgList = action.data[30].concat()
            }

            let liveListImgList = []
            if (action.data[31] && action.data[31].length !== 0) {
                liveListImgList = action.data[31].concat()
            }

            let homeTopAdImgList = []
            if (action.data[32] && action.data[32].length !== 0) {
                homeTopAdImgList = action.data[32].concat()
            }

            return { ...state, adImgData: action.data, primaryImgData: listPrimary, recommendImgData: recommendList, liveDetailImgData: liveDetailImgList, liveListImgData: liveListImgList, homeTopAdImgData: homeTopAdImgList }
        case GETADRECOMMEND:
            return { ...state, adRecommend: action.data }
        case GETRANKNEWS:
            return { ...state, rankNews: action.data.inforList }
        case GETSUBJECT:
            let subjectData = []
            if (action.data.inforList && action.data.inforList.length !== 0) {
                subjectData = action.data.inforList.concat()
                subjectData.map((item, index) => {
                    let aUrl = !item.topic.typeLink ? mixUrl.news(`/feature/${item.topic.id}`) : item.topic.typeLink
                    let dTopic = Object.assign({
                        topicName: '',
                        newSmallPcImgSrc: ''
                    }, item.topic)
                    let itemListArr = Array.isArray(item.contentList) ? item.contentList : []
                    itemListArr = itemListArr.slice(0, 1)

                    item.aUrl = aUrl
                    item.dTopic = dTopic
                    item.itemListArr = itemListArr
                })
            }

            return { ...state, subjectData: subjectData }
        case GETVIDEO:
            return { ...state, videoData: action.data }
        case GETTAGS:
            return { ...state, tagsData: action.data.inforList }
        case GETLEFTNEWSCHANNELID:
            let newsChannelIdData = []
            if (action.data && action.data.length !== 0) {
                newsChannelIdData = action.data.concat()
                newsChannelIdData.unshift({
                    id: 0,
                    channelId: 10002,
                    channelName: '头条',
                    rank: 0,
                    updateTime: '',
                    createTime: ''
                })

                newsChannelIdData.map((item, index) => {
                    if ((parseInt(item.channelId) === 10000 || parseInt(item.channelId) === 28) && !item.custom) {
                        // 上边自定义了学习区块链(课程)，在此删除接口返回的。为了把MarsBit号与学习区块链(课程)调换位置
                        newsChannelIdData.splice(index, 1)
                    } else if (parseInt(item.channelId) === 1) {
                        // 不显示 channelId = 1 的分类
                        newsChannelIdData.splice(index, 1)
                    }
                })
            }

            return { ...state, newsChannelIdData: newsChannelIdData }
        case GETNEWSHEADLINES:
            // 广告位置 初始数组位置，每隔4个出现一次
            const adImgFirst = 4
            let adImgNum = 0
            let headList = action.data.concat()
            let authorList = newsAuthorData.slice(0, 5)
            headList.splice(2, 0, {
                infoType: 'author',
                infoObj: authorList
            })
            let headAdList = newsAdImgData[3].concat()
            // 根据位置参数 从大到小
            headAdList.sort((a, b) => {
                return -(a.weight - b.weight)
            })
            let newHeadList = []
            for (let headIndex = 0; headIndex < headList.length; headIndex++) {
                if (headIndex === adImgFirst + adImgNum * 5 - adImgNum && adImgNum < headAdList.length) {
                    let adItem = headAdList[adImgNum]
                    newHeadList.push({
                        infoType: 'adImg',
                        infoObj: adItem
                    })

                    adImgNum += 1
                }

                newHeadList.push(headList[headIndex])
            }

            return { ...state, newsHeadlinesData: newHeadList }
        case GETNEWSHEADLINESMORE:
            let moreHeadList = action.data
            if (moreHeadList.length !== 0) {
                let newMoreHeadList = state.newsHeadlinesData.concat(action.data)
                return JSON.parse(JSON.stringify({ ...state, newsHeadlinesData: newMoreHeadList }))
            } else {
                return state
            }
        case GETNEWSTOTALLIST:
            return { ...state, newsTotalListData: action.data }
        case GETNEWSTOTALLISTMORE:
            let moreList = action.data.inforList
            if (moreList.length !== 0) {
                oldNewsTotalListData[action.channelId] = {
                    currentPage: action.data.currentPage,
                    currentTime: action.data.currentTime,
                    inforList: oldNewsTotalListData[action.channelId].inforList.concat(action.data.inforList),
                    pageCount: action.data.pageCount,
                    pageSize: action.data.pageSize,
                    recordCount: action.data.recordCount
                }
                return JSON.parse(JSON.stringify({ ...state, newsTotalListData: oldNewsTotalListData }))
            } else {
                return state
            }
        case GETHOMESHOWAUTHORLIST:
            const mpAuthorLen = 10
            let mpAuthorData = []
            if (action.data.inforList && action.data.inforList.length !== 0) {
                let listData = action.data.inforList.concat()
                for (let i = 0; i < listData.length; i += mpAuthorLen) {
                    mpAuthorData.push(listData.slice(i, i + mpAuthorLen))
                }
            }

            return { ...state, authorListData: action.data.inforList, mpAuthorData: mpAuthorData }
        case GETEXCHANGERATES:
            return { ...state, usdToCnyRate: action.data[0].rate }
        case GETMARKERQUOTATIONS:
            const coinLen = 12
            let slideCoinData = []
            if (action.data && action.data.length !== 0) {
                let listCoinData = action.data.concat()
                let coinCoinGroup = Math.ceil(listCoinData.length / coinLen)
                if (coinCoinGroup * coinLen > listCoinData.length) {
                    let addLen = coinCoinGroup * coinLen - listCoinData.length
                    let addNewArr = listCoinData.slice(0, addLen)
                    for (let i = 0; i < addNewArr.length; i++) {
                        listCoinData.push(addNewArr[i])
                    }
                }

                for (let i = 0; i < listCoinData.length; i += coinLen) {
                    slideCoinData.push(listCoinData.slice(i, i + coinLen))
                }
            }

            return { ...state, slideTopCoinData: slideCoinData }
        case GETHOMEROOMLIST:
            return { ...state, controllerLiveData: action.data }
        case FESTIVALCLOSE:
            return { ...state, festivalCloseState: action.data }
        case GETELEMNETBANNER:
            return { ...state, elementBannerList: action.data }
        case GETCOLLECTIONDEATIL:
            return { ...state, collectionlist: action.data }
        default:
            return state
    }
}
