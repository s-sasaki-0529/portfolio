import TwitterLogo from '../assets/twitter.svg'
import ZennLogo from '../assets/zenn.svg'
import GitHubLogo from '../assets/github.svg'
import MediumLogo from '../assets/medium.svg'
import SlideshareLogo from '../assets/slideshare.svg'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home() {
  /**
   * 各外部リンク用のリンクアイコン
   */
  const LinkIcon: React.FC<{ title: string; href: string; icon: ReactNode }> = props => (
    <>
      <a
        className="flex justify-center items-center bg-gray-700 w-[3em] h-[3em] mr-[24px] rounded-[50%] cursor-pointer hover:bg-brand"
        rel="noreferrer"
        target="_blank"
        href={props.href}
        title={props.title}
      >
        <svg className="fill-white w-1/2 h-1/2">{props.icon}</svg>
      </a>
    </>
  )

  /**
   * モバイルのみ表示するユーザーアイコン
   */
  const MobileUserIcon = () => (
    <Image
      src="/icon.jpg"
      alt="笹木信吾のいつものプロフィールアイコン画像"
      className="pc:!hidden rounded-[50%]"
      width={60}
      height={60}
    />
  )

  return (
    <div>
      <div className="sp:flex sp:items-center sp:gap-2">
        <MobileUserIcon />
        <h1 className="sp:text-[7vw] text-gray-800 text-[3rem]">笹木 信吾</h1>
        <h2 className="sp:!hidden text-gray-800 text-[3rem]">SHINGO SASAKI</h2>
      </div>
      <div className="pc:text-[1.5rem] sp:text-[4vw] sp:text-right font-normal mb-[50px]">
        <span className="text-gray-500">birth in 1992, live in Saitama Japan, </span>
        <span className="text-brand">shingo.sasaki.0529@gmail.com</span>
      </div>
      <div className="mb-[50px]">
        <p className="py-[5px]">Web系エンジニア</p>
        <p className="py-[5px]">主にフロントエンド全般と自動テスト周りが得意</p>
      </div>
      <div className="flex">
        <LinkIcon title="Twitter" href="https://twitter.com/s_sasaki_0529" icon={<TwitterLogo />} />
        <LinkIcon title="GitHub" href="https://github.com/s-sasaki-0529" icon={<GitHubLogo />} />
        <LinkIcon title="Zenn" href="https://zenn.dev/sa2knight" icon={<ZennLogo />} />
        <LinkIcon title="Medium" href="https://medium.com/@shingo.sasaki" icon={<MediumLogo />} />
        <LinkIcon title="Slideshare" href="https://www.slideshare.net/shingosasaki3" icon={<SlideshareLogo />} />
      </div>
    </div>
  )
}
