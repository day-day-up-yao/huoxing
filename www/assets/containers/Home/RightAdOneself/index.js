import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

export default () => {
    const { adOneselfData } = useSelector((state) => ({
        adOneselfData: state.home.adOneselfData
    }))

    return (
        <div className="right-ad-oneself" style={{ display: adOneselfData.length > 0 ? 'block' : 'none' }}>
            <div className="right-ad-oneself-container">
                {
                    adOneselfData && adOneselfData.map((item, index) => {
                        return (
                            <div className="right-ad-oneself-list clearfix" rel="nofollow" key={index}>
                                <a className="right-ad-oneself-icon" href={item.url} target="_blank" >
                                    <img src={item.img_url} title={item.title} alt={item.title} />
                                </a>
                                <div className="right-ad-oneself-text" title={item.title}>
                                    <div className="right-ad-oneself-text-sp">
                                        <a href={item.url} target="_blank">
                                            <h5>{item.title}</h5>
                                        </a>
                                        <a className={`right-ad-oneself-app-btn ${item.appUrl === '' ? 'right-ad-oneself-text-sp-off' : ''}`} href={item.appUrl} target="_blank" >
                                            {item.appType}
                                            <div className="right-ad-oneself-app-btn-img"></div>
                                        </a>
                                    </div>
                                    <a href={item.url} target="_blank">
                                        <p>{item.description}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
