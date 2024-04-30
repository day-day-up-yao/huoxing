import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { i18n } = useTranslation()
    return <div className="enlaw">
        {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
            <div><h3>Legal Notice</h3>
                <div className="enlaw-top">This website is created and maintained by Hainan Tianchen Network Technology Co on behalf of Secure1475. Secure1475 reserves the right to update these Terms at any time without notice, and the user will be bound by such updates as well. By accessing and viewing this website content, registering as a user, downloading any materials from this website, or using the materials provided herein, any person agrees to abide by the following terms and conditions. These Terms constitute an agreement between Secure1475 and the user. If the user does not agree to abide by these terms, do not use this website. Secure1475 reserves the right to deny access to, or use of, this website to any user at any time and under any circumstances. Secure1475 reserves the right to correct, modify or update this statement at any time in its sole discretion.</div>
                <h4>1. Copyright Notice</h4>
                <p>Secure1475 owns the copyright in all materials on the relevant pages of the Website or, together with the provider of the materials on the relevant pages of the Website, owns the copyright or license to use the materials on those pages. No part of the contents of this website may be copied or mirrored on servers not owned by Secure1475 without the expressed, written permission of Secure1475.</p>
                <p>The domain names, trademarks, text, visual and audio content, graphics and images contained on this website are protected by trademark and copyright laws. They may not be copied or transmitted in any form by any enterprise or individual without the express prior written permission of Secure1475. Any unauthorized use of this website will violate the Copyright Law of Singapore, the Trademark Law of Singapore and other relevant laws and regulations, as well as the provisions of relevant international conventions.</p>
                <h4>2. Protect the user's right to information and privacy</h4>
                <p>We respect the privacy of our users, and we will not actively collect user information or disclose content that is suspected of violating user privacy without the consent of the user. We do not sell or provide to any third party any username, email address, information, or address that we may have as part of our services without the user's permission. Secure1475 will not publish or disseminate any of the User's information registered on the Site, with the following exceptions. </p>
                <p>1. pursuant to a decision or ruling of a court, arbitral body, or other judicial proceeding.</p>
                <p>2. as required by the relevant government authority.</p>
                <p>3. the user violates the terms of use or has other actions that are detrimental to the interests of the mining leasing platform.</p>
                <p>4. Other requirements of relevant laws and regulations.</p>
                <p>If the user wishes to use the services provided by the Website which require registration, they shall agree to the following: to provide true, correct, current, and complete information about him/herself as prompted by the service registration form of the Website, and to update the registered information from time to time to ensure that it is true, correct, current and complete. If the user provides any false, inaccurate, outdated, or incomplete or misleading information, or if this website has reason to suspect that the aforementioned information is false, inaccurate, outdated or incomplete or misleading, this website has the right to suspend or terminate the users account and refuse the use of all or any part of the services provided by this website, both now and in the future.</p>
                <h4>3. Trademark and Domain Name Declarations</h4>
                <p>Secure1475 website (www.secure1475.com) are either registered trademarks or legally licensed trademarks of Secure1475 in Singapore or other countries, and may not be used in any manner without the written authorization of Secure1475. The domain name of the website is owned by Secure1475. Any use by any entity or individual is prohibited without written authorization from Secure1475.</p>
                <h4>4. Website links to</h4>
                <p>If the user wishes to link to this site, please contact us; links to this site may be made only with the written permission of Secure1475. After a link has been established, permission to link may be revoked if, in the reasonable opinion of Secure1475, the link is no longer appropriate. When linking to this Site, please be sure to use text links (the use of Secure1475 graphics and text is prohibited without the written permission of Secure1475); links to this Site should be set to appear in a separate window and not within the frame of the linking party's site.</p>
                <h4>5. Disclaimer of Liability</h4>
                <p>The User understands and agrees that in no event shall the Miner Leasing Platform be liable for the following.</p>
                <p>(1) Losses on transactions.</p>
                <p>(2) Trading profits or contract losses.</p>
                <p>(3) Business interruption.</p>
                <p>(4) Loss of information.</p>
                <p>(5) Damage or loss of data.</p>
                <p>(6) The demise or withdrawal of computing power from the market.</p>
                <p>(7) Losses due to policy factors.</p>
                <p>(8) Losses due to force majeure.</p>
                <p>Since its inception, Secure1475 has been committed to serving the mining industry, providing miners with a full range of services, from mining machine procurement, maintenance, mine deployment, and revenue exchange, etc. The Cloud Mining Service has grown from an internal operation to an official operation today. From its inception to its official operation today, Cloud Power Mining Service is based on the investment philosophy of 'rejecting partial distribution of profits and transparent operation of computing power,' and this innovation aims to build the world's best computing power service platform for users. To provide quality, algorithmic trading services to maximize the profits of our supportive friends and clients.</p>
                <p>Anyone who logs in or uses (including direct and indirect use) the Secure1475 webite in any way is deemed to have accepted and approved this statement. The contents of this statement are made in accordance with the relevant laws of Singapore, and the contents of this statement will be interpreted and applied in accordance with the relevant laws of Singapore.</p>
            </div>
        ) : (
            <div><h3>法的声明</h3>
                <div className="enlaw-top">このサイトは海南天辰网络科技有限公司（以下、「Secure1475」という）によって運営されています。当サイトにアクセス、内容閲覧、ユーザー登録、当サイトからいかなる資料のダウンロード、あるいは当サイトから提供された資料を使う場合、下記の条項を遵守することに同意することと見なします。これらの条項はSecure1475とあなたの間の協議になります。これらの条項を遵守することに同意しない場合は、当サイトを使用できません。Secure1475は通知なしにいつでも下記の条項を更新する権利を保留しています。これらの更新は同様にあなたを制約します。いかなる時間でも、いかなる場合でも、Secure1475はいかなるユーザーのアクセス・利用を拒否する権利があります。Secure1475は規約などに関して随時訂正、修正、更新する権利を保留します。</div>
                <h4>1. 著作権に関する声明</h4>
                <p>Secure1475は独立でこのウェブサイトの関連ページ内すべての資料の著作権を持っています。あるいは当ウェブサイトの関連ページ内の資料の提供者と共同でこのホームページ内の資料の著作権あるいはウェブサイトの使用権を持っています。Secure1475の明確な書面許可なしに、当サイト上のいかなる内容に対して複製または非Secure1475所属のサーバー上でミラーリングをしてはいけません。</p>
                <p>当サイトに掲載されているドメイン名、商標、文字、映像および音声コンテンツ、図形および画像は、いずれも関連商標と著作権の法的保護を受けています。Secure1475から事前に書面で明確な許可を得てない限り、いかなる企業あるいは個人もいかなる形式で複製または伝達してはいけません。本サイトを無許可で使用する行為はすべて「中華人民共和国著作権法」、「中華人民共和国商標法」及びその他関連法律法規及び国際条約に関する規定に違反します。</p>
                <h4>2. 利用者の情報およびプライバシーに関する権利の保護</h4>
                <p>弊社はユーザーのプライバシーを尊重し、ユーザーの同意なしに、ユーザーの情報を収集したり、ユーザーのプライバシーを侵害する疑いのある内容を漏らしたりしません。サービスの必要に応じて把握したユーザー名、電子メール、情報、住所などについては、ユーザーの許可なしに、いかなる第三者にも販売または提供しないことを承諾します。Secure1475はユーザーが当サイトに登録したいかなる資料を公開しませんが、下記の場合を除きます。</p>
                <p>1. 事前にユーザーの明確な授権を取得する。</p>
                <p>2. 裁判所、仲裁機関の裁判または裁決、その他の司法手続の要求に従う。</p>
                <p>3. 関連政府主管部門の要求に従う。</p>
                <p>4. 利用者が使用規約の規定に違反し、またその他マイニングマシン賃貸プラットフォームの利益を損なう行為。</p>
                <p>5. その他法律法規に関する要求。</p>
                <p>ユーザーが当サイトの登録してから提供できるサービスを利用する場合、以下の事項に同意と見なします。当サイトのサービス登録表の提示に従って、ご本人の真実、正確、最新及び完備した資料を提供してください。登録資料を随時更新して、真実、正確、最新及び完備した資料であることを確認してください。もし何かの間違いのある、不事実、過去な、不完全または誤解のある資料を提供した場合、または当サイトは上記の資料が間違いのある、不事実、過去な、不完全または誤解のある資料と疑われる理由がある場合、当サイトはユーザーのアカウントを一時停止または終了する権利があります。また、当サイトが提供された現在および未使用のサービスの全部または任意の部分の提供を拒否できます。</p>
                <h4>3. 商標およびドメイン名に関する声明</h4>
                <p>Secure1475ウェブサイト（secure1475.com）使用しているすべてのSecure1475の図案及び文字の商標は、中国または他の国におけるSecure1475の登録商標または合法的に使用された商標であり、Secure1475の書面で明確な許可を得てない限り、いずれの単位または個人もいかなる方式で上記の商標を使用してはいけません。Secure1475サイトのドメイン名はSecure1475の所有です。Secure1475の書面の授権を受けていない限り、いかなる単位または個人も使用してはいけません。</p>
                <h4>4. サイトへのリンク</h4>
                <p>本サイトへのリンクをご希望の場合は、ご連絡ください。Secure1475の書面許可を得てから、当サイトにリンクできます。リンクを確立した後、例えばSecure1475が客観的状況によってリンクに適しないと判断した場合、リンクの許可を取り消す権利があります。当サイトにリンクする際は、必ずテキストリンク（Secure1475の書面許可がない場合は、Secure1475の図案及び文字のリンク方式を使用してはいけません）を使用してください。当サイトのリンクをクリックして新規ウィンドウに表示する形式に設定します。リンク先サイトの枠組みの中に表示することはできません。</p>
                <h4>5. 責任免除</h4>
                <p>お客様は、いかなる状況においても、マイニングマシン賃貸プラットフォームは以下の各事項について責任を負わないことに同意します</p>
                <p>（1）取引の損失；</p>
                <p>（2）取引利益または契約損失。</p>
                <p>（3）業務の中断；</p>
                <p>（4）情報の損失；</p>
                <p>（5）データの破損または損失；</p>
                <p>（6）ハッシュレートがなくなったり、市場から退出したりする場合。</p>
                <p>（7）政策要因による損失。</p>
                <p>（8）不可抗力による損失。</p>
                <p>マーズクラウドマイニングは創業以来、BTCマイニング業界へのサービス提供に力を入れており、マイニングマシンの調達からメンテナンス、ファームの展開、収益の交換まで、あらゆるサービスを提供しています。創業から今日の正式運用に至るまで、クラウドパワーマイニングサービスは、「利益の部分的な分配を拒否し、コンピューティングパワーの透明な運用を行う」という投資哲学に基づいており、この革新は、顧客に質の高い算術取引サービスを提供し、その利益を最大化するためです。世界最高のコンピューティングパワーサービスプラットフォームを構築することを目指しています.</p>
                <p>いかなる方法で登録またはSecure1475の使用が（直接使用及び間接使用を含む）、すべて本声明に承認と認めらたことににみなします。本声明の内容は中華人民共和国の関連法律に基づき締結され、本声明の内容は中華人民共和国の関連法律に基づいて解釈、適用します。</p>
            </div>
        )}
    </div>
}
