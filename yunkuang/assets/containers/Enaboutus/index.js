import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { i18n } = useTranslation()
    return <div className="enabout">
        {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
            <div><h3>About Us</h3>
                <p>Secure1475 provides one-stop physical database mining platforms and Network Marketing exclusivity to Beyond Members through Mars Blockchain, which gathers the most elite product, technology and actuarial teams from Motorola, Tencent, Kingsoft and other respected companies, and has extensive and deep strategic cooperation with leading companies in the industry. Mars Blockchain, founded by Wang Feng, has received multiple rounds of strategic investments from Capital, CeRMB Capital, Pan Cheng Capital, Capital, Firecoin Capital, Coin Capital, Ming Shi Capital, and Wu Jihan, who founded the company.</p>
                <p>Through our exclusive relationships, we centrally procure physical mining machines and provide open, professional, transparent and real mining services with comprehensive professional operation and maintenance for Beyond Members. Through one-stop professional management, the top mining machine manufacturers, mining locations, mining pools and professional maintenance teams in the industry are linked. Affordable, stable and strictly selected mining resources are gathered to provide safe and compliant mining investment channels and help the average person participate in mining production. The service tenet of the company is to provide one-click escrow, strict selection of mining machines, compliance and trustworthiness, ultra-low electricity price and maximum profit sharing.</p>
            </div>
        ) : (
            <div><h3>私たちについて</h3>
                <p>Secure1475は、Motorola、Tencent、Kingsoftなどの著名な企業の商品、テクノロジー、チームを集め、業界トップの企業との広範かつ深い戦略的協力関係を持つMars Blockchainを通じて、ワンストップのデータベースマイニングプラットフォームやネットワークマーケティングをBeyondのメンバーに独占的に提供しています。Mars BlockchainはFeng Wang氏により設立され、IDG Capital、Ceyuan Capital、Fun-City Capital、OK Capital、Huobi Capital、Binance Capital、FutureCapital、そしてJihan Wuが設立したMatrixportから度々、戦略的投資を受けることに成功しています。</p>
                <p>当社の独占的な関係を通じて、マイニングマシンを集中的に調達し、Beyondメンバーのために、オープン、専門的、透明性の高いリアルなマイニングサービスを包括的で、専門的な運用とメンテナンスも含め提供しています。ワンストップの専門的な管理を通じて、業界トップのマイニングマシンメーカー、マイニング設備、マイニングプール、プロのメンテナンスチームからのサポートを実現しています。投資家のみならず、一般の方も考慮した手頃な価格、安定、厳密に選択されたマイニングリソースで、安全で準拠したマイニング投資チャンネルを提供します。同社のサービス理念は、ワンクリックエスクロー、マイニングマシンの厳格な選択、コンプライアンスと信頼性、超低価格電力、最大の利益配分を提供することです。</p>
            </div>
        )}
    </div>
}
