import React from 'react'

import Header from '../../components-m/Headers'
import AllBg from '../../components-m/AllBg'
import wallsuccimg from '../../public/imgs/h5img/other/wall_succ.png'
import Line from '../../components-m/Line'

import './index.scss'

export default () => {
    const toplist = [
        { title: '操作', text: '提币', type: 0, line: false },
        { title: '资产', text: 'BTC', type: 1, line: false },
        { title: '金额', text: '0.5112343', type: 2, line: false },
        { title: '手续费', text: '0.555', type: 3, line: false },
        { title: '请求时间', text: '2021-09-12 12:32:63', type: 4, line: true },
        { title: '接收地址', text: '提币', type: 5, line: false },
        { title: '网络', text: 'BTC', type: 6, line: false },
        { title: 'Txid', text: '912038rj9qjweof1o2k309j1f98122kw3f-r091icj9whd81', type: 7, line: false },
        { title: '节点确认', text: '0.555', type: 8, line: false },
        { title: '完成时间', text: '2021-09-12 12:32:63', type: 9, line: false }
    ]
    return <div>
        <Header
            title="流水详情"
            leftfg
        />
        <AllBg
            children={
                <div className="charg-detail">
                    <div className="charg-detail-top">
                        <img src={wallsuccimg} alt=""/>
                        <span>提币成功</span>
                    </div>
                    <div className="charg-detail-list">
                        {toplist.map((item, index) => {
                            return <div key={index}>
                                <div className="charg-detail-list-item">
                                    <div className="detail-item-left">{item.title}</div>
                                    <div className="detail-item-right">{item.text}</div>
                                </div>
                                {item.line && <Line/>}
                            </div>
                        })}
                        {/* {bottomlist.map((item, index) => {
                            return <div className="charg-detail-list-item" key={index}>
                                <div className="detail-item-left">{item.title}</div>
                                <div className="detail-item-right">{item.text}</div>
                            </div>
                        })} */}
                    </div>
                </div>
            }
        />
    </div>
}
