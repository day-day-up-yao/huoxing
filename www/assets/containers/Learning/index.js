import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mixUrl } from 'multiPublic/index'
// import { getHotColumn } from '../../redux/actions/learning'
import LearningTitle from './Title'
import LearningNewsList from './LearningNewsList'
import LearningVideoList from './LearningVideoList'
import LearningTags from './LearningTags'
import LearningProject from './LearningProject'
import './index.scss'
import rankData from '../../public/js/rankData'

const { oneNewsList, twoVideoList, jsonObj } = rankData()

class Learning extends Component {
    state = {
        oneNewsTab: {
            index: 0,
            tab: [],
            contList: []
        },
        threeNewsTab: {
            index: 0,
            tab: [],
            type: 0,
            contList: [],
            article: true,
            video: false
        },
        fourNewsTab: {
            index: 0,
            tab: [],
            type: 0,
            contList: [],
            article: true,
            video: false
        }
    }

    componentWillMount () {
        const This = this
        // const { dispatch } = this.props
        this.setState({
            oneNewsTab: {
                index: 0,
                tab: This.tabListLen(jsonObj.blockChainGeneralKnowledge.newsList),
                contList: jsonObj.blockChainGeneralKnowledge.newsList.slice(0, 30)
            },
            twoVideoTab: {
                index: 0,
                tab: this.tabListLen(jsonObj.blockChainVideo.newsList),
                contList: jsonObj.blockChainVideo.newsList.slice(0, 30)
            },
            threeNewsTab: {
                index: 0,
                type: 0,
                tab: This.tabListLen(jsonObj.blockChainOpenClass.newsList),
                contList: jsonObj.blockChainOpenClass.newsList.slice(0, 30),
                article: true,
                video: false
            },
            fourNewsTab: {
                index: 0,
                type: 0,
                tab: This.tabListLen(jsonObj.tenQuestions.newsList),
                contList: jsonObj.tenQuestions.newsList.slice(0, 30),
                article: true,
                video: false
            }
        })
        // dispatch(getTagsData())
        // dispatch(getHotColumn())
    }

    tabListLen = (arr) => {
        let oneNewsTab = []
        let oneNewsLen = Math.ceil(arr.length / 30)
        for (let i = 1; i <= oneNewsLen; i++) {
            let hint = ''
            switch (i) {
                case 1:
                    hint = '一'
                    break
                case 2:
                    hint = '二'
                    break
                case 3:
                    hint = '三'
                    break
                case 4:
                    hint = '四'
                    break
                case 5:
                    hint = '五'
                    break
                case 6:
                    hint = '六'
                    break
                case 7:
                    hint = '七'
                    break
                case 8:
                    hint = '八'
                    break
                case 9:
                    hint = '九'
                    break
                case 10:
                    hint = '十'
                    break
            }
            let list = `第${hint}页`
            oneNewsTab.push(list)
        }
        return oneNewsTab
    }
    handClickOneNews = (e, arr) => {
        let index = parseInt(e.target.getAttribute('index')) || 0
        let contList = arr.slice(index * 30, (index + 1) * 30)
        this.setState({
            oneNewsTab: {
                index: index,
                tab: this.tabListLen(arr),
                contList: contList
            }
        })
    }
    handClickType = (e, arr, typeArr) => {
        let type = parseInt(e.target.getAttribute('type'))
        this.threeContList(e, arr)
        let obj = {
            type: type,
            article: type === 0 || false,
            video: type === 1 || false,
            tab: this.tabListLen(arr)
        }
        if (typeArr === 'three') {
            this.setState({
                threeNewsTab: Object.assign(this.state.threeNewsTab, obj)
            })
        } else if (typeArr === 'four') {
            this.setState({
                fourNewsTab: Object.assign(this.state.fourNewsTab, obj)
            })
        }
    }
    threeContList = (e, arr, typeArr) => {
        let index = parseInt(e.target.getAttribute('index')) || 0
        let contList = arr.slice(index * 30, (index + 1) * 30)
        let obj = {
            contList: contList,
            index: index
        }
        if (typeArr === 'three') {
            this.setState({
                threeNewsTab: Object.assign(this.state.threeNewsTab, obj)
            })
        } else if (typeArr === 'four') {
            this.setState({
                fourNewsTab: Object.assign(this.state.fourNewsTab, obj)
            })
        }
    }

