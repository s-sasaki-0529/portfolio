import React, { ReactNode } from 'react'
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
import BabelLogo from '../assets/babel.svg'
import ReactLogo from '../assets/react.svg'
import NuxtLogo from '../assets/nuxtdotjs.svg'

export default function Skills() {
  const SkillLogo: React.FC<{ logo: ReactNode }> = props => {
    return (
      <div className="root">
        {props.logo}
        <style jsx lang="scss">{`
          .root {
            padding: 1em;
            :global(svg) {
              width: 6em;
              height: 6em;
              cursor: pointer;
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
        <SkillLogo logo={<VueLogo />} />
        <SkillLogo logo={<TypeScriptLogo />} />
        <SkillLogo logo={<RailsLogo />} />
        <SkillLogo logo={<WebpackLogo />} />
        <SkillLogo logo={<CircleCILogo />} />
        <SkillLogo logo={<StorybookLogo />} />
      </div>
      <h2 className="secondary">SECONDARY</h2>
      <div className="icons">
        <SkillLogo logo={<ReactLogo />} />
        <SkillLogo logo={<NuxtLogo />} />
        <SkillLogo logo={<AWSLogo />} />
        <SkillLogo logo={<ElasticsearchLogo />} />
        <SkillLogo logo={<SwaggerLogo />} />
        <SkillLogo logo={<SeleniumLogo />} />
      </div>
      <style jsx lang="scss">{`
        .root {
          color: #343a40;
          width: 100%;
          .title {
            margin-bottom: 2em;
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
