/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import RSSParser from 'rss-parser'
import Image from 'next/image'

type RSSFeed = {
  zenn: RSSParser.Item[]
  medium: RSSParser.Item[]
}

export const getStaticProps: GetStaticProps<RSSFeed> = async () => {
  const rssParser = new RSSParser()
  const zenn = await rssParser.parseURL('https://zenn.dev/sa2knight/feed').then(feed => feed.items)
  const medium = await rssParser.parseURL('https://medium.com/@shingo.sasaki/feed').then(feed => feed.items)

  return {
    props: { zenn, medium }
  }
}

export default function Outputs(props: RSSFeed) {
  const [category, setCategory] = useState<'zenn' | 'medium' | 'slideshare'>('zenn')
  const ZennOutputs = (props: { items: RSSFeed['zenn'] }) => (
    <div className="root">
      {props.items.map(item => (
        <a key={item.guid} rel="noreferrer" target="_blank" href={item.link}>
          <img alt="zenn_enclosure" src={item.enclosure.url} />
        </a>
      ))}
      <style jsx lang="scss">{`
        .root {
          display: flex;
          flex-wrap: wrap;
          img {
            width: 20em;
            height: auto;
            padding: 0.5em;
            object-fit: scale-down;
          }
        }
      `}</style>
    </div>
  )
  const MediumOutputs = (props: { items: RSSFeed['medium'] }) => (
    <div className="root">
      {props.items.map(item => (
        <div key={item.guid} className="item">
          <div className="date">{new Date(item.pubDate).toISOString().split('T')[0]}</div>
          <a className="title" rel="noreferrer" target="_blank" href={item.link}>
            {item.title}
          </a>
        </div>
      ))}
      <style jsx lang="scss">{`
        .root {
          .item {
            display: flex;
            margin-bottom: 1em;
            font-size: 1em;
            cursor: pointer;
            .date {
              margin-right: 1em;
            }
            .title {
              text-decoration: underline;
              &:visited {
                color: rgb(0, 0, 238);
              }
            }
          }
        }
      `}</style>
    </div>
  )
  const SlideShareOutputs = () => {
    const SlideShareImage = (props: { url: string; imagePath: string }) => (
      <div className="root">
        <a rel="noreferrer" target="_blank" href={props.url}>
          <Image src={props.imagePath} alt="slide" width={320} height={180} objectFit="cover" />
        </a>
        <style jsx lang="scss">{`
          .root {
            padding: 1em;
            :global(img) {
              background-color: rgba(0, 0, 0, 0.5);
              padding: 0.5em 0 0.5em 0 !important;
            }
          }
        `}</style>
      </div>
    )
    return (
      <div className="root">
        <div className="items">
          <SlideShareImage
            url="https://www.slideshare.net/shingosasaki3/rails10-135067544"
            imagePath="/slide01.png"
          />
          <SlideShareImage
            url="https://www.slideshare.net/shingosasaki3/teachmebiz-188542240"
            imagePath="/slide02.png"
          />
          <SlideShareImage
            url="https://www.slideshare.net/shingosasaki3/vue-typescript"
            imagePath="/slide03.png"
          />
        </div>
        <style jsx lang="scss">{`
          .root {
            .items {
              display: flex;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="root">
      <div className="header">
        <div className="title">OUTPUTS</div>
        <div className="categories">
          <span
            className={category === 'zenn' ? 'category active' : 'category'}
            onClick={() => setCategory('zenn')}
          >
            Zenn
          </span>
          <span
            className={category === 'medium' ? 'category active' : 'category'}
            onClick={() => setCategory('medium')}
          >
            Medium
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
        {category === 'zenn' ? <ZennOutputs items={props.zenn} /> : null}
        {category === 'medium' ? <MediumOutputs items={props.medium} /> : null}
        {category === 'slideshare' ? <SlideShareOutputs /> : null}
      </div>
      <style jsx lang="scss">{`
        .root {
          width: 100%;
          height: 100%;
          color: #343a40;
          .header {
            display: flex;
            justify-content: start;
            align-items: baseline;
            margin-bottom: 4em;
            .title {
              margin-right: 0.5em;
              font-size: 2em;
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
