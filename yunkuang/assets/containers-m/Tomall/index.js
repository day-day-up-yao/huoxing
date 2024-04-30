import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import { queryParam, isJp } from '../../public/js/index'
import Hotlist from '../../components-m/Businesslist/index'
import Activelist from '../../components-m/Activelist/index'
// import hotimg from '../../public/imgs/newedition/hot.png'
import Toast from '../../components/Toast'
import { number } from 'mathjs'
export default () => {
    const { t } = useTranslation()
    const [liflag, setLiflag] = useState(1)
    const dispatch = useDispatch()
    const [hotlist, setHotlist] = useState([])
    const [proprietarylist, setProprietarylist] = useState([])
    const [ethlist, setEthlist] = useState([])
    useEffect(() => {
        // console.log(number(queryParam('select')))
        if (queryParam('select') !== null) {
            setLiflag(number(queryParam('select')))
        }
        dispatch.public.getProductList({ recommendIndex: 1 }).then((res) => {
            if (res.code === 0) {
                setHotlist(res.data)
            } else {
                Toast.info(res.msg)
            }
            // console.log(res)
        }).catch((err) => {
            Toast.info('获取产品错误')
            console.log(err)
        })
        dispatch.public.getProductList({ currency: 'BTC' }).then((res) => {
            if (res.code === 0) {
                setProprietarylist(res.data)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            Toast.info('获取产品错误')
            console.log(err)
        })
        // Filecoin活动产品
        dispatch.product.getProductList({ currency: 'FIL' })
        dispatch.product.getProductList({ currency: 'ETH' }).then((res) => {
            if (res.code === 0) {
                setEthlist(res.data)
            } else {
                Toast.info(res.msg)
            }
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        // dispatch.public.getProductList({ productPartnerType: 1 }).then((res) => {
        //     if (res.code === 0) {
        //         setVendorlist(res.data)
        //     } else {
        //         Toast.info(res.msg)
        //     }
        // }).catch((err) => {
        //     Toast.info('获取产品错误')
        //     console.log(err)
        // })
    }, [])
    const mlist = [
        { name: t('h5.tomall.activetime'), type: 1 },
        { name: `BTC${t('h5.tomall.zone')}`, type: 2 },
        { name: `ETH${t('h5.tomall.zone')}`, type: 3 },
        { name: `IPFS${t('h5.tomall.zone')}`, type: 4 }
    ]
    const mlistjp = [
        { name: t('h5.tomall.activetime'), type: 1 },
        { name: `IPFS${t('h5.tomall.zone')}`, type: 4 }
    ]
    return <div className="mall">
        <div className="mall-top">
            {isJp ? (
                <ul className="mall-top-jp">
                    {mlistjp.map((item, index) => {
                        return <li key={item.type}
                            onClick={() => {
                                setLiflag(item.type)
                            }}
                            className={liflag === item.type ? 'mall-top-li' : ''}>
                            {item.name}
                        </li>
                    })}
                </ul>
            ) : (
                <ul>
                    {mlist.map((item, index) => {
                        return <li key={item.type}
                            onClick={() => {
                                setLiflag(item.type)
                            }}
                            className={liflag === item.type ? 'mall-top-li' : ''}>
                            {item.name}
                        </li>
                    })}
                </ul>
            )}
        </div>
        {liflag === 1 ? (
            <Hotlist productList = {hotlist}/>
        ) : liflag === 2 ? (
            <Hotlist productList = {proprietarylist}/>
        ) : liflag === 3 ? (
            <div>
                <Hotlist productList = {ethlist}/>
                <div className='malleth'>
                    <h2>{t('h5.tomall.eth')}</h2>
                    <h3>一个为去中心化应用程序而生的<br/>全球开源平台。</h3>
                    <div className='malleth-title'>
                        <p>以太坊是互联网新时代的基础：</p>
                        <ol>
                            <li>内建货币与支付。</li>
                            <li>用户拥有个人数据主权。</li>
                            <li>人人都有权使用开放金融系统。</li>
                            <li>基于中立且开源的基础架构。</li>
                        </ol>
                        <p>以太坊主网于 2015 年上线，是世界领先的可编程区块链。</p>
                        <span>和其它区块链一样，以太坊也拥有原生加密货币，叫作 Ether (ETH)。 ETH 是一种数字货币， 和比特币有许多相同的功能。 它是一种纯数字货币，可以即时发送给世界上任何地方的任何人。 ETH 的供应不受任何政府或组织控制，它是去中心化且具稀缺性的。 全世界的人们都在使用 ETH 进行支付，或将其作为价值存储和抵押品。</span>
                        <p>但与其它区块链不同的是，以太坊可以做更多的工作。 以太坊是可编程的，开发者可以用它来构建不同于以往的应用程序。</p>
                        <span>这些去中心化的应用程序（或称“dapps”）基于加密货币与区块链技术， 因而值得信任，也就是说 dapps 一旦被“上传”到以太坊，它们将始终按照编好的程序运行。 这些应用程序可以控制数字资产，以便创造新的金融应用； 同时还是去中心化的，这意味着没有任何单一实体或个人可以控制它们。</span>
                        <p>目前，全世界有成千上万名开发者正在以太坊上构建应用程序、发明新的应用程序，其中有许多现在已经可以使用：</p>
                        <ol>
                            <li>密货币钱包：让你可以使用 ETH 或其他数字资产进行低成本的即时支付</li>
                            <li>金融应用程序：让你可以借贷、投资数字资产</li>
                            <li>去中心化市场：让你可以交易数字资产，甚至就现实世界事件的“预测”进行交易</li>
                            <li>游戏：你可以拥有游戏内的资产，甚至可以由此获得现实收益</li>
                            <li>以及更多，更多。</li>
                        </ol>
                        <p>以太坊社区是世界上最大最活跃的区块链社区。</p>
                        <span>它包括核心协议开发者、加密经济研究员、密码朋克、挖矿组织、ETH 持有者、应用开发者、普通用户、无政府主义者、财富 500 强公司，以及现在的你</span>
                        <p>没有公司或中心化的组织能够控制以太坊。</p>
                        <span> 一直以来，以太坊由多元化的全球性社区贡献者来协同进行维护和改善，社区成员耕耘于以太坊的方方面面，从核心协议到应用程序。 这个网站，就像以太坊的其他部分一样，是由一群人共同构建的，并将持续构建下去。</span>
                    </div>
                    <div className='malleth-img'>
                        <img src="https://ethereum.org/static/21c418bf00f87ff4d4b83e3499ddb391/0ee04/ethereum-logo-wireframe.png" alt=""/>
                    </div>
                </div>
            </div>
        ) : (
            <Activelist/>
        )}
    </div>
}
