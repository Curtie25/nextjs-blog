import Link from 'next/link';
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Nextjs blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/profile.jpg" alt="jahziel" className="logo" />

      <main>
        <h1 className="title">
          Torreña Jahziel Curt<Link href="/posts/first-post">L.</Link>
        </h1>

        <p className="description">
          My name is Torreña Jahziel Curt L. 20 years old I live in Macabebe Pampanga and my Hobbies are Playing basketball and Watching Anime.
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs

" className="card">
        
          </a>
          <a>
                
          </a>
        </div>
      </main>
    
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .logo {
          border-radius: 700px;
          background-size: 50px;
          width: 300px;
          height: 300px;
          margin-top: 75px;    
        }
        
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}