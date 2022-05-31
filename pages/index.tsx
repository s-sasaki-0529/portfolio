import TwitterLogo from '../assets/twitter.svg'
import ZennLogo from '../assets/zenn.svg'
import GitHubLogo from '../assets/github.svg'
import MediumLogo from '../assets/medium.svg'
import SlideshareLogo from '../assets/slideshare.svg'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home() {
  const LinkIcon: React.FC<{ href: string; icon: ReactNode }> = props => (
    <>
      <a className="link" rel="noreferrer" target="_blank" href={props.href}>
        {props.icon}
      </a>
      <style jsx lang="scss">{`
        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(73, 80, 87);
          width: 3em;
          height: 3em;
          margin-right: 24px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: rgb(189, 93, 56);
          }
          :global(svg) {
            fill: rgb(255, 255, 255);
            width: 50%;
            height: 50%;
          }
        }
      `}</style>
    </>
  )

  return (
    <div>
      <div className="title">
        <Image src="/icon.jpg" alt="icon_shingo_sasaki" className="mobile-icon" width={80} height={80} />
        <h1 className="name">SHINGO SASAKI</h1>
      </div>
      <div className="info">
        <span className="profile">birth in 1992, live in Saitama Japan, </span>
        <span className="mail">shingo.sasaki.0529@gmail.com</span>
      </div>
      <div className="description">
        <p className="paragraph">Webフロントエンドを主戦場としたWeb系プログラマ。</p>
        <p className="paragraph">
          現在は BtoB SaaS にて、主に Vue.js と Ruby on Rails を用いた
          Webアプリケーションの開発、運用を行っています。
        </p>
      </div>
      <div className="links">
        <LinkIcon href="https://twitter.com/s_sasaki_0529" icon={<TwitterLogo />} />
        <LinkIcon href="https://github.com/s-sasaki-0529" icon={<GitHubLogo />} />
        <LinkIcon href="https://zenn.dev/sa2knight" icon={<ZennLogo />} />
        <LinkIcon href="https://medium.com/@shingo.sasaki" icon={<MediumLogo />} />
        <LinkIcon href="https://www.slideshare.net/shingosasaki3" icon={<SlideshareLogo />} />
      </div>
      <style jsx lang="scss">{`
        .title {
          .name {
            color: rgb(52, 58, 64);
            font-size: 4rem;
          }
        }
        .info {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 50px;
          color: rgb(108, 117, 125);
          .mail {
            color: rgb(189, 93, 56);
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
        }

        @media screen and (min-width: 921px) {
          .title {
            :global(.mobile-icon) {
              display: none !important;
            }
          }
        }
        @media screen and (max-width: 920px) {
          .title {
            display: flex;
            align-items: center;
            :global(.mobile-icon) {
              display: block !important;
              border: 0.5rem solid rgba(255, 255, 255, 0.2) !important;
              border-radius: 50%;
            }
            .name {
              font-size: 7vw;
            }
          }
          .info {
            text-align: right;
            font-size: 4vw;
          }
        }
      `}</style>
    </div>
  )
}
