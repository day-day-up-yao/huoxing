import React from 'react'
import '../index.scss'
import jplogint from '../../../public/imgs/jpimg/jplogint.png'
import Siginin from '../../../components/Public/Signin'
export default () => {
    return <div className="jp-Login">
        <div className="jp-Login-top">
            <img src={jplogint} alt=""/>
        </div>
        <Siginin isquattor />
    </div>
}
