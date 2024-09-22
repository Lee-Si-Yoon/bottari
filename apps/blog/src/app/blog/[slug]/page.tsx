import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import { getBlogPosts } from '../../../../db/blog';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, date } = post.metadata;

  return {
    title,
  };
}

export default async function Blog({ params }: Params) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        {post && (
          <MDXRemote
            source={post.content}
            components={{
              h1: createHeading(1),
              h2: createHeading(2),
              h3: createHeading(3),
              h4: createHeading(4),
              h5: createHeading(5),
              h6: createHeading(6),
              a: CustomLink,
            }}
          />
        )}
      </article>
    </section>
  );
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  function Inner({ children }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(
      `h${level}`,
      { id: children },
      [
        React.createElement('a', {
          href: `#${children}`,
          key: `link-${children}`,
          className: 'anchor',
        }),
      ],
      children
    );
  }
  return Inner;
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href;

  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
