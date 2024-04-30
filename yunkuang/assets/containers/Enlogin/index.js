import React from 'react'
import backimg from '../../public/imgs/newpage/ensign.png'
import Signin from '../../components/Public/Signin'
import EnHeader from '../../components/Public/EnHeader'
import './index.scss'
export default () => {
    return <div className="enlogin" style={{ background: `url(` + backimg + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}>
        <EnHeader />
        <Signin is1475login/>
    </div>
}
