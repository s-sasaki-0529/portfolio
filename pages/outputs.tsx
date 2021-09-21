/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
import RSSParser from 'rss-parser'
import ZennLogo from '../assets/zenn.svg'
import SlideshareLogo from '../assets/slideshare.svg'
import MediumLogo from '../assets/medium.svg'
import { ReactNode } from 'react'

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
  const ToggleIcon: React.FC<{ active: boolean; icon: ReactNode }> = props => (
    <>
      <div className="icon">{props.icon}</div>
      <style jsx lang="scss">{`
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #495057;
          width: 45px;
          height: 2em;
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
      `}</style>
    </>
  )
  return (
    <div className="root">
      <div className="header">
        <div className="title">OUTPUTS</div>
        <div className="icons">
          <ToggleIcon active={false} icon={<ZennLogo />} />
          <ToggleIcon active={false} icon={<MediumLogo />} />
          <ToggleIcon active={false} icon={<SlideshareLogo />} />
        </div>
      </div>
      <div className="images">
        {props.zenn.map(zennItem => (
          <a key={zennItem.guid} rel="noreferrer" target="_blank" href={zennItem.link}>
            <img alt="zenn_enclosure" src={zennItem.enclosure.url} />
          </a>
        ))}
      </div>
      <style jsx lang="scss">{`
        .root {
          width: 100%;
          height: 100%;
          color: #343a40;
          .header {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-bottom: 4em;
            .title {
              margin-right: 0.5em;
              font-size: 2em;
            }
            .icons {
              display: flex;
            }
          }
          .images {
            display: flex;
            flex-wrap: wrap;
            img {
              width: 20em;
              height: auto;
              padding: 0.5em;
              object-fit: scale-down;
            }
          }
        }
      `}</style>
    </div>
  )
}
