import React, { useState, useEffect } from 'react'
import { queryParam } from '../../public/js'
import './index.scss'
export default () => {
    const [listname, setListname] = useState('质押借币订单')
    const [flag, setFlag] = useState(false)
    const [appflage, setAppflage] = useState(false)
    const [selecnum, setSelecnum] = useState(1)
    const Selectlist = [
        { name: '质押借币订单', key: '1', link: '/lend/order' },
        { name: '还款历史', key: '2', link: '/lend/refundhistory' },
        { name: '质押率调整历史', key: '3', link: '/lend/pledgehistory' },
        { name: '平仓历史', key: '4', link: '/lend/unwindhistory' },
        { name: '质押借币历史', key: '5', link: '/lend/borrowhistory' }
    ]
    useEffect(() => {
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        if (window.location.pathname === '/lend/refundhistory') {
            setListname('还款历史')
            return
        }
        if (window.location.pathname === '/lend/pledgehistory') {
            setListname('质押率调整历史')
            return
        }
        if (window.location.pathname === '/lend/unwindhistory') {
            setListname('平仓历史')
            return
        }
        if (window.location.pathname === '/lend/borrowhistory') {
            setListname('质押借币历史')
        }
    }, [])
    return <div className="css-u1f2do">
        <div className="css-17ut5t">
            <div className="css-1sqb4gc" onClick={() => { setFlag(true) }}>
                <div className="css-vurnku">{listname}</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="css-yw03l1"
                >
                    <path d="M16 9v2l-4 4.24L8 11V9h8z"></path>
                </svg>
            </div>
            <div
                className="css-ex9vgv"
                data-popper-reference-hidden="false"
                data-popper-escaped="false"
                data-popper-placement="bottom-start"
                style={{ display: flag === true ? 'block' : '' }}
            >
                <div className="css-1202o9n">
                    {Selectlist.map((item, index) => {
                        return <div className={selecnum === item.key ? 'css-cwrr6c' : 'css-14x3dm0'} key={item.key} onClick={() => {
                            setListname(item.name)
                            setFlag(false)
                            setSelecnum(item.key)
                            if (appflage === true) {
                                window.location.href = `${item.link}?channel=111`
                            } else {
                                window.location.href = item.link
                            }
                        }}>{item.name}</div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
