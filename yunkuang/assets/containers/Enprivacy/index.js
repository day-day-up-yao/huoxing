import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { i18n } = useTranslation()
    return <div className="enpriva">
        {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
            <div><h3>Privacy Policy</h3>
                <div className="enpriva-top">We respect the privacy of all users and site visitors (collectively called “you” and “your”) and promise to do our best to protect your online privacy. This Privacy policy outlines the process of management, collection, maintenance and processing of users’ personal data by Hainan Tianchen Network Technology Co., Ltd., Secure1475 and its affiliated entities (hereinafter referred to as the “Mars Cloud Mine” or “we”, “us” and “our”).</div>
                <h4>1. Information Collection</h4>
                <p>We may utilize your personal data to provide and improve the miner sharing services (the “services”) provided by the Mars Cloud Mine, and to improve your use experience on this site. “Personal data” refers to any information related to an identified or identifiable person. We will collect the information you provide when you create an account to use the services. We also use various technologies to collect and store information, including Cookies, pixel tags and local storage (such as network storage of browser or application data cache, database and server logs). Your use of the services or this site indicates that you agree with the collection and use of the information by us according to this Privacy Policy. Unless otherwise stated herein, the terminology used in this Privacy Policy shall have the same meaning with the same terminology used in our Service Agreement.</p>
                <p>1.1 Registration</p>
                <p>You are required to provide such information when creating an account as your email, telephone number, password or other information.</p>
                <p>1.2 Payment information</p>
                <p>Your payment information will be sent to our third-party payment processors and your use indicates that you authorize us to store your encrypted wallet address and that we may have access to and keep the user information through our third-party payment processors.</p>
                <p>1.3 Log information</p>
                <p>We will collect the information sent by your browser when you visit our site and log in your account (the”log data”). The log data may include the following information: Internet Protocol (IP) addresses of your computer, browser type and version, web pages of the services you visited, time and date of the visiting, time spent on these pages and other statistical data. In addition, we may use third-party services, such as Google Analytics, to collect, monitor and analyze such information in order to enhance the functionality of our services. The third-party service providers have their own privacy policies to describe how they use such information. Such third-party service providers can only use your personal data as necessary for performing tasks on behalf of us.</p>
                <p>1.4 How we use your personal information</p>
                <p>We may use your personal information for the purposes listed below：</p>
                <p>(1) Show you our site and its contents;</p>
                <p>(2) Identify you as our users in our system;</p>
                <p>(3) Process your orders;</p>
                <p>(4) Provide customer services;</p>
                <p>(5) Respond to your requirements;</p>
                <p>(6) Provide you with product updates;</p>
                <p>(7) Improve our site;</p>
                <p>(8) Send news, investigations, special offers and other promotional materials relating to our products;</p>
                <p>(9) Communicate with you;</p>
                <p>(10) Manage the risks and protect the site and protect our services and you from fraudulent activities;</p>
                <p>(11) Comply with all applicable laws and regulations, and execute the service agreements of both this site and Secure1475;</p>
                <p>(12) Other purposes with your consent.</p>
                <p>1.5 Information about Cookies</p>
                <p>In order to provide you with better access experience, we use Cookies to allow this site to identify your browser and store user preference and other information. If permitted by your browser or the additional service of the browser, you may alter the acceptance degree of Cookies or reject Cookies. See AboutCookies.org for details. However, if you do so, it may in some cases affect your experience of visiting our site or make it impossible to use some of our services.</p>
                <h4>2. Third-party Service Providers</h4>
                <p>We may hire third parties to provide business relevant services for us. Such third parties may only obtain access to your personal data while providing services to us and are obliged not to disclose or use the data for any other purposes. However, the act of us providing your personal data to the third-party service providers shall not be deemed that we shall undertake any legal liability for the infringement of user information or privacy by a third-party service provider.</p>
                <h4>3. If You Are A Citizen of the European Economic Area (EEA)</h4>
                <p>If you are a citizen of the European Economic Area (EEA), you enjoy certain data protection rights based on applicable laws and regulations. Our goal is to adopt reasonable measures to allow you to alter, modify, delete or limit the use of your personal data. Please contact us if you wish to know about the personal information we hold about you and if you wish to delete your personal information from our system. We, however, assume no legal responsibility for the data manipulation acts by the citizens of the European Economic Area (EEA).</p>
                <h4>4. Information Security</h4>
                <p>Although we are committed to protecting our site and services, you are responsible for protecting and maintaining the security of your personal information, and verifying whether the personal information we maintain about you is correct and updated. You must prevent unauthorized access to your account. Be sure to log out when using shared computers and do not disclose your account and password and any other account information to any unauthorized person.</p>
                <p>However, no transmission or electronic storage method through the Internet is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security. We cannot guarantee the security of your personal information transmitted to our site and/or through our services. Any transmission of  personal information shall be at your own risk.</p>
                <h4>5. International Data Transmission</h4>
                <p>By submitting your information, you agree that your information (including personal data) may be transmitted and stored to computers and systems outside the jurisdiction of your country/territory. Under such circumstances, we will endeavor to ensure that your information is protected to the same extent as regulated in your country/territory. However, we do not assume any legal responsibility for the consequences brought about by such protection.</p>
                <h4>6. Third-party Links</h4>
                <p>Our services may contain links to third-party websites that are not operated by us. If you click such links, you will be directed to the relevant third-party websites. The Privacy Policy does not apply to other third-party websites. We strongly recommend that you check the privacy policies of the websites you visit. The Mars Cloud Mine can neither control any third-party websites or their contents of services and privacy policies, nor bear any responsibility.</p>
                <h4>7. Privacy of Children</h4>
                <p>We do not knowingly collect or maintain personal data on our site from persons under the age of 16, and no part of our site is targeted at persons under the age of 16. If you are under 16 or you are 16 but do not derive your income from your own labor, please do not use or visit this site in any way. If we are aware that we have accidentally collected the personal data from persons under 16 years old, we will delete or adopt other appropriate measures to dispose such personal data according to applicable laws and regulations.</p>
                <h4>8. Change of Purpose of Use of Personal Data</h4>
                <p>If we decide to use your personal data for any purposes other than those stated in this Privacy Policy, we will notify you and provide you with an effective exit option for not using your personal data for any purposes other than those stated in this Privacy Policy.</p>
                <p>We may send you emails relating to new services and activities. You may select the “cancel subscription” function in each email we send to refuse to receive the promotional emails of Secure1475. However, users who agree to use this service will continue to receive other important emails pertaining to the services.</p>
                <h4>9. Information Storage Time</h4>
                <p>Unless required by applicable laws and regulations, we only keep and save your personal information within the time period as necessary to realize the purpose stated in this Policy. Under the circumstances permitted by law, we may store certain personal information for record keeping purposes or guarantee our rights and interests through legal means. Our storage of information is performed in accordance with the requirements of relevant laws and regulations, and we bear no legal responsibility for the information storage behavior.</p>
                <h4>10. How We Learn About, Acquire, Alter or Delete Your Personal Information</h4>
                <p>Please contact us via the contact information stated in the Privacy Policy if you wish to confirm that we are processing your data, or access your personal data that we may hold, alter or delete your personal information we have collected.</p>
                <h4>11. Contact Us</h4>
                <p>Please contact us in case of any concerns related to this Privacy Policy.</p>
            </div>
        ) : (
            <div><h3>プライバシー</h3>
                <div className="enpriva-top">私たちはユーザーとウェブサイトの訪問者（総称して「あなた」といいます）のプライバシーを尊重し、オンラインのプライバシーを守るために最善を尽くします。このプライバシーポリシーは海南天辰网络科技有限公司とその関連組織（以下、「Secure1475」または「私たち」という）の管理、収集、維持、処理のユーザー個人データの流れを概説しています。私たちは常にこのプライバシーポリシーを更新することができます。私たちはこのページで新たなプライバシーポリシーを発表して変更もお知らせします。このプライバシーポリシーを定期的に確認して変更を知ることをお勧めします。このプライバシーポリシーの変更は、このホームページを公開する際に有効となります。</div>
                <h4>1. 情報収集</h4>
                <p>私たちはあなたの個人データを使って、Secure1475からあなたに提供されたマイニングマシン共有サービス（「サービス」）を提供し、使用体験を改善していきます。「個人データ」とは、識別された人または識別可能な人に関する任意の情報をいいます。サービスを利用するためにアカウントを作成すると、あなたが提供してくれた情報を集めます。また、Cookie、ピクセルラベル、ローカルストレージ（ブラウザネットワーク記憶またはアプリケーションデータキャッシュ、データベース、サーバログなど）を含む様々な技術を使用して情報を収集し、記憶しています。サービスまたは当サイトをご利用いただくと、このプライバシーポリシーに従って情報を収集し利用することに同意するということです。このプライバシーポリシーに別の規定がない限り、本プライバシーポリシーで使用される用語は私たちのサービス規約と同じ意味を持っています。</p>
                <p>1.1 登録</p>
                <p>アカウントを作成するには、メール、電話、パスワードなどのデータを提供する必要があります。上記の情報の提供を拒否すると、サービスを提供することができません。</p>
                <p>1.2 支払情報</p>
                <p>あなたの支払情報は第三者支払処理者に送信されあなたの使用は許可されたものとみなされます。私たちはあなたの暗号化されたウォレットのアドレスを保存できます。私たちの第三者支払処理者を通じてユーザ情報を保存できます。</p>
                <p>1.3 ログ情報</p>
                <p>Secure1475は、あなたが私たちのサイトを訪問し、あなたのアカウントに登録するときに、ブラウザから送られた情報を収集します。このログデータには以下の情報が含まれています。あなたのコンピュータのインターネットプロトコル（IP）アドレス、ブラウザの種類、ブラウザのバージョン、あなたがアクセスしたサービスのページ、アクセス時間、日付、これらのページにかかる時間と他の統計データがあります。また、Google Analyticsなどの第三者サービスを使って、このような情報を収集、監視、分析し、サービスの機能性を向上させることができます。これらのサードパーティのサービスプロバイダは自分のプライバシーポリシーを持ってあり、情報を使い道を説明しています。これらのサードパーティサービスプロバイダは、私たちが任務を遂行するために必要な時にのみ、あなたの個人データを表示することができます。</p>
                <p>1.4 あなたの情報の使い道</p>
                <p>あなたが提供した個人情報を次の目的に使う可能性あります。</p>
                <p>（1）私たちのウェブサイトとその内容をお見せします。;</p>
                <p>（2）私たちのシステムのユーザとして識別します。;</p>
                <p>（3）ご注文を処理します。;</p>
                <p>（４）カスタマーサービス提供;</p>
                <p>（5）ご要望にお答えします;</p>
                <p>（6）製品の更新を提供します。;</p>
                <p>（7）私たちのウェブサイトを改善します；</p>
                <p>（8）私たちの製品に関するニュース通信、調査、特恵及びその他の宣伝資料を送る；</p>
                <p>（9）あなたとコミュニケーションします;</p>
                <p>（10）リスクを管理し当サイトを保護します。私たちのサービスとあなたは詐欺から守ります。;</p>
                <p>（11）適用されるすべての法律と法規を遵守し、本サイトとSecure1475サービス協議を実行する。</p>
                <p>（12）その他あなたの同意を得た目的に使用します。</p>
                <p>1.5 Cookieに関する情報</p>
                <p>より良いウェブサイトアクセス体験を得るために、私たちは「Cookie」を使用して、このウェブサイトがあなたのブラウザを識別し、ユーザーの好みやその他の情報を保存することができます。ブラウザやブラウザの追加サービスが許可されている場合は、Cookieの許容度を変更したり、Cookieを拒否することができます。詳細についてはAboutCookies.orgご参考してください。ただし、このようにすれば、私たちのウェブサイトを訪問する体験に影響を与えるかもしれません。あるいは私たちの部分のサービスを利用できないかもしれません。</p>
                <h4>2. 第三者サービスプロバイダ</h4>
                <p>第三者サービスプロバイダを採用して業務関連のサービスを提供してくれるかもしれません。これらの第三者は、サービスを提供している間だけ、あなたの個人データにアクセスすることができるし、情報漏れを徹底し防止し他の目的使用してはいけない義務があります。しかし、私たちは三方のサービスプロバイダにあなたの個人データを提供する行為は、第三者のサービスプロバイダのユーザ情報に対する権利侵害またはプライバシー侵害行為に対していかなる法的責任を負うものとはみなされません。</p>
                <h4>3. ヨーロッパ経済区（EEA）の住民であれば</h4>
                <p>もしあなたがヨーロッパ経済区（EEA）の住民であれば、適用の法律法規に基づいて特定のデータ保護権利を持っています。私たちの目標は合理的な措置を取って、修正、削除、または制限をさせていただきます。もしあなたが私たちが持っている個人データとあなたの個人情報を私たちのシステムから削除したいなら、私たちに連絡してください。しかし、私たちはヨーロッパ経済区（EEA）の住民のデータ操作に対して、いかなる法的責任も負いません。</p>
                <h4>4. 情報セキュリティ</h4>
                <p>私たちは私たちのウェブサイトとサービスを保護することに力を尽くしていますが、あなたにも個人情報の安全を守る責任があり、あなたの個人情報が正確で最新のものであるかを確認します。許可なしにあなたの口座にアクセスするのを防ぐ必要があります。共有コンピュータを使用する場合は、必ずログアウトしてください。また、許可されていない人に口座のパスワードと他のアカウントの登録情報を開示しないでください。</p>
                <p>しかし、インターネットを介して伝送される方法や電子記憶方法は100%安全ではありません。したがって、あなたの個人情報を守るために最善を尽くすとともに、絶対的な安全性を保証することはできません。私たちはあなたが私たちのウェブサイトに送ることと/または私たちのサービスを通じての個人情報の安全性を保証することができません。個人情報の伝送は自分でリスクを負担します。</p>
                <h4>5. 国際データ転送</h4>
                <p>あなたの情報を提出することによって、あなたの情報（個人データを含む）があなたの国/地域の管轄範囲外のコンピュータとシステムに転送され保存される可能性があります。もしこのような転送が発生したら、あなたの情報があなたの国/地域の規定のレベルとほぼ同じように保護されていることを確認します。しかし、私たちはこの保護行為の結果に対して法的責任を負うことができません。</p>
                <h4>6. 第三者リンク</h4>
                <p>私たちは故意に16歳以下の人が私たちのウェブサイトの個人データを収集、維持させrることはありません。そして私たちのウェブサイトのどの部分も16歳以下の人に対応しません。16歳未満または満16歳以上だが自分の労働収入を主な収入源としない場合は、いかなる方法でこのサイトを使用したり、アクセスしたりしないでください。私たちが何気なく16歳以下の人の個人データを集めていると知った時、私たちは法律適用法規によって削除したり、他の適切な措置を取ります</p>
                <h4>7. 子供のプライバシー</h4>
                <p>私たちは故意に16歳以下の人が私たちのウェブサイトの個人データを収集、維持させrることはありません。そして私たちのウェブサイトのどの部分も16歳以下の人に対応しません。16歳未満または満16歳以上だが自分の労働収入を主な収入源としない場合は、いかなる方法でこのサイトを使用したり、アクセスしたりしないでください。私たちが何気なく16歳以下の人の個人データを集めていると知った時、私たちは法律適用法規によって削除したり、他の適切な措置を取ります。</p>
                <h4>8. 個人データの使用目的の変更</h4>
                <p>私たちがあなたの個人データを本プライバシーポリシー宣言以外のいかなる目的に使う場合、あなたに通知してまた有効な退出ルートを提供します。このプライバシーポリシーの規定外の目的に自分の個人データを使用できないように選択できるようにいたします</p>
                <p>新しいサービスと新しい活動に関するメールを送る可能性あります。私たちが送ったメールの中から「購読キャンセル」機能を選択して、Secure1475の宣伝メールの受信を拒否できます。しかし、サービスを利用することに同意したユーザは、サービスに関する他の重要な電子メールを引き続き受信してください。</p>
                <h4>9. 情報保存時間</h4>
                <p>法律法規を適用して保留要求がない限り、私たちはコスト政策の目的に達するために必要な期限内にあなたの個人情報を保留して保存します。法律で許可された場合、私たちは一定の個人情報を保存して記録に載せたり、法律のルートを通じて自身の権益を保障したりすることができます。私たちの情報保管行為は法律、法規の要求によって実行されます。私たちは情報保管の行為に対して法律上の責任を負いません。</p>
                <h4>10. あなたの個人情報を理解、取得、変更または削除する方法</h4>
                <p>あなたが私たち処理中のあなたのデータを確認したり、私たちが収集したあなたの個人情報をアクセスしたり、私たちが収集したあなたの個人情報を修正したり、私たちが収集したあなたの個人情報を削除したい場合はこのプライバシーポリシーで定められた連絡先を使って連絡してください。</p>
                <h4>11. 連絡方法</h4>
                <p>このプライバシーポリシーに対して何か質問があれば、当社お問い合わせしてください。</p>
            </div>
        )}
    </div>
}
