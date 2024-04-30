import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import noticeimg from '../../../public/imgs/h5img/other/notc_icon.png'
import surepic from '../../../public/imgs/new/surepic.png'
import selectimg from '../../../public/imgs/h5img/other/sureselectblue.png'
import linkimg from '../../../public/imgs/newedition/13.png'
import { formatTime } from '../../../public/js/index'
import Toast from '../../../components/Toast'

export default (props) => {
    const { detail, getDays, getType } = props
    const { t } = useTranslation()
    const daylist = [detail.electricDayMin, detail.electricDayMax]
    const [eletype, setEletype] = useState(detail.electricPayType === 2 ? 1 : 0)
    const electrictype = [
        { name: '预缴电费', type: 0 },
        { name: '收益抵扣', type: 1 }
    ]
    const [dayinfo, setDayinfo] = useState({
        flag: 0,
        num: detail.electricDayMin
    })
    return <div>
        <div className="fill-action">
            <div className="fill-order-top">
                <div className="fill-top-text">
                    <h3>{detail.name}</h3>
                    <div className="top-text-desc">
                        <span>{t('newpage.newproduct.fkyj') + formatTime(detail.maybeEffectiveTimeStr, 'yyyy-MM-dd') + t('newpage.newproduct.qihuo')}</span>
                        <img src={noticeimg} alt=""/>
                    </div>
                </div>
                <div className="fill-top-img">
                    <img src={surepic} alt=""/>
                </div>
            </div>
        </div>
        <div className="fill-action">
            <div className="fill-electric-num">
                <h3>电费</h3>
                <div className="fill-electric-num-right">
                    <span>今日电费</span>
                    <div className="num-right-day">{detail.minerTypeInfo.electricFee}USDT/kWh</div>
                    <div className="num-right-day">{(detail.minerTypeInfo.kw * detail.electricFee * 24).toFixed(2)}USDT/天</div>
                </div>
            </div>
            <div className="electric-type">
                <div className="electric-type-select">
                    {electrictype.map((item, index) => {
                        return <div
                            className={`type-select-item ${eletype === index && 'pitchon-item'}`}
                            key={index}
                            onClick={() => {
                                if (detail.electricPayType === 2 && index === 0) {
                                    Toast.info('该产品不支持预缴电费支付电费')
                                    return
                                }
                                getType(index)
                                setEletype(index)
                                if (index === 0) {
                                    getDays(detail.electricDayMin)
                                } else {
                                    getDays(0)
                                    setDayinfo({
                                        flag: 0,
                                        num: detail.electricDayMin
                                    })
                                }
                            }}
                        >
                            {item.name}
                            {eletype === index && <div className="selected-item-img">
                                <img src={selectimg} alt=""/>
                            </div>}
                        </div>
                    })}
                </div>
                {eletype === 0 && <div className="electric-type-select select-days">
                    {daylist.map((item, index) => {
                        return <div
                            className={`type-select-item ${dayinfo.flag === index && 'pitchon-item'}`}
                            key={index}
                            onClick={() => {
                                setDayinfo({
                                    flag: index,
                                    num: item
                                })
                                getDays(item)
                            }}
                        >
                            {item}
                            {dayinfo.flag === index && <div className="selected-item-img">
                                <img src={selectimg} alt=""/>
                            </div>}
                        </div>
                    })}
                    <div
                        className={`type-select-item ${dayinfo.flag === 3 && 'pitchon-item'}`}
                        onClick={() => {
                            setDayinfo({
                                flag: 3,
                                num: 0
                            })
                        }}
                    >
                        <input
                            type="text"
                            placeholder="自定义"
                            maxLength="4"
                            onChange={(e) => {
                                getDays(e.target.value)
                            }}
                        />
                        {dayinfo.flag === 3 && <div className="selected-item-img">
                            <img src={selectimg} alt=""/>
                        </div>}
                    </div>
                </div>}
                <div className="electric-type-text">
                    {eletype === 0 ? '电费将充值至用户电费余额，并将由所有处于预缴电费模式的订单共享。详情请查看电费账户页面。' : '按每日结算价格从挖矿产出中兑换并扣除相应电费,若当日收益不足以抵扣电费，矿机将暂时关机'}
                </div>
            </div>
            {eletype === 0 && <div className="fill-action-notice">
                <div className="notic-colors">*</div>
                <p>电费缴纳天数区间为</p>
                <div className="notic-colors">{detail.electricDayMin}天～{detail.electricDayMax}天</div>
            </div>}
        </div>
        <div className="fill-action">
            <div className="reduced-price">
                <div className="reduced-title">优惠码</div>
                <div className="reduced-link">
                    选择
                    <img src={linkimg} alt=""/>
                </div>
            </div>
        </div>
    </div>
}
