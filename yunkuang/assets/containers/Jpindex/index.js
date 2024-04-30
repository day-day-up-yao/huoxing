import React, { useEffect } from 'react'
import './index.scss'
export default () => {
    useEffect(() => {
        document.title = ''
    }, [])
    return <div className="pc-jpindex">
        <div className="pc-jpindex-con">
            <div className="pc-jpindex-con-title">スマートフォンを利用してリンクをお開きください</div>
        </div>
    </div>
}
