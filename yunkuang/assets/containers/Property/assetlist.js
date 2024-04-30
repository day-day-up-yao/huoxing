import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Toast from '../../components/Toast'
import None from '../../components/Public/None/index'
// const needlist = ['BTC', 'ETH', 'FIL', 'USDT', 'XCH', 'CRU', 'CKB', 'HNT']
export default ({ setFilling, setAddressobj, setBasename, setQuotainfo, setAssetinfo, setChains, secure }) => {
    const env = process.env.NODE_ENV
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const toplist = [t('property.mony'), t('property.more'), t('property.notB'), t('property.make')]
    const [symbollist, setSymbollist] = useState([])
    // const testCurrey = {
    //     allowDeposit: true,
    //     allowWithdraw: true,
    //     chainTypes: [
    //         {
    //             allowDeposit: true,
    //             allowWithdraw: true,
    //             chainType: 'TETH'
    //         }
    //     ],
    //     displayChainName: null,
    //     iconUrl: 'https://static.hcdncn.com/BTC.svg',
    //     tokenFullName: 'Bitcoin',
    //     tokenId: 'TETH',
    //     tokenName: 'TETH'
    // }

    useEffect(() => {
        // if ((env === 'development' || env === 'test') && needlist.indexOf('TETH') === -1) {
        //     needlist.push('TETH')
        // }
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                dispatch.product.checkC2cBanlance({}).then((result) => {
                    if (result.code === 0) {
                        const data = res.data.token
                        if (env === 'production') {
                            data.splice(data.length - 1, 1)
                        }
                        // console.log(data)
                        // for (let i = 0; i < needlist.length; i++) {
                        //     for (let j = 0; j < res.data.token.length; j++) {
                        //         if (res.data.token[j].tokenId === needlist[i]) {
                        //             data.push(res.data.token[j])
                        //         }
                        //     }
                        // }
                        for (let i = 0; i < data.length; i++) {
                            for (let j = 0; j < result.data.length; j++) {
                                if (result.data[j].tokenName === data[i].tokenName) {
                                    data[i].free = result.data[j].free
                                    data[i].locked = result.data[j].locked
                                }
                            }
                        }
                        // console.log(data)
                        setSymbollist(data)
                    }
                })
            }
        })
    }, [])
    return <div className="alist">
        <div className="alist-top">
            {toplist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        <div className="alist-bottom">
            {symbollist.length > 0 ? (
                symbollist.map((item, index) => {
                    return <div className="item" key={index}>
                        <div className="item-left">
                            <div className="item-left-img">
                                <img src={item.iconUrl} alt=""/>
                            </div>
                            <div className="item-left-right">
                                <p>{item.tokenName}</p>
                                <p>{item.tokenFullName}</p>
                            </div>
                        </div>
                        <div className="item-left">{item.free ? Number(item.free).toFixed(8) : 0}</div>
                        <div className="item-left">{item.locked ? Number(item.locked).toFixed(8) : 0}</div>
                        <div className="item-right">
                            <div>
                                <span onClick={() => {
                                    // 可可上了需要注释
                                    // if (item.tokenId === 'XCH') {
                                    //     return
                                    // }
                                    if (secure) {
                                        window.location.href = `/secure/enproperty/${item.tokenId}`
                                    } else {
                                        window.location.href = `/property/${item.tokenId}`
                                    }
                                }}>{t('property.mx')}</span>
                            </div>
                            <div>
                                <span className={item.allowWithdraw ? '' : 'noactive'} onClick={() => {
                                    setAssetinfo(
                                        {
                                            fee: item.free ? item.free : 0,
                                            locked: item.locked ? item.locked : 0
                                        }
                                    )
                                    if (item.allowWithdraw) {
                                        setBasename(item.tokenName)
                                        dispatch.product.quotaInfo({
                                            token_id: item.tokenName,
                                            chain_type: item.chainTypes.length > 0 ? item.chainTypes[0].chainType : ''
                                        }).then((res) => {
                                            if (res.code !== 0) {
                                                Toast.info(res.msg)
                                                return
                                            }
                                            if (!res.data.allowWithdraw) {
                                                Toast.info(res.data.refuseReason)
                                                return
                                            }
                                            setChains(item.chainTypes)
                                            setQuotainfo(res.data)
                                            setFilling(1)
                                        })
                                    }
                                }}>{t('property.tb')}</span>
                            </div>
                            <div>
                                <span className={item.allowDeposit ? 'withdrow' : 'noactive'} onClick={() => {
                                    if (item.allowDeposit) {
                                        dispatch.order.getAddress({
                                            token_id: item.tokenName,
                                            chain_type: item.chainTypes.length > 0 ? item.chainTypes[0].chainType : ''
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                if (!res.data.allowDeposit) {
                                                    Toast.info(res.data.addressExt)
                                                } else {
                                                    setChains(item.chainTypes)
                                                    setFilling(2)
                                                    setAddressobj(res.data)
                                                    setBasename(item.tokenName)
                                                }
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        })
                                    }
                                }}>{t('property.cb')}</span>
                            </div>
                        </div>
                    </div>
                })
            ) : (
                <None/>
            )}
        </div>
    </div>
}
