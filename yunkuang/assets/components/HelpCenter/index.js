import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const nav = useRef([
        { title: `1. ${t('help.nav1')}`, scrollid: '#scrollone' },
        { title: `2. ${t('help.nav2')}`, scrollid: '#scrolltwo' },
        { title: `3. ${t('help.nav3')}`, scrollid: '#scrollthree' },
        { title: `4. ${t('help.nav4')}`, scrollid: '#scrollfour' },
        { title: `5. ${t('help.nav5')}`, scrollid: '#scrollfive' }
    ])
    const [fnum, setFnum] = useState(0)
    useEffect(() => {
        window.onscroll = () => {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 1027 && scrollTop < 1870) {
                setFnum(1)
            } else if (scrollTop > 1870 && scrollTop < 2519) {
                setFnum(2)
            } else if (scrollTop > 2519 && scrollTop < 3430) {
                setFnum(3)
            } else if (scrollTop > 3430) {
                setFnum(4)
            } else if (scrollTop < 1027) {
                setFnum(0)
            }
        }
    })
    return <div>
        <div className="helpcenter">
            <div className="helpcenter_top">
                <h3>{t('help.top')}</h3>
                <div className="helpcenter_top_right">
                    {nav.current.map((item, index) => {
                        return <span key={index} onClick={() => {
                            setFnum(index)
                        }} style={{ background: fnum === index ? '#242F44' : '' }}><a href={item.scrollid} style={{ color: fnum === index ? '#fff' : '#242F44' }}>{item.title}</a></span>
                    })}
                </div>
            </div>
            <div className="helpcenter_con">
                <a name="scrollone"></a>
                <div className="helpcenter_con_one" id="scrollone">
                    <h4>1. {t('help.nav1')}</h4>
                    <p>
                        <span>1.1 {t('help.nav11')}</span><br/>
                        <span>{t('help.nav111')}</span><br/>
                        <span>{t('help.nav112')}</span><br/>
                    </p>
                    <p>
                        <span>1.2 {t('help.nav12')}</span><br/>
                        <span>{t('help.nav121')}</span><br/>
                        <span>{t('help.nav122')}</span><br/>
                        {/* <span>{t('help.nav123')}</span><br/> */}
                        {/* <span>{t('help.nav124')}</span> */}
                    </p>
                    {/* <p>
                        <span>1.3 {t('help.nav13')}</span><br/>
                        <span>{t('help.nav131')}</span><br/>
                        <span>{t('help.nav132')}</span><br/>
                    </p>
                    <p>
                        <span>1.4 {t('help.nav14')}</span><br/>
                        <span> {t('help.nav141')}</span><br/>
                        <span>{t('help.nav142')}</span>
                    </p> */}
                    {/* <p>
                        <span>1.5 {t('help.nav15')}</span><br/>
                        <span>{t('help.nav151')}</span><br/>
                        <span>{t('help.nav152')}</span><br/>
                        <span>{t('help.nav153')}</span><br/>
                    </p> */}
                    <p>
                        <span>1.3 {t('help.nav15')}</span><br/>
                        <span>{t('help.nav161')}</span>
                    </p>
                </div>
                <a name="scrolltwo"></a>
                <div className="helpcenter_con_one" id="scrolltwo">
                    <h4>2. {t('help.nav2')}</h4>
                    {/* <p>
                        <span>2.1 {t('help.nav21')}</span><br/>
                        <span>{t('help.nav211')}</span>
                    </p> */}
                    <p>
                        <span>2.1 {t('help.nav22')}</span><br/>
                        <span>{t('help.nav221')}</span><br/>
                        <span>{t('help.nav222')}</span><br/>
                    </p>
                    <p>
                        <span>2.2 {t('help.nav23')}</span><br/>
                        <span>{t('help.nav231')}</span><br/>
                    </p>
                    <p>
                        <span>2.3 {t('help.nav24')}</span><br/>
                        <span>{t('help.nav241')}</span><br/>
                    </p>
                    <p>
                        <span>2.4 {t('help.nav25')}</span><br/>
                        <span>{t('help.nav251')}</span><br/>
                        <span>{t('help.nav252')}</span><br/>
                    </p>
                    <p>
                        <span>2.5 {t('help.nav26')}</span><br/>
                        <span>{t('help.nav261')}</span>
                    </p>
                    {/* <p>
                        <span>2.6 {t('help.nav27')}</span><br/>
                        <span> {t('help.nav271')}</span><br/>
                    </p> */}
                </div>
                <a name="scrollthree"></a>
                <div className="helpcenter_con_one" id="scrollthree">
                    <h4>3. {t('help.nav3')}</h4>
                    <p>
                        <span>3.1 {t('help.nav31')}</span><br/>
                        <span>{t('help.nav311')}</span>
                    </p>
                    <p>
                        <span>3.2 {t('help.nav32')}</span><br/>
                        <span>{t('help.nav321')}</span><br/>
                        <span>{t('help.nav322')}</span><br/>
                        <span>{t('help.nav323')}</span><br/>
                        <span>{t('help.nav324')}</span>
                    </p>
                    <p>
                        <span>3.3 {t('help.nav33')}</span><br/>
                        <span>{t('help.nav331')}</span>
                    </p>
                    <p>
                        <span>3.4 {t('help.nav34')}</span><br/>
                        <span> {t('help.nav341')}</span>
                    </p>
                    <p>
                        <span>3.5 {t('help.nav35')}</span><br/>
                        <span>{t('help.nav351')}</span>
                    </p>
                </div>
                <a name="scrollfour"></a>
                <div className="helpcenter_con_one" id="#scrollfour">
                    <h4>4. {t('help.nav4')}</h4>
                    <p>
                        <span>4.1 {t('help.nav41')}</span><br/>
                        <span>{t('help.nav411')}</span>
                    </p>
                    <p>
                        <span>4.2 {t('help.nav42')}</span><br/>
                        <span>{t('help.nav421')}</span><br/>
                        <span>{t('help.nav422')}</span><br/>
                        <span>（https://whattomine.com/coins/1-btc-sha-256）</span>
                    </p>
                    <p>
                        <span>4.3 {t('help.nav43')}</span><br/>
                        <span>{t('help.nav431')}</span><br/>
                        <span>{t('help.nav432')}</span><br/>
                        <span>{t('help.nav433')}</span>
                    </p>
                    {/* <p>
                        <span>4.4 {t('help.nav44')}</span><br/>
                        <span> {t('help.nav441')}</span><br/>
                        <span> {t('help.nav442')}</span><br/>
                    </p> */}
                    <p>
                        <span>4.4 {t('help.nav45')}</span><br/>
                        <span>{t('help.nav451')}</span><br/>
                    </p>
                    <p>
                        <span>4.5 {t('help.nav46')}</span><br/>
                        <span>{t('help.nav461')}</span>
                        <span>{t('help.nav462')}</span><br/>
                    </p>
                </div>
                <a name="scrollfive"></a>
                <div className="helpcenter_con_one" id="#scrollfive">
                    <h4>5. {t('help.nav5')}</h4>
                    <p>
                        <span>5.1 {t('help.nav51')}</span><br/>
                        <span>{t('help.nav511')}</span>
                    </p>
                    <p>
                        <span>5.2 {t('help.nav52')}</span><br/>
                        <span>{t('help.nav521')}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}
