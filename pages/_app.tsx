import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
    <div className="zapato">
      <Head>
        <title>Juan David Campolargo</title>

      </Head>
      <header>
      <Link href="/">
       <a>Juan David Campolargo</a>
      </Link>
      </header>
    <article className="index postContent">
    <nav>
      <a href="/about" target="_blank">About</a>
      <a href="https://twitter.com/jdcampolargo" target="_blank" rel="noreferrer">Twitter</a>
      <a href="mailto:jdcampolargo@hotmail.com" target="_blank" rel="noreferrer">Email</a>
      <a href="https://github.com/jdcampolargo" target="_blank" rel="noreferrer">Github</a>
      <a href="https://juandavidcampolargo.com/rss" target="_blank" rel="noreferrer">RSS</a>
    </nav>


    <div className="container">
  


      
      <Component {...pageProps} />
    </div>
    <footer>
        <div>
          <Link href="/">
            <a>Home </a>
          </Link>
          <Link href="/about/">
            <a>  About  </a>
          </Link>
          <Link href="/essays/">
            <a>  Essays  </a>
          </Link>
          <Link href="/contact/">
            <a>  Contact </a>
          </Link>
        </div>
            <a href="https://twitter.com/jdcampolargo" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" width="30" height="30"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-david-campolargo-a8a8b817b/" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.png" alt="LinkedIn" width="30" height="30"/>
          </a>
          <a href="
          https://www.instagram.com/jdcampolargo/" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.png" alt="Instagram" width="30" height="30"/>
          </a>
          <a href="
         https://www.youtube.com/channel/UCU87CN_FxGC1q3hzWM0CCDA" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.png" alt="YouTube" width="30" height="30"/>
          </a>
      </footer>
    </article>
    </div>

  );
}

export default MyApp;



// <nav>
// <Link href="/start-here/">
//   <a>Start Here</a>
// </Link>
// <Link href="/">
//   <a>Essays</a>
// </Link>
// <Link href="/contact/">
//   <a>Contact</a>
// </Link>
//   </nav>