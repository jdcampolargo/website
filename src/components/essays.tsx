import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Essays({ essays }: { essays: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {essays.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
