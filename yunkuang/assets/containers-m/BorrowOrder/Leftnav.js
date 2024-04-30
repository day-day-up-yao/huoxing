import React, { useState, useEffect } from 'react'
import { queryParam, isCoco } from '../../public/js'
import './index.scss'
export default () => {
    const [pitch, setPitch] = useState(0)
    const [appflage, setAppflage] = useState(false)
    const Recordlist = [
        { name: '质押借币订单', link: '/lend/order', type: '1' },
        { name: '还款历史', link: '/lend/refundhistory', type: '2' },
        { name: '质押率调整历史', link: '/lend/pledgehistory', type: '3' },
        { name: '平仓历史', link: '/lend/unwindhistory', type: '4' },
        { name: '质押借币历史', link: '/lend/borrowhistory', type: '5' }
    ]
    const CocoRecordlist = [
        { name: '质押借币订单', link: '/coco/order', type: '1' },
        { name: '还款历史', link: '/coco/refundhistory', type: '2' },
        { name: '质押率调整历史', link: '/coco/pledgehistory', type: '3' },
        { name: '平仓历史', link: '/coco/unwindhistory', type: '4' },
        { name: '质押借币历史', link: '/coco/borrowhistory', type: '5' }
    ]
    useEffect(() => {
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        if (isCoco()) {
            if (window.location.pathname === '/coco/refundhistory') {
                setPitch(1)
                return
            }
            if (window.location.pathname === '/coco/pledgehistory') {
                setPitch(2)
                return
            }
            if (window.location.pathname === '/coco/unwindhistory') {
                setPitch(3)
                return
            }
            if (window.location.pathname === '/coco/borrowhistory') {
                setPitch(4)
            }
        } else {
            if (window.location.pathname === '/lend/refundhistory') {
                setPitch(1)
                return
            }
            if (window.location.pathname === '/lend/pledgehistory') {
                setPitch(2)
                return
            }
            if (window.location.pathname === '/lend/unwindhistory') {
                setPitch(3)
                return
            }
            if (window.location.pathname === '/lend/borrowhistory') {
                setPitch(4)
            }
        }
    }, [])
    return <div>
        <div className="css-3miali">
            <div className="css-uliqdc">
                <div className="css-1jm49l2">
                    <a data-bn-type="link" className="css-lp670x"
                    ><div className="css-10j588g">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="css-akdi7f"
                            >
                                <path
                                    d="M18.731 13.827a1.741 1.741 0 011.456.518c.68.68.792 1.823.305 2.758-1.266 2.438-4.209 4.667-8.034 4.878-3.062.17-6.148-.807-9.24-2.902l1.008-1.486c2.782 1.887 5.488 2.743 8.133 2.597 3.135-.174 5.547-2.001 6.541-3.914.143-.274.114-.568.018-.664-.041-.04-.182-.026-.581.337-2.667 2.498-6.129 3.072-10.251 1.75l.547-1.71c1.279.41 2.458.612 3.545.607-2.398-1.845-5.124-1.907-8.335-.195L3 14.818c.463-.249.94-.471 1.427-.668a8.242 8.242 0 01-1.005-3.962C3.422 5.667 7.037 2 11.496 2s8.074 3.667 8.074 8.188a8.245 8.245 0 01-.839 3.639zm-12.549-.229c2.97-.666 5.668.126 8.01 2.369 2.14-1.036 3.584-3.257 3.584-5.778 0-3.538-2.817-6.395-6.28-6.395s-6.28 2.858-6.28 6.394c0 1.23.34 2.403.966 3.41z"
                                    fill="currentColor"
                                ></path>
                                <path d="M9.5 9.5l2-2 2 2-2 2-2-2z" fill="currentColor"></path>
                            </svg>
                            <div data-bn-type="text" className="css-1n0484q">质押借币</div>
                        </div>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="css-9kkwqg"
                            width='30'
                            height='30'
                        >
                            <path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> */}
                    </a>
                </div>
                <div className="css-gnqbje">
                    <div className="css-uliqdc">
                        {isCoco() ? (
                            CocoRecordlist.map((item, index) => {
                                return <div
                                    key={index}
                                    href={item.href}
                                    rel="noopener noreferrer"
                                    className={pitch === index ? 'css-zdk98e' : 'css-1kql3w3' }
                                    onClick={() => {
                                        setPitch(index)
                                        if (appflage === true) {
                                            window.location.href = `${item.link}?channel=111`
                                        } else {
                                            window.location.href = item.link
                                        }
                                    }}
                                >
                                    <div className="css-10j588g">
                                        <div data-bn-type="text" className="css-1ex54t0">{item.name}</div>
                                    </div>
                                </div>
                            })
                        ) : (
                            Recordlist.map((item, index) => {
                                return <div
                                    key={index}
                                    href={item.href}
                                    rel="noopener noreferrer"
                                    className={pitch === index ? 'css-zdk98e' : 'css-1kql3w3' }
                                    onClick={() => {
                                        setPitch(index)
                                        if (appflage === true) {
                                            window.location.href = `${item.link}?channel=111`
                                        } else {
                                            window.location.href = item.link
                                        }
                                    }}
                                >
                                    <div className="css-10j588g">
                                        <div data-bn-type="text" className="css-1ex54t0">{item.name}</div>
                                    </div>
                                </div>
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
