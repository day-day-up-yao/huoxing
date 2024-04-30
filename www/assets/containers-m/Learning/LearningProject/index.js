import React from 'react'
import './index.scss'

const LearningProject = (props) => {
    return <div className="m-subject-box clearfix">
        <div className="subject-h5 clearfix">
            <h3><a href="https://news.huoxing24.com/feature" target="_blank">热门专题</a></h3>
            <a href="https://news.huoxing24.com/feature" className="more" target="_blank"></a>
        </div>
        <div className="subject-tab clearfix">
            {
                props.cont.map((d, index) => {
                    let iteList = d.contentList
                    let liStr = ''
                    iteList.map(function (item) {
                        liStr += `<li class="clearfix">
                                <span></span>
                                <a href=${item.url} target="_blank">
                                    <h3>${item.title}</h3>
                                </a>
                            </li>`
                    })
                    return <div className="subject-list clearfix" key={index}>
                        <div className="subject-first clearfix">
                            <a title={d.topic.topicName} target="_blank" href={`https://news.huoxing24.com/feature/${d.topic.id}`}>
                                <img src={d.topic.newSmallPcImgSrc}/>
                                <h5>{d.topic.topicName}</h5>
                            </a>
                        </div>
                        <ul className="subject-ul clearfix" dangerouslySetInnerHTML={{ __html: liStr }}/>
                    </div>
                })
            }
        </div>
    </div>
}

export default LearningProject
