import { getAllEssays, PostMeta } from "@/src/api";
import Articles from "@/src/components/essays";

export default function Home({ essays }: { essays: PostMeta[] }) {
  return (
    <>
      <h1>Essays</h1>
      <Articles essays={essays} />
    </>
  );
}

export async function getStaticProps() {
  const essays = getAllEssays()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { essays } };
}
