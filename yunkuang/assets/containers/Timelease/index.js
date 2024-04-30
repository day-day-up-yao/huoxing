import React from 'react'
import { useSelector } from 'react-redux'
// import Toast from '../../components/Toast'
import CountDown from '../../components/CountDown'
import togetherimg from '../../public/imgs/timelease.png'
// import listout from '../../public/imgs/listout.png'
// import gameover from '../../public/imgs/gameover.png'
// import { formatTime } from '../../public/js/index'
import './index.scss'
export default () => {
    // const dispatch = useDispatch()
    const { productList, ratemonynumber } = useSelector(state => ({
        productList: state.product.list,
        ratemonynumber: state.public.ratemony
    }))
    // const [ratemony, setRatemony] = useState(0)
    // useEffect(() => {
    //     dispatch.public.quoteRates({
    //         tokens: 'BTC',
    //         legalCoins: 'BTC,USDT,CNY,USD,ETH'
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             setRatemony(res.data[0].rates.CNY)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info('汇率获取错误')
    //     })
    // }, [])

    const curTime = Date.parse(new Date())
    return <div className="together">
        <div className="together-top">
            <img src={togetherimg} />
        </div>
        <div className="HomeConlist" id='#productlists'>
            {Array.isArray(productList) && productList.map(function (item, index) {
                return <a className="HomeCon_C" href={`/product/${item.id}`} key={item.id}>
                    <div className="down">
                        <div className="HomeCon_Limg">
                            <img src={item.minerTypeInfo.pic} alt={item.name} />
                        </div>
                        <div className="HomeCon_Con">
                            <div className="left">
                                <h3>{item.name}</h3>
                                <div className="left-center">
                                    <div className="HomeCon_R_C">
                                        <p>预估年化收益率</p>
                                        <p>{item.yearRate}</p>
                                    </div>
                                    <div className="HomeCon_R_C">
                                        <p>昨日收益</p>
                                        <p>{(item.expectDailyIncome).toFixed(4)} BTC</p>
                                        <p>≈ {(item.expectDailyIncome * ratemonynumber).toFixed(0)} RMB</p>
                                    </div>
                                </div>
                                <h5>
                                    {/* {item.productType === 0 && item.cycle} */}
                                    {item.cycle === -1 ? '减半预约金' : item.productType === 1 ? '永久产权' : item.productType === 2 ? `${item.cycle}天使用权` : item.cycle}
                                    {/* {item.cycle === -1 ? (item.cycle === -1 && '预定金') : (item.productType === 2 && `${item.cycle}天使用权`)} */}
                                </h5>
                            </div>
                        </div>
                        <div className="HomeCon_right">
                            <button className="HomeCon_R_B" dataid={item.id}>立即购买</button>
                        </div>
                    </div>
                    <div className="HomeCon_C_bottom">
                        <div className="HomeCon_C_bottom_left">
                            <p>{item.minerTypeInfo.manufacturer}</p>
                            <p>{item.minerTypeInfo.desc}</p>
                        </div>
                        <div className="HomeCon_C_bottom_center">
                            <div className="HomeCon_B">
                                <div className="HomeCon_Btop">
                                    <p>已购{(item.totalNumber - item.leftNumber) >= 0 ? (item.totalNumber - item.leftNumber) : 0}台</p>
                                    <p>总量{item.totalNumber}台</p>
                                </div>
                                <div className="HomeCon_Bcon">
                                    <div className="HomeCon_Bcons" style={{ width: `${(item.totalNumber - item.leftNumber) / item.totalNumber * 100}%` }}></div>
                                </div>
                            </div>
                            <div className="count-down-item">
                                {item.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.beginTime} />开始售卖</div> : <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.endTime} />后结束</div>}
                            </div>
                        </div>
                        <div className="HomeCon_C_bottom_right">
                            <p>
                                <span>原价</span>
                                <span className="HomeCon_C_bottom_right_spans">{item.priceShow}</span>
                            </p>
                            <p className="HomeCon_C_bottom_right_span">
                                <span>￥ {item.price}</span>
                                <span className="HomeCon_C_bottom_right_spanstwo">限时优惠</span>
                            </p>
                        </div>
                    </div>
                    {/* <div className='HomeCon-over' style={{ display: new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? 'block' : item.leftNumber === 0 ? 'block' : 'none' }}>
                        <div className="HomeCon-over-img">
                            <img src={new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? gameover : item.leftNumber === 0 ? listout : ''} />
                        </div>
                    </div> */}
                </a>
            })}
        </div>
        <div className="product-rule-intro">
            <h3>“分时租赁”规则说明</h3>
            <h4>业务说明</h4>
            <p>您选择当前产品且下单完成购买流程后，我们将等待募集期结束或达到募集目标，随后运送您的矿机至我们的合作矿场进行托管，您可以在“我的订单”页面追踪订单进程。此订单开始产生挖矿收益的时间见本产品详情，您的挖矿收益为所购矿机总算力的有效产出扣除运营维护费。注意，下单并支付成功后，订单将无法撤销和退款。</p>
            <h4>费用说明</h4>
            <p>1. 矿机租赁费用：您所支付的矿机租赁费用为矿机租赁费用，租赁有效期见本订单详情。其租赁定价将根据市场变动调整，实际购买价格以您付款时为准，火星云矿不会对其进行差价补偿。</p>
            <p>
                <span>2. 电费：</span><br/>
                <span>A. 运行中的矿机所产生电费由用户及时充缴，电力价格和矿机功耗以本页显示为准。如发生供电方调价、国家和地方政策变化等不可抗力导致供电价格变化，火星云矿保留电能单价调整权利，但已预缴电费不受调价影响。您的电费充缴以每日综合电费*天数形式计算。用户可以选择提前充缴电费或从收益中扣抵，提前充缴电费支持法币、USDT支付。若用户未能提前充缴电费，火星云矿将从挖矿收益中以比特币当日价格自动扣除电费；若收益不足以支付电费，火星云矿将暂时关闭受影响的矿机，并通过用户预留的联系方式通知用户充缴；如若发生不可抗力因素导致电价提高，用户将按新电价充缴电费。</span>
                <span>B. 矿场线损费：托管矿场对每度电收取电价5%的矿场线损费用于矿场附属设备耗能和线损耗能。</span>
            </p>
            <p>3. 运营维护费：火星云矿将对所有矿机收取运营维护费用，提供矿机委托管理服务，包括矿机运输、场地配套、日常监控、矿机维护、维修、算力保障等。运营维护费将从每日算力收益中扣除。</p>
            <p>4. 矿池服务费：本订单所涉及矿机在运行时所接入的矿池会向用户收取一定比例的服务费，该服务费率由矿池决定并从每日算力收益中扣除，具体矿池服务费率以对应矿池公布为准。挖掘到的数字货币在扣除矿池费率后将按照PPS模式(或PPS的衍生模式，如FPPS 、PPS+)发放到用户的火星云矿账户。</p>
            <p>5. 用户可以选择使用法币、USDT支付矿机租赁费用及电费。</p>
            <h4>收益结算</h4>
            <p>当前所选产品的挖矿收益采取日结方式结算，挖矿收益为实际算力所得收益扣除电费，扣除运营维护费后所得，火星云矿将在每个挖矿日结束后24小时内发放当日收益至用户账户。</p>
            <h4>服务终止</h4>
            <p>1. 矿机租赁产品存在使用权期限，使用权到期后，产品相应服务将自动终止。</p>
            <p>2. 若用户未及时充缴电费且挖矿收益连续90天不足以抵扣电费，火星云矿将暂停服务，直至收益足以抵扣电费时恢复。若因客户未及时充缴电费导致矿机停机，矿机租赁服务到期日不受影响。</p>
            <p>3. 由于发生不能预见、不能避免或不能克服的客观事件造成的损失，导致矿场无法继续运营时，服务将提前终止，火星云矿不对此承担赔偿责任。</p>
            <h4>风险提示</h4>
            <p>火星云矿不对以下不可控风险所造成的损失负责：不能预见、不能避免或不能克服的客观事件，包括自然灾害如洪水、火山爆发、地震、山崩、火灾、被中国政府部门评定为百年不遇级别以上的风暴和恶劣气候等，政府行为和政府指令，城市级别的电网供电事故，以及社会异常事件如战争、罢工、动乱等。</p>
        </div>
    </div >
}
