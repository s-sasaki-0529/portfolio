import { ReactNode } from 'react'

const CircleIcon: React.FC<{ href: string; icon: ReactNode }> = props => (
  <>
    <a className="link" rel="noreferrer" target="_blank" href={props.href}>
      {props.icon}
    </a>
    <style jsx lang="scss">{`
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #495057;
        width: 50px;
        height: 50px;
        border-radius: 50%;
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

export default CircleIcon
