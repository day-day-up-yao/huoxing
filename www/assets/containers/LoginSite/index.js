import React from 'react'

import './index.scss'

import RegisterLogin from 'multiComps/RegisterLogin'

const LoginSite = (props) => <div className="login-site-wrapper">
    <div className="login-site-content">
        <RegisterLogin closeHide={true}/>
    </div>
</div>

export default LoginSite
