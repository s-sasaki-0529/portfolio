/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next'
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
    props: { zenn, medium }
  }
}

export default function Outputs(props: RSSFeed) {
  console.log(props)
  return (
    <div className="root">
      {props.zenn.map(zennItem => (
        <img key={zennItem.guid} alt="zenn_enclosure" src={zennItem.enclosure.url} />
      ))}
      <style jsx lang="scss">{`
        img {
          width: 300px;
          height: 300px;
          object-fit: scale-down;
        }
      `}</style>
    </div>
  )
}
