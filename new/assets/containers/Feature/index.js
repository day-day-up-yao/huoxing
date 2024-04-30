import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { isArray } from 'multiPublic/index'
import Pagination from 'multiComps/Pagination'
import { getFeatureList } from 'multiRedux/actions/news'
import Toast from 'multiComps/Toast'
import FeatureListItem from 'multiComps/FeatureListItem'

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

    return <div className="feature-list-wrapper">
        <div className="func">
            <div className="sort">
                <button onClick={() => setOrderType(0)} className={`${orderType === 0 && 'active'}`}>{t('feature_update_time')}</button>
                <button onClick={() => setOrderType(1)} className={`${orderType === 1 && 'active'}`}>{t('feature_set_time')}</button>
            </div>
            <div className="number">
                {t('feature_setting')}<span>{featureList.recordCount}</span>{t('feature_zt_num')}
            </div>
        </div>
        <ul className="list">{isArray(featureList.inforList) && featureList.inforList.map(function (item, index) {
            return <FeatureListItem item={item} key={item.topic.id} />
        })}
        </ul>
        <div
            className="pagination"
            style={{ display: (featureList.inforList.length === 0 || featureList.recordCount < featureList.pageSize) && 'none' }}>
            <Pagination
                pageSize={featureList.pageSize}
                totalData={featureList.recordCount}
                pageChange={(curPage) => setCurPage(curPage)}
            />
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    featureList: state.multi.news.featureList
})

export default connect(mapStateToProps)(Feature)
