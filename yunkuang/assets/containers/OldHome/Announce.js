import React from 'react'
import unceimg from '../../public/imgs/newedition/announces.png'
import acounceall from '../../public/imgs/newpage/acounceall.png'
export default ({ announcelist }) => {
    return <div className="announce">
        <div className="announce-con">
            <div className="announce-con-l">
                <img src={unceimg} alt=""/>
            </div>
            <div className="announce-con-r">
                {announcelist?.msgList.map((item, index) => {
                    return <div className="announce-item" key={index}>
                        <a href={`/anmessage/${item.id}`} target="_blank">
                            <span>{item.title}</span>
                            <span>/</span>
                        </a>
                    </div>
                })}
            </div>
            <div className="announce-con-img">
                <a href="/announcement" target="_blank">
                    <img src={acounceall} alt=""/>
                </a>
            </div>
        </div>
    </div>
}
