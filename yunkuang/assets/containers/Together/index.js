import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import img1 from '../../public/imgs/flio/1.svg'
import img2 from '../../public/imgs/flio/2.svg'
import img3 from '../../public/imgs/flio/3.svg'
import img4 from '../../public/imgs/flio/4.svg'
import img5 from '../../public/imgs/flio/5.png'
import img7 from '../../public/imgs/flio/7.svg'
import jpone from '../../public/imgs/jptomalone.png'
import jptwo from '../../public/imgs/jptomaltwo.png'
import gameover from '../../public/imgs/gameover.png'
import listout from '../../public/imgs/listout.png'
import { formatTime, isJp } from '../../public/js/index'
import veryspeed from '../../public/imgs/speed.png'
import Fil from '../../public/imgs/newedition/ipfsicon.png'
import Ethimg from '../../public/imgs/newedition/ethicon.png'
import Btcimg from '../../public/imgs/newedition/btcicon.png'
import CountDown from '../../components/CountDown'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const { productList, ratemonynumber, activebanners } = useSelector(state => ({
        productList: state.product.list,
        ratemonynumber: state.public.ratemony,
        activebanners: state.product.activebanner
    }))
    const curTime = Date.parse(new Date())
    return <div className="together">
        <div className="together-top">
            <img src={activebanners} />
        </div>
        <div className="HomeConlist" id='#productlists'>
            <div className="HomeCon">
                {productList !== null ? (
                    Array.isArray(productList) && productList.map(function (item, index) {
                        return <a className="HomeCon_C" href={`/product/${item.id}`} key={item.id}>
                            <div className="down">
                                <div className="HomeCon_Limg">
                                    <img src={item.minerTypeInfo.pic} alt={item.name} />
                                </div>
                                <div className="HomeCon_Con">
                                    <div className="left">
                                        <h3>{item.name}</h3>
                                        {item.incomeCurrency === 'FIL' ? (
                                            <div className="left-center">
                                                <div className="HomeCon_R_C">
                                                    <p>{item.jointMiningType === 0 ? t('product.ptproduct') : item.jointMiningType === 2 ? t('product.activeproduct') : item.jointMiningType === 3 ? t('product.lhwk') : item.jointMiningType === 4 ? t('product.lhwk') : item.jointMiningType === 5 ? t('product.tgproduct') : ''}</p>
                                                    <p style={{ fontSize: '16px' }}>{item.jointMiningType === 3 ? t('product.xhb') : item.jointMiningType === 4 ? t('product.ablfc') : ''}</p>
                                                </div>
                                                <div className="HomeCon_R_C">
                                                    <p>{t('product.dayrate')}</p>
                                                    <p style={{ fontSize: '17px' }}>{t('product.jion')}</p>
                                                    {<p style={{ color: '#fff' }}>1111</p>}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="left-center">
                                                <div className="HomeCon_R_C">
                                                    <p>{item.jointMiningType === 0 ? t('product.ptproduct') : item.jointMiningType === 2 ? t('product.activeproduct') : item.jointMiningType === 3 ? t('product.lhwk') : item.jointMiningType === 4 ? t('product.lhwk') : item.jointMiningType === 5 ? t('product.tgproduct') : ''}</p>
                                                    <p style={{ fontSize: '16px' }}>{item.jointMiningType === 3 ? t('product.xhb') : item.jointMiningType === 4 ? t('product.ablfc') : ''}</p>
                                                </div>
                                                <div className="HomeCon_R_C">
                                                    <p>{t('product.dayrate')}</p>
                                                    <p>{(item.expectDailyIncome).toFixed(4)} {item.incomeCurrency}</p>
                                                    {item.incomeCurrency === 'ETH' ? (
                                                        isJp ? (<p>≈ ￥{(item.expectDailyIncome * ratemonynumber[1].rates.JPY).toFixed(0)}</p>) : (<p>≈ {(item.expectDailyIncome * ratemonynumber[1].rates.CNY).toFixed(0)} RMB</p>)
                                                    ) : (
                                                        isJp ? (<p>≈ ￥{(item.expectDailyIncome * ratemonynumber[0].rates.JPY).toFixed(0)}</p>) : (<p>≈ {(item.expectDailyIncome * ratemonynumber[0].rates.CNY).toFixed(0)} RMB</p>)
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        <h5>
                                            {/* {item.productType === 0 && item.cycle}
                                            {item.productType === 1 && '永久产权'}
                                            {item.productType === 2 && `${item.cycle}天使用权`} */}
                                            {item.cycle === -1 ? '算力预约金' : item.productType === 1 ? t('header.nav.permanent') : item.productType === 2 ? `${item.cycle}${t('product.makeday')}` : item.cycle}
                                        </h5>
                                    </div>
                                </div>
                                <div className="HomeCon_right">
                                    <button className="HomeCon_R_B">{t('product.buy')}</button>
                                </div>
                            </div>
                            <div className="HomeCon_C_bottom">
                                <div className="HomeCon_C_bottom_left">
                                    <p>{item.minerTypeInfo.manufacturer}</p>
                                    <p>{item.minerTypeInfo.desc}</p>
                                </div>
                                <div className="HomeCon_C_bottom_center">
                                    {/* <div className="HomeCon_B">
                                        <div className="HomeCon_Btop">
                                            <p>已购{(item.totalNumber - item.leftNumber) >= 0 ? (item.cycle === -1 ? Number(item.totalNumber - item.leftNumber) * 5 : (item.totalNumber - item.leftNumber)) : 0}{item.incomeCurrency === 'FIL' ? item.cycle === 0 ? '台' : 'T' : '台'}</p>
                                            <p>总量{item.cycle === -1 ? Number(item.totalNumber) * 5 : item.totalNumber}{item.incomeCurrency === 'FIL' ? item.cycle === 0 ? '台' : 'T' : '台'}</p>
                                        </div>
                                        <div className="HomeCon_Bcon">
                                            <div className="HomeCon_Bcons" style={{ width: `${(item.totalNumber - item.leftNumber) / item.totalNumber * 100}%` }}></div>
                                        </div>
                                    </div> */}
                                    <div className="count-down-item">
                                        {item.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.beginTime} />{t('product.start')}</div> : <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.endTime} />{t('product.over')}</div>}
                                    </div>
                                </div>
                                <div className="HomeCon_C_bottom_right">
                                    <p>
                                        <span className="HomeCon_C_bottom_right_frist">{t('product.yl')}</span>
                                        <span className="HomeCon_C_bottom_right_spans">{isJp ? `${item.priceShow} USDT` : `￥` + item.priceShow}</span>
                                    </p>
                                    <p className="HomeCon_C_bottom_right_span">
                                        <span>{isJp ? `${item.price} USDT` : `￥` + item.price}</span>
                                        <span className="HomeCon_C_bottom_right_spanstwo">{t('product.offers')}</span>
                                    </p>
                                </div>
                            </div>
                            <div className='HomeCon-over' style={{ display: item.leftNumber === 0 ? 'block' : new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? 'block' : 'none' }}>
                                <div className="HomeCon-over-img">
                                    <img src={item.leftNumber === 0 ? listout : new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? gameover : ''} />
                                </div>
                            </div>
                            {item.jointMiningType === 3 ? item.incomeCurrency === 'BTC' ? (
                                <div className='HomeCon-overs'>
                                    <div className="HomeCon-over-imgs">
                                        <img src={veryspeed} />
                                    </div>
                                </div>
                            ) : '' : (item.incomeCurrency === 'BTC') ? (
                                <div className='HomeCon-overs'>
                                    <div className="HomeCon-over-smalimgs">
                                        <img src={Btcimg} />
                                    </div>
                                </div>
                            ) : ''}
                            {(item.incomeCurrency === 'FIL') ? (
                                <div className='HomeCon-overs'>
                                    <div className="HomeCon-over-smalimgs">
                                        <img src={Fil} />
                                    </div>
                                </div>
                            ) : ''}
                            {(item.incomeCurrency === 'ETH') ? (
                                <div className='HomeCon-overs'>
                                    <div className="HomeCon-over-smalimgs">
                                        <img src={Ethimg} />
                                    </div>
                                </div>
                            ) : ''}
                        </a>
                    })
                ) : ('')}
            </div>
        </div>
        <div>
            {isJp ? (
                <div className="product-rule-intro">
                    <div className="product-rule-next" style={{ display: 'block' }}>
                        <div className="product-rule-next-r">
                            <h3>Global Cloud Storag</h3>
                            <p>The datasphere will grow to 175 zettabytes by 2025, according to IDC estimates. A stack of enough 10-terabyte hard drives to store all that data would literally reach the moon (1 zettabyte equals 1 trillion gigabytes).</p>
                            <p>Today’s cloud storage solutions provide fast, highly scalable, and relatively inexpensive access to data storage. But the price and offering for storage on these cloud storage platforms is set by the small number of companies that provide the service. And the cost of these storage solutions is bundled with the cost of using the company’s proprietary software, APIs, data infrastructure, and servers. That means storage buyers can’t access storage directly and efficiently, but instead have to pay for a host of additional services and features. By some estimates, companies waste $62 billion each year paying for more storage and services than they need when transacting with big tech platforms for their proprietary cloud storage solutions. </p>
                            <p>There are also relatively few freedoms when choosing a cloud storage provider. Migrating data from one provider to another can be slow, laborious, and costly, and interoperability is not guaranteed.</p>
                            <div className="product-rule-next-limg">
                                <img src={jpone} alt=""/>
                            </div>
                        </div>
                        <div className="product-rule-next-r">
                            <h3>An Economy Enabled by Novel Cryptography</h3>
                            <p>Filecoin provides a blockchain-based marketplace that promises to revolutionize the global storage economy. The Filecoin marketplace delivers a totally new and secure way for anyone in the world to buy and sell storage. We’re excited to share an overview of how the storage economy works on the Filecoin Network.</p>
                            <p>Fundamentally, marketplaces are information processing systems that use competitive pricing to allocate resources. Filecoin wants to create the best global marketplace for storage by directly connecting storage clients and providers on a permissionless, decentralized marketplace where storage is commoditized.</p>
                            <p>Storage on the Filecoin network decouples hard drive space from many of the commonly bundled additional services provided by other cloud storage providers. The protocol enables buyers and sellers to trade in storage space directly. As a result, clients and miners are free to negotiate prices and features. Filecoin provides the secure network and token that clients and miners can use to enter storage contracts in a peer-to-peer fashion. Unlike traditional storage providers, Filecoin bundles one unique service: cryptographically verifying, every single day, that your data is still there. This verification allows anyone to permissionlessly offer storage in the marketplace while still enabling clients to trust that their data will be stored on the network.</p>
                            <p>We think Filecoin’s unique storage marketplace represents the future of the storage economy.</p>
                        </div>
                        <div className="product-rule-next-r">
                            <h3>What it Means to Participate in the Filecoin Economy</h3>
                            <p>Filecoin’s mission is to create a decentralized, efficient, and robust foundation for humanity’s information. The economic design of the Filecoin network aims to align incentives and pragmatically reward useful and reliable storage with as few rules as possible. The many mechanisms and stimuli of the protocol are designed carefully with a single goal: If the participants in the network’s economy pursue their own self-interests, the network should grow and improve.</p>
                            <p>In the first iteration of the protocol, storage miners are the core service providers on Filecoin, with other types of mining in the future. Since Filecoin is a global network that everyone can use, the storage mining demographic is diverse – including individuals, organizations, and companies. Storage miners both compete and collaborate in the Filecoin Network; they compete with each other for storage deals and block rewards, and they collaborate with each other by growing the Filecoin Economy and maintaining the blockchain.</p>
                        </div>
                        <div className="product-rule-next-r">
                            <h3>Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency</h3>
                            <p>Filecoinʼs token distribution is broken down as follows. A maximum of 2,000,000,000 filecoin will ever be created, referred to as FIL_BASE. Of the Filecoin genesis block allocation, 10% of FIL_BASE were allocated for fundraising, of which 7.5% were sold in 2017 as 257 million dollars, and the 2.5% remaining were allocated for ecosystem development, future fundraising, and/or other uses described in 2017. 15% of FIL_BASE were allocated to Protocol Labs (including 4.5% for the PL team & contributors), and 5% were allocated to the Filecoin Foundation. The other 70% of all tokens were allocated to miners, as mining rewards, “for providing data storage service, maintaining the blockchain, distributing data, running contracts, and more.” There are multiple types of mining that these rewards will support over time; therefore, this allocation has been subdivided to cover different mining activities.</p>
                            <div className="product-rule-next-limg">
                                <img src={jptwo} alt=""/>
                            </div>
                        </div>
                        <div className="product-rule-next-r">
                            <h3>Filecoin miners are dedicated to creating a sustainable, long-term network where profit is earned through providing a truly valuable service to humanity.</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="product-rule-conter">
                        <img src={img5} alt=""/>
                    </div>
                    <div className="product-rule-intro">
                        <h2 style={{ margin: '0' }}>世界各地的数据中心和硬盘驱动器中，大量的存储空间处于闲置状态。</h2>
                        <div className="product-rule-next">
                            <div className="product-rule-next-l">
                                <div className="product-rule-next-limg">
                                    <img src={img1} alt=""/>
                                </div>
                                <h3>通过托管文件<br/>获得 Filecoin</h3>
                                <p>通过成为 Filecoin 矿工，让您未使用的存储发挥作用。使用 Filecoin 挖掘软件在全球 Filecoin 市场上完成存储请求和托管文件而获得报酬。</p>
                            </div>
                            <div className="product-rule-next-l">
                                <div className="product-rule-next-limg">
                                    <img src={img2} alt=""/>
                                </div>
                                <h3>用 Filecoin 兑换美元、<br/>BTC、ETH 等</h3>
                                <p>Filecoin 将在多个交易所进行交易，并得到多个加密货币钱包的支持，使您可以轻松地将 Filecoin 兑换成美元、比特币和以太等其他货币。</p>
                            </div>
                            <div className="product-rule-next-l">
                                <div className="product-rule-next-limg">
                                    <img src={img3} alt=""/>
                                </div>
                                <h3>以极具竞争力的价格可靠地<br/>存储文件</h3>
                                <p>客户可以调整他们的存储策略，以满足他们在冗余、检索速度和成本方面的需求。Filecoin 存储和检索市场让矿商竞相以最优惠的价格向您提供灵活的选择。</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-rule-intro">
                        <h2>Filecoin<br/>新区块链，新突破</h2>
                        <div className="product-rule-intro-imgs">
                            <img src={img4} alt=""/>
                            <div className="product-rule-intro-imgs-pos">
                                <h3>数据存储在安全的扇区</h3>
                                <p>强大的端到端加密。</p>
                                <p>纠删码，用于冗余和自修复。</p>
                                <h3>有竞争力的存储市场</h3>
                                <p>询价和报价公正透明。</p>
                                <p>全世界最好的价格和保证。</p>
                                <h3>去中心化和可验证的存储</h3>
                                <p>复制证明用于验证存储。</p>
                                <p>时空证明用于采区块。</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-rule-intro-last">
                        <img src={img7} alt=""/>
                    </div>
                    <p className="product-rule-intro-last-p"><a href="https://filecoin.io/filecoin.pdf">Filecoin 白皮书</a></p>
                </div>
            )}
        </div>
    </div >
}
