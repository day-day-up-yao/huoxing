import React from 'react'
import organl from '../../public/imgs/newpage/organl.png'
export default ({ t }) => {
    return <div className="organ">
        <a name="cantact"></a>
        <h3>{t('newpage.home.investment')}</h3>
        <div className="organ-con">
            <div className="organ-con-list">
                <img src={organl} alt=""/>
            </div>
        </div>
    </div>
}
