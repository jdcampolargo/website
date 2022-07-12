// import { getAllEssays, PostMeta } from "@/src/api";
// import Articles from "@/src/components/essays";


 
// // import Footer from "@/src/components/Footer";

// {/* <div class="wrapper"><a class="site-title" rel="author" href="/blog/">the singularity is nearer</a><nav class="site-nav">
// <input type="checkbox" id="nav-trigger" class="nav-trigger" />
// <label for="nav-trigger">
//   <span class="menu-icon">
//     <svg viewBox="0 0 18 15" width="18px" height="15px">
//       <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
//     </svg>
//   </span>
// </label>

// <div class="trigger"><a class="page-link" href="/blog/about/">About</a></div>
// </nav>
// </div>
// </header>
// <main class="page-content" aria-label="Content">
// <div class="wrapper">
// <div class="home">
// <h2 class="post-list-heading">Posts</h2>
//  */}


// export default function Home({ essays }: { essays: PostMeta[] }) {
//   return (
//     <>
//       <h2>Essays </h2>
//       <Articles essays={essays} />
//     {/* < Footer /> */}
//     </>
    
//   );
// }





// export async function getStaticProps() {
//   const essays = getAllEssays()
//     .slice(0, 100000000)
//     .map((post) => post.meta);




//   return { props: { essays } };
// }


import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Juan David Campolargo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Rebuilding this website 🫠😉
</h1>
<h2>
    It's taking a long time...Coding is easy. Excellent design is brutal!

</h2>

        <p className="description">
          Get in touch with me on{' '}
          <a href="https://twitter.com/jdcampolargo" target="_blank" rel="noreferrer">Twitter</a>.
        </p>

<p className="description">
          You can find my essays{' '}
          <a href="https://juandavidcampolargo.substack.com/archive" target="_blank" rel="noreferrer">here</a>.
        </p>

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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
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
