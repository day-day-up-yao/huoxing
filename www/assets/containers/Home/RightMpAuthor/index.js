import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Avatar, AuthorName } from 'multiComps/AuthorInfo'
import RightLoadMoreBtn from 'multiComps/Home/RightLoadMoreBtn'
import { mixUrl } from 'multiPublic'

import './index.scss'

import nextIcon from '../image/right-author-next.png'

export default () => {
    const { t } = useTranslation()
    const { mpAuthorData } = useSelector((state) => ({
        mpAuthorData: state.home.mpAuthorData
    }), shallowEqual)

    return (
        <div className="right-mp-author right-mp-author-add-more" style={{ display: mpAuthorData.length > 0 ? 'block' : 'none' }}>
            <div className="right-mp-author-title">
                MarsBit {t('usercenter_column_author')}
                <div className="right-mp-author-next-btn">
                    <img className="right-mp-author-next-btn-img" src={nextIcon} />
                    {t('usercenter_change_batch')}
                </div>
            </div>
            <div className="right-mp-author-list">
                <Swiper preventClicks={true} loop={true}
                    navigation={{ nextEl: '.right-mp-author-next-btn' }}
                >
                    {
                        mpAuthorData && mpAuthorData.map((item, index) => {
                            return (
                                <SwiperSlide className="swiper-slide clearfix" key={index}>
                                    {
                                        item.map((itemEle, indexEle) => {
                                            return (
                                                <div className="right-mp-author-item" key={indexEle}>
                                                    {/* <img className="right-mp-author-item-img" src={itemEle.iconUrl} title={itemEle.nickName} alt={itemEle.nickName} /> */}
                                                    <Avatar className="right-mp-author-item-img" authorInfo={itemEle} />
                                                    <div className="right-mp-author-item-right">
                                                        <AuthorName className="right-mp-author-item-title" authorInfo={itemEle} />
                                                        <a className="right-mp-author-item-text"
                                                            href={mixUrl.main(`/userCenter/${itemEle.passportId}`)}
                                                            target="_blank"
                                                            title={itemEle.nickName}
                                                        >
                                                            {itemEle.introduce}
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <RightLoadMoreBtn url={mixUrl.news(`/author`)} />
        </div>
    )
}
