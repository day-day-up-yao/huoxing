import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
// import Toast from '../../components/Toast'
export default () => {
    // const dispatch = useDispatch()
    const { webBackground, productlist } = useSelector(state => ({
        webBackground: state.staking.webbackground,
        productlist: state.staking.stakingproductlist
    }))
    const handleTodetail = useCallback((v) => {
        console.log(v)
        window.location.href = `/stakingdetail/${v.productId}`
    })
    return <div className="stak">
        <div className="stak-top" style={{ background: `url(` + webBackground['cust.stakingSettings'].webBackground + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: 'cover' }}></div>
        <div className="stak-btn">{productlist.length > 0 ? (
            <div>
                {productlist.map((item, index) => {
                    return <p key={index}>{item.type === 0 ? '定期项目' : item.type === 1 ? '活期项目' : item.type === 2 ? '锁仓项目' : ''}</p>
                })}
            </div>
        ) : ''}</div>
        <div className="stak-list">
            <h3>锁仓项目</h3>
            <ul>
                {productlist.length > 0 ? (
                    productlist[0].products.map((item, index) => {
                        return <li key={index}>
                            <p>{item.productName}</p>
                            <p className="stak-list-item2">
                                <span>{item.referenceApr}%</span><br/>
                                <span>预期年化</span>
                            </p>
                            <p className="stak-list-item3">
                                <span>{(item.upLimitLots - item.soldLots) * Number(item.perLotAmount)}</span><br/>
                                <span>剩余开发额度</span>
                            </p>
                            <p className={item.status === 2 ? `stak-list-itm4` : 'stak-list-noitm4'} onClick={() => { handleTodetail(item) }}>{item.status === 1 ? '立即申购' : item.status === 0 ? '未开始' : '本期售罄'}</p>
                        </li>
                    })
                ) : ''}
            </ul>
        </div>
    </div>
}
