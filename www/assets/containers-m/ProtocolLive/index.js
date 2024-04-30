import React from 'react'

import './index.scss'

import { mixUrl } from 'multiPublic'

export default () => {
    return (
        <div className="m-protocol-page">
            <p className="title welcome">MarsBit直播服务协议</p>
            <div className="section">
                <p className="content">《MarsBit直播服务协议》是MarsBit和用户所约定的规范双方权利和义务的具有法律效力的电子协议（以下简称“本协议”）。用户使用MarsBit直播服务的行为，即被视为已经仔细阅读、充分理解并完全地毫无保留地接受本协议的所有条款。未满18周岁的用户请在法定监护人的陪同下阅读和判断是否同意本协议，法定监护人应当合理引导其未成年子女的上网行为以及消费行为。</p>
                <p className="content">本协议是基于<a href={mixUrl.m('/protocol')} target="_blank">《MarsBit用户协议》</a>制定，与其是不可分割的；同时，MarsBit不时发布的关于MarsBit直播服务的相关协议、规则、声明、公告、政策等内容也是本协议的一部分，在使用MarsBit直播服务的同时，用户应遵守本协议、MarsBit服务条款及前述关于MarsBit直播服务的相关协议、规则、声明、公告、政策等所有条款。若不同意本协议所述任何条款或MarsBit后续对协议内容的修改，用户应立即停止使用MarsBit直播服务。</p>
                <p className="title">第一条  定义</p>
                <p className="content">1.用户：用户包含普通用户和主播。</p>
                <p className="content">（1）主播：根据MarsBit服务条款的注册要求及规则，在MarsBit上申请成为MarsBit直播主播，在MarsBit从事网络直播活动，即使用MarsBit提供的服务从事包括但不限于在线市场分析、行情解读、技术分享等直播活动的用户。</p>
                <p className="content">（2）普通用户：除主播以外的，其他使用MarsBit直播服务的用户。</p>
                <p className="content">2.用户账号：由用户根据MarsBit服务条款于MarsBit注册的账号。</p>
                <p className="title">第二条  用户的权利义务</p>
                <p className="content">1. 用户应妥善保管其用户账号（包括但不限于账号名、密码等），通过用户账号进行的一切行为均被视为用户本人的行为，用户应对此承担全部责任。MarsBit禁止用户之间进行账号赠与、转让、出借、出租或售卖等任何非本人使用的行为，如用户未尽妥善保管义务致使其自身遭受任何损失，MarsBit不承担任何责任。</p>
                <p className="content">2. 用户理解并同意，MarsBit仅提供直播服务的平台技术服务支持；如用户在使用MarsBit提供的直播服务的过程中，与第三方（包括但不限于主播）发生任何争议、纠纷应由用户与该第三方自行处理，MarsBit对此不承担任何责任。</p>
                <p className="content">3. 用户应遵守本协议及MarsBit服务条款的约定使用MarsBit提供的直播服务；否则，MarsBit有权根据前述用户违约行为的严重程度自行决定采取以下一种或多种处理措施，包括但不限于中止/终止向用户提供部分/全部直播服务，封禁/回收用户账号，要求用户赔偿MarsBit因此遭受的全部损失（平台损失或平台全部损失或平台经济损失，均包括且不限于财产损害赔偿、名誉损害赔偿、律师费、交通费等因维权而产生的合理费用，定义下同）等处理措施。其中，如涉及违反犯罪活动，MarsBit有权单方终止提供本协议项下直播服务，追缴非法所得；情节严重者，MarsBit将移交司法机关进行处理。</p>
                <p className="title">第三条  主播的权利义务</p>
                <p className="content">1.本协议对主播构成有效的、带有约束力的、可强制执行的法定义务，主播对本协议下所有条款及定义等内容均已明确知悉，并无疑义。</p>
                <p className="content">2.主播须年满18周岁（未满18周岁的未成年人应在法定监护人的陪同下审阅本协议，并在接受本协议前取得父母，即法定监护人的同意）。若父母（法定监护人）希望未成年人（尤其是10周岁以下子女）得以进行本协议约定的网络直播的，必须以法定监护人身份加以判断该等网络直播内容是否适合于未成年人，主播承诺不会因执行本协议损害任何第三方合法利益，主播承诺履行本协议不违反任何对主播有约束力的法律文件，亦不会使MarsBit对任何第三方承担任何责任。</p>
                <p className="content">3.主播与MarsBit不构成任何法律层面的雇佣、劳动、劳务关系，MarsBit无需向主播承担任何社会保险金和福利。</p>
                <p className="content">4.主播根据MarsBit注册要求及规则进行注册/升级MarsBit直播账号，注册/升级并经MarsBit审核通过后，MarsBit会根据其内部系统规则自动分配给主播一个“直播房间号”。主播理解并同意，“直播房间号”的所有权属于MarsBit，主播仅享有该“直播房间号”的使用权。</p>
                <p className="content">5.主播的直播账号必须用作本协议约定的网络直播或MarsBit根据平台发展需要而增加的其他业务用途，不得用于其他任何非MarsBit允许的活动（包括但不限于不得提供广告、推介等服务，或从事任何违法行为）。主播理解并同意，主播根据MarsBit规则注册的直播账号是主播在MarsBit进行网络直播的有效凭证。</p>
                <p className="content">6.主播理解并同意，主播在MarsBit注册/升级直播账号时填写及提供的所有信息均真实、准确、完整，任何非法、不真实、不准确的信息导致的一切问题、纠纷及法律责任均由主播自行承担。若前述信息发生变化，主播应及时更改。</p>
                <p className="content">7.主播理解并同意，直播账号仅能由主播本人使用，未经MarsBit书面同意，禁止进行该直播账号的赠与、转让、出借、出租或售卖。主播理解并同意，MarsBit有权决定更改和收回该直播账号。</p>
                <p className="content">8.主播理解并同意，主播应对直播账号下进行的一切活动完全负责，MarsBit无义务且无法对非法或未经主播授权使用直播账号的行为作出甄别，因前述非法或未经授权的使用行为导致的虚拟增值服务及相关网络直播收益损失及其他损失均由主播自行承担，MarsBit不承担任何责任。</p>
                <p className="content">9.主播理解并同意，如直播账号的使用权归属发生争议，MarsBit有权根据其记录的账号身份信息及主播及提出权利主张的第三方提交的信息进行判定。在前述争议处理期间，MarsBit有权采取（1）暂停封停直播账号；及/或（2）暂时中止结算和支付网络直播收益等处理措施，因此导致的损失，MarsBit不承担任何责任。</p>
                <p className="content">10.主播应自行承担费用配备网络直播所需要的网络、支持视频和语音的设备，并保证直播图像清晰、语音质量清晰、稳定。</p>
                <p className="content">11.主播承诺并声明在MarsBit进行网络直播时符合所在地法律的相关规定，不得以履行本协议名义从事其他违反中国及所在地法律规定的行为。主播在网络直播过程中，应保障自身及其他直播活动参与人员的人身安全及财产安全；如主播在网络直播过程中，发生任何导致主播或任何第三方遭受任何损害的事件，主播应独立承担责任，MarsBit因此遭受损失的，主播应当一并赔偿。</p>
                <p className="content">12.主播如在网络直播过程中开展任何活动或作出任何承诺，均应遵守中国法律的规定，并应按照主播对外公布的活动规则进行及兑现承诺，因活动或承诺事宜产生的任何纠纷，主播应当自行解决并独立承担全部法律责任，如MarsBit因此遭受任何名誉或经济损失的，主播应予以赔偿并负责消除给MarsBit造成的不良影响。</p>
                <p className="content">13.主播在开展本协议项下网络直播事项和/或在MarsBit上发布的所有信息/资讯/言论/内容等均不得含有以下内容（即“禁止性内容”）：</p>
                <div className="content kaiti">
                    <p>（1） 反对宪法确定的基本原则的；</p>
                    <p>（2） 危害国家统一、主权和领土完整，颠覆国家政权的；</p>
                    <p>（3） 泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；</p>
                    <p>（4） 煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；</p>
                    <p>（5） 破坏国家宗教政策，宣扬邪教、迷信的；</p>
                    <p>（6） 扰乱社会秩序，破坏社会稳定的；</p>
                    <p>（7） 诱导未成年人违法犯罪和渲染及传播淫秽、色情、赌博、暴力、凶杀、恐怖活动或者教唆犯罪的；</p>
                    <p>（8） 侮辱或者诽谤他人，侵害公民个人隐私等他人合法权益的；</p>
                    <p>（9） 散布谣言，危害社会公德，损害民族优秀文化传统的；</p>
                    <p>（10） 有关法律、行政法规和国家规定禁止的其他内容。</p>
                </div>
                <p className="content">如果主播上传、发布或传输的内容含有以上违反法律法规的信息或内容的，或者侵犯任第三方的合法权益，主播将直接承担以上导致的一切不利后果。如因此给MarsBit造成不利后果的，主播应负责消除影响，并且赔偿MarsBit因此遭受的一切损失。</p>
                <p className="content">14.主播承诺应积极维护MarsBit形象，不曾亦不会做出有损于MarsBit形象或利益的行为，本协议期内及协议终止后，不会通过任何渠道（包括但不限于网站、博客、微博、微信、QQ聊天群、线下聚会等）暗示或发布不利于MarsBit的言论。</p>
                <p className="content">15.未经MarsBit书面同意，主播不得在任何场合以任何形式（包括但不限于文字、口播、视频贴片等）提及第三方竞品平台的相关信息，不得引导或为现有的MarsBit用户、其他主播及MarsBit员工进入其他第三方竞品平台提供任何信息或便利，包括但不限于提供联络上的协助、进行说服工作等。</p>
                <p className="content">16.主播在MarsBit进行网络直播期间均应视为协议期内。MarsBit不事先审核前述被上载的、由主播参与、编辑、制作的视频内容，也不主动对该等视频进行任何编辑、整理、修改、加工。</p>
                <p className="content">17.主播理解并同意，主播须独立对其使用MarsBit直播服务的行为承担法律责任。主播承诺，主播通过MarsBit直播、上传、发布或传输的内容（包括但不限于任何文字、图片、画面、视频、音频等各种呈现形式的内容，定义下同）均由主播本人原创或已获得第三方权利人充分、合法、有效的授权。主播承诺，除相关主体另有约定外，主播通过MarsBit直播、上传、发布或传输的内容的知识产权及相关权利均归属于主播及/或第三方权利人。</p>
                <p className="content">18.为提高主播直播内容曝光量及发布效率，主播就其使用MarsBit直播服务期间产生的所有成果（包括但不限于主播通过MarsBit直播、上传、发布或传播的各种形式的内容，如与本协议事项相关的任何文字、视频、音频等，以下统称“直播成果”）均授权MarsBit同步发布至MarsBit及/或其关联公司开通、运营、使用的各种官方账号（包括但不限于官方微信号等）。主播承诺，MarsBit有权自行或授权第三方进行前述同步操作，且无需向主播及/或任何第三方支付任何费用；否则，因此给MarsBit造成不利后果的，主播应负责消除影响，并且赔偿MarsBit因此遭受的一切损失。</p>
                <p className="title">第四条  MarsBit的权利义务</p>
                <p className="content">1.主播理解并同意，MarsBit有权制定平台运营制度及对主播的管理规则，有权对主播进行管理和监督，有权根据运营情况对相应规则做出调整或变更。</p>
                <p className="content">2.MarsBit有权对主播进行考察、评判，以确立（取消）对主播的奖励或处罚，具体考察项目及标准由MarsBit另行制定，无需额外征得主播同意。如MarsBit希望与主播就直播事项进行深入合作的，可由双方进行友好协商另行签订协议，如另行签订的协议与本协议产生冲突，以另行签订的协议为准。</p>
                <p className="content">3.MarsBit有权对主播的网络直播提出改进建议和意见，主播应在收到MarsBit的建议和意见后【3】个工作日内进行相应的整改。</p>
                <p className="content">4.MarsBit有权使用主播的名称（包括但不限于主播真实姓名、笔名、网名、昵称、曾用名及任何代表主播身份的文字符号）、肖像（包括但不限于真人肖像、形象及卡通肖像等）进行MarsBit的各类宣传。</p>
                <p className="content">5.MarsBit负责提供平台技术服务支持。</p>
                <p className="title">第五条  保密条款</p>
                <p className="content">1.主播应严格遵守MarsBit的保密条款，承诺无限期保守MarsBit的商业秘密。</p>
                <p className="content">2.商业秘密是指由MarsBit提供的、或者主播在与MarsBit合作期间了解到的、或者MarsBit对第三方承担保密义务的，与MarsBit业务有关的，能为MarsBit带来经济利益，具有实用性的、非公知的所有信息，包括但不限于：技术信息、经营信息和与MarsBit行政管理有关的信息和文件（含本协议及相关协议内容）、主播从MarsBit获得的网络直播收益的金额和结算方式、标准、权利归属方式、授权方式、客户名单、其他主播的名单、联系方式、MarsBit工作人员名单及联系方式等不为公众所知悉的信息。</p>
                <p className="content">3.主播应严格遵守本协议，未经MarsBit书面授权或同意，对MarsBit的商业秘密不得：</p>
                <p className="content">（1） 以任何方式向第三方或不特定的公众进行传播、泄露；</p>
                <p className="content">（2） 为非本协议的目的而使用MarsBit的商业秘密。</p>
                <p className="content">4.本协议终止后，主播应将MarsBit商业秘密悉数返还MarsBit，或在MarsBit监督下，将记载MarsBit商业秘密的全部文件销毁。</p>
                <p className="content">5.本条规定在本协议终止后仍然有效。</p>
                <p className="title">第六条  协议的解除、终止</p>
                <p className="content">1.双方就解除本协议协商一致即可终止协议。</p>
                <p className="content">2.用户有下列情形之一，MarsBit可以立即解除本协议，不需要提前通知：</p>
                <div className="content kaiti">
                    <p>（1）MarsBit发现用户违反对本协议所做的声明与承诺的；</p>
                    <p>（2）因用户个人行为直接或间接给对MarsBit利益造成重大损害的；</p>
                    <p>（3）违反国家法律法规的；</p>
                    <p>（4）违反本协议规定的其它义务；</p>
                    <p>（5）以消极、不作为等不符合MarsBit要求的方式履行本协议的（即使未构成违约），经MarsBit通知后【7】个自然日内仍未改正的；</p>
                    <p>（6）因异常情形的出现，MarsBit认为主播不适合进行本协议下网络直播活动，经MarsBit通知后【7】个自然日内异常情形仍未消除的；</p>
                    <p>（7）因MarsBit业务调整，决定停止本协议所涉及的业务。</p>
                </div>
                <p className="content">3. 本协议终止后，不影响本协议约定的直播成果的权利授予与行使，MarsBit仍有权按照本协议约定就所涉直播成果进行展示、同步分发及宣传推广的权利。</p>
                <p className="title">第七条  违约责任</p>
                <p className="content">1.任何由于用户声明不实或违反其声明承诺事项导致他方向MarsBit提起诉讼、索赔及/或导致MarsBit声誉受损之后果，用户将承担MarsBit因此产生的全部直接及间接费用、损失及赔偿，其中包括MarsBit为诉讼支付的有关费用及律师费。</p>
                <p className="content">2.除本协议另有约定外，用户违反本协议下任何规定的，MarsBit有权视情形，采取包括但不限于下列任一种或多种措施追究用户的违约责任：</p>
                <p className="content">（1）暂时地封停账号，直至用户纠正其违约行为；</p>
                <p className="content">（2）永久性地关闭直播功能；</p>
                <p className="content">（3）永久性地封停MarsBit账号；</p>
                <p className="content">（4）拒绝用户再次注册MarsBit的账号；</p>
                <p className="content">（5）MarsBit因此遭受任何经济、名誉上损失，用户应予以全额赔偿并负责消除给MarsBit造成的不良影响。</p>
                <p className="title">第八条  免责声明</p>
                <p className="content">1.MarsBit不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</p>
                <p className="content">2.MarsBit不保证为向用户提供便利而设置的外部链接的真实性、准确性和完整性，同时，对于该等外部链接指向的不由MarsBit实际控制的任何网页上的内容，MarsBit不承担任何责任。</p>
                <p className="content">3.对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因而产生损失，MarsBit不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</p>
                <p className="content">4.由于MarsBit提供的客户端等软件可以通过网络途径下载、传播，因此对于从非MarsBit指定官方站点下载、非MarsBit指定途径获得的MarsBit服务相关软件，MarsBit不担保MarsBit所包含或以其他方式通过MarsBit直播网站提供给用户的全部信息、内容、产品（包括软件）、服务和从MarsBit直播网站发出的电子信息、信件没有病毒或其他有害成分。</p>
                <p className="content">5.除非另有明确书面说明，MarsBit不对MarsBit直播网站及APP的运营及其包含在MarsBit直播网站和/或APP上的信息、内容、产品（包括软件）、服务作任何形式的、明示或默示的担保。</p>
                <p className="title">第九条  隐私保护</p>
                <p className="content">1. 用户理解并同意，MarsBit将按照MarsBit公布的<a href={mixUrl.m('/protocol')} target="_blank">《MarsBit用户协议》</a>的约定处理和保护用户的个人信息。</p>
                <p className="title">第十条  协议的修改与通知</p>
                <p className="content">1.MarsBit有权根据国家法律法规变化及MarsBit直播服务的业务需求等变化需求单方变更、终止、中止本协议内容，并在相关页面进行发布。</p>
                <p className="content">2.前述修改内容一经在相关的页面上公布即有效代替原来的协议内容，同时MarsBit将以适当的方式（包括但不限于弹窗、邮件、站内信、网站公告等）提醒用户更新后的内容，以便用户及时了解本协议的最新版本。</p>
                <p className="content">3.修改后的协议内容将构成本协议不可分割的组成部分，用户应在使用MarsBit直播服务时遵守。如用户不同意MarsBit对本协议所作的任何变更，应立即书面通知MarsBit并立即停止使用MarsBit直播服务；如用户继续使用MarsBit直播服务，即视为用户已知悉并接受变更后的协议内容。</p>
                <p className="title">第十一条  法律适用及争议处理</p>
                <p className="content">1.本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国法律。本协议项下因与中华人民共和国现行法律冲突而导致部分无效的，不影响其他部分的效力。</p>
                <p className="content">2.如就本协议内容或执行发生任何争议，应尽量友好协商解决；协商不成时，则争议双方均一致同意将争议提交广州仲裁委员会按照其仲裁规则进行仲裁，仲裁裁决为一裁终局，对争议双方均有法律约束力。</p>
                <p className="title">第十二条  其他</p>
                <p className="content">1. 本协议未尽事宜，或与国家、地方有关规定相悖的，按有关规定执行。</p>
                <p className="content">2. 本协议共十二条，本行以下无协议正文。</p>
            </div>
        </div>
    )
}
