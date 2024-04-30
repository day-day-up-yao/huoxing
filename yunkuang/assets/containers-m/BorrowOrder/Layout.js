import React from 'react'
import './index.scss'
import Leftnav from './Leftnav'
export default ({ children }) => <div id="__APP">
    <div className="css-tq0shg">
        <main className="css-1wr4jig">
            <main className="css-xry4yv">
                <Leftnav/>
                <div className="css-1wr4jig">
                    <div className="css-6ul7zn">
                        <div className="with-scroll css-ag07bg">
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    </div>
</div>
