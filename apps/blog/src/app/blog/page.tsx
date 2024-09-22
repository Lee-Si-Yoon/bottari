import Link from 'next/link';

import { getBlogPosts } from '../../../db/blog';

export const metadata = {
  title: 'Blog',
  description: '',
};

export default function BlogPage() {
  const allBlogPosts = getBlogPosts();

  return (
    <section>
      {allBlogPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
