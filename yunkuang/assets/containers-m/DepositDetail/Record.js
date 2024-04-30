import React from 'react'
import moment from 'moment'
// import { numToCeil } from '../../public/js/index'
import './index.scss'
export default ({ setClose, close, recordlist, baseinfo, setMymoney, dispatch, t }) => {
    const allmoney = recordlist.rrevenue['total-invest'] // 总投入
    // const principalper = (1 / recordlist.prodhead.distributes) * 100 / 100 // 首次本金兑付百分比
    // const earingper = recordlist.prodhead['aor-rate'] / recordlist.prodhead.distributes // 首次兑付收益百分比
    return <div className="deposit-record" style={{ display: close ? 'flex' : '' }}>
        <div className="record">
            <div className="record-top">
                <div className="lend-position-con-close" onClick={() => {
                    dispatch.product.checkC2cBanlance({
                        token_ids: baseinfo.purchaseTokenName
                    }).then((res) => {
                        if (res.length > 0) {
                            setMymoney(res[0].free)
                        } else {
                            setMymoney(0)
                        }
                        setClose(false)
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
                <div className="record-top-logo">
                    <img src={recordlist.prodhead ? recordlist.prodhead.logo : ''} alt=""/>
                </div>
                <h3>{recordlist.prodhead ? recordlist.prodhead.title : ''}</h3>
                <div className="record-top-annual">
                    <p>
                        <span>{recordlist.prodhead ? recordlist.prodhead['aor-rate'] * 100 : ''}</span>
                        <span>%</span>
                    </p>
                    <p>{t('record.gdnh')}</p>
                </div>
                <div className="record-top-num">
                    <div className="record-top-num-l">
                        <span>{t('record.startjx')}</span>
                        <span>{moment(recordlist.prodhead.timepoints.split('|')[1] * 1).format('YYYY-MM-DD')}</span>
                    </div>
                    <div className="record-top-num-l">
                        <span>{t('record.alltr')}</span>
                        <span>{allmoney}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                    </div>
                    <div className="record-top-num-l">
                        <span>{t('record.alllx')}</span>
                        <span>{recordlist.rrevenue ? recordlist.rrevenue['total-interest'] : ''}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                    </div>
                </div>
                <div className="earnlist">
                    {recordlist.timenodelist.length > 0 ? (
                        recordlist.timenodelist.map((itm, idx) => {
                            return <div className="earnlist-item" key={idx}>
                                <div className="item-time">{moment(Number(itm.timestamp)).format('YYYY-MM-DD')}</div>
                                <div className="item-text">{itm.description}</div>
                            </div>
                        })
                    ) : ('')}
                </div>
            </div>
            {/* <div className="record-bottom">
                <div className="record-bottom-line"></div>
                <div className="record-bottom-posit">
                    <div className="record-bottom-time">
                        <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[0] * 1).format('YYYY-MM-DD')}</div>
                        <div className="record-bottom-posit-c"></div>
                        <div className="record-bottom-posit-r">
                            <p>{t('record.startsg')}{recordlist.rrevenue ? recordlist.rrevenue['total-invest'] : ''}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</p>
                        </div>
                    </div>
                    <div className="record-bottom-time">
                        <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[1] * 1).format('YYYY-MM-DD')}</div>
                        <div className="record-bottom-posit-c"></div>
                        <div className="record-bottom-posit-r">
                            <p>{t('record.startjx')}</p>
                        </div>
                    </div>
                    <div className="record-bottom-time">
                        <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[2] * 1).format('YYYY-MM-DD')}</div>
                        <div className="record-bottom-posit-c"></div>
                        <div className="record-bottom-posit-r">
                            <p>{t('record.firstdf')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}</p>
                            <p>{(principalper * 100).toFixed(0)}%{t('record.bj')} + {earingper * 100}%{t('record.sy')}</p>
                        </div>
                    </div>
                    {recordlist.prodhead.timepoints.split('|')[3] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[3] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.second')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 2).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 2}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 2, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                    {recordlist.prodhead.timepoints.split('|')[4] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[4] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.send')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 3).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 3}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 3, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                    {recordlist.prodhead.timepoints.split('|')[5] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[5] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.fourth')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}，{t('record.alldf')}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 4).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 4}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 4, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                    {recordlist.prodhead.timepoints.split('|')[6] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[6] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.fourth')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}，{t('record.alldf')}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 4).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 4}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 4, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                    {recordlist.prodhead.timepoints.split('|')[7] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[7] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.fourth')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}，{t('record.alldf')}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 4).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 4}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 4, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                    {recordlist.prodhead.timepoints.split('|')[8] && (
                        <div className="record-bottom-time">
                            <div className="record-bottom-posit-l">{moment(recordlist.prodhead.timepoints.split('|')[8] * 1).format('YYYY-MM-DD')}</div>
                            <div className="record-bottom-posit-c"></div>
                            <div className="record-bottom-posit-r">
                                <p>{t('record.fourth')}{t('record.dufcs')}{numToCeil(allmoney * (principalper) + earingper * allmoney, 2)}{baseinfo.purchaseTokenName}，{t('record.alldf')}</p>
                                <p>{t('record.lj')}{(principalper * 100 * 4).toFixed(0)}%{t('record.bj')} + {earingper * 100 * 4}%{t('record.sy')}，{t('record.hj')}{numToCeil(allmoney * (principalper + earingper) * 4, 2)}{baseinfo.purchaseTokenName}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    </div>
}
