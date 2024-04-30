import React, { useState, useCallback, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import FlashListItem from './FlashListItem'
import DownloadBtn from 'multiCompsM/DownloadBtn'
import './index.scss'
import Toast from 'multiComps/Toast'
import { getFlashList } from 'multiRedux/actions/flash'
import { windowScroll, scrollOffset, windowOffset, elementOffset } from 'multiPublic/index'
import { isArray } from '../../../_multiappsharing/public'

const Flash = (props) => {
    const { flashList, dispatch } = props
    const paramsObj = {
        currentPage: flashList.currentPage,
        pageSize: 30
    }
    const [params, setParams] = useState(paramsObj)

    const isLoading = useRef(false)
    const loadType = useRef(false) // 加载跟是更多，点击切换是false ，这里没有切换
    const isMounted = useRef(false) // 组件是否已经挂载

    /** @desc 滚动加载更多 */
    useEffect(() => {
        const scrollFunc = windowScroll(function (res) {
            if (res !== 'down' || isLoading.current) return false
            loadType.current = 'more'
            const $btnMore = document.getElementById('btnMore')

            if (scrollOffset().top + windowOffset().height > elementOffset($btnMore).top - windowOffset().height / 2) {
                loadMore()
            }
        })
        return () => {
            window.removeEventListener('scroll', scrollFunc, false)
        }
    }, [isLoading])

    /** @desc 获取刷新时间 */
    const refreshTime = useRef(flashList.inforList[flashList.inforList.length - 1].createTime)
    useEffect(() => {
        refreshTime.current = flashList.inforList[flashList.inforList.length - 1].createTime
    }, [flashList])

    const loadMore = useCallback(() => {
        console.log(1111)
        if (isLoading.current) return false
        setParams({
            ...params,
            currentPage: params.currentPage + 1,
            refreshTime: refreshTime.currentPage
        })
    }, [params, isLoading, refreshTime])

    // 获取快讯列表，更新isMount，flashList, isLoading,
    /** @desc 获取快讯列表 */
    useEffect(() => {
        if (isMounted.current && !isLoading.current) {
            isLoading.current = true
            Promise.all([

                dispatch(getFlashList(params, loadType.current)).catch(function (err) {
                    console.log(err)
                    Toast.info('获取快讯列表错误')
                })
            ]).then(function (res) {
                isLoading.current = false
                if (res[0].code === 1) {
                    const list = res[0].obj.inforList
                    if (!isArray(list) || list.length === 0) {
                        Toast.info('暂无更多快讯')
                    }
                } else {
                    Toast.info(res[0].msg)
                }
            })
        } else {
            isMounted.current = true
        }
    }, [isLoading, isMounted, params])
    return <div className="news-fash page-con-wrap" id="currNewsBox">
        <div className="lives-box">
            {flashList.inforList.map(function (item, index) {
                return <FlashListItem item={item} serverTime={flashList.currentTime} key={item.id} key={index} />
            })}
        </div>
        <div className="flash-more-btn">
            <div className="btn-more" id="btnMore">加载更多</div>
        </div>
        <DownloadBtn/>
    </div>
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        flashList: multi.flash.flashList
    }
}

export default connect(mapStateToProps)(Flash)
