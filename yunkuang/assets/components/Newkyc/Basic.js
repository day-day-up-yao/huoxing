import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
export default ({ contrylist, cardList, verinfo, setVerinfo, setLevelkyc, levelkyc, setAgain, again }) => {
    const { t, i18n } = useTranslation()
    const nameref = useRef()
    const ensurname = useRef()
    const enname = useRef()
    const cardref = useRef()
    const dispatch = useDispatch()
    const [city, setCity] = useState()
    const [contryinfo, setContryinfo] = useState(
        {
            allowBindMobile: 1,
            allowKyc: 1,
            allowLogin: 1,
            allowRegister: 1,
            countryName: '',
            id: 1,
            indexName: 'zhongguo',
            nationalCode: '86',
            shortName: 'CN'
        }
    )
    const [card, setCard] = useState()
    const [types, setTypes] = useState(
        {
            key: 1,
            value: t('userkyc.body')
        }
    )
    // const [sucss, setSucss] = useState()
    const handleToselect = useCallback((e) => {
        setCity(true)
        e.nativeEvent.stopImmediatePropagation()
    })
    const handleContry = useCallback((info) => {
        setContryinfo(info)
        setCity(false)
    })
    const handleTocard = useCallback((e) => {
        setCard(true)
        e.nativeEvent.stopImmediatePropagation()
    })
    const handleTotype = useCallback((type) => {
        setTypes(type)
        setCard(false)
    })
    useEffect(() => {
        if ((i18n.language).toLowerCase().substring(0, 2) === 'zh') {
            setContryinfo(
                {
                    allowBindMobile: 1,
                    allowKyc: 1,
                    allowLogin: 1,
                    allowRegister: 1,
                    countryName: '中国',
                    id: '1',
                    indexName: 'zhongguo',
                    nationalCode: '86',
                    shortName: 'CN'
                }
            )
        }
        if ((i18n.language).toLowerCase().substring(0, 2) === 'en') {
            setContryinfo(
                {
                    allowBindMobile: 1,
                    allowKyc: 1,
                    allowLogin: 1,
                    allowRegister: 1,
                    countryName: 'United States',
                    id: '19',
                    indexName: 'meiguo',
                    nationalCode: '1',
                    shortName: 'US'
                }
            )
        }
        if ((i18n.language).toLowerCase().substring(0, 2) === 'ja') {
            setContryinfo(
                {
                    allowBindMobile: 1,
                    allowKyc: 1,
                    allowLogin: 1,
                    allowRegister: 1,
                    countryName: '日本',
                    id: '11',
                    indexName: 'riben',
                    nationalCode: '81',
                    shortName: 'JP'
                }
            )
        }
    }, [])
    const handleTosubmit = useCallback(() => {
        if (contryinfo.nationalCode === '86') {
            if (nameref.current.value && cardref.current.value) {
                dispatch.public.basicVerify({
                    country_code: contryinfo.shortName,
                    name: nameref.current.value,
                    card_type: 1,
                    card_no: cardref.current.value
                }).then((res) => {
                    if (res.success) {
                        dispatch.public.verifyInfo().then((res) => {
                            if (res.code !== 0) {} else {
                                setVerinfo(res.data)
                                // setInfostatus(res.data.verifyStatus)
                                dispatch.public.getkyClevel().then((ress) => {
                                    if (ress.data.length > 1) {
                                        setLevelkyc(ress.data[1])
                                    } else {
                                        setLevelkyc({
                                            kycLevel: 10,
                                            verifyStatus: 0
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        Toast.info(res.msg)
                    }
                })
            }
        } else {
            if (ensurname.current.value && cardref.current.value && enname.current.value) {
                dispatch.public.basicVerify({
                    country_code: contryinfo.shortName,
                    first_name: ensurname.current.value,
                    second_name: enname.current.value,
                    card_type: types.key,
                    card_no: cardref.current.value
                }).then((res) => {
                    if (res.data.success) {
                        dispatch.public.verifyInfo({}).then((res) => {
                            if (res.code !== 0) {} else {
                                setAgain(2)
                                setVerinfo(res.data)
                                // setInfostatus(res.data.verifyStatus)
                                dispatch.public.getkyClevel().then((ress) => {
                                    setLevelkyc(ress.data[0])
                                })
                            }
                        })
                    } else {
                        Toast.info(res.msg)
                    }
                })
            }
        }
    })
    const handleTonew = useCallback(() => {
        // setSucss(true)
        // setInfostatus()
        setAgain(1)
        // setLevelkyc(
        //     {
        //         kycLevel: ''
        //     }
        // )
    })
    // 点击其他地方隐藏下拉列表
    const hideAllMenu = useCallback(() => {
        setCity(false)
        setCard(false)
    })
    useEffect(() => {
        document.addEventListener('click', hideAllMenu)
    }, [hideAllMenu])
    // console.log(contrylist)
    return <div className="newkyc-basic">
        {again === 1 && <div>
            <h3>{t('userkyc.basetitle')}</h3>
            <h4>{t('userkyc.usercode')}</h4>
            <div className="form">
                <div className="form-contry">
                    <div className="form-contry-city" onClick={handleToselect}>{contryinfo.shortName}</div>
                    <div className="form-contry-list" style={{ display: city === true ? 'block' : '' }}>
                        {contrylist.map((item, index) => {
                            return <div className="form-contry-list-item" key={index} onClick={() => { handleContry(item) }}>{item.shortName}</div>
                        })}
                    </div>
                </div>
                {contryinfo.nationalCode === '86' ? (
                    <div className='form-namecn'>
                        <input type="text" placeholder={t('userkyc.allname')} ref={nameref}/>
                    </div>
                ) : (
                    <div className='form-name'>
                        <input type="text" placeholder={t('userkyc.name')} ref={ensurname}/>
                        <input type="text" placeholder={t('userkyc.names')} ref={enname}/>
                    </div>
                )}
                {contryinfo.nationalCode === '86' ? (
                    <div className="form-card">
                        <div className="form-card-numbercn">
                            <input type="text" placeholder={t('userkyc.bodynumber')} ref={cardref}/>
                        </div>
                    </div>
                ) : (
                    <div className="form-card">
                        <div className="form-card-type">
                            <div onClick={handleTocard}>{types.value}</div>
                            <div className="form-card-type-list" style={{ display: card === true ? 'block' : '' }}>
                                {cardList?.map((item, index) => {
                                    return <div className="form-card-type-list-item" key={index} onClick={() => { handleTotype(item) }}>{item.value}</div>
                                })}
                            </div>
                        </div>
                        <div className="form-card-number">
                            <input type="text" placeholder={t('userkyc.bodynumber')} ref={cardref}/>
                        </div>
                    </div>
                )}
            </div>
            <div className="newkyc-basic-btn" onClick={handleTosubmit}>{t('userkyc.submit')}</div>
        </div>}
        {verinfo !== null && again === 2 && (levelkyc.verifyStatus === 0 || levelkyc.verifyStatus === 1) && <div>
            <h3>{t('userkyc.senior')}</h3>
            <h4>{t('userkyc.usercode')}</h4>
            <div className="basic-succ">
                <div className="succ-text">{t('userkyc.userinfo')}</div>
                <ul>
                    <li>
                        <p>{t('userkyc.contry')}</p>
                        <p>{verinfo.nationality}</p>
                    </li>
                    <li>
                        <p>{t('userkyc.name')}</p>
                        <p>{verinfo.firstName}</p>
                    </li>
                    <li>
                        <p>{t('userkyc.names')}</p>
                        <p>{verinfo.secondName}</p>
                    </li>
                    <li>
                        <p>{t('userkyc.cordtype')}</p>
                        <p>{verinfo.cardType}</p>
                    </li>
                    <li>
                        <p>{t('userkyc.bodynumber')}</p>
                        <p>{verinfo.cardNo}</p>
                    </li>
                </ul>
                {levelkyc.kycLevel === 20 && <div className="succ-button">
                    <span>{t('userkyc.infono')}</span>
                    <span onClick={handleTonew}>{t('userkyc.again')}</span>
                </div>}
            </div>
        </div>}
    </div>
}
