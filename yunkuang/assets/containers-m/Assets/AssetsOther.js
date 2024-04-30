import React, { useState } from 'react'

import walletimgs from '../../public/imgs/h5img/other/walletimg.png'
import hashimgs from '../../public/imgs/h5img/other/hashimg.png'
import gethashimgs from '../../public/imgs/h5img/other/gethashimg.png'
import OtherItem from './OtherItem'
import AssetsItem from './AssetItem'
import Popup from '../../components-m/Popup'
import ElectricPage from './Electric'

export default (props) => {
    const { eleinfo, assetdata, rate, extract, miningdata } = props
    const [closeflg, setCloseflg] = useState(false)
    const otherassets = [
        { name: '钱包资产估值 (BTC)', imgs: walletimgs, mine: '我的钱包', money: assetdata?.walletBalanceBTC, rate: assetdata?.walletBalanceUSDT, link: '/property' },
        { name: '算力资产初值 (BTC)', imgs: hashimgs, mine: '我的算力', money: assetdata?.minerTypeAssetBTC, rate: assetdata?.minerTypeAssetUSDT, link: '/mining' },
        { name: '可提取/收益估值 (BTC)', imgs: gethashimgs, mine: '提取收益', money: assetdata?.canExtra, rate: Number(assetdata?.canExtra) * rate, link: '*' }
    ]
    // 电费账户信息
    const elecdesc = {
        title: '电费账户',
        onedesc: '电费余额',
        twodesc: '每日电费',
        threedesc: '剩余天数',
        breadth: '30%',
        type: 0
    }
    // 理财资产信息
    const financialdesc = {
        title: '理财资产',
        onedesc: '持有资产估值',
        twodesc: '累计收益估值',
        threedesc: '',
        breadth: '46%',
        type: 1
    }
    const financialinfo = {
        availableAmount: '--',
        dailyCharge: '--'
    }
    return <div className="assets-bottom">
        <div className="assets-invidis">
            {otherassets.map((item, index) => {
                return <AssetsItem item={item} key={index} extractlist={extract} />
            })}
        </div>
        <div className="assets-other">
            <OtherItem
                maininfo={eleinfo}
                otherdesc={elecdesc}
                openFn={() => {
                    setCloseflg(true)
                }}
            />
            <OtherItem
                maininfo={financialinfo}
                otherdesc={financialdesc}
            />
        </div>
        {closeflg && <Popup
            children={
                <ElectricPage
                    children={
                        <OtherItem
                            maininfo={eleinfo}
                            otherdesc={elecdesc}
                            ispopup
                        />
                    }
                    orderdata={miningdata}
                    closeFn={() => {
                        setCloseflg(false)
                    }}
                />
            }
        />}
    </div>
}
