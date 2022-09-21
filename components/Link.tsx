import NextLink from 'next/link'

type Prop = {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<Prop> = props => {
  return (
    <>
      <NextLink className="nextLink" href={props.href}>
        <a>{props.children}</a>
      </NextLink>
      <style jsx lang="scss">{`
        a {
          text-decoration: underline;
          &:visited {
            color: rgb(0, 0, 238);
          }
        }
      `}</style>
    </>
  )
}

export default Link
