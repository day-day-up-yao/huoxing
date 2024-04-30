import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import NewsList from '../../components/NewsList'
import RightNews from 'multiComps/RightNews'
import Toast from 'multiComps/Toast'
import { isArray } from 'multiPublic/index'
import { getNewsList } from 'multiRedux/actions/news'
// import { getFeatureDetails } from '../../redux/actions/news'

const Tags = (props) => {
    const { hotNewsList, featureList, featureDetails, dispatch, match, pageType } = props
    const { t } = useTranslation()

    /** @desc 加载更多  */
    const [params, setParams] = useState({
        currentPage: 2,
        pageSize: 15,
        id: match.params.featureId
    })
    const [isMore, setIsMore] = useState(true)
    useEffect(() => {
        // 更换接口，不需要tags了
        // if (!match.params.tags) {
        //     dispatch(getFeatureDetails(match.params.featureId)).then(function (res) {
        //         if (res.code === 1) {
        //             setParams({
        //                 ...params,
        //                 tags: res.obj.tags
        //             })
        //         } else {
        //             setIsMore(false)
        //             Toast.info(res.msg)
        //         }
        //     }).catch(function (err) {
        //         console.log(err)
        //         Toast.info(`获取专题详情错误`)
        //     })
        // }
        if (!match.params.featureId) {
            setIsMore(false)
        }
        console.log('====================================')
        console.log(match.params)
        console.log('====================================')
    }, [])
    const loadMore = useCallback(() => {
        dispatch(getNewsList(params, 'tags', 'more')).then(function (res) {
            if (res.code === 1) {
                const curPage = res.obj.currentPage
                const list = res.obj.inforList
                if (isArray(list) && list.length !== 0) {
                    setParams({
                        ...params,
                        currentPage: curPage + 1
                    })
                } else {
                    Toast.info('暂无更多新闻')
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取关键字或专题新闻列表错误')
        })
    }, [params])
    return [
        <div className="tags-feature-banner" key="tagsFeatureBanner">
            {pageType === 'tags' && <div className="tags-banner">
                <div className="tags-banner-title">{match.params.tags}</div>
            </div>}
            {pageType === 'feature' && <div
                className="feature-banner"
                style={{
                    background: `url(${featureDetails.topic.pcBackImage}) no-repeat center top`,
                    backgroundSize: `auto 300px`
                }}>
                <div className="feature-title">
                    <h1>{featureDetails.topic.titleDisplayFlag === 0 ? '' : featureDetails.topic.topicName}</h1>
                </div>
                <div className="feature-desc">
                    <h5>{t('feature_desc')}:</h5>
                    <p>{featureDetails.topic.description}</p>
                </div>
            </div>}
        </div>,
        <div className="layout-main tags-feature-wrapper" key="tagsFeature">
            <div className="layout-left">
                <NewsList loadMore={loadMore} isMore={isMore} />
            </div>
            <div className="layout-right">
                <RightNews data={featureList.inforList} title={t('feature_recommended_topic')} feature={true} />
                <RightNews data={hotNewsList.inforList} title={t('feature_hot_news')} />
            </div>
        </div>
    ]
}

const mapStateToProps = (state) => {
    const news = state.multi.news
    return {
        hotNewsList: news.hotNewsList,
        featureList: news.featureList,
        featureDetails: state.news.featureDetails
    }
}

export default connect(mapStateToProps)(Tags)
