import React, { Component } from 'react'
import arrowImg from './images/arrow-img.png'
import './index.scss'

class LiveroomDesc extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showAll: true
        }
    }

    onCheckboxChange = () => {
        this.setState({ showAll: false })
    }
    render () {
        const { showAll } = this.state
        return (
            <div className="im-live-detail-left-live-info">
                <div className="description_box">
                    <input type="checkbox" id="contTab" onChange={this.onCheckboxChange} checked={showAll} className="tabbed" />
                    <div id="cont">
                        <div className="description" dangerouslySetInnerHTML={{ __html: this.props.brief }} />
                    </div>
                    <div className="content-more"><div className="gradient"></div><label htmlFor="contTab" className="readmore">展开全部<img className="arrow" src={arrowImg} /></label></div>
                </div>
            </div>
        )
    }
}

export default LiveroomDesc
