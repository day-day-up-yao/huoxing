import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'
import { formatTime } from 'multiPublic/index'
import { getRelatedNews } from '../../redux/actions/news'
import Toast from 'multiComps/Toast'
// import RelatedNewsItem from './RelatedNewsItem'
import RelatedNewslist from './RelateNewslist'
import NewsTip from '../../components/NewsTip'
const News = (props) => {
    const { dispatch, newsCur, relatedNews } = props
    const { t } = useTranslation()
    const newsContent = decodeURIComponent(newsCur.content)

    let htmlString = (newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview') ? newsContent.replace(/<a[^>]+>/g, function (a) {
        if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
            return a.replace(/^<a\s/, '<a rel="nofollow" ')
        }
        return a
    }) : newsContent
    useEffect(() => {
        /** @desc 获取相关新闻 */
        dispatch(getRelatedNews({
            tags: newsCur.tags,
            id: newsCur.id,
            newsCounts: 6,
            publishTime: newsCur.publishTime
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取相关新闻错误')
        })
    }, [])
    return <div className="details" data-tags="" data-id="" data-score="" id="currNewsBox">
        <div className="details-header">
            <h6 id="flashNewsTime">{newsCur.title}</h6>
            <div className="list-text">
                <div className="author">
                    {newsCur.author}
                </div>
                <div className="time clearfix">
                    <span>{formatTime(newsCur.publishTime, 'yyyy-MM-dd')}</span></div>
  <div className="read-text-number">{t('news_hotd')}：{newsCur.hotCounts}</div>
            </div>
            {newsCur.synopsis !== '' && (<div className="news-synopsis">
              <p>{newsCur.synopsis.replace('【GPT】', '')}</p>
              {newsCur.synopsis.indexOf('【GPT】') > -1 && <NewsTip isH5/>}
            </div>)
            }
            {newsCur.subTitle !== '' && (<div className="news-subtitle adc clearfix">
                <pre style={{ lineHeight: '28px', color: 'rgba(51,51,51,70%' }} dangerouslySetInnerHTML={{ __html: newsCur.subTitle }} />
            </div>)}
        </div>

        <div className="simditor ql-container ql-snow">
            {newsCur.editorFlag === 1 && <div
                id="editorShow"
                className="details-cont ql-editor"
                dangerouslySetInnerHTML={{ __html: htmlString }}
            />}
            {(!newsCur.editorFlag || newsCur.editorFlag === 0) && <div
                id="newsDetailsContent"
                className={`simditor-body`}
                dangerouslySetInnerHTML={{ __html: htmlString }}
            />}
            <div className="d-hint">
                {t('disclaimer_in')}
            </div>
        </div>
        <div>
          <RelatedNewslist
            relatedNews={relatedNews}
          />
            {/* <div className="news-correlation">
                <h6>{t('news_get_you')}</h6>
                <div className="news-list-box">
                    {isArray(relatedNews) && relatedNews.map(function (item, index) {
                        return <div className="news-list-more" data="">
                            <RelatedNewsItem item={item} key={index} />
                        </div>
                    })}
                </div>
            </div> */}
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    newsCur: state.news.newsDetails.current || {},
    relatedNews: state.news.relatedNewslist.inforList
})

export default connect(mapStateToProps)(News)
