import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BoxList from '../BoxList'

export default (props) => {
    const { kycinfo, verify } = props
    const { t } = useTranslation()
    const [onestate, setOneState] = useState(0)
    const [twostate, setTwoState] = useState(0)
    // console.log(kycinfo)
    useEffect(() => {
        if (kycinfo) {
            if (
                (kycinfo?.displayLevel === '1' && kycinfo?.verifyStatus === 2) ||
                (kycinfo?.displayLevel === '2' && kycinfo?.verifyStatus !== 2)
            ) {
                setOneState(1)
            } else {
                setOneState(0)
            }
            if (
                (kycinfo?.displayLevel === '2' && kycinfo?.verifyStatus === 2) ||
                (kycinfo?.displayLevel === '3' && kycinfo?.verifyStatus !== 2)
            ) {
                setTwoState(1)
            } else {
                setTwoState(0)
            }
        }
    }, [kycinfo])
    const kycinfolist = [
        {
            type: 0,
            info: [
                {
                    title: t('userkyc.contry'),
                    text: verify ? verify?.nationality : '--',
                    desc: '',
                    assate: 0,
                    noset: true
                },
                {
                    title: t('userkyc.allname'),
                    text: verify ? verify?.firstName + verify?.secondName : '--',
                    desc: '',
                    assate: 0,
                    noset: true
                },
                { title: 'ID', text: verify ? verify?.cardNo : '--', desc: '', assate: 0, noset: true }
            ]
        },
        {
            type: 1,
            info: [
                {
                    title: t('public.basics'),
                    text: onestate === 1 ? t('public.goed') : t('public.notkyc'),
                    desc: '',
                    assate: onestate,
                    noset: false,
                    imgs: true,
                    link: ''
                },
                {
                    title: t('public.seniors'),
                    text: twostate === 1 ? t('public.goed') : t('public.notkyc'),
                    desc: '',
                    assate: twostate,
                    noset: false,
                    imgs: true,
                    link: ''
                }
            ]
        }
    ]
    return (
        <div className="kyccert">
            {kycinfolist.map((item, index) => (
                <BoxList item={item} key={index} iskyc />
            ))}
        </div>
    )
}
