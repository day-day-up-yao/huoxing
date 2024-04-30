import React, { useEffect, useState } from 'react'

import './index.scss'

import { queryParam } from '../../public/js/index'

export default () => {
    const [linelink, setLinelink] = useState('')
    useEffect(() => {
        if (queryParam('canopenline') === '1') {
            setLinelink('line://ti/p/@711buhyp')
        } else {
            setLinelink('https://liff.line.me/1645278921-kWRPP32q/?accountId=711buhyp')
        }
    }, [])
    return <div className="toline">
        <div className="toline-center">
            <p>"LINE"で開きますか？</p>
            <div className="line-btn">
                <a href="/back">キャンセル</a>
                <a href={linelink}>開く</a>
            </div>
        </div>
    </div>
}
