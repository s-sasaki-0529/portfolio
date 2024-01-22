/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import RSSParser from 'rss-parser'

const OutputCategories = ['Medium', 'Zenn', 'SlideShare'] as const
type OutputCategory = typeof OutputCategories[number]

type RSSFeed = {
  zenn: RSSParser.Item[]
  medium: RSSParser.Item[]
}

/**
 * このページは ISR を用いて、zenn 及び medium の記事をあらかじめRSSで取得しておく
 */
export const getStaticProps: GetStaticProps<RSSFeed> = async () => {
  const rssParser = new RSSParser()
  const zenn = await rssParser.parseURL('https://zenn.dev/sa2knight/feed').then(feed => feed.items)
  const medium = await rssParser.parseURL('https://medium.com/@shingo.sasaki/feed').then(feed => feed.items)

  return {
    props: { zenn, medium },
    revalidate: 300
  }
}

const OutputCategoryLabel: React.FC<{ name: OutputCategory; isActive: boolean; onClick: () => void }> = props => {
  const activeClass = props.isActive ? 'font-bold underline' : ''
  return (
    <button className={`${activeClass}`} onClick={props.onClick}>
      {props.name}
    </button>
  )
}

function linkList(items: { date: string; title: string; url: string }[]) {
  return (
    <div>
      {items.map(item => (
        <div key={item.title} className="flex mb-[1em] text-[1rem] cursor-pointer">
          <div className="sp:hidden mr-[1em]">{new Date(item.date).toISOString().split('T')[0]}</div>
          <a className="underline visited:text-blue-700" rel="noreferrer" target="_blank" href={item.url}>
            {item.title}
          </a>
        </div>
      ))}
    </div>
  )
}

export default function Outputs(props: RSSFeed) {
  const [category, setCategory] = useState<OutputCategory>('Medium')
  const ZennOutputs = (props: { items: RSSFeed['zenn'] }) => {
    return linkList(props.items.map(item => ({ date: item.isoDate, title: item.title, url: item.link })))
  }
  const MediumOutputs = (props: { items: RSSFeed['medium'] }) => {
    return linkList(props.items.map(item => ({ date: item.isoDate, title: item.title, url: item.link })))
  }
  const SlideShareOutputs = () => {
    return linkList([
      {
        date: '2021/11/10',
        title: '6万行の TypeScript 移行とその後',
        url: 'https://www.slideshare.net/shingosasaki3/6-typescript'
      },
      {
        date: '2021/05/19',
        title: '大規模 Vue アプリケーションの TypeScript 移行',
        url: 'https://www.slideshare.net/shingosasaki3/vue-typescript'
      },
      {
        date: '2019/10/30',
        title: 'Teachme Biz を支えるフロントエンドのアーキテクチャと品質担保',
        url: 'https://www.slideshare.net/shingosasaki3/teachmebiz-188542240'
      },
      {
        date: '2019/03/07',
        title: 'レガシー過ぎるRailsアプリを10倍高速化した組織的なカイゼン活動',
        url: 'https://www.slideshare.net/shingosasaki3/rails10-135067544'
      }
    ])
  }

  return (
    <div className="w-full h-full text-gray-700">
      <div className="flex justify-start items-baseline mb-[4em]">
        <div className="mr-[0.5em] text-[2rem]">OUTPUTS</div>
        <div className="flex gap-2">
          {OutputCategories.map(name => (
            <OutputCategoryLabel
              key={name}
              name={name}
              isActive={category === name}
              onClick={() => setCategory(name)}
            />
          ))}
        </div>
      </div>
      <div className="outputs">
        {category === 'Medium' ? <MediumOutputs items={props.medium} /> : null}
        {category === 'Zenn' ? <ZennOutputs items={props.zenn} /> : null}
        {category === 'SlideShare' ? <SlideShareOutputs /> : null}
      </div>
    </div>
  )
}
