import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import './index.scss'

// import cbimg from '../../../public/imgs/new/cbselect.png'
import Toast from '../../../components/Toast'
import { numToFloor } from '../../../public/js/index'
import rightimg from '../../../public/imgs/btnicon/lendright.png'
import Popup from '../../../components-m/Popup'
import closeimg from '../../../public/imgs/newedition/close.png'
import selectedimg from '../../../public/imgs/h5img/other/selected_icon.png'
import selectrdblueimg from '../../../public/imgs/h5img/other/sureselectblue.png'

export default (props) => {
    const { currerylist, getCurreryinfo, isTopup, getWithdrawal, getInfo, getPound } = props
    const dispatch = useDispatch()
    const [curreryinfo, setCurreryinfo] = useState({
        currery: currerylist[0]?.tokenName,
        icon: currerylist[0]?.iconUrl,
        chainTypes: currerylist[0]?.chainTypes
    })
    const [flage, setFlage] = useState(false)
    const [chainnum, setChainnum] = useState(0)
    const SelectchainType = useCallback((num, item) => {
        setChainnum(num)
        if (isTopup) {
            getDeposit({
                currery: curreryinfo.currery,
                chainType: item.chainType
            })
        } else {
            getExtract({
                currery: curreryinfo.currery,
                chainType: item.chainType
            })
            getInfo({
                currery: curreryinfo.currery,
                chain: item.chainType
            })
        }
    })
    // 提币信息
    const getExtract = useCallback((obj) => {
        dispatch.product.quotaInfo({
            token_id: obj.currery,
            chain_type: obj.chainType
        }).then((res) => {
            if (res.code === 0) {
                if (!res.data.allowWithdraw) {
                    Toast.info(res.data.refuseReason)
                    return
                }
                getWithdrawal(res.data)
                getPound(numToFloor(Number(res.data.available), res.data.minPrecision))
                // setWithdrawalinfo(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    })
    // 获取充币信息
    const getDeposit = useCallback((obj) => {
        dispatch.order.getAddress({
            token_id: obj.currery,
            chain_type: obj.chainType
        }).then((res) => {
            if (res.code === 0) {
                if (!res.data.allowDeposit) {
                    Toast.info(res.data.addressExt)
                } else {
                    getCurreryinfo(res.data)
                }
                // setUpinfo(res.data)
            } else {
                getCurreryinfo({
                    address: '',
                    addressExt: '',
                    allowDeposit: true,
                    isEOS: false,
                    minQuantity: 0,
                    qrcode: '',
                    requiredConfirmNum: 0,
                    tokenType: ''
                })
                Toast.info(res.msg)
            }
        })
    })
    // 选择不同链获取充提信息
    const SelectChain = useCallback((item) => {
        setFlage(false)
        setCurreryinfo({
            currery: item.tokenName,
            icon: item.iconUrl,
            chainTypes: item.chainTypes
        })
        if (isTopup) {
            getDeposit({
                currery: item.tokenName,
                chainType: item.chainTypes[0].chainType
            })
        } else {
            getExtract({
                currery: item.tokenName,
                chainType: item.chainTypes[0].chainType
            })
            getInfo({
                currery: item.tokenName,
                chain: item.chainTypes[0].chainType
            })
        }
    })
    return <div className="select-list">
        <div className="select-name">选择币种</div>
        <div className="select-list-sure" onClick={() => {
            setFlage(true)
        }}>
            <div className="sure-left">
                <img src={curreryinfo.icon} alt=""/>
                <span>{curreryinfo.currery}</span>
            </div>
            <div className="sure-right">
                <img src={rightimg} alt=""/>
            </div>
        </div>
        {flage && <Popup
            children={
                <div className="select-popup">
                    <div className="select-list-it">
                        <div className="select-popup-top">
                            <div>{isTopup ? '充币' : '提币'}</div>
                            <div className="select-popup-top-img" onClick={() => {
                                setFlage(false)
                            }}>
                                <img src={closeimg} alt=""/>
                            </div>
                        </div>
                        {currerylist.map((item, index) => {
                            return <div className="list-item" key={index} onClick={() => {
                                SelectChain(item)
                            }}>
                                <div className="list-item-left">
                                    <img src={item.iconUrl} alt=""/>
                                    <div className="item-left-text">
                                        <p>{item.tokenName}</p>
                                        <div className="item-left-text-num">
                                            <span>账户余额</span>
                                            <span>{item.fee ? item.fee : 0}</span>
                                        </div>
                                    </div>
                                </div>
                                {curreryinfo.currery === item.tokenName && <div className="list-item-right">
                                    <img src={selectedimg} alt=""/>
                                </div>}
                            </div>
                        })}
                    </div>
                </div>
            }
        />}
        <div className="chaintype">
            <div className="select-name">链名称</div>
            {(curreryinfo.chainTypes) && curreryinfo.chainTypes.map((item, index) => {
                return <div className={`chaintype-item ${chainnum === index && 'active'}`}
                    // style={{ backgroundImage: `url(` + (chainnum === index ? cbimg : '') + `)` }}
                    key={index} onClick={() => { SelectchainType(index, item) }}
                >
                    {item.chainName}
                    {chainnum === index && <div className="chaintype-item-img">
                        <img src={selectrdblueimg} alt=""/>
                    </div>}
                </div>
            })}
        </div>
    </div>
}
