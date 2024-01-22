import NextLink from 'next/link'

type Prop = {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<Prop> = props => {
  return (
    <>
      <NextLink className="nextLink" href={props.href}>
        <a className="underline visited:text-blue-700">{props.children}</a>
      </NextLink>
    </>
  )
}

export default Link
