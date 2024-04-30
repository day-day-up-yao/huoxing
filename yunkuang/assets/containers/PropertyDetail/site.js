import React from 'react'
import { useTranslation } from 'react-i18next'
import { formatTime } from '../../public/js/index'
import None from './None/index'
export default ({ znlist, token }) => {
    const { t } = useTranslation()
    const rechargelist = [t('property.mony'), t('property.time'), t('property.moneynum'), t('property.zt')]
    return <div className='recharge-list'>
        <div className="recharge-top">
            {rechargelist.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </div>
        <div className="recharge-bottom">
            {znlist.length > 0 ? (
                znlist.map((item, index) => {
                    return <div className="item" key={index}>
                        <div className="item-left">
                            {token.length > 0 && token.filter((itm) => { return itm.tokenId === item.tokenName }).length > 0 && <img src={token.filter((itm) => { return itm.tokenId === item.tokenName })[0].iconUrl} alt=""/>}
                            <span>{item.tokenName}</span>
                        </div>
                        <div>{formatTime(Number(item.created), 'yyyy-MM-dd hh:mm')}</div>
                        <div>{item.change}</div>
                        <div>
                            <i className=''>{item.flowType}</i>
                        </div>
                    </div>
                })
            ) : (
                <None/>
            )}
        </div>
    </div>
}
