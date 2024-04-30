import React, { useState } from 'react'

import './index.scss'

import Header from './Header'
import LeftCon from './LeftCon'
import RightCon from './RightCon'
// import ItemCon from './ItemCon'
import ComingSoon from './ComingSoon'

export default () => {
    // const [type, setType] = useState(0)
    const [comingfg, setComingfg] = useState(false)
    return <div className="naga">
        <Header
            comingFn={(fg) => {
                setComingfg(fg)
            }}
        />
        <div className="naga-con">
            <LeftCon/>
            <RightCon/>
        </div>
        {comingfg && <ComingSoon
            closeFn={() => {
                setComingfg(false)
            }}
        />}
    </div>
}
