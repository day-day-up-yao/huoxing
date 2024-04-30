import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import './index.scss'
import { isArray, mixUrl } from 'multiPublic'
import IconBtn from './Image/video-btn.png'
import { getVideoList } from '../../redux/actions/video'

const gap = 20 // 每个Item的间距

export default () => {
    const { videoListData } = useSelector((state) => ({
        videoListData: state.video.videoListData // 视频列表数据
    }), shallowEqual)
    const dispatch = useDispatch()
    const [btnText, setBtnText] = useState('查看更多')
    const [isOk, setIsOk] = useState(false)
    const [pageNum, setPageNum] = useState(1) // 页数
    const contBox = useRef() // cont 实例

    useEffect(() => {
        waterfall()
    }, [videoListData])

    // 产生瀑布流效果
    const waterfall = useCallback(
        () => {
            let items = document.getElementsByClassName('video-list-page-item')
            // 首先确定列数 = 页面的宽度 / 图片的宽度
            // let pageWidth = 1200
            let itemWidth = items[0].offsetWidth
            // let columns = parseInt(pageWidth / (itemWidth + gap))
            let columns = 4
            let arr = [] // 定义一个数组，用来存储元素的高度
            for (let i = 0; i < items.length; i++) {
                if (i < columns) {
                    // 满足这个条件则说明在第一行，文章里面有提到
                    items[i].style.top = 0
                    items[i].style.left = (itemWidth + gap) * i + 'px'
                    arr.push(items[i].offsetHeight)
                } else {
                    // 其他行，先找出最小高度列，和索引
                    // 假设最小高度是第一个元素
                    let minHeight = arr[0]
                    let index = 0
                    // 找出最小高度
                    for (let j = 0; j < arr.length; j++) {
                        if (minHeight > arr[j]) {
                            minHeight = arr[j]
                            index = j
                        }
                    }
                    // 设置下一行的第一个盒子的位置
                    // top值就是最小列的高度+gap
                    items[i].style.top = arr[index] + gap + 'px'
                    items[i].style.left = items[index].offsetLeft + 'px'

                    // 修改最小列的高度
                    // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                    arr[index] = arr[index] + items[i].offsetHeight + gap
                }
            }

            // 设置整体高度
            contBox.current.style.height = Math.max(...arr) + 'px'
            setIsOk(true)
        },
        []
    )

    // 请求更多数据
    const getMoreData = useCallback(
        (currentPage) => {
            dispatch(getVideoList({ currentPage: currentPage, pageSize: 24 }))
        },
        []
    )

    // 点击查看更多按钮事件
    const onBtnMoreClick = useCallback(
        () => {
            let newPageNum = pageNum + 1
            setPageNum(newPageNum)
            if (videoListData.pageCount >= newPageNum) {
                getMoreData(newPageNum)
            } else {
                setBtnText('没有更多了')
            }
        },
        [pageNum]
    )

    // 点击每项按钮
    const onBtnItemClick = useCallback(
        (item) => {
            if (!item.id || !item.publishTime) return
            window.location.href = mixUrl.main(`/video/detail/${item.id}/${item.publishTime}`)
        },
        []
    )

    return (
        <div className="video-list-page">
            <div className="video-list-page-cont" ref={contBox} style={{ opacity: isOk === true ? 1 : 0 }}>
                {
                    videoListData.inforList && isArray(videoListData.inforList) && videoListData.inforList.map((item, index) => {
                        const videoImg = !item.coverPic || item.coverPic.indexOf('{') === -1 ? '' : JSON.parse(item.coverPic)
                        return (
                            <div className="video-list-page-item" key={index} onClick={() => onBtnItemClick(item)}>
                                <div className="video-item-img">
                                    <a title={item.title} target="_blank">
                                        <img src={!videoImg || !videoImg.pc ? '' : videoImg.pc} alt={item.title} />
                                        <span className="btn">
                                            <img src={IconBtn} alt="播放" />
                                        </span>
                                        {/* <span className="title">MarsBit视频</span> */}
                                    </a>
                                </div>
                                <a>
                                    <h5>{item.title}</h5>
                                    <div className="video-item-describe">
                                        {item.content}
                                    </div>
                                </a>
                                <div className="box-bottom">
                                    <p className="comment"><span>
                                        {item.commentCounts}</span>评论</p>
                                    <p className="endorse"><span>{item.hotCounts}</span></p>
                                    <p className="time"><span>{item.videoTime}</span></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                videoListData.recordCount && videoListData.recordCount > 12 &&
                <div className="video-list-page-more" onClick={() => onBtnMoreClick()}>{btnText}</div>
            }

        </div>
    )
}
