import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { isJp } from '../../../public/js/index'

import './index.scss'

export default (props) => {
    const { getThisinfo, getonblue, isVerify, mobilevalue } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [cityinfo, setCityinfo] = useState({
        countryName: '中国',
        id: '1',
        indexName: 'zhongguo',
        nationalCode: isJp ? '81' : '86',
        shortName: isJp ? 'JP' : 'CN'
    })
    const [citylist, setCitylist] = useState([])
    const [flage, setFlage] = useState(false)
    // const [pitch, setPitch] = useState(false)
    const phoneRef = useRef()
    useEffect(() => {
        if (mobilevalue) {
            phoneRef.current.value = mobilevalue
        }
    }, [mobilevalue])
    useEffect(() => {
        dispatch.public
            .getCountry({
                for_area_code: true
            })
            .then((res) => {
                if (res.code === 0) {
                    setCitylist(res.data)
                }
            })
    }, [])
    // 点击其他地方隐藏下拉列表
    const hideAllMenu = useCallback(() => {
        setFlage(false)
    })
    useEffect(() => {
        document.addEventListener('click', hideAllMenu)
    }, [hideAllMenu])
    const getValue = useCallback((e) => {
        getThisinfo({
            mobile: e.target.value,
            contiycode: cityinfo.nationalCode
        })
    })
    return (
        <div className="select">
            {/* {`select-info ${pitch && 'actives'} ${notBox && 'notbox'}`} */}
            <div className="select-info">
                <div
                    className="select-info-left"
                    onClick={(e) => {
                        setFlage(true)
                        e.nativeEvent.stopImmediatePropagation()
                    }}
                >
                    <img
                        src={require(`../../../public/imgs/countryflag/flag_${cityinfo.shortName.toLowerCase()}.png`)}
                        alt=""
                        className="city-icon"
                    />
                    <img src={require('../../../public/imgs/btnicon/pointxia.png')} alt="" />
                    <div className="select-input-left">
                        <p>+</p>
                        <p>{cityinfo.nationalCode}</p>
                    </div>
                </div>
                <div className="select-input">
                    <input
                        type="phone"
                        ref={phoneRef}
                        placeholder={t('header.sign.phoneTips')}
                        onChange={getValue}
                        // onFocus={() => { setPitch(true) }}
                        onBlur={() => {
                            if (isVerify) {
                                getonblue()
                            }
                        }}
                    />
                </div>
            </div>
            {flage && (
                <ul>
                    {citylist.length > 0 &&
                        citylist.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    style={{
                                        background:
                                            cityinfo.shortName === item.shortName ? 'rgba(219, 102, 59, 0.05)' : ''
                                    }}
                                    onClick={() => {
                                        setCityinfo(item)
                                        setFlage(false)
                                        phoneRef.current.value = ''
                                    }}
                                >
                                    <span>
                                        <img
                                            src={require(`../../../public/imgs/countryflag/flag_${item.shortName.toLowerCase()}.png`)}
                                            alt=""
                                        />
                                        {item.shortName}（{item.nationalCode}）
                                    </span>
                                    {cityinfo.shortName === item.shortName && (
                                        <img src={require('../../../public/imgs/newpage/contryselect.png')} alt="" />
                                    )}
                                </li>
                            )
                        })}
                </ul>
            )}
        </div>
    )
}
