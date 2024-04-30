import React from 'react'
import backimg from '../../public/imgs/newpage/ensign.png'
import enlogo from '../../public/imgs/newpage/ensignlogo.png'
import './index.scss'
import BackPasseord from '../../components/Public/BackPassword'
import PublicHeader from '../../components/Public/EnHeader'
export default () => {
    return <div className="enback" style={{ background: `url(` + backimg + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}>
        <PublicHeader />
        <div className="enback-con">
            <div className="enback-con-logo">
                <img src={enlogo} alt=""/>
            </div>
            <BackPasseord isSecure />
        </div>
    </div>
}
