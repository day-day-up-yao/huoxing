import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

import { isArray, stringJsonItem, mixUrl, formatPublishTime } from 'multiPublic/index'
import { getRelatedNews } from '../../../redux/actions/news'
import { getNewsList } from 'multiRedux/actions/news'
import Toast from 'multiComps/Toast'

const RelatedNews = (props) => {
    const { newsCur, isflash } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [relatedNews, setRelatedNews] = useState([])

    // console.log(newsCur)

    useEffect(() => {
        if (isflash) {
          if (newsCur.tagsV2) {
            const tagslist = JSON.parse(newsCur.tagsV2)
            const tagnamelist = []
            tagslist.map((item) => {
              tagnamelist.push(item.name)
            })
            const tagname = tagnamelist.toString()
            getfalshAboutnewsFn(tagname)
          }
        } else {
          getAboutnewsFn(newsCur.tags)
        }
    }, [])
    // 快讯详情的相关新闻
    const getfalshAboutnewsFn = useCallback((tagname) => {
      const params = {
        currentPage: 1,
        pageSize: 4,
        id: newsCur.id,
        tags: tagname
      }
      /** @desc 获取相关新闻 */
      dispatch(getNewsList(params, 'tags')).then(function (res) {
        if (res.code !== 1) {
            Toast.info(res.msg)
        } else {
          setRelatedNews(res.obj.inforList)
        }
      }).catch(function (err) {
        console.log(err)
        Toast.info('获取相关新闻错误')
      })
    }, [newsCur])
    // 新闻详情的相关新闻
    const getAboutnewsFn = useCallback((tagname) => {
        /** @desc 获取相关新闻 */
        dispatch(getRelatedNews({
          tags: tagname,
          id: newsCur.id,
          newsCounts: 4,
          publishTime: newsCur.publishTime
        })).then(function (res) {
          if (res.code !== 1) {
              Toast.info(res.msg)
          } else {
            setRelatedNews(res.obj.inforList)
          }
        }).catch(function (err) {
          console.log(err)
          Toast.info('获取相关新闻错误')
        })
    }, [newsCur])
    return <div className="news-details-related-news" style={{ display: `${Array.isArray(relatedNews) && relatedNews.length > 0 ? 'block' : 'none'}` }}>
        <h5>
          <span>{t('about_news')}</span>
        </h5>
        <div className="content clearfix">{isArray(relatedNews) && relatedNews.map(function (item, index) {
            const link = mixUrl.news(`/${item.id}.html`)
            return <a href={link} target="_blank" title={item.title} key={item.id}>
                <img src={stringJsonItem(item.coverPic, 'pc')} alt={item.title}/>
                <div className="content-right">
                  <div className="content-right-top">
                    <p>{item.title}</p>
                    <div className="content-right-desc">{item.synopsis && item.synopsis.replace('【GPT】', '')}</div>
                  </div>
                  <div className="content-right-bottom">
                    <div className="content-right-bottom-author">{item.author}</div>
                    <div className="content-right-bottom-item">{formatPublishTime(item.publishTime)}</div>
                  </div>
                </div>
            </a>
        })}</div>
    </div>
}

// const mapStateToProps = (state) => ({
//     relatedNews: state.news.relatedNewslist.inforList,
//     newsCur: state.news.newsDetails.current || {}

// })

export default RelatedNews
