import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import './index.scss'
import Poster from './poster'
import { formatTime } from '../../public/js/index'
import Ontop from '../../public/imgs/ontop.png'
import Bulkimg from '../../public/imgs/bulkimg.png'
import Buygroup from '../../public/imgs/buygroup.jpg'
export default () => {
    const dispatch = useDispatch()
    const [grouplist, setGrouplist] = useState([])
    const { detail } = useSelector((state) => ({
        detail: state.product.detail
    }))
    const [showType, setShowType] = useState('attention')
    const [flag, setFlag] = useState(false)
    const [tokycmsg, setTokycmsg] = useState(false)
    const [invtimg, setInvtimg] = useState()
    const [newimgcode, setNewimgcode] = useState()
    // const [number, setNumber] = useState(1)
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
        // 获取邀请返佣海报
        dispatch.product.inviteshareInfo({
            picType: 15
        }).then((res) => {
            if (res.code) {
                Toast.info(res.smg)
            } else {
                if (res.data) {
                    setInvtimg(res.data[0].originalPic)
                } else {
                    Toast.info('暂无数据')
                }
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
    // 邀请返佣海报+二维码下载
    if (invtimg) {
        Poster(invtimg, window.location.protocol + '//' + window.location.hostname + ':3026/buyinggroup/' + detail.id, base64 => {
            setNewimgcode(base64.replace('cocomgr/png', 'image/octet-stream'))
        })
    }
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
                if (res.code === 3127) {
                    setFlag(true)
                    setTokycmsg(true)
                } else {
                    Toast.info(res.msg)
                }
            } else {
                window.location.href = `/order/${res.data}`
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('算力订单创建失败')
        })
    }, [detail])
    const tocopy = useCallback(() => {
        var message = document.getElementById('address')
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.error('复制成功！')
        } else {
            Toast.error('复制失败，请手动复制！')
        }
    })
    const curTime = Date.parse(new Date())
    let productTips = '“分时租赁”业务以整机矿机为服务单元，提供矿机的限时使用权转让服务。用户不会获得任何矿机本体，所有“分时租赁”矿机已经安装在火星云矿合作矿场，用户仅将获得相应矿机的使用权，并在使用期限内获得矿机所有的实际挖矿收益。'
    if (detail.productType === 1) productTips = '“永久产权”业务以整机矿机为服务单元，提供矿机的永久产权出售服务。用户将获得矿机本体所有权及后续实际挖矿收益，所购矿机将首先安装在火星云矿合作矿场，并由火星云矿提供运维服务。'
    return <div className="bulk">
        <div className="bulk-top-background">
            <img src={Buygroup} alt=""/>
        </div>
        <div className="bulk-top">
            <div className="bulk-top-img">
                <img src={Bulkimg} alt=""/>
            </div>
            <div className="bulk-top-title">
                <p>拼团成为大客户，参与即享折扣！</p>
                <p>运营维护费4.5%起，最低3%， 越拼越优惠！</p>
                <p>从未有过的费率折扣，挖矿从火星云矿开始。</p>
            </div>
            <div className="product-details">
                <div className="up">
                    <div className="left">
                        <div className="img">
                            <div className="img_setting">
                                <img src={detail.minerTypeInfo.pic} alt={detail.name} />
                            </div>
                        </div>
                        <div className="left-content">
                            <div className="left-num">
                                <p>邀请链接</p>
                                <p id="address">{window.location.protocol + '//' + window.location.hostname + '/buyinggroup/' + detail.id}</p>
                                <p onClick={tocopy}>复制</p>
                            </div>
                            <div className="left-num">
                                <p>邀请海报</p>
                                <p></p>
                                <p>
                                    <a href={newimgcode} download="buying_group.png">点击下载</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>{detail.name}</h2>
                            <div className="product-type-times-con">
                                <div className="product-type">
                                    {detail.productType === 1 && '永久产权'}
                                    {detail.productType === 2 && `${detail.cycle}天使用权`}
                                </div>
                                <a className="tips">
                                    <span>?</span>
                                    <div className="intro">{productTips}</div>
                                </a>
                            </div>
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
                                    <p>累计售卖30台</p>
                                </li>
                                <li>
                                    <p>
                                        <img src={Ontop} alt=""/>
                                    </p>
                                    <p>累计售卖40台</p>
                                </li>
                                <li>
                                    <p>
                                        <img src={Ontop} alt=""/>
                                    </p>
                                    <p>累计售卖50台</p>
                                </li>
                                <li>
                                    <p>
                                        <img src={Ontop} alt=""/>
                                    </p>
                                    <p>累计售卖70台</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                                <span>{detail.name} {item.buyNum}台</span>
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
        <div className="bulk-con">
            <div className="btnalert" style={{ display: flag === true ? 'flex' : 'none' }}>
                <div className="orderpasswdkyc" style={{ display: tokycmsg === true ? 'block' : 'none' }}>
                    <h3>该产品需要实名认证后才能购买，请您完成实名认证后，点击购买。</h3>
                    <div className="orderpasswd-btn">
                        <span onClick={() => {
                            setFlag(false)
                            setTokycmsg(false)
                        }}>取消</span>
                        <span onClick={() => {
                            window.location.href = '/userkyc'
                        }}>去设置</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
