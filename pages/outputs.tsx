/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import RSSParser from 'rss-parser'
type RSSFeed = {
  zenn: RSSParser.Item[]
  medium: RSSParser.Item[]
}

export const getStaticProps: GetStaticProps<RSSFeed> = async () => {
  const rssParser = new RSSParser()
  const zenn = await rssParser.parseURL('https://zenn.dev/sa2knight/feed').then(feed => feed.items)
  const medium = await rssParser.parseURL('https://medium.com/@shingo.sasaki/feed').then(feed => feed.items)

  return {
    props: { zenn, medium },
    revalidate: 300
  }
}

function linkList(items: { date: string; title: string; url: string }[]) {
  return (
    <div>
      {items.map(item => (
        <div key={item.title} className="flex mb-[1em] text-[1rem] cursor-pointer">
          <div className="date mr-[1em]">{new Date(item.date).toISOString().split('T')[0]}</div>
          <a className="underline visited:text-[rgb(0,_0,_238)]" rel="noreferrer" target="_blank" href={item.url}>
            {item.title}
          </a>
        </div>
      ))}
      <style jsx lang="scss">{`
        @media screen and (max-width: 920px) {
          .date {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default function Outputs(props: RSSFeed) {
  const [category, setCategory] = useState<'zenn' | 'medium' | 'slideshare'>('medium')
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
    <div className="root">
      <div className="header">
        <div className="title">OUTPUTS</div>
        <div className="categories">
          <span
            className={category === 'medium' ? 'category active' : 'category'}
            onClick={() => setCategory('medium')}
          >
            Medium
          </span>
          <span className={category === 'zenn' ? 'category active' : 'category'} onClick={() => setCategory('zenn')}>
            Zenn
          </span>
          <span
            className={category === 'slideshare' ? 'category active' : 'category'}
            onClick={() => setCategory('slideshare')}
          >
            Slideshare
          </span>
        </div>
      </div>
      <div className="outputs">
        {category === 'medium' ? <MediumOutputs items={props.medium} /> : null}
        {category === 'zenn' ? <ZennOutputs items={props.zenn} /> : null}
        {category === 'slideshare' ? <SlideShareOutputs /> : null}
      </div>
      <style jsx lang="scss">{`
        .root {
          width: 100%;
          height: 100%;
          color: rgb(52, 58, 64);
          .header {
            display: flex;
            justify-content: start;
            align-items: baseline;
            margin-bottom: 4em;
            .title {
              margin-right: 0.5em;
              font-size: 2rem;
            }
            .categories {
              .category {
                margin-right: 0.5em;
                cursor: pointer;
                &.active {
                  font-weight: 600;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  )
}
