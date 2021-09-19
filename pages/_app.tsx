import 'modern-css-reset'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app">
        <nav className="nav">
          <Image src="/icon.jpg" alt="icon_shingo_sasaki" className="icon" width={160} height={160} />
          <ul className="menu">
            <li className="menu-item">ABOUT</li>
            <li className="menu-item">EXPERIENCE</li>
            <li className="menu-item">SKILLS</li>
            <li className="menu-item selected">OUTPUTS</li>
            <li className="menu-item">INTERSETS</li>
            <li className="menu-item">CERTIFICATIONS</li>
          </ul>
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

            .nav {
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
                padding: 0;
                text-align: center;
                .menu-item {
                  height: 40px;
                  color: rgba(255, 255, 255, 0.55);
                  font-weight: 800;
                  list-style: none;
                  &.selected {
                    color: #fff;
                  }
                }
              }
            }
            .main {
              width: 100%;
              height: 100vh;
            }
          }
          @media screen and (max-width: 920px) {
            flex-direction: column;

            .nav {
              width: 100vw;
              height: 40px;
              background-color: rgb(189, 93, 56);
            }
            .main {
              width: 100vw;
              height: 100%;
            }
          }
        }
      `}</style>
    </>
  )
}

export default MyApp
