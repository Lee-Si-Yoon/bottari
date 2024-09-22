// @ts-check

import { composePlugins, withNx } from '@nx/next';
import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const mdxConfig = withMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// 플러그인 배열
const plugins = [mdxConfig, withNx];

export default composePlugins(...plugins)(nextConfig);
