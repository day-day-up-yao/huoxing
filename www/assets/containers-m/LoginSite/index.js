import React, { useState, useEffect } from 'react'

import './index.scss'

import RegisterLogin from 'multiComps/RegisterLogin'
import FooterDownload from 'multiCompsM/Layout/FooterDownload'
import { queryParam } from 'multiPublic/index'

const LoginSite = (props) => {
    const [nst, setNst] = useState(null)
    useEffect(() => {
        if (queryParam('giveBonus')) setNst(queryParam('giveBonus'))
    }, [])
    return <div className="login-site-wrapper-m">
        <div className="login-site-content">
            <RegisterLogin closeHide={true} mobile={true}/>
            {nst && <div className="get-nst">注册你将获取:<span>{nst}</span>NST</div>}
        </div>
        <FooterDownload/>
    </div>
}

export default LoginSite
