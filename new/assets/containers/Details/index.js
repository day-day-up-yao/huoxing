import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import ImageGallery from 'react-image-gallery'

import { scrollOffset, windowOffset, windowScroll, elementOffset } from 'multiPublic/index'
import RightNews from 'multiComps/RightNews'
// import RightRiseDropList from 'multiComps/RightRiseDropList'
import Toast from 'multiComps/Toast'
import AdUp from 'multiComps/AdUp'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import RightFlashAndDynamic from 'multiComps/Home/RightFlashAndDynamic'
import { getNewsDetails, /* getRecommendNews, */ statisticsNews } from '../../redux/actions/news'
import { getAuthorInfo, getHotNews, get24hHotNews } from 'multiRedux/actions/news'
import { getAd } from 'multiRedux/actions/public'
import AuthorInfo from './AuthorInfo'
import PrevNextNews from './PrevNextNews'
import Share from './Share'
import RelatedNews from './RelatedNews'
// import Comment from 'multiComps/Comment'
// import CommentShow from 'multiComps/CommentShow'
import NewsContent from './NewsContent'
import AdGeneralize from './AdGeneralize'
import './index.scss'
const Details = (props) => {
    const { t } = useTranslation()
    const { dispatch, newsCur, /* recommendNews,  hotNews, */ userInfo, adImplant, hotNews24H } = props
    const myPassportId = userInfo.passportId
    /** @desc 获取作者信息：默认，关注 */
    const getAuthorInfoFunc = useCallback(() => {
        dispatch(getAuthorInfo({
            passportId: newsCur.createdBy,
            myPassportId: myPassportId || ''
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取作者信息错误')
        })
    }, [myPassportId])

    /** @desc 获取文章详情：pages默认，评论，收藏 */
    const getNewsDetailsFunc = useCallback(() => {
        let params = { id: newsCur.id }
        if (myPassportId) {
            params = {
                id: newsCur.id,
                passportId: myPassportId,
                token: userInfo.token
            }
        }
        dispatch(getNewsDetails(params)).then(function (res) {
        }).catch(function (err) {
            console.log(err)
            Toast.info('新闻详情获取错误')
        })
    }, [userInfo, myPassportId])

    /** @desc 下一篇文章位置 */
    const nextPagePos = useCallback(() => {
        const $next = document.getElementById('newsNext')
        const $interest = document.getElementById('interestNews')
        const $footer = document.getElementById('footerWrapper')

        // 已滚动高度
        const sTop = scrollOffset().top
        // 下一篇高度
        const nHeight = elementOffset($next).height
        // 底部离视窗顶部
        const fTop = $footer.getBoundingClientRect().top
        if (sTop + 95 >= elementOffset($interest).bottom + 20 && sTop + nHeight < sTop + fTop - 40) {
            $next.style.position = 'fixed'
            $next.style.top = '90px'
            $next.style.bottom = 'inherit'
        } else if (sTop + nHeight >= sTop + fTop - 40) {
            $next.style.position = 'fixed'
            $next.style.bottom = `${windowOffset().height - fTop + 20}px`
            $next.style.top = 'inherit'
        } else {
            $next.style.position = 'static'
            $next.style.top = 'inherit'
            $next.style.bottom = 'inherit'
        }
    }, [])

    /** @desc share与nextPage的默认位置
     * 此处功能应同步与数据请求执行，也就是当dom更新完就执行。应该使用useLayoutEffect
     * 但在服务端会运行，故挪到useEffect，把变化的数据都依赖进来，此处简单点就是props
     * 按理说可typeof window !== 'undefined' && useLayoutEffect(() => {})
     * 但eslint跟官方规则不允许hooks存在条件判断等规则故此方式不行
     * */
    useEffect(() => {
        nextPagePos()

        // share默认位置
        const $share = document.getElementById('newsDetailsShare')
        const $tags = document.getElementById('newsTags')
        if (scrollOffset().top + windowOffset().height < elementOffset($tags).top + 130) {
            $share.className = 'news-details-share active'
            $share.style.position = 'fixed'
        } else {
            $share.style.position = 'static'
        }
    }, [props])

    useEffect(() => {
        const $share = document.getElementById('newsDetailsShare')
        const $tags = document.getElementById('newsTags')
        windowScroll(function (res) {
            nextPagePos()

            // share滚动时位置
            if (scrollOffset().top + windowOffset().height < elementOffset($tags).top + 130) {
                $share.style.position = 'fixed'
                if (res === 'down') {
                    $share.className = 'news-details-share active'
                } else if (res === 'up') {
                    $share.className = 'news-details-share'
                }
            } else {
                $share.style.position = 'static'
            }
        })

        getAuthorInfoFunc()

        /** @desc 访问量统计 */
        statisticsNews({
            id: newsCur.id,
            ifRecommend: !newsCur.score || newsCur.score > 1 || newsCur.score < 0 ? 0 : 1
        }).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('统计新闻访问量错误')
        })

        /** @desc 获取您可能感兴趣的内容, 未登录获取热门新闻，登录获取推荐新闻 */
        dispatch(getHotNews({
            lastDays: 30,
            readCounts: 100,
            newsCounts: 6
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取热门新闻错误')
        })

        // 获取24H热门
        dispatch(get24hHotNews({
            lastDays: 1,
            readCounts: 50,
            newsCounts: 6
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取24H热门新闻错误')
        })
        // if (myPassportId) {
        //     dispatch(getRecommendNews({
        //         pageSize: 6,
        //         currentPage: 1,
        //         passportId: myPassportId
        //     })).then(function (res) {
        //         console.log(11111, res)
        //         if (res.code !== 1) {
        //             Toast.info(res.msg)
        //         }
        //     }).catch(function (err) {
        //         console.log(err)
        //         Toast.info('获取推荐新闻错误')
        //     })
        // } else {
        //     dispatch(getHotNews({
        //         lastDays: 30,
        //         readCounts: 100,
        //         newsCounts: 6
        //     })).then(function (res) {
        //         console.log(2222, res)
        //         if (res.code !== 1) {
        //             Toast.info(res.msg)
        //         }
        //     }).catch(function (err) {
        //         console.log(err)
        //         Toast.info('获取热门新闻错误')
        //     })
        // }

        /** @desc 获取广告 */
        dispatch(getAd({
            adPlace: '5,6,7',
            type: 1
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取广告错误')
        })
    }, [])
    const [adCon, setAdCon] = useState({
        aWidth: '360px',
        aLeft: 0,
        aIndex: 0
    })
    const newsAdRight = useCallback(() => {
        let len = adImplant['7'].length
        let index = 0
        setAdCon({
            aWidth: len * 360 + 'px',
            aLeft: 0,
            aIndex: 0
        })
        setInterval(() => {
            if (index >= adImplant['7'].length - 1) {
                index = 0
            } else {
                index += 1
            }
            setAdCon({
                aWidth: len * 360 + 'px',
                aLeft: -(index * 360) + 'px',
                aIndex: index
            })
        }, 5000)
    }, [])

    useEffect(() => {
        newsAdRight()
    }, [])
    return [
        <div className="news-details-ad-up" key="newsDetailsAdUp">
            {adImplant['5'] && <AdUp data={adImplant['5'][0] || []} />}
        </div>,
        <div className="layout-main news-details" key="newsDetails">
            <div className="layout-left">
                <NewsContent />
                <Share attentionSuccessed={getAuthorInfoFunc} getNewsDetailsFunc={getNewsDetailsFunc} />
                <AdGeneralize />
                <RelatedNews
                  newsCur={newsCur}
                />
            </div>
            <div className="layout-right">
                <AuthorInfo attentionSuccessed={getAuthorInfoFunc} />
                {/* <RightRiseDropList/> */}
                <div className='ad-right-img' style={{ display: `${Array.isArray(adImplant['7']) && adImplant['7'].length === 0 ? 'none' : 'block'}` }}>
                    <div className='right-img-cont' style={{ width: adCon.aWidth, left: adCon.aLeft }}>
                        {
                            adImplant['7'] && Array.isArray(adImplant['7']) && adImplant['7'].map((item, index) => {
                                // 2020-06-01只展示第一个广告
                                if (index !== 0) return

                                let adImgUrl = null
                                switch (item.useType) {
                                    case 1:
                                        adImgUrl = item.url
                                        break
                                    case 2:
                                        adImgUrl = item.url
                                        break
                                    case 3:
                                        adImgUrl = `https://news.huoxing24.com/newsdetail/${item.url}`
                                        break
                                    case 4:
                                        adImgUrl = `https://news.huoxing24.com/list/${item.url}`
                                        break
                                    case 5:
                                        adImgUrl = `https://news.huoxing24.com/feature/${item.url.split('/')[1]}`
                                        break
                                    case 6:
                                        adImgUrl = `https://news.huoxing24.com/tags/${item.url}`
                                        break
                                    default:
                                }
                                return <a key={item.id} href={adImgUrl} target='_blank'>
                                    <img src={item.pcImgSrc} />
                                    <span style={{ display: `${item.useType === 1 ? 'block' : 'none'}` }}>广告</span>
                                    <p>{item.title}</p></a>
                            })
                        }
                    </div>
                    <div className='img-cont-item'>
                        {
                            adImplant['7'] && adImplant['7'].map((item, index) => {
                                let nActive = adCon.aIndex === index ? 'active' : ''
                                return <font key={index} className={nActive} />
                            })
                        }
                    </div>
                </div>
                <RightDownloadBox />
                <RightNews id="interestNews" data={hotNews24H} title={t('24_hot_news')} />
                {/* <RightNews id="interestNews" data={myPassportId ? recommendNews : hotNews} title="您可能感兴趣的内容"/> */}
                <RightFlashAndDynamic onlyOne={'flash'} />
                <PrevNextNews />
            </div>
        </div>,
        <div className="news-details-comment" key="newsComment">
            <div className="layout-main">
                {/* 暂时隐藏评论 */}
                <div className="layout-left" id="newsMessage">
                    {/* <Comment targetId={newsCur.id} targetType="news" commentSuccessed={getNewsDetailsFunc} />
                    <CommentShow targetId={newsCur.id} /> */}
                </div>
            </div>
        </div>
    ]
}
const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        userInfo: multi.login.userInfo.info,
        hotNews: multi.news.hotNewsList.inforList,
        recommendNews: state.news.recommendNewsList.inforList,
        newsCur: state.news.newsDetails.current || {},
        adImplant: multi.adImplant,
        hotNews24H: multi.news.hot24HNewsList.inforList
    }
}
export default connect(mapStateToProps)(Details)
