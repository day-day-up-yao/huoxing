import React from 'react'

import './index.scss'

import searchData from '../../../public/js/searchData'
import upIcon1 from '../Image/search-sort-up1.png'
import upIcon2 from '../Image/search-sort-up2.png'
import downIcon1 from '../Image/search-sort-down1.png'
import downIcon2 from '../Image/search-sort-down2.png'

const { searchSortTypeEnum } = searchData()

export default (props) => {
    const {
        sortType,
        setSortType
    } = props

    return (
        <div className="search-top-sort">
            <div className={`search-top-sort-item ${sortType !== searchSortTypeEnum.DEFAULT ? 'select' : ''}`}
                onClick={() => setSortType(sortType !== searchSortTypeEnum.DESC ? searchSortTypeEnum.DESC : searchSortTypeEnum.ASC)}
            >
                按时间排序
                <div className="search-top-sort-item-btn">
                    <img className="search-top-sort-item-btn-img up" src={sortType === searchSortTypeEnum.ASC ? upIcon2 : upIcon1} />
                    <img className="search-top-sort-item-btn-img down" src={sortType === searchSortTypeEnum.DESC ? downIcon2 : downIcon1} />
                </div>
            </div>
            {/* <div className="search-top-sort-line" />
            <div className={`search-top-sort-item ${sortType === searchSortTypeEnum.DEFAULT ? 'select' : ''}`}
                onClick={() => setSortType(searchSortTypeEnum.DEFAULT)}
            >
                相关性
            </div> */}
        </div>
    )
}
