import React from 'react'
import Jptransation from '../../components-m/JpTransaction'
import './index.scss'
export default () => {
    const isindex = false
    return <div className="jp-transaction-page">
        <Jptransation {...{ isindex }}/>
    </div>
}
