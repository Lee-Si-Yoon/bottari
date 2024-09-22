import fs from 'fs';
import path from 'path';
import type { GrayMatterFile } from 'gray-matter';
import matter from 'gray-matter';

type Metadata = {
  title: string;
  date: Date;
  draft: boolean;
  preview?: string;
  tags?: string[];
  categories?: string[];
};

function stripDoctoc(content: string) {
  return content
    .replace(
      '<!-- START doctoc generated TOC please keep comment here to allow auto update -->',
      ''
    )
    .replace(
      "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->",
      ''
    )
    .replace(
      '<!-- END doctoc generated TOC please keep comment here to allow auto update -->',
      ''
    );
}

function parseFrontMatter(fileContent: string) {
  const fmContent = matter(fileContent) as GrayMatterFile<string>;

  return {
    metadata: fmContent.data as Metadata,
    content: stripDoctoc(fmContent.content),
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontMatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return { metadata, content, slug };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), '../../contents/ai'));
}
