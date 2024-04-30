import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Cookie from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import nomessage from '../../public/imgs/nomessage.png'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(false)
    const [sylist, setSylist] = useState([
        { 'prodhead': {
            'logo': '',
            'title': '',
            'aor-type': 0,
            'aor-rate': 0,
            'distributes': 0,
            'prod-code': '',
            'primitive': '',
            timepoints: ''
        },
        'rrevenue': {
            'total-invest': 0,
            'total-interest': 0,
            'purch-time': 0,
            'prod-code': ''
        },
        timenodelist: [],
        'time-nodes': {
            'time-node1': '',
            'time-node2': '',
            'time-node3': '',
            'time-node4': '',
            'time-node5': '',
            'time-node6': ''
        } }
    ])
    useEffect(() => {
        dispatch.product.allRevenue({
            uid: Cookie.get('user_id')
        }).then((res) => {
            if (res.status === 'ok') {
                if (res.data === null) {
                    Toast.info(t('record.notjl'))
                } else {
                    setFlag(true)
                    setSylist(res.data)
                }
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="depositearn">
        {flag === false ? (
            <div className="depositearn-nolist">
                <img src={nomessage} alt=""/>
            </div>
        ) : (
            <div>
                <div className="depositearn-con">
                    {sylist.map((item, index) => {
                        return <div className="depositearn-con-item" key={index}>
                            <div className="depos-item-top">
                                <div className="depos-top-img">
                                    <img src={item.prodhead.logo} alt=""/>
                                </div>
                                <h3>{item.prodhead.title}</h3>
                                <div className="depos-top-annual">
                                    <p>
                                        <span>{item.prodhead.aorRate * 100}%</span>
                                    </p>
                                    <p>{t('record.gdnh')}</p>
                                </div>
                                <div className="depos-top-num">
                                    <div className="depos-top-num-l">
                                        <span>{t('record.startjx')}</span>
                                        <span>{moment(item.prodhead.timepoints.split('|')[1] * 1).format('YYYY-MM-DD')}</span>
                                    </div>
                                    <div className="depos-top-num-l">
                                        <span>{t('record.alltr')}</span>
                                        <span>{item.rrevenue.totalInvest}{item.rrevenue.primitive}</span>
                                    </div>
                                    <div className="depos-top-num-l">
                                        <span>{t('record.alllx')}</span>
                                        <span>{item.rrevenue.totalInterest}{item.rrevenue.primitive}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="earnlist">
                                {item.timenodelist.length > 0 ? (
                                    item.timenodelist.map((itm, idx) => {
                                        return <div className="earnlist-item" key={idx}>
                                            <div className="item-time">{moment(Number(itm.timestamp)).format('YYYY-MM-DD')}</div>
                                            <div className="item-text">{itm.description}</div>
                                        </div>
                                    })
                                ) : ('')}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )}
    </div>
}
