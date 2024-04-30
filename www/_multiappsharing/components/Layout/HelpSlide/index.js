import React from 'react'

import './index.scss'

import { mixUrl } from '../../../public/index'
import qrcode from '../../../public/img/qrcode-app-download.png'

export default () => <div className="help-slide">
    <a className="report" href="http://huoxing24.mikecrm.com/M7wAlhp" target="_blank" title="商务合作">
        <span>商务合作</span>
    </a>
    <a className="finance" href="http://cqfof-exchange.mikecrm.com/PL5P0vy" target="_blank" title="寻求融资">
        <span>寻求融资</span>
    </a>
    <a className="appdownload" href={mixUrl.main('/download')} target="_blank" title="APP下载">
        <span>APP下载</span>
        <div className="qrcode">
            <img src={qrcode} alt="APP下载"/>
            <em>扫描下载APP</em>
        </div>
    </a>
</div>
