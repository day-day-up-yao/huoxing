import React from 'react'

import './index.scss'

import searchData from '../../../public/js/searchData'
const { searchTabType } = searchData()

export default (props) => {
    const {
        pageType, // 当前选中的类别
        setPageType // 设置当前选中类别
    } = props

    return (
        <div className="search-top-type">
            {searchTabType.filter((itm) => itm.type !== 99).map((item, index) => {
                return (
                    <div className={`search-top-type-item ${pageType === item.type ? 'select' : ''}`} onClick={() => setPageType(item.type)} key={index}>
                        {item.label}
                        {pageType === item.type && <div className="search-top-type-line" />}
                    </div>
                )
            })}
        </div>
    )
}
