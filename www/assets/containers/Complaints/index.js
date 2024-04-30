import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

const Complaints = (props) => {
    return <div className="complaintsPage">
        <div className="about-content">
            <div className="about-content-div">
                <div className="about-content-t">
                    <p className="title">投诉举报</p>
                    <p className="en-title">COMPLAINTS AND REPORT</p>
                    <div className="content">
                        <div className="second-title">举报及处置办法</div>
                        <p>本着切实履行网站主体责任，畅通举报受理渠道、及时处理举报信息的原则，MarsBit制订并公布本网举报受理和处置管理办法。</p>
                        <div className="second-title">一、受理部门</div>
                        <p>举报相关工作由MarsBit总编室受理。</p>
                        <div className="second-title">二、举报信息受理范畴</div>
                        <p>在本网刊载的，具有如下性质的违法和不良信息，予以受理：</p>
                        <p>反对宪法所确定的基本原则的；危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；损害国家荣誉和利益的；煽动民族仇恨、民族歧视，破坏民族团结的；破坏国家宗教政策，宣扬邪教和封建迷信的；散布谣言，扰乱社会秩序，破坏社会稳定的；散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；侮辱或者诽谤他人，侵害他人合法权益的；含有法律、行政法规禁止的其他内容的。</p>
                        <div className="second-title">三、举报信息处置流程</div>
                        <p>1、总编办公室统一受理投诉，收到关于网站或文章的投诉后，由总编助理及时予以登记，拟定处理办法，并要求相关部门/频道核查情况。</p>
                        <p>2、对于属实的举报信息，须在24小时内完成反馈工作。举报处置完成后，及时向举报者反馈，无法反馈的予以注明。</p>
                        <p>3、涉及危害国家安全、扰乱社会秩序等内容的重要举报信息，及时上报相关主管部门。</p>
                        <p>4、举报受理及处置过程中所形成的资料，应及时整理归档并做好保密工作。</p>
                        <div className="second-title">&nbsp;</div>
                        <p>在线填写举报信息链接：<a href="https://jinshuju.net/f/ZMjfI3" target="_blank">https://jinshuju.net/f/ZMjfI3</a></p>
                        <p>中央网信办举报链接：<a href="https://12377.cn" target="_blank">https://12377.cn</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Complaints)
