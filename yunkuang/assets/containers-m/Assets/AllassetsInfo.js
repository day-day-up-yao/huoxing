import React from 'react'

// import noseeimg from '../../public/imgs/h5img/other/no_see.png'
// import downthree from '../../public/imgs/h5img/other/downthree.png'
import pointRight from '../../public/imgs/h5img/other/point_right.png'
import activeimg from '../../public/imgs/h5img/other/actives.png'
import couponimg from '../../public/imgs/h5img/other/coupon.png'
import backpayimg from '../../public/imgs/h5img/other/backpay.png'
import orderimgimg from '../../public/imgs/h5img/other/orderimg.png'
import TotalAssets from '../../components-m/TotalAssets'

export default (props) => {
    const { holdassets } = props
    const otherlist = [
        { name: '活动', imgs: activeimg, link: '' },
        { name: '优惠卷', imgs: couponimg, link: '' },
        { name: '返佣', imgs: backpayimg, link: '' },
        { name: '订单', imgs: orderimgimg, link: '/order' }
    ]
    const handlelink = (link) => {
        if (link !== '') {
            window.location.href = link
        }
    }
    return (
        <div className="assets-info">
            <div className="assets-info-top">
                <TotalAssets btcnum={holdassets?.totalBalanceBTC} usdtnum={holdassets?.totalBalanceUSDT} />
                <div className="assets-other">
                    <div className="other-left">
                        <div>昨日净收益</div>
                        <div className="other-left-money">${holdassets?.yesterdayIncomeUsdt}</div>
                        {/* <div className="add-num">+$120.80</div>
                    <div className="num-parcent">
                        <img src={downthree} alt=""/>
                        <span>4.30%</span>
                    </div> */}
                    </div>
                    <div className="other-right">
                        <span>资产分析</span>
                        <img src={pointRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="other-list">
                {otherlist.map((item, index) => {
                    return (
                        <div
                            className="list-item"
                            key={index}
                            onClick={() => {
                                handlelink(item.link)
                            }}
                        >
                            <img src={item.imgs} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
