import React from 'react'
import './index.scss'
import iconArrow from './image/icon-jpsetting-arrow.png'

// const listData = [
//     { name: 'セキュリティ', href: '/jpsecurity' },
//     { name: 'パスワードを変更する', href: '/jpindex' }
// ]

const listData = [
    { name: 'セキュリティ', href: '/jpsecurity' }
]

export default () => {
    return (
        <div className="jp-setting-page">
            {
                listData && listData.map((item, index) => {
                    return (
                        <div className="jp-setting-item" key={index} onClick={() => { window.location.href = item.href }}>
                            <div className="jp-setting-item-title">{item.name}</div>
                            <img className="jp-setting-item-arrow" src={iconArrow} />
                        </div>
                    )
                })
            }
        </div>
    )
}
