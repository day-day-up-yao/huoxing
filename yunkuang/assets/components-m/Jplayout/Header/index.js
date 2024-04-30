import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './index.scss'
import jplogo from '../img/jplogotop.png'
// import { quattroWalletHost } from '../../../public/js'
export default () => {
    const location = useLocation()
    useEffect(() => {
        document.title = ''
    }, [])
    return <div className="layout-header-m">
        <div className="jp-header">
            {location && (location.pathname.indexOf('/') !== -1 || location.pathname.indexOf('jpindex') !== -1) ? <div className="jp-header-img">
                <img src={jplogo} alt="" />
            </div>
                : location && location.pathname.indexOf('jpaddress') !== -1 ? <div className="jp-header-title">{'受取'}</div>
                    : location && location.pathname.indexOf('jptransaction') !== -1 ? <div className="jp-header-title">{'取引履歴'}</div>
                        : location && location.pathname.indexOf('jpextract') !== -1 ? <div className="jp-header-title">{'送金'}</div>
                            : location && location.pathname.indexOf('jpsetting') !== -1 ? <div className="jp-header-title">{'設定'}</div>
                                : location && location.pathname.indexOf('jpsecurity') !== -1 ? <div className="jp-header-title">{'設定'}</div>
                                    : null
            }
        </div>
    </div>
}
