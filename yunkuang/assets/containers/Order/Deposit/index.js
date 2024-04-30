import React from 'react'
import { formatTime } from '../../../public/js/index'
import None from '../None/index'
import './index.scss'
export default ({ cblist }) => {
    return <div className="deposit">
        {cblist.length > 0 ? (
            cblist.map((item, index) => {
                return <div className="deposit-list" key={index}>
                    <div className="list-top">
                        <div className="list-top-left">
                            <span>订单名称</span>
                            <span>{item.prodhead.title}</span>
                        </div>
                        <div className="top-right">
                            <span className={item.status === 0 ? 'right-spanone' : 'right-spantwo'}>{item.status === 0 ? '已结清' : '持有中'}</span>
                        </div>
                    </div>
                    <div className="list-center">
                        <div className="center-left">
                            <p>
                                <span>投入本金：</span>
                                <span>{item.rrevenue['total-invest']}{item.rrevenue.primitive}</span>
                            </p>
                            <p>
                                <span>开始计息：</span>
                                <span>{formatTime(Number(item.timenodelist[1].timestamp), 'yyyy-MM-dd')}</span>
                            </p>
                        </div>
                        <div className="center-cent">
                            <p>
                                <span>收益率：</span>
                                <span>{item.prodhead['aor-rate'] * 100 + '%'}{item.rrevenue.primitive}</span>
                            </p>
                            <p>
                                <span>收益额：</span>
                                <span>{item.rrevenue['total-interest']}{item.rrevenue.primitive}</span>
                            </p>
                        </div>
                        {/* <div className="center-right">
                            <p>
                                <span>总投入：</span>
                                <span>0.5BTC</span>
                            </p>
                            <p>
                                <span>总利息：</span>
                                <span>0.5BTC</span>
                            </p>
                        </div> */}
                    </div>
                    <div className="list-right">
                        <div className="right-line"></div>
                        <div className="right-box">
                            {(item.timenodelist).map((itm, idx) => {
                                return <div className="box-item" key={idx}>
                                    <div className="item-time">{formatTime(Number(itm.timestamp), 'yyyy-MM-dd hh:mm')}</div>
                                    <div className={item.status === 0 ? 'item-roundtwo' : 'item-round'}></div>
                                    <div>
                                        <p>{itm.description}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            })
        ) : (
            <None/>
        )}
    </div>
}
