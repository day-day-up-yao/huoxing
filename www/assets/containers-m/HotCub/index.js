import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import Toast from 'multiComps/Toast'
import { isArray } from 'multiPublic'
// import { getNewsList } from 'multiRedux/actions/news'
import FeatureList from '../../components-m/FeatureList'
import { getFeatureDetails } from '../../redux/actions/news'

const FeatureAndTags = (props) => {
    const { featureDetails, dispatch, match } = props
    // console.log(featureDetails)
    console.log('专题列表')

    /** @desc 加载更多  */
    const [params, setParams] = useState({
        currentPage: 2,
        pageSize: 15,
        id: match.params.featureId
    })
    const [isMore, setIsMore] = useState(true)
    // const [active, setActive] = useState(false)
    // const [ showall ] = useState(false)// setShowall
    // const showAllcontent = useCallback(() => {
    //     setShowall(true)
    //     setActive(true)
    // }, [])
    useEffect(() => {
        if (!match.params.featureId) {
            setIsMore(false)
        }
    }, [])
    const loadMore = useCallback(() => {
        dispatch(getFeatureDetails(params, 'isMore')).then(function (res) {
            if (res.code === 1) {
                const curPage = res.obj.topicContentList.currentPage
                const list = res.obj.topicContentList.inforList
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
    return <div className="m-feature-details">
        <div className="hot-top-bg show">
            <div className="feature-title">
                {featureDetails.topic.titleDisplayFlag === 0 ? '' : featureDetails.topic.topicName}
            </div>
            {/* {featureDetails.topic.titleDisplayFlag === 0 ? null : <div className="masking"></div>} */}
        </div>
        <div className="feature-con">
            {/* <div className="wrap feature-desc">
                <input type="checkbox" />
                <div className="text desc">
                    <label className="btn" htmlFor="exp"></label>
                </div>
            </div> */}
            <div className="wrap feature-desc">
                <input type="checkbox" id="exp" className="exp"/>
                <div className="text">
                    {/* <button className="btn">展开</button> */}
                    <label className="btn" htmlFor="exp" ></label>{featureDetails.topic.description}
                </div>
            </div>
        </div>
        <FeatureList loadMore={loadMore} isMore={isMore} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        featureDetails: state.news.featureDetails
    }
}

export default connect(mapStateToProps)(FeatureAndTags)
