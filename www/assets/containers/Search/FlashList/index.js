import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useParams } from 'react-router-dom'

import './index.scss'

import ImgPopup from 'multiComps/ImgPopup'
import FlashItem from '../../../components/Search/FlashItem'

export default (props) => {
    const { livesListData } = useSelector((state) => ({
        livesListData: state.search.livesListData
    }), shallowEqual)
    const { searchQuery } = useParams() // url参数
    const {
        pageType // 0:全部; 1:新闻(标题、摘要和内容搜索); 2:快讯(标题和内容); 3:专栏作者; 4:专题(名称); 5:视频(名称)
    } = props
    const [isImgPopupShow, setIsImgPopupShow] = useState(false) // 是否展示图片弹窗
    const [imgPopupSrc, setImgPopupSrc] = useState('') // 图片弹窗展示内容

    // 图片弹窗展示事件
    const showListImg = useCallback(
        (e) => {
            setImgPopupSrc(e.target.getAttribute('src'))
            setIsImgPopupShow(true)
        },
        []
    )

    // 更改搜索数目显示
    const onCountChangeText = useCallback(
        (num) => {
            if (parseInt(num) > 9999) {
                return '9999+'
            } else {
                return num
            }
        },
        []
    )

    return (
        <div className="search-flash-list">
            {pageType !== 0 &&
                <div className="search-flash-list-title">
                    快讯
                    <span className="search-flash-list-title-num">({onCountChangeText(livesListData.recordCount)})</span>
                </div>
            }
            {
                livesListData && livesListData.inforList.length > 0 && livesListData.inforList.map((item, index) => {
                    return (
                        (pageType === 0 && index < 5) || pageType !== 0
                            ? <FlashItem {...item} searchQuery={searchQuery} showListImg={showListImg} key={index} />
                            : null
                    )
                })
            }
            <ImgPopup close={() => setIsImgPopupShow(!isImgPopupShow)} show={isImgPopupShow} src={imgPopupSrc} />
        </div>
    )
}
