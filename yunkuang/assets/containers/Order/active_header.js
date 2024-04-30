import React, { useCallback, useState } from 'react'
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next'
import downico from '../../public/imgs/new/orderx.png'
import { useDispatch } from 'react-redux'
export default ({ startnum, setStartnum, ordernum, setOrdernum, setMinlist, Toast, setDefas, setCblist, setGdlist, setCostlist }) => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const [flage, setFlage] = useState(false)
    // console.log(ordernum)
    const headerinfo = [
        {
            caption: t('orderdetail.metchorder'),
            num: 0,
            items: [
                {
                    text: t('orderdetail.all'),
                    type: 0,
                    state: ''
                },
                {
                    text: t('orderdetail.nopay'),
                    type: 1,
                    state: 0
                },
                {
                    text: t('orderdetail.paynosh'),
                    type: 2,
                    state: 7
                },
                {
                    text: t('orderdetail.paysucc'),
                    type: 3,
                    state: 1
                },
                {
                    text: t('orderdetail.sxzhong'),
                    type: 4,
                    state: 4
                },
                {
                    text: t('orderdetail.yjs'),
                    type: 5,
                    state: 5
                }
            ]
        },
        {
            caption: t('newpage.header.electr'),
            num: 1,
            items: [
                {
                    text: t('orderdetail.all'),
                    type: 0,
                    state: ''
                },
                {
                    text: t('orderdetail.czjl'),
                    type: 1,
                    state: 1
                },
                {
                    text: t('orderdetail.kfjl'),
                    type: 2,
                    state: 3
                },
                {
                    text: t('orderdetail.kjddcz'),
                    type: 3,
                    state: 2
                }
            ]
        },
        {
            caption: t('orderdetail.costorder'),
            num: 2,
            items: [
                {
                    text: t('orderdetail.nopay'),
                    type: 0
                },
                {
                    text: t('orderdetail.paysucc'),
                    type: 1
                },
                {
                    text: t('orderdetail.getdking'),
                    type: 2
                }
            ]
        }
        // {
        //     caption: '质押借币订单',
        //     num: 3,
        //     items: [
        //         {
        //             text: '质押借币订单',
        //             type: 0
        //         },
        //         {
        //             text: '还款历史',
        //             type: 1
        //         },
        //         {
        //             text: '质押率调整历史',
        //             type: 2
        //         },
        //         {
        //             text: '平仓历史',
        //             type: 3
        //         },
        //         {
        //             text: '质押借币历史',
        //             type: 4
        //         }
        //     ]
        // },
        // {
        //     caption: '存币宝订单',
        //     num: 4,
        //     items: [
        //         {
        //             text: '全部',
        //             type: 0
        //         },
        //         {
        //             text: '持有中',
        //             type: 1
        //         },
        //         {
        //             text: '已结清',
        //             type: 2
        //         }
        //     ]
        // },
        // {
        //     caption: 'DeFi矿池订单',
        //     num: 5,
        //     items: [
        //         {
        //             text: '全部',
        //             type: 0
        //         },
        //         {
        //             text: '持有中',
        //             type: 1
        //         },
        //         {
        //             text: '已结清',
        //             type: 2
        //         }
        //     ]
        // }
    ]
    const enheaderinfo = [
        {
            caption: t('orderdetail.metchorder'),
            num: 0,
            items: [
                {
                    text: t('orderdetail.all'),
                    type: 0,
                    state: ''
                },
                {
                    text: t('orderdetail.nopay'),
                    type: 1,
                    state: 0
                },
                {
                    text: t('orderdetail.paynosh'),
                    type: 2,
                    state: 7
                },
                {
                    text: t('orderdetail.paysucc'),
                    type: 3,
                    state: 1
                },
                {
                    text: t('orderdetail.sxzhong'),
                    type: 4,
                    state: 4
                },
                {
                    text: t('orderdetail.yjs'),
                    type: 5,
                    state: 5
                }
            ]
        },
        {
            caption: t('newpage.header.electr'),
            num: 1,
            items: [
                {
                    text: t('orderdetail.all'),
                    type: 0,
                    state: ''
                },
                {
                    text: t('orderdetail.czjl'),
                    type: 1,
                    state: 1
                },
                {
                    text: t('orderdetail.kfjl'),
                    type: 2,
                    state: 3
                },
                {
                    text: t('orderdetail.kjddcz'),
                    type: 3,
                    state: 2
                }
            ]
        },
        {
            caption: t('orderdetail.costorder'),
            num: 2,
            items: [
                {
                    text: t('orderdetail.nopay'),
                    type: 0
                },
                {
                    text: t('orderdetail.paysucc'),
                    type: 1
                },
                {
                    text: t('orderdetail.getdking'),
                    type: 2
                }
            ]
        }
    ]
    const handleTotype = useCallback((i) => {
        setStartnum(i.type)
        if (ordernum === 0) {
            dispatch.order.orderCalculate({}).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        if (i.state === '') {
                            setMinlist(res.data)
                        } else if (i.state === 0) {
                            setMinlist(res.data.filter((item) => {
                                return item.orderState === 0 || item.orderState === 10
                            }))
                        } else if (i.state === 1) {
                            setMinlist(res.data.filter((item) => {
                                return item.orderState === 1
                            }))
                        } else if (i.state === 4) {
                            setMinlist(res.data.filter((item) => {
                                return item.orderState === 4 || item.orderState === 6 || item.orderState === 9
                            }))
                        } else if (i.state === 7) {
                            setMinlist(res.data.filter((item) => {
                                return item.orderState === 7
                            }))
                        } else if (i.state === 5) {
                            setMinlist(res.data.filter((item) => {
                                return item.orderState === 3 || item.orderState === 5 || item.orderState === 8
                            }))
                        }
                    } else {
                        setMinlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (ordernum === 1) {
            dispatch.order.electricOrderlist({}).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        if (i.type === 0) {
                            setGdlist(res.data)
                        } else if (i.type === 1) {
                            setGdlist(res.data.filter((item) => {
                                return item.recordType === 1
                            }))
                        } else if (i.type === 2) {
                            setGdlist(res.data.filter((item) => {
                                return item.recordType === 3
                            }))
                        } else if (i.type === 3) {
                            setGdlist(res.data.filter((item) => {
                                return item.recordType === 2
                            }))
                        }
                    } else {
                        setGdlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (ordernum === 2) {
            dispatch.order.collectOrder({
                status: i.type
            }).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        setCostlist(res.data)
                    } else {
                        setCostlist([])
                    }
                }
            })
        }
        if (ordernum === 5) {
            dispatch.product.prodOederlist({
                uid: cookie.get('user_id')
            }).then((res) => {
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        if (i.type === 0) {
                            setDefas(res.data)
                        } else if (i.type === 1) {
                            setDefas(res.data.filter((item) => {
                                return item.status === 0
                            }))
                        } else if (i.type === 2) {
                            setDefas(res.data.filter((item) => {
                                return item.status === 1
                            }))
                        }
                    } else {
                        setDefas([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (ordernum === 4) {
            dispatch.product.allRevenue({
                uid: cookie.get('user_id')
            }).then((res) => {
                console.log(res)
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        if (i.type === 0) {
                            setCblist(res.data)
                        } else if (i.type === 2) {
                            setCblist(res.data.filter((item) => {
                                return item.status === 0
                            }))
                        } else {
                            setCblist(res.data.filter((item) => {
                                return item.status === 1
                            }))
                        }
                    }
                }
            })
        }
    })
    const handleOrdernum = useCallback((order) => {
        setOrdernum(order.num)
        setFlage(false)
        setStartnum(0)
        if (order.num === 0) {
            dispatch.order.orderCalculate({}).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        setMinlist(res.data)
                    } else {
                        setMinlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (order.num === 1) {
            dispatch.order.electricOrderlist({}).then((res) => {
                if (res.code === 0) {
                    if (res.data !== null) {
                        setGdlist(res.data)
                    } else {
                        setGdlist([])
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
        if (order.num === 2) {
            dispatch.order.collectOrder({
                status: 0
            }).then((res) => {
                if (res.code === 0) {
                    setCostlist(res.data !== null ? res.data : [])
                }
            })
        }
        if (order.num === 3) {
            dispatch.product.prodOederlist({
                uid: cookie.get('user_id')
            }).then((res) => {
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        setDefas(res.data)
                    }
                }
            })
        }
        if (order.num === 4) {
            dispatch.product.allRevenue({
                uid: cookie.get('user_id')
            }).then((res) => {
                if (res.status === 'ok') {
                    if (res.data !== null) {
                        setCblist(res.data)
                    }
                }
            })
        }
    })
    return <div className="header">
        <div className="herder-con">
            <div className="left" onMouseEnter={() => { setFlage(true) }} onMouseLeave={() => { setFlage(false) }}>
                <div className="left-text">
                    {ordernum !== '' ? (
                        <p>{headerinfo[ordernum].caption}</p>
                    ) : ('')}
                    <img src={downico} alt="" />
                </div>
                <div className='orderlist' style={{ display: flage ? 'block' : '' }}>
                    {(i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
                        headerinfo.map((item, index) => {
                            return <div className="orderlist-item" key={index} onClick={() => { handleOrdernum(item) }}>{item.caption}</div>
                        })
                    ) : (
                        enheaderinfo.map((item, index) => {
                            return <div className="orderlist-item" key={index} onClick={() => { handleOrdernum(item) }}>{item.caption}</div>
                        })
                    )}
                </div>
            </div>
            <div className="right">
                {ordernum !== '' ? (
                    (i18n.language).toLowerCase().substring(0, 2) === 'zh' ? (
                        headerinfo[ordernum].items.map((item, index) => {
                            return <div className={startnum === item.type ? 'acitve' : ''} key={index} onClick={() => { handleTotype(item) }}>{item.text}</div>
                        })
                    ) : (
                        enheaderinfo[ordernum].items.map((item, index) => {
                            return <div className={startnum === item.type ? 'acitve' : ''} key={index} onClick={() => { handleTotype(item) }}>{item.text}</div>
                        })
                    )
                ) : ('')}
                {/* {headerinfo[ordernum].items.map((item, index) => {
                    return <div className={startnum === item.type ? 'acitve' : ''} key={index} onClick={() => { handleTotype(item) }}>{item.text}</div>
                })} */}
            </div>
        </div>
    </div>
}
