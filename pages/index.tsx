import TwitterLogo from '../assets/twitter.svg'
import ZennLogo from '../assets/zenn.svg'
import GitHubLogo from '../assets/github.svg'
import MediumLogo from '../assets/medium.svg'
import SlideshareLogo from '../assets/slideshare.svg'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home() {
  const LinkIcon: React.FC<{ title: string; href: string; icon: ReactNode }> = props => (
    <>
      <a
        className="flex justify-center items-center bg-[rgb(73,_80,_87)] w-[3em] h-[3em] mr-[24px] rounded-[50%] cursor-pointer hover:bg-[rgb(189,_93,_56)]"
        rel="noreferrer"
        target="_blank"
        href={props.href}
        title={props.title}
      >
        <svg className="fill-[rgb(255,_255,_255)] w-1/2 h-1/2">{props.icon}</svg>
      </a>
    </>
  )

  return (
    <div>
      <div className="title">
        <Image src="/icon.jpg" alt="icon_shingo_sasaki" className="mobile-icon" width={80} height={80} />
        <h1 className="name">笹木 信吾</h1>
        <h2 className="name sub">SHINGO SASAKI</h2>
      </div>
      <div className="info">
        <span className="profile">birth in 1992, live in Saitama Japan, </span>
        <span className="mail">shingo.sasaki.0529@gmail.com</span>
      </div>
      <div className="description">
        <p className="paragraph">Web系エンジニア</p>
        <p className="paragraph">主にフロントエンド全般と自動テスト周りが得意</p>
      </div>
      <div className="links">
        <LinkIcon title="Twitter" href="https://twitter.com/s_sasaki_0529" icon={<TwitterLogo />} />
        <LinkIcon title="GitHub" href="https://github.com/s-sasaki-0529" icon={<GitHubLogo />} />
        <LinkIcon title="Zenn" href="https://zenn.dev/sa2knight" icon={<ZennLogo />} />
        <LinkIcon title="Medium" href="https://medium.com/@shingo.sasaki" icon={<MediumLogo />} />
        <LinkIcon title="Slideshare" href="https://www.slideshare.net/shingosasaki3" icon={<SlideshareLogo />} />
      </div>
      <style jsx lang="scss">{`
        .title {
          .name {
            color: rgb(52, 58, 64);
            font-size: 3rem;
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
              &.sub {
                display: none;
              }
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
