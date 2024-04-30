import React, { useCallback, useMemo } from 'react'

import './index.scss'

import userbonus from '../images/userbonus.png'

import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'
import service4 from '../images/service4.png'
import service5 from '../images/service5.png'
import service6 from '../images/service6.png'

import pointright from '../images/poinntright.png'

import min1 from '../images/min1.png'
import min2 from '../images/min2.png'
import min3 from '../images/min3.png'
import min4 from '../images/min4.png'
import min5 from '../images/min5.png'
import min6 from '../images/min6.png'

import safty1 from '../images/safty1.png'
import safty2 from '../images/safty2.png'
import safty3 from '../images/safty3.png'
import safty4 from '../images/safty4.png'

import innet1 from '../images/innet1.png'
import innet2 from '../images/innet2.png'
import innet3 from '../images/innet3.png'
import innet4 from '../images/innet4.png'
import innet5 from '../images/innet5.png'
import innet6 from '../images/innet6.png'
import innet7 from '../images/innet7.png'
import innet8 from '../images/innet8.0.png'
import innet9 from '../images/innet8.png'
import innet10 from '../images/innet9.png'
import innet11 from '../images/innet10.png'

export default () => {
    const DescTitle = useCallback((title) => {
        return <div className="desctitle">{title}</div>
    }, [])
    const bonuslist = [
        {
            num: '01',
            descleft: '完成账户注册，'
        },
        {
            num: '02',
            descleft: '完成任意订单支付，'
        },
        {
            num: '03',
            descleft: '完成邀请用户注册，'
        },
        {
            num: '04',
            descleft: '邀请用户订单支付，'
        }
    ]

    const servicelist = [
        {
            imgs: service1,
            title: '大客户服务'
        },
        {
            imgs: service2,
            title: '矿场合作'
        },
        {
            imgs: service3,
            title: '质押借贷'
        },
        {
            imgs: service4,
            title: 'Defi 矿池'
        },
        {
            imgs: service5,
            title: '矿机算力服务'
        },
        {
            imgs: service6,
            title: '矿机托管'
        }
    ]

    // 新用户福利
    const NewuserBonus = useMemo(() => {
        return (
            <div className="product-desc-item">
                {DescTitle('新用户福利')}
                <div className="newuser-bonus-con">
                    <div className="newuser-bonus-con-item"></div>
                    <div className="newuser-bonus-con-item">
                        {bonuslist.map((item, index) => {
                            return (
                                <div className="newuser-bonus-con-item-info" key={index}>
                                    <div className="bonus-item-info-left">{item.num}</div>
                                    <div className="bonus-item-info-right">
                                        {item.descleft}送：
                                        <div className="bonus-item-info-right-desc">
                                            矿机/算力管理费全免 <span>30</span> 天
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="newuser-bonus-con-img">
                    <img src={userbonus} alt="" />
                </div>
            </div>
        )
    })

    // 我们的服务和产品
    const ServiceDom = useMemo(() => {
        return (
            <div className="product-desc-item">
                {DescTitle('我们的服务和产品')}
                <div className="ourservice">
                    {servicelist.map((item, index) => {
                        return (
                            <div className="ourservice-item" key={index}>
                                <img src={item.imgs} alt="" />
                                <div className="ourservice-item-title">{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    const minlist = [
        {
            title: '购买矿机/算力',
            imgs: min1
        },
        {
            title: '运输/部署',
            imgs: min2
        },
        {
            title: '24H运维',
            imgs: min3
        },
        {
            title: '支付电费',
            imgs: min4
        },
        {
            title: '支付管理费',
            imgs: min5
        },
        {
            title: '提取收益',
            imgs: min6,
            notpoint: true
        }
    ]

    // 矿机/算力服务
    const MiningDom = useMemo(() => {
        return (
            <div className="product-desc-item">
                {DescTitle('矿机/算力服务')}
                <div className="miningservice">
                    {minlist.map((item, index) => {
                        return (
                            <div className="miningservice-item" key={index}>
                                <div className="miningservice-item-left">
                                    <img src={item.imgs} alt="" />
                                    <div className="miningservice-item-left-text">{item.title}</div>
                                </div>
                                {!item.notpoint && (
                                    <div className="miningservice-item-point">
                                        <img src={pointright} alt="" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    const saftylist = [
        {
            title: '资金安全',
            desc: '资金安全，资金安全，资金安全，资金安全，资金安全，资金',
            imgs: safty1
        },
        {
            title: '财产安全',
            desc: '资金安全，资金安全，资金安全，资金安全，资金安全，资金',
            imgs: safty2
        },
        {
            title: '账户安全',
            desc: '资金安全，资金安全，资金安全，资金安全，资金安全，资金',
            imgs: safty3
        },
        {
            title: '信息安全',
            desc: '资金安全，资金安全，资金安全，资金安全，资金安全，资金',
            imgs: safty4
        }
    ]

    // 安全保障
    const saftyDom = useMemo(() => {
        return (
            <div className="product-desc-item">
                {DescTitle('安全保障')}
                <div className="saftyguarantee">
                    {saftylist.map((item, index) => {
                        return (
                            <div className="saftyguarantee-item" key={index}>
                                <img src={item.imgs} alt="" />
                                <div className="saftyguarantee-item-text">
                                    <h3>{item.title}</h3>
                                    <div className="saftyguarantee-item-text-desc">{item.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    const investorliist = [innet1, innet2, innet3, innet4, innet5, innet6, innet7, innet8, innet9, innet10, innet11]
    // 投资人网络
    const InvestorDom = useMemo(() => {
        return (
            <div className="product-desc-item">
                {DescTitle('投资人网络')}
                <div className="investorinnet">
                    {investorliist.map((item, index) => (
                        <img src={item} alt="" key={index} />
                    ))}
                </div>
            </div>
        )
    })
    return (
        <div className="product-desc">
            {NewuserBonus}
            {ServiceDom}
            {MiningDom}
            {saftyDom}
            {InvestorDom}
        </div>
    )
}
