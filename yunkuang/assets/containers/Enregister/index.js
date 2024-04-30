import React from 'react'
import backimg from '../../public/imgs/newpage/ensign.png'
import enlogo from '../../public/imgs/newpage/ensignlogo.png'
import Signup from '../../components/Public/Signup'
import SecureHeader from '../../components/Public/EnHeader'
import './index.scss'
export default () => {
    return <div className="enregist" style={{ background: `url(` + backimg + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}>
        <SecureHeader />
        <div className="enregist-con">
            <div className="enregist-con-logo">
                <img src={enlogo} alt=""/>
            </div>
            <Signup isSecure />
        </div>
    </div>
}
