import React, { useState, useCallback } from 'react'

import './index.scss'

import { elementOffset } from 'multiPublic/index'
import hrIcon from './Image/hr.png'

export default () => {
    const [nowType, setNowType] = useState('p1') // 当前选中标签

    // 点击标签按钮事件
    const onBtnTypeClick = useCallback(
        (type) => {
            setNowType(type)

            const refNowJobList = document.getElementById(type)
            window.scrollTo({
                top: elementOffset(refNowJobList).top - 100
            })
        },
        []
    )

    return (
        <div className="job-page">
            <div className="job-banner"></div>
            <div className="job-layout">
                <div className="job-cont">
                    <h3>在MarsBit，我们专注于做好以下产品及业务：
                        {/* <span>JOIN US</span> */}
                    </h3>
                    <p>
                        <span>MarsBit：专注区块链与数字经济，详情请关注<a href="https://www.marsbit.co/">https://www.marsbit.co/</a> </span><br />
                        {/* <span>3.火星交易大师：数字资产交易服务和资产管理工具，详情请关注<a href="https://trade.marsbit.co/">https://trade.marsbit.co/</a> </span><br/> */}
                        <span>公司具有积极向上的团队精神和工作氛围，在我们事业迅速发展的今天，诚邀那些坚持进取、开放心态、创新意识、诚信正直的有志之士加盟，公司将提供施展才华的广阔发展空间和与之相称的优厚待遇，包括但不限于：五险一金、商业保险、餐补、通讯补贴、团建、节假日礼品、千平米超大办公室，另外，你将获得无与伦比的深入区块链行业的发展机会，更多福利等你来发掘。</span>
                    </p>
                    <div className="job-list-cont">
                        <span className="fixed-top" id="fixedTop"></span>
                        <div className="job-nav">
                            <p className={`p1 ${nowType === 'p1' ? 'active' : ''}`} onClick={() => onBtnTypeClick('jobList1')}>产品</p>
                            <p className={`p2 ${nowType === 'p2' ? 'active' : ''}`} onClick={() => onBtnTypeClick('jobList2')}>设计</p>
                            <p className={`p3 ${nowType === 'p3' ? 'active' : ''}`} onClick={() => onBtnTypeClick('jobList3')}>研发</p>
                            <p className={`p4 ${nowType === 'p4' ? 'active' : ''}`} onClick={() => onBtnTypeClick('jobList4')}>内容</p>
                            <p className={`p5 ${nowType === 'p5' ? 'active' : ''}`} onClick={() => onBtnTypeClick('jobList5')}>运营</p>
                        </div>
                        <h4 id="jobList1">产品</h4>
                        <div className="research-job clearfix">
                            <div className="job-list">
                                <h5>DeFi产品经理</h5>
                                <p>
                                    1、参与区块链DeFi等金融产品设计和创新，推动产品开发和迭代升级<br />
                                    2、负责撰写产品文档，对产品需求、产品功能、交互设计等环节进行把关<br />
                                    3、熟悉以太坊Aave/Compound/Synthetix/UniSwap等主流DeFi产品<br />
                                    4、具备熟练的英文口语和阅读能力，可作为工作语言
                                </p>
                            </div>
                        </div>
                        <h4 id="jobList2">设计</h4>
                        <div className="research-job clearfix">
                            <div className="job-list">
                                <h5>高级视觉设计师</h5>
                                <p>
                                    1、参与业务线视觉设计，包括但不限于线上海报、长图、banner、线下物料<br />
                                    2、负责新产品创意构思和设计工作，从专业角度给予业务部门指导建议<br />
                                    3、三年以上视觉设计经验，有区块链/互联网/4A广告公司工作经验者优先
                                </p>
                            </div>
                        </div>
                        <h4 id="jobList3">研发</h4>
                        <div className="research-job clearfix">
                            <div className="job-list">
                                <h5>DeFi智能合约开发工程师</h5>
                                <h6>岗位职责：</h6>
                                <p>
                                    1、参与基于区块链技术的DeFi产品的设计，开发和实现<br />
                                    2、负责跟踪研究DeFi产品前沿技术，促进公司产品技术的创新和发展<br />
                                    3、具备1年以上DeFi产品开发经验，有0-1产品开拓经验者优先<br />
                                    4、具备熟练的英文口语和阅读能力，可作为工作语言
                                </p>
                                <h6>任职要求：</h6>
                                <p>
                                    1、本科及以上学历，计算机科学与技术、软件工程、数学、科技金融专业优先<br />
                                    2、了解Solidity开发和优化，熟悉Truffle 、Remix等开发工具、熟悉OpenZeppelin等三方安全合约库<br />
                                    3、对区块链产品有强烈认同感，具备技术钻研精神
                                </p>
                            </div>
                            <div className="job-list">
                                <h5>高级Java开发工程师</h5>
                                <p>
                                    1、参与资讯、行情、数据等业务模块开发<br />
                                    2、负责设计高可用微服务后台框架<br />
                                    3、具备熟练使用主流开源框架，熟悉多线程、高性能设计编码及性能调优能力
                                </p>
                            </div>
                            <div className="job-list">
                                <h5>Web开发工程师</h5>
                                <p>
                                    1、参与Web前端界面、前端与业务层交互开发和维护<br />
                                    2、负责持续优化前端体验和页面响应速度，确保产品优质用户体验和高性能<br />
                                    3、熟练使用Vue、React、Webpack、ES6、Antd进行开发<br />
                                </p>
                            </div>
                        </div>
                        <h4 id="jobList4">内容</h4>
                        <div className="research-job clearfix">
                            <div className="job-list">
                                <h5>编辑</h5>
                                <p>
                                    1、参与网站/APP的栏目专题策划和运营<br />
                                    {/* 2、负责区块链及加密数字资产、矿业热点领域的消息整合及行业日常新闻跟进<br /> */}
                                    2、能独立承担内容采集、组稿、写稿、编辑等工作
                                </p>
                            </div>
                            <div className="job-list">
                                <h5>内容运营</h5>
                                <h6>岗位职责：</h6>
                                <p>
                                    1、参与公司新媒体矩阵平台原创文章撰写、编辑和推送，以提升公司品牌<br />
                                    2、负责新媒体矩阵的运营管理，不断优化运营手法，提高新媒体平台关注度和用户转化率<br />
                                    3、支持MarsBit直播栏目的日常运营
                                </p>
                                <h6>任职要求：</h6>
                                <p>
                                    1、本科及以上学历，科技金融、经济学、中文、新闻等专业优先<br />
                                    2、能够独立承担内容采集、组稿、写稿、编辑等工作<br />
                                    3、强自驱力和抗压性，热爱文字工作，对区块链行业有热情
                                </p>
                            </div>
                            <div className="job-list">
                                <h5>高级内容运营</h5>
                                <h6>岗位职责：</h6>
                                <p>
                                    {/* 1、负责矿业热点要闻的采访和写作，策划选题，产出深度且有行业代表性文章<br />
                                    2、参与矿业知识百科栏目的建立和内容运营<br /> */}
                                    1、深入产业，从业务角度出发提升公司产品的内容影响力和品牌建设
                                </p>
                                <h6>任职要求：</h6>
                                <p>
                                    1、本科及以上学历，科技金融、经济学、中文、新闻等专业优先<br />
                                    2、至少2年以上区块链行业内容创作经验，曾独立公开发表过代表性行业文章<br />
                                    3、强自驱力和抗压性，热爱文字工作，认可区块链行业。
                                </p>
                            </div>
                        </div>
                        <h4 id="jobList5">运营</h4>
                        <div className="research-job clearfix">
                            <div className="job-list">
                                <h5>用户增长经理</h5>
                                <h6>岗位职责：</h6>
                                <p>
                                    1、参与M a r s Bi t旗下产品的用户增长，包括新增、留存、转化<br />
                                    2、善于数据驱动及运营活动方案策划，提升用户转化效果<br />
                                    3、有区块链行业、金融、社区、媒体产品领域工作经验者优先<br />
                                    3、具备熟练的英文口语和阅读能力，可作为工作语言
                                </p>
                                <h6>任职要求：</h6>
                                <p>
                                    1、本科及以上学历，科技金融、经济学、中文、新闻等专业优先<br />
                                    2、三年以上互联网产品运营经验，有区块链行业、社区、媒体、金融产品领域工作经验者优先z<br />
                                    3、优秀的数据分析能力，数据驱动<br />
                                    4、有极强的好奇心和探索欲，优秀的跨部门沟通能力
                                </p>
                            </div>
                            <div className="job-list">
                                <h5>直播运营</h5>
                                <p>
                                    1、负责直播平台内容策划，保证直播效果落地及内容提升<br />
                                    2、链接业界KOL，负责嘉宾邀请，具备一定主持能力 <br />
                                    3、 一年以上直播平台运营经验，对区块链行业有基本认知 <br />
                                    4、具备熟练的英文口语和阅读能力，可作为工作语言
                                </p>
                            </div>
                        </div>

                        <div className="lint-info">
                            <h6>我们能提供：</h6>
                            1. MarsBit发起人王峰直接领导，有机会和区块链、互联网一线大佬互加微信好友，更有机会参与国内、外大型行业活动；<br />
                            2. 六险一金、餐补、通讯补贴、……基本福利，一个不少！<br />
                            3. 团建、节假日礼品、生日福利、定期体检……额外福利，多多益善；<br />
                            4. 千平米超大办公室，紧靠地铁站，交通方便，吃喝玩乐一应俱全；<br />
                            5. 与来自BAT、今日头条等一线互联网公司的优质团队并肩作战，帮你快速成长；<br />
                            6. 获得单独提供给内部的投资机会，帮你实现财富增长；<br />
                            7. 更多隐形福利，等你发掘。<br />
                        </div>
                        <div className="inlet">
                            <h6>简历投递渠道</h6>
                            <p>
                                邮箱：hxhr@marsbit.co，或加HR微信（13810850996）
                            </p>
                            <p><img src={hrIcon} alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
