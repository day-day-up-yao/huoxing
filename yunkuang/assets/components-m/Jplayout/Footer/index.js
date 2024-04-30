import React, { useEffect } from 'react'
import './index.scss'
import '../iconfont/font_1805885_nybvicap8rf/iconfont.css'
import Jbtn1 from '../img/jbtn1.png'
import Jbtn2 from '../img/jbtn2.png'
import Jbtn3 from '../img/jbtn3.png'
import Jbtn4 from '../img/jbtn4.png'
import Jbtn5 from '../img/jbtn5.png'
export default (props) => {
    useEffect(() => {
        document.title = ''
    }, [])
    const tabBtn = [
        { name: 'ダッシュボード', href: '/jpindex', icon: 'icon-yemian-copy-copy', img: Jbtn5, imgs: Jbtn5 },
        { name: '取引履歴', href: '/jptransaction', icon: 'icon-shangcheng', img: Jbtn1, imgs: Jbtn1 },
        { name: '送金', href: '/jpextract', icon: 'icon-zixun', img: Jbtn2, imgs: Jbtn2 },
        { name: '受取', href: '/jpaddress', icon: 'icon-Icon_wode-copy', img: Jbtn4, imgs: Jbtn4 },
        { name: '設定', href: '/jpsetting', icon: 'icon-Icon_wode-copy', img: Jbtn3, imgs: Jbtn3 }
    ]
    return <div className="layout-footer-jpm">
        <div className="footer-con">
            <ul>
                {tabBtn.map((item, index) => {
                    return <li key={index} onClick={() => { window.location.href = item.href }} >
                        <p>
                            <img src={item.img} />
                        </p>
                        <p>{item.name}</p>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
