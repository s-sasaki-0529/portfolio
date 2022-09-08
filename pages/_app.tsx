import 'modern-css-reset'
import { useRouter } from 'next/dist/client/router'
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
      <ul className="menu">
        {['about', 'outputs', 'experience'].map(menu => (
          <li key={menu} className="menu-item">
            <Link href={`/${menu}`}>
              <a className={menu === currentPageName ? 'menu-link selected' : 'menu-link'}>{menu}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx lang="scss">{`
        .menu {
          padding: 0;
          margin: 0;
          .menu-item {
            height: 40px;
            font-weight: 800;
            list-style: none;
            .menu-link,
            .menu-link:visited {
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.55);
              text-transform: uppercase;
              text-decoration: none;
              &.selected {
                color: rgb(255, 255, 255);
              }
            }
          }
        }
      `}</style>
    </>
  )

  return (
    <>
      <div className="app">
        <nav className="pc-nav">
          <Image src="/icon.jpg" alt="icon_shingo_sasaki" className="icon" width={160} height={160} />
          <div className="menu">
            <Menu />
          </div>
        </nav>
        <nav className="sp-nav">
          <div className="header">
            <h1 className="name">Shingo Sasaki</h1>
            <button className="hamburger" onClick={() => setIsShowSpMenu(!isShowSpMenu)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className={isShowSpMenu ? 'menu' : 'menu collapsed'}>
            <Menu />
          </div>
        </nav>
        <main className="main">
          <Component {...pageProps} />
        </main>
      </div>

      <style jsx lang="scss">{`
        .app {
          display: flex;
          @media screen and (min-width: 920px) {
            flex-direction: row;

            .pc-nav {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              min-width: 270px;
              height: 100vh;
              background-color: rgb(189, 93, 56);

              :global(.icon) {
                border: 0.5rem solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 50%;
              }
              .menu {
                margin: 2rem;
                text-align: center;
              }
            }
            .sp-nav {
              display: none;
            }
            .main {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100vh;
              overflow-y: auto;
              padding: 5rem 3rem 5rem 3rem;
            }
          }
          @media screen and (max-width: 920px) {
            flex-direction: column;

            .pc-nav {
              display: none;
            }
            .sp-nav {
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              z-index: 100;
              .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100vw;
                height: 56px;
                padding: 8px 16px 8px 16px;
                background-color: rgb(189, 93, 56);
                :global(.icon) {
                  display: none !important;
                }
                .name {
                  color: #fff;
                  font-size: 1.25rem;
                  font-weight: lighter;
                }
                .hamburger {
                  width: 56px;
                  height: 40px;
                  background-color: transparent;
                  border: 1px solid;
                  border-color: rgba(255, 255, 255, 0.1);
                  border-radius: 0.25em;
                  cursor: pointer;
                  padding: 0;
                  :global(svg) {
                    color: rgba(255, 255, 255, 0.55);
                  }
                }
              }
              .menu {
                position: fixed;
                top: 56px;
                padding: 0 16px 0 16px;
                width: 100%;
                height: 160px;
                background-color: rgb(189, 93, 56);
                transition: height 0.1s;
                &.collapsed {
                  height: 0;
                  overflow: hidden;
                }
              }
            }
            .main {
              width: 100vw;
              margin-top: 56px;
              font-size: calc(0.5rem + 1.5vw);
              padding: 2em;
              min-height: calc(100vh - 56px);
            }
          }
        }
      `}</style>
    </>
  )
}

export default MyApp
