import React, { useState, useEffect, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { isArray } from 'multiPublic/index'
import LoadMore from 'multiCompsM/LoadMore'
import { getFeatureList } from 'multiRedux/actions/news'
import Toast from 'multiComps/Toast'
import FeatureListItem from 'multiCompsM/FeatureListItem'

const Feature = (props) => {
    const { featureList, dispatch } = props
    const { t } = useTranslation()

    const [curPage, setCurPage] = useState(1)
    const [orderType, setOrderType] = useState(0)
    const mounted = useRef(false) // 判断是否为第一次运行：didMounted

    useEffect(() => {
        if (mounted.current) {
            dispatch(getFeatureList({
                currentPage: curPage,
                pageSize: 15,
                orderType: orderType
            }, 'isMore')).then(function (res) {
                if (res.code !== 1) {
                    Toast.index(res.msg)
                }
            }).catch(function (err) {
                console.log(err)
                Toast.info('获取专题列表错误')
            })
        } else {
            mounted.current = true
        }
    }, [curPage, orderType])

    const loadMore = useCallback(() => {
        setCurPage(curPage + 1)
    }, [curPage])

    return <div className="m-feature-wrapper">
        <div className="func">
            <div className="sort">
                <a onClick={() => setOrderType(0)} className={`${orderType === 0 && 'active'}`}>{t('feature_update_time')}</a>
                <a onClick={() => setOrderType(1)} className={`${orderType === 1 && 'active'}`}>{t('feature_set_time')}</a>
            </div>
        </div>
        <ul className="list">{isArray(featureList.inforList) && featureList.inforList.map(function (item, index) {
            return <FeatureListItem item={item} key={item.topic.id} />
        })}
        </ul>
        {featureList.inforList.length > 0 ? <LoadMore
            onClick={loadMore}
            dataleng={featureList.inforList.length}
            style={{ display: featureList.inforList.length === 0 || featureList.recordCount < featureList.pageSize ? 'none' : 'block' }}
        /> : ''}
    </div>
}

const mapStateToProps = (state) => ({
    featureList: state.multi.news.featureList
})

export default connect(mapStateToProps)(Feature)
