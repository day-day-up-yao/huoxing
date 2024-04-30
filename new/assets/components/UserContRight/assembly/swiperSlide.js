import React, { Component } from 'react'
import '../index.scss'
import { connect } from 'react-redux'

class SwiperSlide extends Component {
    constructor (props) {
        super(props)
        this.state = {
            flag: 0,
            arrList: [],
            newArr: [],
            newArrLength: 0
        }
    }
    componentDidMount () {
        // 数据的遍历和分组
        let newArr = this.state.newArr
        let cool = this.props.authorData
        let arrLength = Object.keys(cool).length // 数组长度
        let num = 6 // 每页显示 6 条
        let index = 0
        for (let i = 0; i < arrLength; i++) {
            if (i % num === 0 && i !== 0) { // 可以被 6 整除
                newArr.push(cool.slice(index, i))
                index = i
            }
            if ((i + 1) === arrLength) {
                newArr.push(cool.slice(index, (i + 1)))
            }
        }
        this.setState({
            newArr: newArr,
            arrList: newArr[0],
            newArrLength: newArr.length
        })
    }
    swSlide=() => {
        const setVal = () => {
            this.setState({
                arrList: this.state.newArr[this.state.flag]
            })
        }
        // 从接口获取数据，每6条数据为一组怎样实现点击按钮进行换一批
        if (this.state.flag < this.state.newArrLength - 1) {
            this.setState({
                flag: this.state.flag + 1
            }, setVal)
        } else {
            this.setState({
                flag: 0
            }, setVal)
        }
    }

    render () {
        const postItems = this.state.arrList.map(data => (
            // console.log(data)
            <div className="list-author" key={data.passportId}>
                <a target="_blank" href="#">
                    <div className="list-author-img">
                        <img title={data.iconUrl} src={data.iconUrl} alt={data.iconUrl} ></img>
                        <span className="v-blue" title="企业用户" style={{ backgroundImage: 'url(' + data.shareLink + ')' } } />
                    </div>
                    <div className="list-author-text">
                        <h3 title={data.nickName}>{data.nickName}</h3>
                        <p title={data.introduce}>{data.introduce}</p>
                    </div>
                </a>
            </div>
        ))
        return (
            <div>
                <div className="author-title clearfix">
                    <h3>MarsBit专栏作家</h3>
                    <div className="next-page" tabIndex="0" role="button" onClick={this.swSlide}>换一批</div>
                </div>
                {postItems}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authorData: state.author.author.inforList
    }
}

export default connect(mapStateToProps)(SwiperSlide)
