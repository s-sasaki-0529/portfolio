import 'modern-css-reset'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app">
        <nav className="nav">メインメニュー</nav>
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
              min-width: 270px;
              height: 100vh;
              background-color: rgb(189, 93, 56);
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
