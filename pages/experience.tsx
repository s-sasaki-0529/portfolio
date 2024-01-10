import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from '../components/Link'

export default function Experience() {
  type Experience = {
    company: string
    period: string
    summary: string
    showDescriptionDefault: boolean
    children?: React.ReactNode
  }
  const ExperienceBlock: React.FC<Experience> = props => {
    const [isShowDescription, setIsShowDescription] = useState(props.showDescriptionDefault)

    return (
      <div className="my-[4rem]">
        <div className="header flex justify-between">
          <span className="text-[1.5rem] font-semibold text-[rgb(_52,_58,_64)]">{props.company}</span>
          <span className="text-[rgb(_189,_93,_56)]">{props.period}</span>
        </div>
        {props.children ? (
          <>
            <button
              className="text-[1.1rem] text-[rgb(108,117,125)] border-none bg-transparent p-0"
              onClick={() => setIsShowDescription(!isShowDescription)}
            >
              <span className="mr-[0.5em]">{props.summary}</span>
              <FontAwesomeIcon className="toggleIcon" icon={isShowDescription ? faCaretUp : faCaretDown} />
            </button>
            <div className="text-[rgb(108,117,125)] text-[0.9rem]">
              <div className={isShowDescription ? '' : 'hidden'}>{props.children}</div>
            </div>
          </>
        ) : (
          <div className="text-[rgb(108,117,125)] text-[1.1rem]">{props.summary}</div>
        )}
        <style jsx lang="scss">{`
          .header {
            @media screen and (max-width: 920px) {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="experience">
      <h1 className="title">EXPERIENCE</h1>
      <ExperienceBlock
        company="4社目: BtoB SaaS スタートアップ ②"
        period="2023/09 ~"
        summary="転職したてのため準備中"
        showDescriptionDefault={false}
      />
      <ExperienceBlock
        company="3社目: BtoB SaaS スタートアップ ①"
        period="2018/08 ~ 2023/08"
        summary="自社開発Webアプリケーション開発のリード"
        showDescriptionDefault={true}
      >
        <ul>
          <li>スクラム開発</li>
          <li>
            Rails による REST APIの設計、実装
            <ul>
              <li>
                <Link href="https://zenn.dev/sa2knight/articles/2388ecadc82b98">
                  rspecによる単体テスト、リクエストテストの作成
                </Link>
              </li>
              <li>apiblueprint/aglioによるAPIドキュメントの作成</li>
              <li>
                <Link href="https://www.slideshare.net/shingosasaki3/rails10-135067544">パフォーマンス改善全般</Link>
              </li>
              <li>
                Elasticsearchによる検索最適化
                <ul>
                  <li>インデックス再定義の検討、ダウンタイム無しでのインデックス張替え</li>
                  <li>効率の良い検索クエリの検討、実装</li>
                </ul>
              </li>
              <li>
                API ドキュメントの apiblueprint → Open API への移行
                <ul>
                  <li>
                    スキーマ駆動開発の基盤整備
                    <ul>
                      <li>単体テストでのスキーマの品質担保</li>
                      <li>モックデータ生成</li>
                      <li>型ファイル生成</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="https://www.slideshare.net/shingosasaki3/teachmebiz-188542240">
              VueJSによるフロントエンドの設計、実装のリード
            </Link>
            <ul>
              <li>
                <Link href="https://zenn.dev/sa2knight/books/aca5d5e021dd10262bb9">
                  storybookによるUIコンポーネントのカタログ化
                </Link>
              </li>
              <li>vue-test-utilによるVueコンポーネントの単体テストの提案、実装</li>
              <li>
                <Link href="https://studist.tech/migration-to-vue-3-4b4c4fad0324?source=rss-8d14345cbc19------2">
                  Vue 3 へのマイグレーションの実施
                </Link>
              </li>
            </ul>
          </li>
          <li>
            各種AWSを活用した機能開発(インフラ構築ではない)
            <ul>
              <li>Amazon Redshift上にあるログを元に集計をユーザに提供する機能の開発</li>
              <li>AWS Redshift/S3/Auroraを活用したサマリーの生成周りの設計、実装(補助)</li>
              <li>terraformによるAWSリソースのコード化</li>
            </ul>
          </li>
          <li>
            フロントエンド開発環境のDX改善業務
            <ul>
              <li>
                <Link href="https://studist.tech/new-dx-for-frontend-f8acdfcc0d16?source=rss-8d14345cbc19------2">
                  サーバと密結合だった開発環境のフロントエンド切り出し
                </Link>
              </li>
              <li>Vite 開発環境の導入</li>
              <li>karma, Jest から Vitest への移行</li>
              <li>
                <Link href="https://studist.tech/test-eslint-config-by-eslint-8d03870a23d9?source=rss-8d14345cbc19------2">
                  ESLint 設定の管理と継続的な改善
                </Link>
              </li>
            </ul>
          </li>
          <li>
            CI/CDの管理
            <ul>
              <li>
                <Link href="https://studist.tech/how-to-reduce-circleci-credits-ac81de4857d8">
                  CircleCIによるCIの継続的改善活動
                </Link>
              </li>
              <li>ステージング環境への任意のブランチの自動デプロイの仕組みの実装</li>
              <li>Storybookとreg-suitを用いたUIのスナップショットテストの提案、実装、運用</li>
              <li>CapybaraによるE2Eテストの提案、設計、実装、運用</li>
              <li>Slackコマンドによる開発プロセスの自動化促進(テスト実行、ステージングデプロイ)</li>
              <li>他、CIの設定構成の管理全般</li>
            </ul>
          </li>
          <li>
            <Link href="https://studist.tech/dropping-support-for-ie11-abbd36882c61?source=rss-8d14345cbc19------2">
              IE11 の漸進的なサポート終了のリード
            </Link>
          </li>
          <li>
            ライブラリバージョンの管理と積極的な改善
            <ul>
              <li>自動バージョンアップの自動化(gem/node_modules)</li>
              <li>
                フロントエンドビルド環境のアップグレード
                <ul>
                  <li>node 8.x → 12.x → 14.x</li>
                  <li>
                    <Link href="https://studist.tech/migration-webpack-from-4-to-5-3df31da8e7a2">
                      Webpack 3 → 4 → 5
                    </Link>
                  </li>
                  <li>
                    <Link href="https://studist.tech/upgrade-to-storybook-6-42da05471e7d">Storybook 4 → 5 → 6</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="https://studist.tech/typescript-migration-90b99b7c8974">
              JavaScript プロジェクトの TypeScript への全面移行
            </Link>
          </li>
        </ul>
      </ExperienceBlock>

      <ExperienceBlock
        company="2社目: 受託開発及びSES"
        period="2016/10 ~ 2018/07"
        summary="Webサービスを中心に、幅広い技術の受託開発を経験(SES での客先常駐を含む)"
        showDescriptionDefault={false}
      >
        <ul>
          <li>
            BtoBマッチングサイト
            <ul>
              <li>Backbone/Marionette)によるSPAの開発</li>
              <li>PHP(Laravel)を用いたAPIサーバの実装</li>
              <li>node(socket.io)による双方向リアルタイムチャット機能の実装</li>
            </ul>
          </li>
          <li>
            WordPressによる地域密着型マッチングサイトの開発
            <ul>
              <li>WP案件デビュー</li>
              <li>はじめての自動テスト(PhantomJS/CasperJSによるE2Eのみ)</li>
            </ul>
          </li>
          <li>
            写真共有系サービスの開発
            <ul>
              <li>Swiftによる、はじめてのゼロベースでのメイン実装を担当</li>
              <li>カメラ制御周りの実装</li>
              <li>PHP(Laravel)を用いたAPIサーバの実装</li>
              <li>PHPUnitによる機能テストの実装</li>
              <li>フロントエンドはVueにして半SPAに</li>
            </ul>
          </li>
          <li>
            OpenStackによる汎用インフラ構築ツールの開発 　- 短期の客先常駐
            <ul>
              <li>概ね出来上がっているインフラ構築ツールの終盤の実装作業を担当</li>
              <li>OpenStackを用いたクラウド環境構築を自動化するための機能の実装</li>
              <li>JavaScript/PHPによる上記機能を利用するためのWeb画面の実装</li>
            </ul>
          </li>
          <li>
            クラウドファンディング系SPAの開発
            <ul>
              <li>ゼロベースからの開発を担当</li>
              <li>Ruby on railsによるAPIサーバの実装</li>
              <li>React/Reduxによるフロントエンドの実装</li>
              <li>scssによる画面デザイン</li>
              <li>Redisを用いたキャッシュサーバの構築</li>
              <li>payjpを用いたクレジットカード決済機能の実装</li>
              <li>SendGridを用いたメール配信機能の実装</li>
            </ul>
          </li>
          <li>
            Wordpressによる製品マニュアル閲覧サイトの開発
            <ul>
              <li>既にコンテンツ部分が出来上がっているサイトに対するロジックの追加を担当</li>
              <li>Dockerを用いた開発環境の構築及び配布</li>
              <li>Wordpressの管理画面の各種カスタマイズ</li>
              <li>認証付きのコンテンツダウロード機能の実装</li>
              <li>各種統計データのインポート/エクスポート機能の実装</li>
            </ul>
          </li>
          <li>
            機械学習を含む、WordpressによるBtoBのマッチングサイトの開発
            <ul>
              <li>機械学習を用いたレコメンド機能の機械学習部分の実装を担当</li>
              <li>Python(scikit-learn)を用いた機械学習ロジックの実装</li>
              <li>Python(Bottle)を用いたAPIサーバの実装</li>
              <li>nginx/uwsgiによるサーバ構築</li>
              <li>PHPとMediaSMSを用いたSMSによる認証機能の実装</li>
              <li>APIの各種設計など</li>
            </ul>
          </li>
          <li>
            アンケート集計結果の可視化システムのプロトタイプ開発
            <ul>
              <li>mySQLで管理されたアンケートの集計結果を可視化するWebサービス</li>
              <li>サーバサイドはLaravelを利用し、APIサーバを実装</li>
              <li>クライアントサイドはVueを利用し、SPA形式で実装</li>
              <li>
                グラフの描画にはChatjsを用いて、Vueと組み合わせてリアルタイムに折れ線グラフ/レーダーチャートを生成する機能を実装
              </li>
              <li>基本的な機能を一通り実装したプロトタイプを提出して終了</li>
            </ul>
          </li>
        </ul>
      </ExperienceBlock>

      <ExperienceBlock
        company="1社目: 大手ISP"
        period="2015/04 ~ 2016/09"
        summary="新卒入社後、Web系LMSの設計、開発を主に経験"
        showDescriptionDefault={false}
      >
        <ul>
          <li>
            Web系LMSの設計/開発/運用
            <ul>
              <li>リリースから10年程度の大規模Webサービスの保守運用</li>
              <li>Perl(自社製フレームワーク)によるサーバサイド実装</li>
              <li>HTML/CSS/JavaScript(ネイティブ)によるフロントエンド実装</li>
              <li>Ruby(Sinatra)を用いたAPIサーバ実装</li>
              <li>SOAPを用いた外部システムとの連携</li>
              <li>シェルスクリプトを使った開発補助ツールの開発</li>
              <li>他、クライアントとの各種打ち合わせ、機能提案(プレゼン)など</li>
            </ul>
          </li>
          <li>
            教育支援ツールのiOS版の追加開発
            <ul>
              <li>Objective-Cで実装されたリリース済みの既存アプリに対する機能追加、改善を担当</li>
              <li>Bluetoothを用いた外部ハードウェアとアプリの連携周りの実装</li>
            </ul>
          </li>
        </ul>
      </ExperienceBlock>

      <style jsx lang="scss">{`
        .experience {
          width: 100%;
          height: 100%;
          .title {
            color: rgb(52, 58, 64);
          }
        }
      `}</style>
    </div>
  )
}
