import React from 'react'
import '../index.scss'
import jplogint from '../../../public/imgs/jpimg/jplogint.png'

import Signup from '../../../components/Public/Signup'
export default () => {
    return <div className="sign-up-jp">
        <div className="sign-up-jp-top">
            <img src={jplogint} alt=""/>
        </div>
        <Signup isQuollet/>
    </div>
}