    render () {
        let This = this
        let { oneNewsTab, twoVideoTab, threeNewsTab, fourNewsTab } = this.state
        return <div className='learning-cont'>
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <div className="slide-cont"></div>
                    </div>
                </div>
            </div>
            <div className='lerning-cont-wrap clearfix'>
                <div className='lerning-wrap-left clearfix'>
                    <div className='wrap-left-item clearfix'>
                        <div className='left-img one'>
                            <h6>区块链通识课</h6>
                            <p>在这里，小白也能读懂区块链</p>
                        </div>
                        <div className='left-cont'>
                            <LearningTitle title={'区块链通识课'} url={mixUrl.main('/userCenter/f636cec44bd841edb53c3734e9bff15a')} introduce={'在这里，小白也能读懂区块链'}/>
                            <div className='list-tab' style={{ display: 'none' }}>
                                {
                                    oneNewsTab.tab.map((item, index) => {
                                        let active = oneNewsTab.index === index ? 'active' : ''
                                        return <p onClick={(e) => {
                                            This.handClickOneNews(e, oneNewsList)
                                        }} className={active} key={index} index={index}>{item}</p>
                                    })
                                }
                            </div>
                            <LearningNewsList cont={oneNewsTab.contList} show={true}/>
                        </div>
                    </div>
                    <div className='wrap-left-item clearfix'>
                        <div className='left-img two'>
                            <h6>区块链入门到精通</h6>
                            <p>晋级，提升你对区块链的专业认知</p>
                        </div>
                        <div className='left-cont'>
                            <LearningTitle title={'区块链入门到精通'} url={mixUrl.main('/userCenter/8873ee080e6040538009ac2805ec5549')} introduce={'晋级，提升你对区块链的专业认知'}/>
                            <LearningNewsList cont={twoVideoTab.contList} show={true} more={false}/>
                        </div>
                    </div>
                    <div className='wrap-left-item clearfix' style={{ display: 'none' }}>
                        <div className='left-img three'>
                            <h6>区块链公开课</h6>
                            <p>行业最前线，区块链从业者专题知识分享</p>
                        </div>
                        <div className='left-cont'>
                            <LearningTitle title={'区块链公开课'} url={mixUrl.main('/tags/MarsBit公开课')} introduce={'行业最前线，区块链从业者专题知识分享'}/>
                            <div className='list-type' style={{ display: 'none' }}>
                                <p className={threeNewsTab.type === 0 ? 'active' : ''} type='0' onClick={(e) => {
                                    this.handClickType(e, oneNewsList, 'three')
                                }}>文章</p>
                                <p className={threeNewsTab.type === 1 ? 'active' : ''} type='1' onClick={(e) => {
                                    this.handClickType(e, twoVideoList, 'three')
                                }} style={{ display: 'none' }}>视频</p>
                            </div>
                            <div className='list-tab'>
                                {
                                    threeNewsTab.tab.map((item, index) => {
                                        let active = threeNewsTab.index === index ? 'active' : ''
                                        return <p onClick={(e) => {
                                            This.threeContList(e, jsonObj.blockChainOpenClass.newsList, 'three')
                                        }} className={active} key={index} index={index}>{item}</p>
                                    })
                                }
                            </div>
                            <LearningNewsList cont={threeNewsTab.contList} show={threeNewsTab.article}/>
                            <LearningVideoList cont={threeNewsTab.contList} show={threeNewsTab.video} more={false}/>
                        </div>
                    </div>
                    <div className='wrap-left-item clearfix' style={{ display: 'none' }}>
                        <div className='left-img four'>
                            <h6>MarsBit大学课程</h6>
                            <p>顶级导师面对面，学习区块链第一站</p>
                        </div>
                        <div className='left-cont'>
                            <LearningTitle title={'MarsBit大学课程'} introduce={'顶级导师面对面，学习区块链第一站'}/>
                            <div className='list-type news-video'>
                                <p className='active'>文章</p>
                                <p>视频</p>
                            </div>
                            <LearningNewsList cont={oneNewsList} show={true}/>
                            <LearningVideoList cont={twoVideoList} show={false} more={false}/>
                        </div>
                    </div>
                    <div className='wrap-left-item clearfix'>
                        <div className='left-img five'/>
                        <div className='left-cont'>
                            <LearningTitle title={'王峰十问'} url={mixUrl.main('/userCenter/01a70568381235638aa28b000b913c26')} introduce={'尖峰对话，洞悉区块链世界的人性与人格'}/>
                            <div className='list-type news-video' style={{ display: 'none' }}>
                                <p className='active'>全部</p>
                            </div>
                            <div className='list-tab'>
                                {
                                    fourNewsTab.tab.map((item, index) => {
                                        let active = fourNewsTab.index === index ? 'active' : ''
                                        return <p onClick={(e) => {
                                            This.threeContList(e, jsonObj.tenQuestions.newsList, 'four')
                                        }} className={active} key={index} index={index}>{item}</p>
                                    })
                                }
                            </div>
                            <LearningNewsList cont={fourNewsTab.contList} all={'show'} show={true}/>
                        </div>
                    </div>
                </div>
                <div className='lerning-wrap-right'>
                    <LearningTags tag={jsonObj.tagsArr}/>
                    <LearningProject cont={jsonObj.subjectObj.newsList}/>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    tagsArr: state.learning.tagsArr,
    hotColumn: state.learning.hotColumn
})

export default connect(mapStateToProps)(Learning)
