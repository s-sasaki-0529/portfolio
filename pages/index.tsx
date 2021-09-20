import TwitterLogo from '../assets/twitter.svg'
import ZennLogo from '../assets/zenn.svg'
import GitHubLogo from '../assets/github.svg'
import MediumLogo from '../assets/medium.svg'

export default function Home() {
  return (
    <div>
      <h1 className="name">SHINGO SASAKI</h1>
      <div className="info">
        <span className="profile">birth in 1992, live in Saitama Japan, </span>
        <span className="mail">shingo.sasaki.0529@gmail.com</span>
      </div>
      <div className="description">
        <p className="paragraph">
          現在は BtoB SaaS にて、主に Vue.js と Ruby on Rails を用いた
          Webアプリケーションの開発、運用を行っています。
        </p>
        <p className="paragraph">
          現職に対して満足しているため、積極的な転職活動を行うつもりはありませんが、
          将来的な転職に備えた下準備は進めるつもりです。
        </p>
      </div>
      <div className="links">
        <a className="link" rel="noreferrer" target="_blank" href="https://twitter.com/s_sasaki_0529">
          <TwitterLogo />
        </a>
        <a className="link" rel="noreferrer" target="_blank" href="https://github.com/s-sasaki-0529">
          <GitHubLogo />
        </a>
        <a className="link" rel="noreferrer" target="_blank" href="https://zenn.dev/sa2knight">
          <ZennLogo />
        </a>
        <a className="link" rel="noreferrer" target="_blank" href="https://medium.com/@shingo.sasaki">
          <MediumLogo />
        </a>
      </div>
      <style jsx lang="scss">{`
        .name {
          color: #343a40;
          font-size: 4em;
          line-height: 1em;
        }
        .info {
          font-size: 1.5em;
          font-weight: 400;
          margin-bottom: 50px;
          color: #6c757d;
          .mail {
            color: #bd5d38;
          }
        }
        .description {
          margin-bottom: 50px;
          .paragraph {
            padding: 5px 0 5px 0;
          }
        }
        .links {
          display: flex;
          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #495057;
            width: 50px;
            height: 50px;
            margin-right: 24px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
              background-color: #bd5d38;
            }
            :global(svg) {
              fill: #fff;
              width: 50%;
              height: 50%;
            }
          }
        }
      `}</style>
    </div>
  )
}
