import React, { useEffect, useRef, useState } from 'react'

import './index.scss'

import { elementOffset } from 'multiPublic/index'

export default ({ guests, url }) => {
    const [moreShow, setMoreShow] = useState(false)
    const [tempTxtArr, setTempTxtArr] = useState([])
    const [realTxt, setRealTxt] = useState('')
    const $guestWrapper = useRef()
    const $tempTxt = useRef()
    const $checkMore = useRef()

    useEffect(() => {
        setTempTxtArr(guests.split(''))
    }, [guests])

    useEffect(() => {
        /** @desc 先让所有文字以dom形式显示出来，获取每一个字的宽度，宽度相加超过父级宽度的两倍也就是两行，则表示文字超出，从超出地方截取，并显示更多按钮
         * 如果以字节判断，虽然判断了中文字符与中文标题，但是涉及到字体原因，还是截取不准确。故以每个字宽度来截取 */
        if (tempTxtArr.length === 0) return
        const wrapperW = elementOffset($guestWrapper.current).width
        const moreW = elementOffset($checkMore.current).width
        let txtW = 0
        let index = 0
        const children = $tempTxt.current.children
        for (let key in children) {
            if (children[key].offsetWidth) {
                txtW += children[key].offsetWidth
                if (txtW >= wrapperW * 2 - moreW && index === 0) {
                    index = key
                }
            }
        }
        if (txtW >= wrapperW * 2 - moreW) {
            setMoreShow(true)
            setRealTxt(guests.substr(0, index))
        } else {
            setRealTxt(guests)
        }
    }, [tempTxtArr])

    return <div className="live-guest" ref={$guestWrapper}>
        <div
            style={{ visibility: realTxt !== '' ? 'visible' : 'hidden' }}
            className="real-txt">
            {realTxt}
        </div>
        <div className="temp-txt" ref={$tempTxt}>{tempTxtArr.map(function (item, index) {
            return <span key={index}>{item}</span>
        })}</div>
        <a
            className="check-more"
            ref={$checkMore}
            style={{ visibility: moreShow ? 'visible' : 'hidden' }}
            href={url}>
            <span>...</span>&nbsp;&nbsp;更多
        </a>
    </div>
}
