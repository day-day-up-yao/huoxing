import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Basic from './Basic'
import Senior from './Senior'
import Succ from './Succ'
import Fails from './Fail'
import Audit from './Audit'
import Toast from '../../components/Toast'
import './index.scss'
import appdown from '../../public/imgs/appdownload.png'
export default ({ usa }) => {
    // console.log(usa)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    // const [kycstatus, setKycstatus] = useState(
    //     {
    //         verifyStatus: '',
    //         kycLevel: ''
    //     }
    // )
    // const [infostatus, setInfostatus] = useState()
    const [verinfo, setVerinfo] = useState(
        {
            cardBackUrl: '',
            cardFrontUrl: '',
            cardHandUrl: '',
            cardNo: '',
            cardType: '',
            countryCode: '',
            displayLevel: '',
            firstName: '',
            gender: 0,
            kycLevel: 10,
            nationality: '',
            refusedReason: '',
            refusedReasonId: 0,
            secondName: '',
            verifyStatus: 0
        }
    )
    const [levelkyc, setLevelkyc] = useState(
        {
            kycLevel: '',
            verifyStatus: '' // 0未提交审核 1审核中 2审核通过 3未通过审核
        }
    )
    const [cardList, setCardList] = useState([])
    const [again, setAgain] = useState(0)
    useEffect(() => {
        dispatch.public.configV2().then((res) => {
            if (res.code === 0) {
                setCardList(res.data.kycCardType)
            }
        })
        // dispatch.public.getUseinfo({}).then((res) => {
        //     if (res.code) {} else {
        //         setKycstatus(res)
        //     }
        // })
        dispatch.public.verifyInfo().then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                if (res.data) {
                    if (res.data === null) {
                        console.log(111)
                        setAgain(1)
                    }
                    setVerinfo(res.data)
                    // setInfostatus(res.data.verifyStatus)
                } else {
                    // setInfostatus(null)
                    setAgain(true)
                }
            }
        })
        dispatch.public.getkyClevel().then((res) => {
            if (res.code === 0) {
                if (res.data.length > 1) {
                    setAgain(2)
                    setLevelkyc(res.data[1])
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const { contrylist } = useSelector((state) => ({
        contrylist: state.public.countirlist
    }))
    return <div className="newkyc">
        {/* 一级认证 */}
        {(levelkyc.verifyStatus === 0 || verinfo === null) && <Basic {...{ contrylist, cardList, verinfo, setVerinfo, setLevelkyc, levelkyc, again, setAgain }}/>}
        {/* 认证成功 */}
        {levelkyc.verifyStatus === 2 && <div className="newkyc-success">
            <h3>{t('userkyc.userkyc')}</h3>
            <h4>{t('userkyc.usercode')}</h4>
            <Succ {...{ verinfo, t }}/>
        </div>}
        {/* 认证失败 */}
        {levelkyc.verifyStatus === 3 && <div className="newkyc-success">
            <h3>{t('userkyc.userkyc')}</h3>
            <h4>{t('userkyc.usercode')}</h4>
            <Fails {...{ verinfo, t, setLevelkyc }}/>
        </div>}
        {/* 认证审核中 */}
        {levelkyc.verifyStatus === 1 && <div className="newkyc-success">
            <h3>{t('userkyc.userkyc')}</h3>
            <h4>{t('userkyc.usercode')}</h4>
            <Audit {...{ verinfo, t }}/>
        </div>}
        {/* 二级认证 */}
        {again === 2 && verinfo !== null && levelkyc.verifyStatus === 0 && <Senior {...{ Toast, usa }}/>}
        {/* 人脸认证提示文案 */}
        {levelkyc && levelkyc.kycLevel === 25 && <div className="newkyc-vedio">
            <h3>{t('userkyc.vedio')}</h3>
            <p>{t('userkyc.app')}<br/>{t('userkyc.code')}</p>
            <div className="vedio-img">
                <img src={appdown} alt=""/>
            </div>
        </div>}
    </div>
}
