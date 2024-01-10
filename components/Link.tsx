import NextLink from 'next/link'

type Prop = {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<Prop> = props => {
  return (
    <>
      <NextLink className="nextLink" href={props.href}>
        <a className="underline visited:text-[rgb(0,_0,_238)]">{props.children}</a>
      </NextLink>
    </>
  )
}

export default Link
