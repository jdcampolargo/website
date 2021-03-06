import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const ESSAYS_PATH = path.join(process.cwd(), "blog");

export const getSlugs = (): string[] => {
  const paths = sync(`${ESSAYS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};



export const getAllEssays = () => {
  const essays = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((postOne, postTwo) => {
      const postDate1 = new Date(postOne.meta.date);
      const postDate2 = new Date(postTwo.meta.date);

      if(postDate1.getTime() > postDate2.getTime()) return 1;
      if(postDate1.getTime() < postDate2.getTime()) return -1;
      return 0;
  })
  .reverse();
  return essays;
};

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(ESSAYS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};
