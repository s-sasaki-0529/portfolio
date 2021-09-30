import React, { ReactNode, useMemo, useState } from 'react'
import AWSLogo from '../assets/amazonaws.svg'
import CircleCILogo from '../assets/circleci.svg'
import RailsLogo from '../assets/rubyonrails.svg'
import SeleniumLogo from '../assets/selenium.svg'
import StorybookLogo from '../assets/storybook.svg'
import SwaggerLogo from '../assets/swagger.svg'
import VueLogo from '../assets/vuedotjs.svg'
import WebpackLogo from '../assets/webpack.svg'
import TypeScriptLogo from '../assets/typescript.svg'
import ElasticsearchLogo from '../assets/elasticsearch.svg'
import ReactLogo from '../assets/react.svg'
import NuxtLogo from '../assets/nuxtdotjs.svg'

const useHover = () => {
  const [hovered, setHovered] = useState(false)

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true)
      },
      onMouseOut() {
        setHovered(false)
      }
    }),
    []
  )

  return [hovered, eventHandlers]
}

export default function Skills() {
  const SkillLogo: React.FC<{ name: string; href: string; logo: ReactNode }> = props => {
    const [hovered, eventHandlers] = useHover()
    return (
      <div className="root" {...eventHandlers}>
        {hovered ? <div className="tooltip">{props.name}</div> : null}
        <a rel="noreferrer" target="_blank" href={props.href}>
          {props.logo}
        </a>
        <style jsx lang="scss">{`
          .root {
            position: relative;
            padding: 1em;
            &:hover {
              padding-bottom: 0;
            }
            .tooltip {
              font-size: 0.75rem;
              font-weight: 600;
              text-align: center;
            }
            :global(svg) {
              width: 6em;
              height: 6em;
            }
            @media screen and (max-width: 920px) {
              :global(svg) {
                width: 15vw;
                height: 15vw;
              }
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="root">
      <h1 className="title">SKILLS</h1>
      <h2 className="primary">PRIMARY</h2>
      <div className="icons">
        <SkillLogo name="vue.js" href="https://jp.vuejs.org/index.html" logo={<VueLogo />} />
        <SkillLogo name="TypeScript" href="https://www.typescriptlang.org/" logo={<TypeScriptLogo />} />
        <SkillLogo name="Ruby on Rails" href="https://railsguides.jp/" logo={<RailsLogo />} />
        <SkillLogo name="Webpack" href="https://webpack.js.org/" logo={<WebpackLogo />} />
        <SkillLogo name="CircleCI" href="https://circleci.com/ja/" logo={<CircleCILogo />} />
        <SkillLogo name="Storybook" href="https://storybook.js.org/" logo={<StorybookLogo />} />
      </div>
      <h2 className="secondary">SECONDARY</h2>
      <div className="icons">
        <SkillLogo name="React" href="https://ja.reactjs.org/" logo={<ReactLogo />} />
        <SkillLogo name="Nuxt.js" href="https://nuxtjs.org/" logo={<NuxtLogo />} />
        <SkillLogo name="AWS" href="https://aws.amazon.com/jp/" logo={<AWSLogo />} />
        <SkillLogo name="Elasticsearch" href="https://www.elastic.co/jp/" logo={<ElasticsearchLogo />} />
        <SkillLogo name="Swagger" href="https://swagger.io/" logo={<SwaggerLogo />} />
        <SkillLogo name="Selenium" href="https://www.selenium.dev/" logo={<SeleniumLogo />} />
      </div>
      <style jsx lang="scss">{`
        .root {
          color: rgb(52, 58, 64);
          width: 100%;
          .title {
            margin-bottom: 2em;
          }
          .primary,
          .secondary {
            text-decoration: underline;
          }
          .icons {
            display: flex;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  )
}
