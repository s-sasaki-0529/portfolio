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
        className="mr-[24px] flex h-[3em] w-[3em] cursor-pointer items-center justify-center rounded-[50%] bg-gray-700 hover:bg-brand"
        rel="noreferrer"
        target="_blank"
        href={props.href}
        title={props.title}
      >
        <svg className="h-1/2 w-1/2 fill-white">{props.icon}</svg>
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
      className="rounded-[50%] pc:!hidden"
      width={60}
      height={60}
    />
  )

  return (
    <div>
      <div className="sp:flex sp:items-center sp:gap-2">
        <MobileUserIcon />
        <h1 className="text-[3rem] text-gray-800 sp:text-[7vw]">笹木 信吾</h1>
        <h2 className="text-[3rem] text-gray-800 sp:!hidden">SHINGO SASAKI</h2>
      </div>
      <div className="mb-[50px] font-normal sp:text-right sp:text-[4vw] pc:text-[1.5rem]">
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
