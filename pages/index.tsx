import { getAllEssays, PostMeta } from "@/src/api";
import Articles from "@/src/components/essays";


 
// import Footer from "@/src/components/Footer";

{/* <div class="wrapper"><a class="site-title" rel="author" href="/blog/">the singularity is nearer</a><nav class="site-nav">
<input type="checkbox" id="nav-trigger" class="nav-trigger" />
<label for="nav-trigger">
  <span class="menu-icon">
    <svg viewBox="0 0 18 15" width="18px" height="15px">
      <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
    </svg>
  </span>
</label>

<div class="trigger"><a class="page-link" href="/blog/about/">About</a></div>
</nav>
</div>
</header>
<main class="page-content" aria-label="Content">
<div class="wrapper">
<div class="home">
<h2 class="post-list-heading">Posts</h2>
 */}


export default function Home({ essays }: { essays: PostMeta[] }) {
  return (
    <>
      <h2>Essays </h2>
      <Articles essays={essays} />
    {/* < Footer /> */}
    </>
  );
}

export async function getStaticProps() {
  const essays = getAllEssays()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { essays } };
}

