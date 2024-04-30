import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'

import { execCommandCopy } from 'multiPublic'
import { getActivityList } from '../../../redux/actions/activity'
import ActivityListItem from '../../../components/ActivityList/ActivityListItem'
import Toast from 'multiComps/Toast'
import wxIcon from '../Image/activity-wx.png'
import wxActiveIcon from '../Image/activity-a-wx.png'
import yxIcon from '../Image/activity-yx.png'
import pageLeftIcon from '../Image/activity-page-left.png'
import pageRightIcon from '../Image/activity-page-right.png'

// 举办地址
const getNav = (place) => {
    let text = ''
    switch (place) {
        case 'all':
            text = '全部'
            break
        case 'overseas':
            text = '海外'
            break
        case 'others':
            text = '其他'
            break
        default:
            text = place
            break
    }
    return text
}

// 举办时间
const timeData = ['全部', '本周', '本月']

// 邮箱地址
const emailAddress = '782257144@qq.com'

export default () => {
    const { activityPlaceList, activityAllListData } = useSelector((state) => ({
        activityPlaceList: state.activity.activityPlaceList,
        activityAllListData: state.activity.activityAllListData
    }), shallowEqual)
    const dispatch = useDispatch()
    const [nowPlace, setNowPlace] = useState('all') // 当前举办地址
    const [nowTime, setNowTime] = useState(1) // 当前时间
    const [nowPageNum, setNowPageNum] = useState(1) // 当前页码

    // 请求切换数据
    const getListData = useCallback(
        (params) => {
            let obj = { place: nowPlace, timeType: nowTime, recommend: 0, currentPage: nowPageNum, pageSize: 18 }
            if (params) {
                obj = { ...obj, ...params }
            }
            dispatch(getActivityList(obj))
        },
        [nowPlace, nowTime, nowPageNum]
    )

    // 页码展示组件
    const pageNumList = useCallback(
        (length) => {
            if (length < 9) {
                let list = []
                for (let i = 1; i <= length; i++) {
                    list.push(
                        <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                            {i}
                        </span>
                    )
                }
                return list
            } else {
                let list = []
                if (nowPageNum <= 3) {
                    for (let i = 1; i <= 5; i++) {
                        list.push(
                            <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                                {i}
                            </span>
                        )
                    }

                    list.push(
                        <span className='page-item-text omit' key={'omit2'} onClick={() => onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5)}>
                            ···
                        </span>
                    )
                    list.push(
                        <span className='page-item-text' key={'end'} onClick={() => onBtnChangePageNumClick(length)}>
                            {length}
                        </span>
                    )
                } else if (nowPageNum === 4) {
                    for (let i = 1; i <= 6; i++) {
                        list.push(
                            <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                                {i}
                            </span>
                        )
                    }

                    list.push(
                        <span className='page-item-text omit' key={'omit2'} onClick={() => onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5)}>
                            ···
                        </span>
                    )
                    list.push(
                        <span className='page-item-text' key={'end'} onClick={() => onBtnChangePageNumClick(length)}>
                            {length}
                        </span>
                    )
                } else if (nowPageNum === length - 3) {
                    list.push(
                        <span className='page-item-text' key={'start'} onClick={() => onBtnChangePageNumClick(1)}>
                            {1}
                        </span>
                    )

                    list.push(
                        <span className='page-item-text omit' key={'omit1'} onClick={() => onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5)}>
                            ···
                        </span>
                    )

                    for (let i = length - 5; i <= length; i++) {
                        list.push(
                            <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                                {i}
                            </span>
                        )
                    }
                } else if (nowPageNum >= length - 3) {
                    list.push(
                        <span className='page-item-text' key={'start'} onClick={() => onBtnChangePageNumClick(1)}>
                            {1}
                        </span>
                    )

                    list.push(
                        <span className='page-item-text omit' key={'omit1'} onClick={() => onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5)}>
                            ···
                        </span>
                    )

                    for (let i = length - 4; i <= length; i++) {
                        list.push(
                            <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                                {i}
                            </span>
                        )
                    }
                } else {
                    list.push(
                        <span className='page-item-text' key={'start'} onClick={() => onBtnChangePageNumClick(1)}>
                            {1}
                        </span>
                    )

                    list.push(
                        <span className='page-item-text omit' key={'omit1'} onClick={() => onBtnChangePageNumClick(nowPageNum - 5 < 1 ? 1 : nowPageNum - 5)}>
                            ···
                        </span>
                    )

                    for (let i = nowPageNum - 2; i <= nowPageNum + 2; i++) {
                        list.push(
                            <span className={`page-item-text ${i === nowPageNum ? 'active' : ''}`} key={i} onClick={() => onBtnChangePageNumClick(i)}>
                                {i}
                            </span>
                        )
                    }

                    list.push(
                        <span className='page-item-text omit' key={'omit2'} onClick={() => onBtnChangePageNumClick(nowPageNum + 5 > length ? length : nowPageNum + 5)}>
                            ···
                        </span >
                    )
                    list.push(
                        <span className='page-item-text' key={'end'} onClick={() => onBtnChangePageNumClick(length)}>
                            {length}
                        </span>
                    )
                }

                return list
            }
        },
        [nowPageNum]
    )

    // 点击切换地址按钮事件
    const onBtnChangePlaceClick = useCallback(
        (place) => {
            setNowPlace(place)
            setNowPageNum(1)
            getListData({ place: place, currentPage: 1 })
        },
        []
    )

    // 点击切换地址按钮事件
    const onBtnChangeTime = useCallback(
        (timeId) => {
            setNowTime(timeId)
            setNowPageNum(1)
            getListData({ timeType: timeId, currentPage: 1 })
        },
        []
    )

    // 点击切换页码按钮事件
    const onBtnChangePageNumClick = useCallback(
        (num) => {
            if (num < 1 || num > activityAllListData.pageCount) return
            setNowPageNum(num)
            getListData({ currentPage: num })
        },
        [activityAllListData]
    )

    // 点击一键复制按钮事件
    const onBtnCopyClick = useCallback(
        (value) => {
            if (execCommandCopy(value)) {
                Toast.success('复制成功')
            } else {
                Toast.info('复制失败，该浏览器不支持点击复制到剪贴板')
            }
        },
        []
    )

    return (
        <div className="activity-list-page-bottom-list">
            <div className="activity-list-page-bottom-list-wrapper">
                <ul className="activity-list-page-bottom-list-nav" id="activityNav">
                    {
                        activityPlaceList && activityPlaceList.map((item, index) => {
                            return (
                                <li className={item.place === nowPlace ? 'active' : ''} onClick={() => onBtnChangePlaceClick(item.place)} key={index}>
                                    {getNav(item.place)}
                                    {index !== 0
                                        ? <span>{`(${item.placeCount})`}</span>
                                        : null
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="activity-list-page-bottom-list-date">
                    <span>时间</span>
                    {timeData.map((item, index) => {
                        const timeId = index + 1
                        return (
                            <p className={timeId === nowTime ? 'active' : ''} onClick={() => onBtnChangeTime(timeId)} key={index}>
                                {item}
                            </p>
                        )
                    })}
                    <div className="contact">联系我们:
                        <div className="yx">
                            <img src={yxIcon} alt="" />
                            <div className="yx-cont">
                                <font id="fMailbox">邮箱：{emailAddress}</font>
                                <div className="copy" onClick={() => onBtnCopyClick(emailAddress)}>复制</div>
                                <i></i>
                            </div>
                        </div>
                        <div className="wx">
                            <img src={wxIcon} alt="" />
                            <div className="wx-cont">
                                <img src={wxActiveIcon} alt="" />
                                <span>微信：linghu_chong_</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity-list-page-bottom-list-list">
                    {activityAllListData && activityAllListData.pageCount >= 1
                        ? activityAllListData.inforList.map((item, index) => {
                            return (
                                <ActivityListItem {...item} currentTime={activityAllListData.currentTime} key={index} />
                            )
                        })
                        : <div className="not-available" />
                    }
                </div>
                {activityAllListData && activityAllListData.pageCount > 1
                    ? <div className="activity-list-page-bottom-list-page">
                        <div className="activity-list-page-bottom-list-page-list">
                            <p className="page-item-btn" onClick={() => onBtnChangePageNumClick(nowPageNum - 1)} key={'left'}>
                                <img src={pageLeftIcon} alt="" />
                            </p>
                            {pageNumList(activityAllListData.pageCount)}
                            <p className="page-item-btn" onClick={() => onBtnChangePageNumClick(nowPageNum + 1)} key={'right'}>
                                <img src={pageRightIcon} alt="" />
                            </p>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
