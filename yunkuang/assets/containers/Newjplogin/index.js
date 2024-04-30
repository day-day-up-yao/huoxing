import React from 'react'
import './index.scss'
import login2 from '../../public/imgs/new/login2.png'
import login3 from '../../public/imgs/new/login3.png'
import login4 from '../../public/imgs/new/connectus.png'
export default () => {
    return <div className='jplogin'>
        <div className='jplogin-con'>
            <div className='jplogin-top'>
                <h3>Make crypto easy for everyone</h3>
                <div className="jplogin-top-line"></div>
                <h4>托管、交易、借贷、理财一站式服务平台</h4>
                <div className="jplogin-top-btn">
                    <span onClick={() => {
                        window.location.href = `/user/signup?redirect= ${encodeURIComponent('/usercenter')}`
                    }}>新規登録</span>
                    <span onClick={() => {
                        window.location.href = `/user/signin?redirect= ${encodeURIComponent('/usercenter')}`
                    }}>ログイン</span>
                </div>
            </div>
        </div>
        <div className="newtologo-con-img">
            <img src={login2} alt=""/>
        </div>
        <div className="newtologo-con-img">
            <img src={login3} alt=""/>
        </div>
        <div className='jplogin-bottom'>
            <div className="newtologo-con-imgs">
                <img src={login4} alt=""/>
            </div>
        </div>
    </div>
}
