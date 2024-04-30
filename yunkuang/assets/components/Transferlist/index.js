import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../Toast'
import Getincome from '../../public/imgs/newedition/getincome.png'
import Closeimg from '../../public/imgs/newedition/close.png'

import './index.scss'

export default ({ myhasrate, onClose, isSecure }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    return (
        <div className="hash-positionaddincom">
            <div className="addincome-list">
                <h3>{t('hasgrate.tqsy')}</h3>
                {myhasrate &&
                    myhasrate.map((item, index) => {
                        return (
                            <div className="addincome-list-con" key={index}>
                                <h4>{item.currency}</h4>
                                <div className="addincome-list-con-b">
                                    <p>
                                        <span>{t('hasgrate.tqsy')}</span>
                                        <span>{item.myNoExtractIncome === null ? '--' : item.myNoExtractIncome}</span>
                                    </p>
                                    <p
                                        onClick={() => {
                                            if (item.myNoExtractIncome > 0) {
                                                dispatch.order
                                                    .extractAddress({
                                                        currency: item.currency
                                                    })
                                                    .then((res) => {
                                                        if (res.code === 0) {
                                                            if (res.data === true) {
                                                                Toast.info(t('h5.mine.tqsucc'))
                                                                if (isSecure) {
                                                                    window.location.href = '/secure/enproperty'
                                                                } else {
                                                                    window.location.href = '/property'
                                                                }
                                                            } else {
                                                                Toast.info(t('h5.mine.tqfail'))
                                                            }
                                                        } else {
                                                            Toast.info(res.msg)
                                                        }
                                                    })
                                                    .catch((err) => {
                                                        console.log(err)
                                                        Toast.info(t('h5.mine.tqfail'))
                                                    })
                                            } else {
                                                Toast.info(t('h5.mine.zwsy'))
                                            }
                                        }}
                                    >
                                        <span>
                                            <img src={Getincome} alt="" />
                                        </span>
                                        <span>{t('h5.mine.tq')}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                <div
                    className="cloaseincome"
                    onClick={() => {
                        onClose(false)
                    }}
                >
                    <img src={Closeimg} alt="" />
                </div>
                <div className="all-hz">
                    <span
                        onClick={() => {
                            dispatch.order.getextractall().then((res) => {
                                if (res.code === 0) {
                                    window.location.href = '/property'
                                } else {
                                    Toast.info(res.msg)
                                }
                            })
                        }}
                    >
                        {t('hasgrate.yjhz')}
                    </span>
                </div>
            </div>
        </div>
    )
}
