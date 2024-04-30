import React from 'react'

import jplogint from '../../../public/imgs/jpimg/jplogint.png'
import BackPasd from '../../../components/Public/BackPassword'
import '../index.scss'

export default () => {
    return <div className="Retrieve-jp">
        <div className="Retrieve-jp-top">
            <img src={jplogint} alt=""/>
        </div>
        <BackPasd
            isQuattro
        />
    </div>
}
