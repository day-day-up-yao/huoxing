import React, { useEffect, useState, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getCollectionDetail, getelementCollection } from '../../../redux/actions/home'
import { collectiondetail, elebannerlist } from '../../../public/graphql/query'
import homeelement from '../../../public/img/home_right_el.gif'
import ethicon from '../../../public/img/eth_icon.png'
import { formattingNum, formattingSpecialNum } from '../../../public/js/other'

import './index.scss'

export default (props) => {
    const { rightbannerlist } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [bannerlist, setBannerlist] = useState()
    const [collecionlist, setCollectionlist] = useState([])
    useEffect(() => {
        const variables = {
            lang: 'CN',
            site: 'ETH',
            version: 2
        }
        let dataobj = {
            variables: variables,
            query: elebannerlist,
            operationName: 'BannerListV2'
        }
        let url = 'https://api.element.market/graphql?args=BannerListV2'
        dispatch(getelementCollection(dataobj, url))
    }, [])
    useEffect(() => {
        if (rightbannerlist && rightbannerlist.bannersV2 && rightbannerlist.bannersV2.length > 0) {
            const bannertypelist = rightbannerlist.bannersV2.filter((item) => item.styleId === 'banner' && item.dataType === 'collection')
            setBannerlist(bannertypelist)
            findSlugsList(bannertypelist)
        }
    }, [rightbannerlist])
    // console.log(rightbannerlist)
    // 链接截取/最后字符串
    const interCeption = useCallback((vlue) => {
        if (vlue && vlue.dataType === 'collection') {
            const paramsArr = vlue.dataUrl.split('/') || ['', '', '']
            const paramsLegnth = paramsArr.length
            const slugvariables = paramsArr[paramsLegnth - 1]
            return slugvariables
        }
    }, [])
    const findSlugsList = useCallback((datalist) => {
        const list = []
        if (datalist && Array.isArray(datalist)) {
            // const tokenidlist: TokenParams[] = []
            for (const val of datalist) {
                const sluglist = interCeption(val)
                list.push(sluglist)
            }
        }
        // console.log(list)
        getCollsetionFn(list)
        return list
    }, [])
    // 获取合集列表详情
    const getCollsetionFn = useCallback((sluglist) => {
        const variables = {
            collectionSlugs: sluglist,
            realtime: false
        }
        const dataobj = {
            variables: variables,
            query: collectiondetail,
            operationName: 'CollectionBatch'
        }
        const url = 'https://api.element.market/graphql?args=CollectionBatch'
        dispatch(getCollectionDetail(dataobj, url)).then((res) => {
            // console.log(res, 222)
            setCollectionlist(res.collectionBatch)
        })
    }, [collectiondetail])
    return <div className="right-nft-carousel">
        <div className="right-ntf-container">
            <div className="right-nft-title"><h1>🔥 {t('hot_door_nft')}</h1></div>
            {bannerlist ? (
                <Swiper className="right-nft-carousel-primary"
                    preventClicks={false}
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    // navigation={{ nextEl: '.swiper-button-next.rm-next', prevEl: '.swiper-button-prev.rm-prev' }}
                    pagination={{
                        el: '.swiper-pagination.right-nft-carousel-recommend-pag',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'right-nft-carousel-recommend-pag-customs',
                        bulletActiveClass: 'right-nft-carousel-recommend-pag-customs-active'
                    }}
                >
                    {bannerlist.map((item, index) => {
                        const itemslug = interCeption(item)
                        // console.log(itemslug)
                        let itemcollection
                        if (collecionlist.length > 0) {
                            itemcollection = collecionlist.find((itm) => itm.slug === itemslug)
                        }
                        return <SwiperSlide className="comment-news" key={index}>
                            <a href={item.dataUrl} target="_blank">
                                <div className="add-title"
                                    style={{
                                        backgroundImage: `url(${item.bgImageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center'
                                    }}
                                />
                                <div className="add-name">
                                    <p className="title-name">{itemcollection ? itemcollection.name : '--'}</p>
                                    {/* <p className="title-name">链：Ethereum</p> */}
                                    {/* <p className="desc">{itemcollection ? itemcollection.description : '--'}</p> */}
                                    <div className="other-infos">
                                        <div className="other-infos-item">
                                            <div className="infos-item-top">
                                                <img src={ethicon} alt=""/>
                                                <span>{itemcollection ? formattingNum(itemcollection.stats.totalVolume) : '--'}</span>
                                            </div>
                                            <div className="infos-item-title">{t('element_all_quant')}</div>
                                        </div>
                                        <div className="other-infos-item">
                                            <div className="infos-item-top">
                                                <img src={ethicon} alt=""/>
                                                <span>{itemcollection ? formattingSpecialNum(itemcollection.stats.floorPrice, false, 4) : '--'}</span>
                                            </div>
                                            <div className="infos-item-title">{t('element_min_price')}</div>
                                        </div>
                                        <div className="other-infos-item">
                                            <div className="infos-item-top">
                                                {/* <img src={ethicon} alt=""/> */}
                                                <span>{itemcollection ? formattingNum(itemcollection.stats.ownerCount, true) : '--'}</span>
                                            </div>
                                            <div className="infos-item-title own-title">{t('element_holder')}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    })}
                </Swiper>
            ) : (
                <div className="not-info">
                    {/* <div className="not-info-img"/>
                    <div className="not-info-title"/>
                    <div className="not-info-desc">
                        <div className="not-info-desc-con"/>
                        <div className="not-info-desc-con"/>
                        <div className="not-info-desc-bottom"/>
                    </div> */}
                    <img src={homeelement} alt=""/>
                </div>
            )}
            <div className="swiper-pagination right-nft-carousel-recommend-pag"></div>
        </div>
    </div>
}
