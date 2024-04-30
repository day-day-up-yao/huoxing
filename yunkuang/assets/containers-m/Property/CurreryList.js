import React from 'react'
// import { useTranslation } from 'react-i18next'

export default (props) => {
    const { symbollist, Rate } = props
    // console.log(symbollist)
    // console.log(Rate)
    return <div className="currery-list">
        <ul>
            {symbollist.map((item, index) => {
                const usdtrate = Rate.length > 0 ? Number(Rate.find((itm) => (itm.token === item.tokenName)).rates.USDT) * Number(item.free ? item.free : 0) : ''
                return <li key={index}>
                    <a href={`/property/${item.tokenId}`}>
                        <div className="left">
                            <img src={item.iconUrl} alt=""/>
                            <div className="left-r">
                                <p>{item.tokenName}</p>
                                <p>{item.tokenFullName}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p>{item.free ? Number(item.free).toFixed(8) : 0}</p>
                            {Rate.length > 0 && <p>≈ $ {usdtrate}</p>}
                        </div>
                    </a>
                </li>
            })}
        </ul>
    </div>
}
