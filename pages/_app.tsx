import '../styles/globals.css'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

/**
 * メインメニュー内のリンク一覧
 */
const MenuItemList: React.FC<{ currentPageName: string }> = props => {
  const itemList = ['about', 'outputs', 'experience']

  return (
    <ul className="p-0">
      {itemList.map(item => (
        <li key={item} className="h-[40px] list-none font-extrabold leading-[0] no-underline decoration-0">
          <Link href={`/${item}`}>
            <a
              className={`nonetex text-[1.1rem] uppercase text-gray-300 ${
                props.currentPageName === item ? 'text-gray-50 underline' : ''
              }`}
            >
              {item}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const currentPageName = router.pathname.split('/')[1] || 'about'
  const [isShowSpMenu, setIsShowSpMenu] = useState(false)

  if (router.events) {
    router.events.on('routeChangeComplete', () => setIsShowSpMenu(false))
  }

  return (
    <>
      <div className="app flex">
        <Head>
          <title>Shingo Sasaki</title>
        </Head>
        <nav className="flex h-dvh min-w-[270px] flex-col items-center justify-center gap-5 bg-brand sp:hidden">
          <Image
            src="/icon.jpg"
            alt="笹木信吾のいつものプロフィールアイコン画像"
            className="rounded-[50%] !border-[0.5rem]"
            width={160}
            height={160}
          />
          <div className="text-center">
            <MenuItemList currentPageName={currentPageName} />
          </div>
        </nav>
        <nav className="sp-nav fixed left-0 right-0 top-0 z-[100] pc:hidden">
          <div className="flex h-[56px] w-dvw items-center justify-between bg-brand px-[16px] py-[8px]">
            <h1 className="text-[1.25rem] font-light text-white">Shingo Sasaki</h1>
            <button
              title="メインメニュー"
              className="h-[40px] w-[56px] cursor-pointer rounded-[0.25em] border-[1px] bg-transparent p-0"
              onClick={() => setIsShowSpMenu(!isShowSpMenu)}
            >
              {' '}
              <FontAwesomeIcon className="text-gray-300" icon={faBars} />
            </button>
          </div>
          <div
            className={`fixed top-[56px] w-full bg-brand px-[16px] py-[0] [transition:height_0.1s] ${
              isShowSpMenu ? 'h-[120px]' : 'h-0 overflow-hidden'
            }`}
          >
            <MenuItemList currentPageName={currentPageName} />
          </div>
        </nav>
        <main className="sp:mt-[56px] sp:min-h-[calc(100vh-56px)] sp:w-dvw sp:p-[2em] sp:text-[calc(0.5rem+1.5vw)] pc:flex pc:h-dvh pc:w-full pc:items-center pc:overflow-y-auto pc:px-[3rem] pc:py-[5rem]">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
