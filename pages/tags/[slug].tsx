import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllEssays, PostMeta } from "@/src/api";
import Essays from "@/src/components/essays";

export default function TagPage({
  slug,
  essays,
}: {
  slug: string;
  essays: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1>Tag: {slug}</h1>
      <Essays essays={essays} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const essays = getAllEssays().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      essays: essays.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const essays = getAllEssays();
  const tags = new Set(essays.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
