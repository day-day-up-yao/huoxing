import React from 'react'
import './index.scss'
import jplogo from '../../public/imgs/newjplogo.jpg'
// import nlogon from '../../public/imgs/new/nlogon.png'
import nlogon from '../../public/imgs/new/nlogonsss.png'
import login2 from '../../public/imgs/new/login2.png'
import login3 from '../../public/imgs/new/login3.png'
// import login4 from '../../public/imgs/new/login4.png'
import login4 from '../../public/imgs/new/connectus.png'
export default () => {
    return <div className="newtologo">
        <div className="newtologo-top">
            <div className="newtologo-top-img">
                <img src={jplogo} alt=""/>
            </div>
        </div>
        <div className="newtologo-con">
            <img src={nlogon} alt=""/>
            <div className="newtologo-con-pos">
                <div className="newtologo-con-pos-c">
                    <h2>Make crypto easy for everyone</h2>
                    <div className="newtologo-con-pos-c-line"></div>
                    <p>托管、交易、借贷、理财一站式服务平台</p>
                    <div className="newtologo-con-pos-c-tologin">
                        <span onClick={() => {
                            window.location.href = `/user/signup?redirect= ${encodeURIComponent('/mine')}`
                        }}>新規登録</span>
                        <span onClick={() => {
                            window.location.href = `/user/signin?redirect= ${encodeURIComponent('/mine')}`
                        }}>ログイン</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="newtologo-con-img">
            <img src={login2} alt=""/>
        </div>
        <div className="newtologo-con-img">
            <img src={login3} alt=""/>
        </div>
        <div className="newtologo-con-text">connect us</div>
        <div className="newtologo-con-imgs">
            <img src={login4} alt=""/>
        </div>
    </div>
}
