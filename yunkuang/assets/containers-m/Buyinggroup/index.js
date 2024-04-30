import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import Ontop from '../../public/imgs/ontop.png'
import Bulkimg from '../../public/imgs/bulkimg.png'
import { formatTime } from '../../public/js/index'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const [grouplist, setGrouplist] = useState([])
    const [showType, setShowType] = useState('attention')
    const { detail } = useSelector((state) => ({
        detail: state.product.detail
    }))
    useEffect(() => {
        dispatch.product.groupBuying({
            productId: 10
        }).then((res) => {
            if (res.code === 0) {
                setGrouplist(res.data.groupbuyInfoList)
            } else {
                Toast.info(res.msg)
            }
        })
        const coleeleft = document.getElementById('colee_left')
        var numlist = 0
        let i = numlist
        setInterval(() => {
            var str = coleeleft.style.top
            var strs = Number(str.replace(/[^0-9]/ig, ''))
            str = strs
            coleeleft.style.top = `-` + 50 * (i += 1) + `px`
            coleeleft.style.transition = 'all 0.5s'
            if (strs === coleeleft.offsetHeight - 50) {
                coleeleft.style.top = 0
                i = 0
            }
        }, 5000)
    }, [])
    const curTime = Date.parse(new Date())
    const buyNow = useCallback((event) => {
        event.preventDefault()
        if (detail.beginTime > curTime || detail.endTime < curTime) {
            return
        }
        const id = event.target.getAttribute('dataid')
        const count = event.target.getAttribute('datacount')
        dispatch.order.orderCreate({
            buyElectricDays: detail.electricDayMin ? detail.electricDayMin : 90,
            electricPayType: 1,
            buyNum: count,
            productId: id
            // orderCurrency: 'BDDA',
        }).then(function (res) {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                window.location.href = `/order/${res.data}`
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('算力订单创建失败')
        })
    }, [detail])
    return <div className="bulk-m">
        <div className="bulk-m-con">
            <div className="bulk-m-con-img">
                <img src={Bulkimg} alt=""/>
            </div>
            <div className="bulk-m-top">
                <h2>{detail.name}</h2>
                <div className="bulk-m-top-right" onClick={() => {
                    window.location.href = `/buyinggroupinvit/${detail.id}`
                }}>邀请好友</div>
            </div>
            <div className="bulk-m-img">
                <div className="bulk-m-img-img">
                    <img src={detail.minerTypeInfo.pic} alt=""/>
                </div>
                <div className="product-type-times-con">
                    <div className="product-type">
                        {detail.productType === 1 && '永久产权'}
                        {detail.productType === 2 && `${detail.cycle}天使用权`}
                    </div>
                </div>
            </div>
            <div className="product-schedule">
                <ul>
                    <li>返利300元</li>
                    <li>返利400元</li>
                    <li>返利500元</li>
                    <li>返利800元</li>
                </ul>
                <div className="product-schedule-list">
                    <div className="product-schedule-list-sch" style={{ width: `${(detail.totalNumber - detail.leftNumber) / detail.totalNumber * 100}%` }}></div>
                </div>
                <ul>
                    <li>
                        <p>
                            <img src={Ontop} alt=""/>
                        </p>
                        <p>售卖30台</p>
                    </li>
                    <li>
                        <p>
                            <img src={Ontop} alt=""/>
                        </p>
                        <p>售卖40台</p>
                    </li>
                    <li>
                        <p>
                            <img src={Ontop} alt=""/>
                        </p>
                        <p>售卖50台</p>
                    </li>
                    <li>
                        <p>
                            <img src={Ontop} alt=""/>
                        </p>
                        <p>售卖70台</p>
                    </li>
                </ul>
            </div>
            <div className="select-num-money">预估年化收益率：<span>{detail.yearRate}</span></div>
            <div className="select-num">
                <p className="unit-price"><span>拼团价</span><br/><span>￥{detail.buyPrice} </span><span>元（不包含电费）</span></p>
                <div className="select-con">
                    <button onClick={() => {
                        if (detail.buyCount === 1) {
                            Toast.info('请至少购买一台')
                            return
                        }
                        dispatch.product.minusDetail()
                    }}>-</button>
                    <div className="select-cur">{detail.buyCount}</div>
                    <button onClick={() => {
                        if (detail.jointMiningType !== 0) {
                            Toast.info('联合挖矿一个用户仅能够买一台')
                            return
                        }
                        if (detail.buyCount === detail.leftNumber) {
                            Toast.info('剩余矿机不足')
                            return
                        }
                        dispatch.product.addDetail()
                    }}>+</button>
                </div>
            </div>
            <div
                className={`buy-now ${(detail.beginTime > curTime || detail.endTime < curTime) === true ? 'grey' : ''}`}
                dataid={detail.id}
                datacount={detail.buyCount}
                onClick={buyNow}>
                    立即抢购
                {/* {(detail.beginTime > curTime || detail.endTime < curTime) ? '已结束' : '立即购买'} */}
            </div>
            <div className="product-type-times">
                <div className="start-time">开始挖矿时间：{formatTime(detail.effectiveTime, 'yyyy-MM-dd')}</div>
                <p>已售卖<span>{detail.totalNumber - detail.leftNumber}</span>台</p>
            </div>
        </div>
        <div className="bulk-title">
            <div className="bulk-title-com">
                <div id="colee_left" className="bulk-title-com-list">
                    <div id="colee_left2" className="bulk-title-com-list-con">
                        {Array.isArray(grouplist) && grouplist.map((item, index) => {
                            return <p key={index}>
                                <span>{formatTime(item.createdAt, 'hh:mm')}</span>
                                <span>{item.uid}购买了</span>
                                <span>{item.buyNum}台</span>
                            </p>
                        })}
                    </div>
                    <div id="colee_left1"></div>
                </div>
            </div>
        </div>
        <div className="bulk-down">
            <div className="down">
                <div className="tab-btn">
                    <a onClick={() => setShowType('attention')} className={showType === 'attention' ? 'active' : ''}>产品说明</a>
                    <a onClick={() => setShowType('parameter')} className={showType === 'parameter' ? 'active' : ''}>规格参数</a>
                </div>
                <div className="tab-con">
                    <div className="attention-cont" style={{ display: showType === 'attention' ? 'block' : 'none' }}>
                        <div dangerouslySetInnerHTML={{ __html: (detail.desc === '' ? '' : detail.desc.replace(/\n/g, '</br>')) }} />
                    </div>
                    <div className="parameter-cont" style={{ display: showType === 'parameter' ? 'block' : 'none' }}>
                        <img src={detail.productPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
