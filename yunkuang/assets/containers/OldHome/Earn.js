// 首页算力计算
import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import Down from '../../public/imgs/newpage/ndown.png'
// import { Curreylog } from '../../public/js/curryicon'
import btcicons from '../../public/imgs/newpage/btcicons.png'
import ethicons from '../../public/imgs/newpage/ethicons.png'
export default ({ t }) => {
    const dispatch = useDispatch()
    const currenynum = useRef()
    const [price, setPrice] = useState(0) // 计算得到的币对价值
    const [show, setShow] = useState(false) // 是否展示币种列表
    const [curreny, setCurreny] = useState('BTC') // 币种选择
    const [currenyimg, setCurrenyimg] = useState(btcicons) // 币种图片
    const [unit, setUnit] = useState('TH /s') // 币种算力单位
    const [usdell, setUsdell] = useState(0) // 美元价值
    const currlist = [
        { name: 'BTC', imgs: btcicons },
        { name: 'ETH', imgs: ethicons }
    ]
    // 获取BTC美元价格
    useEffect(() => {
        dispatch.product.hashRatesinfo({
            base: 'btc',
            quote: 'USDT'
        }).then((res) => {
            if (res.code === 1) {
                setUsdell(res.data)
            }
        })
    }, [])
    // 切换币种
    const handleToselect = useCallback((item) => {
        dispatch.product.hashRatesinfo({
            base: item.name,
            quote: 'USDT'
        }).then((res) => {
            if (res.code === 1) {
                setUsdell(res.data)
            }
        })
        setCurreny(item.name)
        setCurrenyimg(item.imgs)
        currenynum.current.value = ''
        setShow(false)
        setPrice(0)
        if (item.name === 'ETH') {
            setUnit('MH /s')
        } else {
            setUnit('TH /s')
        }
    })
    // 计算算力价值
    const handleToreckon = useCallback(() => {
        if (currenynum.current.value === '') {
            Toast.info(t('public.numplace'))
        } else {
            if (isNaN(currenynum.current.value)) {
                Toast.info(t('public.numplace'))
            } else {
                dispatch.product.expecteDoutput({
                    currency: curreny,
                    hashrateNum: curreny === 'ETH' ? (currenynum.current.value / 1000000) : currenynum.current.value
                }).then((res) => {
                    if (res.code === 0) {
                        setPrice(res.data)
                    } else {
                        Toast.info(res.msg)
                    }
                })
            }
        }
    }, [curreny])
    return <div className="earn">
        {/* <div className="earn-border"></div> */}
        <div className="earn-con">
            {/* <h3>{t('newpage.home.earn')}</h3> */}
            <div className="earn-con-input">
                <div className="earn-con-input-l">
                    <div className="earn-con-input-l-l">
                        <div className="curreny" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                            <div className="curreny-img">
                                <img src={currenyimg} alt=""/>
                            </div>
                            <p>{curreny}</p>
                            <img src={Down} alt=""/>
                            <ul style={{ display: show ? 'block' : '' }}>
                                {currlist.map((item, index) => {
                                    return <li key={index} onClick={() => { handleToselect(item) }}>
                                        <img src={item.logo} alt=""/>
                                        <span>{item.name}</span>
                                    </li>
                                })}
                            </ul>
                            <div className="curreny-line"></div>
                        </div>
                        <input type="text" placeholder='0.0000' ref={currenynum}/>
                        <div className="earn-con-input-l-select">
                            <span>{unit}</span>
                            {/* <img src={Down} alt=""/> */}
                            <div className="earn-con-input-l-select-line"></div>
                        </div>
                    </div>
                    <div className="earn-con-input-l-r" onClick={() => { handleToreckon() }}>{t('newpage.home.calculate')}</div>
                </div>
                <div className="earn-con-input-r">
                    <p>{t('newpage.home.earntime')}</p>
                    <p>
                        <span>{price} {curreny} </span>
                        <span>(${(price * usdell).toFixed(0)})</span>
                    </p>
                </div>
                <a name="productlist"></a>
            </div>
        </div>
    </div>
}
