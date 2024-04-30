import React, { useState } from 'react'
import Detail from './detail/index'
import Surebuy from './surebuy/index'

export default () => {
    const [sure, setSure] = useState(false)
    return <div>
        {sure ? (
            <Surebuy/>
        ) : (
            <Detail {...{ setSure }}/>
        )}
    </div>
}
