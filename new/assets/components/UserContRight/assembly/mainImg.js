import React, { Component } from 'react'
import '../index.scss'
import { connect } from 'react-redux'
import { getAuthorAchieve } from '../../../redux/actions/author'

class MainImg extends Component {
    render () {
        return (
            <ul>
                <li>
                    <img src="https://www.huoxing24.com/img/userCenter/achievement-1-1beeaf265f.png" alt="h" />
                共发表 <span>{this.props.data.authorFollowCounts}</span>篇文章，<span>{this.props.data.videoCounts}</span>部电影
                </li>
                <li>
                    <img src="https://www.huoxing24.com/img/userCenter/achievement-2-20e377003d.png" alt="h" />
                发布的文章总热度超过<span>{this.props.data.newsHotCounts}</span>
                </li>
                <li>
                    <img src="https://www.huoxing24.com/img/userCenter/achievement-3-bfaa114c91.png" alt="h" />
                文章共获得<span>{this.props.data.newsCommentCounts}</span>次评论
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.author.authorAchieve
    }
}
export default connect(mapStateToProps, { getAuthorAchieve })(MainImg)
