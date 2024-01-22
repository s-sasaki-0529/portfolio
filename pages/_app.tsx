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
        <li key={item} className="h-[40px] font-extrabold list-none no-underline decoration-0 leading-[0]">
          <Link href={`/${item}`}>
            <a
              className={`text-[1.1rem] text-gray-300 uppercase nonetex ${
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
        <nav className="flex flex-col justify-center items-center gap-5 min-w-[270px] h-dvh bg-brand sp:hidden">
          <Image
            src="/icon.jpg"
            alt="笹木信吾のいつものプロフィールアイコン画像"
            className="!border-[0.5rem] rounded-[50%]"
            width={160}
            height={160}
          />
          <div className="text-center">
            <MenuItemList currentPageName={currentPageName} />
          </div>
        </nav>
        <nav className="sp-nav pc:hidden fixed left-0 right-0 top-0 z-[100]">
          <div className="flex justify-between items-center w-dvw h-[56px] py-[8px] px-[16px] bg-brand">
            <h1 className="text-white text-[1.25rem] font-light">Shingo Sasaki</h1>
            <button
              title="メインメニュー"
              className="w-[56px] h-[40px] bg-transparent border-[1px] rounded-[0.25em] cursor-pointer p-0"
              onClick={() => setIsShowSpMenu(!isShowSpMenu)}
            >
              {' '}
              <FontAwesomeIcon className="text-gray-300" icon={faBars} />
            </button>
          </div>
          <div
            className={`fixed top-[56px] px-[16px] py-[0] w-full bg-brand [transition:height_0.1s] ${
              isShowSpMenu ? 'h-[120px]' : 'h-0 overflow-hidden'
            }`}
          >
            <MenuItemList currentPageName={currentPageName} />
          </div>
        </nav>
        <main className="pc:flex pc:items-center pc:w-full pc:h-dvh pc:overflow-y-auto pc:py-[5rem] pc:px-[3rem] sp:w-dvw sp:mt-[56px] sp:text-[calc(0.5rem+1.5vw)] sp:p-[2em] sp:min-h-[calc(100vh-56px)]">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
