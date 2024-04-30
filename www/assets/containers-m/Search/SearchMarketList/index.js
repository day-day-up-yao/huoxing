import React from 'react'
import './index.scss'

const SearchMarketList = (props) => {
    const onBtnClick = (symbol) => {
        window.open(`https://token.huoxing24.com/${symbol}.html`, '_self')
    }

    return <div className="market-box">
        <div className="search-result">"<span>{props.searchKey}</span>{`共搜索出 ${props.cont.length} 条结果`}</div>
        <table>
            <thead>
                <tr>
                    <td>货币</td>
                    <td>当前价格(CNY)</td>
                    <td>24H涨跌榜</td>
                </tr>
            </thead>
            <tbody>
                {
                    props.cont.map((item, index) => {
                        return <tr key={index} onClick={() => onBtnClick(item.symbol)}>
                            <td><img src={item.icon} alt="" />{item.symbol}</td>
                            <td>{(props.price * item.price).toFixed(2)}</td>
                            <td>
                                <span className={item.change_percent * 100 > 0 ? 'rise' : 'fall'}>
                                    {item.change_percent * 100 > 0 ? '+' + (item.change_percent * 100).toFixed(2) : (item.change_percent * 100).toFixed(2)}%
                                </span>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default SearchMarketList
