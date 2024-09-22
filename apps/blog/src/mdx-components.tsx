import Link from 'next/link';
import React from 'react';
import type { MDXComponents } from 'mdx/types';

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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: CustomLink,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    ...components,
  };
}
