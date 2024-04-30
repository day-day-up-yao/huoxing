import React from 'react'

import Logoimg from '../../public/imgs/new/h5homelogo.png'
import Bgimg from '../../public/imgs/new/homebg.png'

import './index.scss'
export default () => {
    return <div className="h5-index" style={{
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: '90%',
        backgroundRepeat: 'no-repeat'
    }}>
        <h2>携帯からアクセスサービスの停止について</h2>
        <div className="center-info">
            <h3>お知らせ</h3>
            <ul className="center-info-txt">
                <li>
                    <p>携帯から公式サイトへアクセス頂く場合、ネットワークが不安定の場合があることや、運用コストの増加により、2021年11月1日付で携帯からアクセス頂くウェブサイトサービスを終了させていただきます。</p>
                    <p>PC・タブレットアクセス頂く公式サイトは継続してご利用いただけます。Mclouds日本版アプリのご利用を推奨しております。</p>
                </li>
                <li>
                    <p>下記のURLからAndroid·iOSのアプリをダウンロードし、資産運用をより簡単に！</p><br/>
                    <a href="https://www.mclouds.jp/download">https://www.mclouds.jp/download</a>
                </li>
                <li>
                    <p>ご不明な点がございましたら、LINE@までお問い合わせください。</p><br/>
                    <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=711buhyp">https://liff.line.me/1645278921-kWRPP32q/?accountId=711buhyp</a>
                </li>
            </ul>
            <div className="center-info-time">
                <div>
                    <p>Mclouds事務局</p>
                    <p>2021年10月27日</p>
                </div>
            </div>
        </div>
        <div className="bottom-img">
            <img src={Logoimg} alt=""/>
        </div>
    </div>
}
