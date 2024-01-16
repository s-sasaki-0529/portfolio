import '../styles/globals.css'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const currentPageName = router.pathname.split('/')[1] || 'about'
  const [isShowSpMenu, setIsShowSpMenu] = useState(false)

  if (router.events) {
    router.events.on('routeChangeComplete', () => setIsShowSpMenu(false))
  }

  const Menu = () => (
    <>
      <ul className="py-2 px-0 m-0">
        {['about', 'outputs', 'experience'].map(menu => (
          <li key={menu} className="h-[40px] font-extrabold list-none no-underline decoration-0 leading-[0]">
            <Link href={`/${menu}`}>
              <a
                className={`text-[1.1rem] text-[rgba(255,255,255,0.55)] uppercase nonetex ${
                  menu === currentPageName ? 'text-white underline' : ''
                }`}
              >
                {menu}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <>
      <div className="app flex">
        <Head>
          <title>Shingo Sasaki</title>
        </Head>
        <nav className="flex flex-col justify-center items-center min-w-[270px] h-dvh bg-[rgb(189,_93,_56)] sp:hidden">
          <Image
            src="/icon.jpg"
            alt="笹木信吾のいつものプロフィールアイコン画像"
            className="!border-[0.5rem] !border-solid !border-[rgba(255,255,255,0.2)] rounded-[50%]"
            width={160}
            height={160}
          />
          <div className="m-[2rem] text-center">
            <Menu />
          </div>
        </nav>
        <nav className="sp-nav pc:hidden fixed left-0 right-0 top-0 z-[100]">
          <div className="flex justify-between items-center w-dvw h-[56px] py-[8px] px-[16px] bg-[rgb(189,_93,_56)]">
            <h1 className="text-white text-[1.25rem] font-light">Shingo Sasaki</h1>
            <button
              title="メインメニュー"
              className="w-[56px] h-[40px] bg-transparent border-[1px] border-solid border-[rgba(255,_255,_255,_0.1)] rounded-[0.25em] cursor-pointer p-0"
              onClick={() => setIsShowSpMenu(!isShowSpMenu)}
            >
              {' '}
              <FontAwesomeIcon className="text-[rgba(255,_255,_255,_0.55)]" icon={faBars} />
            </button>
          </div>
          <div
            className={`fixed top-[56px] px-[16px] py-[0] w-full bg-[rgb(189,_93,_56)] [transition:height_0.1s] ${
              isShowSpMenu ? 'h-[120px]' : 'h-0 overflow-hidden'
            }`}
          >
            <Menu />
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
