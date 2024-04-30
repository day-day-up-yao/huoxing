import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { formatPublishTime, formatTime, mixUrl } from 'multiPublic'

import './index.scss'

export default (props) => {
    const { t } = useTranslation()
    const { onlyOne } = props // onlyOne 只显示其中1个  flash: 快讯  dynamic: 项目行情(潜伏日历)
    const { showlivesData, calendarData } = useSelector((state) => ({
        showlivesData: state.multi.home.showlivesData,
        calendarData: state.multi.home.calendarData
    }), shallowEqual)
    const [listData, setListData] = useState(onlyOne && onlyOne === 'dynamic' ? calendarData : showlivesData)
    const [listType, setListType] = useState(onlyOne && onlyOne === 'dynamic' ? 'dynamic' : 'flash')

    useEffect(() => {
        switch (listType) {
            case 'flash':
                setListData(showlivesData)
                break
            case 'dynamic':
                setListData(calendarData)
                break
            default:
                break
        }
    }, [showlivesData, calendarData, listType])

    return (
        <div className="right-flash-and-dynamic">
            {onlyOne && onlyOne === 'flash' &&
                <a className="right-flash-and-dynamic-title-box" href={mixUrl.news(`/flash`)} target="_blank">
                    <div className='right-flash-and-dynamic-title right-flash-and-dynamic-title-only'>
                        7x24H {t('headernavtwo')}
                    </div>
                    <div className="right-flash-and-dynamic-arrow"></div>
                </a>
            }
            {onlyOne && onlyOne === 'dynamic' &&
                <div className="right-flash-and-dynamic-title-box">
                    <div className='right-flash-and-dynamic-title right-flash-and-dynamic-title-only' >
                        {t('product_dynamics')}
                    </div>
                </div>
            }
            {!onlyOne &&
                <div className="right-flash-and-dynamic-title-box">
                    <div className={`right-flash-and-dynamic-title ${listType === 'flash' ? 'right-flash-and-dynamic-title-active' : ''}`}
                        onClick={() => { setListType('flash') }}
                    >
                        7x24H {t('headernavtwo')}
                        <div className="right-flash-and-dynamic-line"></div>
                    </div>
                    {listData && listData.length > 0 &&
                        <div className={`right-flash-and-dynamic-title ${listType === 'dynamic' ? 'right-flash-and-dynamic-title-active' : ''}`}
                            onClick={() => { setListType('dynamic') }}
                        >
                            {t('product_dynamics')}
                            <div className="right-flash-and-dynamic-line"></div>
                        </div>
                    }
                </div>
            }
            {
                listData && listData.length > 0 && listData.map((item, index) => {
                    return (
                        <div className={`incident-list ${(item.tag && parseInt(item.tag) === 2) ? 'import' : ''}`} key={index}>
                            <font className="yuan"></font>
                            <div className="list-top">
                                <p className="list-date">
                                    {listType === 'flash' ? formatPublishTime(item.createdTime) : formatTime(item.publishTime * 1000, 'MM-dd')}
                                </p>
                            </div>
                            {item.url !== '' ? <a href={item.url} target="_blank">{item.title}</a> : <a style={{ cursor: 'auto' }} >{item.title}</a>}

                        </div>
                    )
                })
            }
        </div>
    )
}
