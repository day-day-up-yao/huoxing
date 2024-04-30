import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
export default () => {
    const { i18n } = useTranslation()
    return <div className="enhelp">
        {(i18n.language).toLowerCase().substring(0, 2) === 'en' ? (
            <div><h3>Help Center</h3>
                <h4>1. Business Introduction</h4>
                <p>1.1 What is Secure1475?</p>
                <p>Secure1475 is a one-stop database mining platform released by Mars Block based on blockchain technology. It provides investors with open, fair, and transparent real mining services by virtue of Mars Finance's content and traffic advantages. While using centralized procurement and co-location mechanisms to reduce mining operation costs, it also uses an annual TB purchasing model to lower the barrier of entry for all types of investors to participate in the mining industry and provide a safe and compliant database mining investment channel.</p>
                <p>The strategic partners of  Mars Finance include (in no particular order): BitLand, Canaan Cultivation, Shenma Miner and Hummingbird Miner. </p>
                <p>1.2 How does Secure1475 work?</p>
                <p>Secure1475 has links to top mining machine manufacturers, mines, mining pools, and professional maintenance teams in the industry, pooling affordable and stable mining resources and reducing overall operating costs and user mining costs; it is deeply connected to Cocoa Finance, providing one-stop investment financial services throughout the entire life cycle, from mining to assets to financial liquidity.</p>
                <p>1.3 Annual TB Purchasing Model</p>
                <p>The Annual TB Purchasing Model uses the entire product as the service unit and provides the service of transferring the time-limited usage right of the database mining machine. After the user selects and purchases a product related to this model, they will be granted the right to use the corresponding mining machine for a one year period of time. The user will select the number database mining TBs and pay the associated costs for the normal operation of the database mining machine and provide the wallet address of the corresponding currency in order to collect the database mining revenue. In the Annual TB Purchasing Model, the user will not be purchasing a database mining machine. All database mining machines are already installed at Secure1475's partner's data warehouse with the user only purchasing the right to use the corresponding database mining machine TB. The user will receive all the actual database mining revenue from the machine TB during the usage period. At the end of the annual usage period, the corresponding service will be automatically terminated and the user can place another order to renew for another one year period.</p>
                <p>Note: The actual database mining revenue is the actual revenue generated minus the electricity, operation and maintenance costs equating to 20% of total revenue generated.</p>
                <h4>2. Account Management</h4>
                <p>2.1 How do I setup my account management portal?</p>
                <p>After purchasing your Secure 1475 product at Beyond, go to www.secure1475.com and click on register a new account. Enter the email you have registered with Beyond as your account name, then enter and confirm your password.</p>
                <p>Note: You MUST use the same email as the email used to register with Beyond for your own safety and security in ensuring your purchase is properly assigned to you.</p>
                <p>2.2 What if I forget my login password?</p>
                <p>Click on 'My Login' in the upper right corner of the home page, select 'Forgot Password' to enter the login password recovery function, provide the appropriate account security information as instructed, and enter and submit a new password after submitting additional authentication.</p>
                <p>If you cannot provide additional account security information, contact Beyond Support for assistance.</p>
                <p>2.3 How do I add 2-step authentication?</p>
                <p>Click 'My User Center' in the upper right corner of the home page, click 'Add' in the 'Google Authentication' area, scan the QR code in Google Authenticator or enter the serial number manually. If you want to use Google Authenticator, fill in the verification code displayed by Google Authenticator and other account security information in the corresponding fields and click 'Add'.</p>
                <p>2.4 What if the authentication is lost?</p>
                <p>Contact Beyond Support for assistance.</p>
                <p>2.5 How do I delete my account?</p>
                <p>Please contact Beyond Support and inform them that you want to cancel your account and submit your complete account security information for verification. Secure1475 will cancel your account after receiving your approval. After your account is cancelled, any unused or future database mining revenue rights, balances, electricity bills and unextracted mining revenues in your account will be considered as abandoned assets and cannot be retrieved after cancellation.</p>
                <h4>3. Purchases and Payments</h4>
                <p>3.1 How do I make a purchase?</p>
                <p>Login to your Beyond back office and go to the Shop Beyond link. Select the desired Secure 1475 and click continue to go to the order summary and payment pages to complete your purchase.</p>
                <p>3.2 When will my purchase show up in my Secure1475.com management portal.?</p>
                <p>Your Secure 1475 purchase will be displayed in your management portal on the first Monday following the close of the Friday to Thursday Beyond commission period during which the purchase was made. If your purchase does not display at that time, please ensure that payment was completed and the email used to register your secure1475.com management portal is the same email used to register with Beyond. If there are any problems, contact Beyond Support for assistance.</p>
                <p>3.3 How soon after purchase does Secure 1475 start to generate revenue?</p>
                <p>Your Secure 1475 purchase will begin mining on the first Monday following the close of the Friday to Thursday Beyond commission period during which the purchase was made. The database mining rewards will begin displaying daily on the following Wednesday.</p>
                <p>3.4 Costs Associated with Secure 1475</p>
                <p>The main costs of Secure 1475 can be divided into the annual cost per TB and electricity, operation and maintenance costs.</p>
                <p>Annual TB Purchase Cost: The Secure 1475 purchase price is the cost per TB of one year of database mining. The price will be adjusted according to market conditions with the actual purchase price determined at the time of payment by the user. </p>
                <p>Electricity, Operation and Maintenance Fees: Mars Finance will charge an electricity, operation and maintenance fee for all database mining and provide entrusted management services for the machines, including transportation of the machines, site support, daily monitoring, maintenance, repair, and computing power guarantee. The electricity, operation and maintenance fees will be deducted from the daily database mining revenue.</p>
                <h4>4. Earnings Management</h4>
                <p>4.1 How do I check the status of a mining machine?</p>
                <p>Click on "My hash power" in the upper right corner of the home page and you will be taken to a page where you can view all operating products.</p>
                <p>4.2 How to Calculate Expected Returns?</p>
                <p>In the Expected Returns Calculator provided by Secure1475, select the product and the system will calculate the expected returns based on the selected product and current network data.</p>
                <p>4.3 How do I view earnings?</p>
                <p>You can see the earnings details in the corresponding product details on the "My hash power" page.The database mining revenue is settled daily. The database mining revenue is the actual hash power revenue after deducting the electricity, operation and maintenance fee of 20%. Earnings can be withdrawn daily or as desired.</p>
                <p>4.4 What should I anticipate from my Secure 1475 rewards?</p>
                <p>Your Secure 1475 database mining rewards will generally increase over the first 5-6 months after purchase with mining reaching greater optimization at that point. The projected database mining rewards for the first year are anticipated to be approximately 30 FIL after deducting for electricity, operation and maintenance fees.. It is also projected that the second year rewards, if purchased again, will be approximately 50% higher.</p>
                <p>4.5 What circumstances could create earnings fluctuations?</p>
                <p>Since database mining is affected by various factors such as mining machines, mining sites, mining pools, and hash power of the entire network, loads, etc., fluctuations in revenue are normal and Secure1475 does not guarantee stable returns. Secure1475 guarantees that the user's Secure 1475 will maintain uninterrupted operation, and in the event the machine fails, will immediately switch to another mining machine of the same type to guarantee the user's revenue. Secure1475 is not liable for losses resulting from uncontrollable risks that could not have been foreseen, avoided or overcome by objective events, including natural disasters such as floods, volcanic eruptions, earthquakes, landslides, fires, storms and severe weather rated by Chinese authorities as above the 100-year unpredictable level, government actions and government directives, city-level power grid incidents, and social anomalies such as wars, strikes, civil unrest, etc.</p>
                <p>4.6 Why is my mining output down?</p>
                <p>In addition to mining resources such as mining machines and mining pools, output is also related to the total hash power and difficulty of the Filecoin network. In addition to fluctuating hardware computing power, the ratio of mining machine hash power and mining pool hash power will affect the percentage of mining output that can be allocated to the use. Since the ratio of hash power is always in flux, the total hash power and network load of the Filecoin network will affect the overall mining output. The network load will be adjusted every approximately every 14 days according to the network-wide hash power changes, so the user's hash power gain will always be in flux and some of it will be in the form of a fluctuating ratio. The factors can lead to a decline in mining output.</p>
                <h4>5. Price Adjustment Rules</h4>
                <p>5.1 Price adjustment rules for Secure 1475 purchases.</p>
                <p>Database mining costs are influenced by the mining payback cycle, capacity, and value expectations, based on a theoretical payback cycle of 6 months. If strong appreciation is expected and there is no corresponding increase in mining capacity, the price of the database mining could increase significantly. Similarly, when the medium and long-term price is expected to depreciate, the price of Secure 1475 will also decrease. The price of Secure 1475 sold by Secure1475 will be adjusted in line with market conditions.</p>
                <p>5.2 Electricity, Operations and Management Fee Adjustment Rules</p>
                <p>Electricity, operations and management fees will be explicitly displayed and deducted on a daily basis. The current fee is 20% and will be automatically deducted from the database mining revenue. If the price of electricity increases due to force majeure (e.g., government actions and government orders to increase regional electricity prices, or the cost of electricity delivery due to power supply failures in cities or municipalities), the associated fees will be adjusted accordingly and automatically deducted from the database mining revenue.</p>
            </div>
        ) : (
            <div><h3>ヘルプセンター</h3>
                <h4>1. 事業紹介</h4>
                <p>1.1 Secure1475とは？</p>
                <p>Secure1475とは、Mars Blockがブロックチェーン技術を駆使して構築したワンストップのデータベースマイニングプラットフォームです。Mars Financeのコンテンツやトラフィックの優位性を活かし、投資家にオープンで公平かつ透明性の高いリアルマイニングサービスを提供しています。集中調達やマシンを他社と共用された場所に設置する事で、マイニング運用のコストを削減する一方、あらゆる投資家の参入をより促すよう、1年単位でのTB購入モデルを採用し、安全でコンプライアンスに準拠したデータベースマイニング投資チャンネルを提供しています。</p>
                <p>以下、Mars Financeの戦略パートナーを表記。BitLand、Canaan Cultivation、Shenma Miner、Hummingbird Miner等 </p>
                <p>1.2 Secure1475は、どのように運営されていますか？</p>
                <p>Secure1475は、業界トップのマイニングマシンメーカーを始め、マイニングプール、一流のメンテナンスチーム等からのサポートを受けている事で、全体的の運営コストとユーザーのマイニングコストの削減を実現しております。Cocoa Financeとの信頼された関係性をもとに、マイニングから資産、金融の流動性まで、全体を通してワンストップで可能な投資金融サービスを提供しています。</p>
                <p>1.3 1年単位でのTB購入モデル</p>
                <p>1年単位でのTB購入モデルとは、本サービスの利用期間、契約期間を1年とし、データベースマイニングマシンの使用権利を期間限定で譲渡するサービスとなります。ユーザーは、各自データベースのマイニングTB数を選定し、マイニングマシンの運用コストを支払い、マイニング報酬を定期的に回収するために必要となるご自身のウォレットアドレスを運営側に共有頂きます。</p>
                <p>本購入モデルは、ユーザーが実際にデータベースのマイニングマシンを保有・購入する形式とは異なります。データベースのマイニングマシンは、既にSecure1475のパートナーのデータウェアハウスにインストールされており、ユーザーは、本データベースのマイニングマシンのTB購入数に応じた期限付きの使用権利を保有・購入する形式となります。ユーザーは、使用期間中に発生したデータベースのマイニング報酬をすべて受け取ることになります。使用期間が満了した場合、本サービスは自動的に終了となります。尚、本サービスの利用期間を更新される場合、ユーザーは改めて購入手続きを行う必要がございます。注：実際のデータベースのマイニング報酬とは、生成された総収益の20％に相当する電気代、運用費、メンテナンス費を差し引いたものを示します。</p>
                <h4>2. アカウント管理</h4>
                <p>2.1 アカウント管理ポータルの設定方法は？</p>
                <p>BeyondにてSecure 1475 製品をご購入後、www.secure1475.com にアクセスして頂き、[無料新規登録]へお進みください。Beyond にて登録の際に使用頂いているメールアドレスをアカウント名として入力し、パスワードの設定・確認をお願い致します。</p>
                <p>注: ご購入頂いた製品が、適切に割り当てられている事、お客様自身の安全とセキュリティを確保するためにも、Beyondにて登録の際に使用したメールアドレスと同じメールアドレスをご利用ください。</p>
                <p>2.2 ログインパスワードを忘れてしまった場合は？</p>
                <p>www.secure1475.comにアクセスして頂き、「パスワードお忘れの方」のボタンをクリックし、パスワードをリセットすることができます。</p>
                <p>追加のアカウントセキュリティ情報がない場合、Beyondサポートまでお問い合わせください。注意： パスワードをリセットした２４時間内に資産の出金はできません。</p>
                <p>2.3 ２段階認証を追加するには？</p>
                <p>ホームページの右上にある「マイページ」から「ユーザーセンター」というボタンをクリックし、「Google認証」から「認証」を選択してください。Google AuthenticatorのQRコードをスキャン、もしくはシリアル番号を手動で入力ください。Google Authenticatorを利用する場合、Google Authenticatorで表示される認証コードとその他アカウントのセキュリティ情報を該当する欄に入力し、「追加」してください。</p>
                <p>2.4 認証が失われた場合は？</p>
                <p>Beyondサポートにお問い合わせください。</p>
                <p>2.5 アカウントを削除するには？</p>
                <p>Beyondサポートまでご連絡ください。アカウントを削除したい旨を伝え、アカウントセキュリティ情報をご提示ください。Secure1475は、ご本人様の承認が取れ次第、アカウントを削除致します。削除された際には、本アカウントのマイニング報酬権、残高、電気代、未出金のマイニング報酬全てが放棄され、削除後に回収することは出来かねますので予めご了承ください。</p>
                <h4>3. 購入方法</h4>
                <p>3.1 購入方法は？</p>
                <p>Beyondのバックオフィスにログインし、ショップ Beyondのリンクへお進みください。 購入希望のSecure 1475 を選択し、[続ける] をクリック。注文の詳細と支払いページに移動して購入手続きをお願い致します。</p>
                <p>3.2 購入した商品は、いつSecure1475.com の管理ポータルに表示されますか?</p>
                <p>購入頂いたSecure 1475は、Beyondのコミッションの支払い期間である金曜日から木曜日を期日として、翌週の月曜日に管理ポータルに表示されます。購入頂いてから翌週の月曜日に表示されない場合は、支払いが完了していることを改めてご確認ください。尚、 secure1475.com の管理ポータルを登録する際に使用したメールアドレスが、Beyondの登録に使用したものと同じであることもご確認ください。その他、ご不明な点がある場合は、Beyondサポートまでお問い合わせください。</p>
                <p>3.3 Secure 1475 を購入後、どのくらいの期間で報酬を得られますか?</p>
                <p>Secure 1475 は、ご購入された翌週の月曜日からマイニングを開始致します。マイニング報酬は、2日後の水曜日から日々、管理ポータル内にて表記されます。</p>
                <p>3.4 Secure 1475 関連のコスト</p>
                <p>Secure1475の主なコストは、TBあたりの年間の費用、電気代、運用・メンテナンス費用に分けることができます。</p>
                <p>1年単位でのTB購入費用:  Secure 1475の購入価格は、データベースのマイニングを行う際に必要となるTB数あたりのコストになります。購入価格は、市場の状況も考慮した上で決定されます。</p>
                <p>電気代、運用費、メンテナンス費: Mars Financeは、全てのデータベースマイニングに掛かる電気代、運用費、メンテナンス費をユーザーから徴収することで、マシンの輸送、現地サポート、日々の監視、メンテナンス、修理、コンピューティングパワーの保証など、マシンの管理業務を受託致します。電気代、運用費、メンテナンス費は、日々のデータベースマイニングの報酬から差し引かれますので、予めご了承ください。</p>
                <h4>4. 報酬の管理に関して</h4>
                <p>4.1 マイニングマシンの状態を確認するには？</p>
                <p>ホームページの右上にある「マイページ」から「収益管理」をクリックして、稼働している製品を確認できるページへ移動致します。</p>
                <p>4.2 報酬の予測値を計算するには？</p>
                <p>Secure1475が提供する予測値計算機で、本製品を選択してください。日々のネットワークデータに基づいたシステムが、報酬の予測値を計算いたします。</p>
                <p>4.3 マイニング報酬は、どのように確認できますか？</p>
                <p>マイニング報酬の詳細は、「収益管理」ページからご確認頂けます。マイニング報酬は、日々計算されており、電気代、運用費、メンテナンス費の20%を差し引いた数値が、実際のマイニング報酬となります。こちらの報酬は、お好きなタイミングで日々出金することが可能となります。</p>
                <p>4.4 Secure 1475 の報酬から期待できることは？</p>
                <p>Secure 1475 のマイニングの報酬は、一般的に購入から 5～6 か月の間で報酬分が増加いたします。この段階で、マイニングが最適化されます。初年度のマイニング報酬予測値は、電気代、運用費、メンテナンス費を差し引き、約 30 FIL と想定されております。尚、契約更新して2 年目も継続した場合、マイニング報酬は、約 50％アップすると予測されます。</p>
                <p>4.5 マイニング報酬は、どのような状況で変動しますか？</p>
                <p>データベースのマイニングは、マイニングマシン、マイニング設備、マイニングプール、ネットワーク全体のハッシュパワー等、様々な要因の影響を受けるため、報酬の変動は通常のことであり、Secure1475含めこちらの一律とした報酬のリターンは保証するものではありません。Secure1475は、ユーザーのSecure 1475が中断されずにマイニングを維持することを保証し、マシンに障害が発生した場合には、直ちに同種の別のマイニングマシンに切り替え、ユーザーの報酬を保証します。Secure1475は、洪水、火山噴火、地震、地滑り、火災、嵐、中国当局が100年予測不可能なレベルと評価した悪天候などの自然災害、政府の行動や政府の指示、都市レベルの送電網事故、戦争、ストライキ、内乱などの社会的異常など、客観的な事象によって予測、回避、または克服できなかった制御不能なリスクに起因する損失については責任を負いません。</p>
                <p>4.6 なぜマイニング量が減少しているのか？</p>
                <p>マイニングマシンやマイニングプールなどのリソースに加えて、マイニング量は、Filecoinネットワークの総ハッシュパワーや複雑さにも関係しています。ハードウェアのコンピューティング能力の変動に加えて、マイニングマシンのハッシュパワーとマイニングプールのハッシュパワーの比率は、マイニングに使用可能なパーセンテージにも影響を与えます。ハッシュパワーが常に変動する為、総ハッシュパワーとネットワークの混雑状況でマイニング量も変動致します。ネットワーク全体のハッシュパワーの変動に応じて、約14日ごとに調整が行われます。その為、ユーザーの報酬は常に流動的になります。これらの要因により、マイニング量が低下する可能性もございます。</p>
                <h4>5. 価格調整ルール</h4>
                <p>5.1 Secure 1475購入時の価格調整ルール</p>
                <p>データベースマイニングのコストは、6ヶ月の理論的なペイバックサイクル(払戻しサイクル)に基づいて、マイニングの払戻しサイクル、容量、価値の期待値に影響されます。激しい増加が期待されているに構わず、マイニング容量の増加がない場合、データベースマイニングの価格は大幅に上昇する可能性があります。同様に、中長期の価格が減少傾向にある場合、Secure 1475の価格も下落いたします。Secure1475にて販売されるSecure 1475の価格は、市場の状況に応じて調整されます。</p>
                <p>5.2 電気代、運用費、管理費の調整ルール</p>
                <p>電気代、運用費、管理費はアカウント内にて明確に表示され、マイニング報酬から日々20%差し引かれる仕組みになります。不可抗力（政府の行動や政府の命令による地域の電気料金の値上げ、市や自治体の電力供給障害による配送コストなど）により、電気代が上昇した場合は、それに応じて本パーセンテージも再度調整され、各ユーザーのマイニング報酬から自動的に差し引かれます。</p>
            </div>
        )}
    </div>
}
