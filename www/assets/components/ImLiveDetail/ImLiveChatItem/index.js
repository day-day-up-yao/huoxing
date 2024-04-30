import React from 'react'
// import { urlToLink } from 'multiPublic/index'
import anchorme from 'anchorme'

import './index.scss'

export default (props) => {
    const {
        type, // 类型 0.普通 1.主播 2.嘉宾 98.加入信息 99.系统
        nick, // 姓名
        text // 内容
    } = props

    const textClass = type !== undefined
        ? type === 99 ? 'im-live-detail-right-chart-item-sys'
            : type === 98 ? 'im-live-detail-right-chart-item-name'
                : ''
        : ''

    return (
        <div className="im-live-detail-right-chart-item">
            {type !== undefined && type === 1 && <span className="im-live-detail-right-chart-item-sp im-live-detail-right-chart-item-icon1">主播</span>}
            {type !== undefined && type === 2 && <span className="im-live-detail-right-chart-item-sp im-live-detail-right-chart-item-icon2">嘉宾</span>}
            {nick !== undefined && <span className="im-live-detail-right-chart-item-name">{`${nick}：`}</span>}
            {/* {text !== undefined
                ? type === 1 || type === 2
                    ? <span className={`im-live-chart-item ${textClass}`} dangerouslySetInnerHTML={{ __html: urlToLink(text) }} />
                    : <span className={textClass}>{text}</span>
                : ''} */}
            {/* {text !== undefined
                ? <span className={`im-live-chart-item ${textClass}`} dangerouslySetInnerHTML={{ __html: urlToLink(text) }} />
                : ''
            } */}
            {text !== undefined
                ? <span className={`im-live-chart-item ${textClass}`}
                    dangerouslySetInnerHTML={{
                        __html: anchorme({
                            input: text,
                            options: {
                                attributes: {
                                    target: '_blank'
                                }
                            }
                        })
                    }}
                />
                : ''
            }
        </div>
    )
}
