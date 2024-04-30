import React from 'react'
// import { useSelector } from 'react-redux'
import './index.scss'
// import img1 from '../../public/imgs/flio/1.svg'
// import img2 from '../../public/imgs/flio/2.svg'
// import img3 from '../../public/imgs/flio/3.svg'
// import img7 from '../../public/imgs/flio/7.svg'
// import img6 from '../../public/imgs/flio/6.png'
// import Hotlist from '../../components-m/Businesslist/index'
import Activelist from '../../components-m/Activelist/index'
// import Toast from '../../components/Toast'
export default (props) => {
    // const { productList, activebanners } = useSelector(state => ({
    //     productList: state.product.list,
    //     activebanners: state.product.activebanner
    // }))
    // const dispatch = useDispatch()
    // const [bannerimg, setBannerimg] = useState('')
    // useEffect(() => {
    //     dispatch.product.inviteshareInfo({
    //         picType: 19
    //     }).then((res) => {
    //         if (res.code === 0) {
    //             setBannerimg(res.data[0].originalPic)
    //         } else {
    //             Toast.info(res.msg)
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //         Toast.info('图片获取错误')
    //     })
    // }, [])
    return <div className="home-page-m-t">
        <Activelist />
        {/* <div className="together-top">
            <img src={activebanners} />
        </div>
        <div className="HomeNew_C-m">
            <a name='productlist'></a>
            <div className="HomeNew_C_y" id='productlist'>
                <a name='productlists'></a>
                <Hotlist productList = {productList}/>
            </div>
        </div>
        <div className="product-rule-conter">
            <img src={img6} alt=""/>
        </div>
        <div className="product-rule-intro">
            <h2 className="product-rule-intro-h2">世界各地的数据中心和硬盘驱动器中<br/>大量的存储空间处于闲置状态</h2>
            <div className="product-rule-next">
                <div className="product-rule-next-l">
                    <div className="product-rule-next-limg">
                        <img src={img1} alt=""/>
                    </div>
                    <h3>通过托管文件获得 Filecoin</h3>
                    <p>通过成为 Filecoin 矿工，让您未使用的存储发挥作用。使用 Filecoin 挖掘软件在全球 Filecoin 市场上完成存储请求和托管文件而获得报酬。</p>
                </div>
                <div className="product-rule-next-l">
                    <div className="product-rule-next-limg">
                        <img src={img2} alt=""/>
                    </div>
                    <h3>用 Filecoin 兑换美元、BTC、ETH 等</h3>
                    <p>Filecoin 将在多个交易所进行交易，并得到多个加密货币钱包的支持，使您可以轻松地将 Filecoin 兑换成美元、比特币和以太等其他货币。</p>
                </div>
                <div className="product-rule-next-l">
                    <div className="product-rule-next-limg">
                        <img src={img3} alt=""/>
                    </div>
                    <h3>以极具竞争力的价格可靠地存储文件</h3>
                    <p>客户可以调整他们的存储策略，以满足他们在冗余、检索速度和成本方面的需求。Filecoin 存储和检索市场让矿商竞相以最优惠的价格向您提供灵活的选择。</p>
                </div>
            </div>
        </div>
        <div className="product-rule-intro">
            <h2>Filecoin<br/>新区块链，新突破</h2>
            <div className="product-rule-intro-imgs">
                <img src="https://filecoin.io/images/breakthroughs-mobile.svg" alt=""/>
            </div>
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
        <div className="product-rule-intro-last">
            <img src={img7} alt=""/>
        </div> */}
        {/* <div className="product-rule-intro-last-p"><a href="https://filecoin.io/filecoin.pdf">Filecoin 白皮书</a></div> */}
    </div>
}
