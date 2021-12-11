/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import readingTime from "reading-time";

import { ContentType, PickFrontmatter } from "@/types/content";

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), "src", "contents", type));
}

export async function getAllFiles<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), "src", "contents", type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "src", "contents", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export async function getFileBySlug(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), "src", "contents", type, `${slug}.mdx`),
        "utf8"
      )
    : readFileSync(
        join(process.cwd(), "src", "contents", `${type}.mdx`),
        "utf8"
      );

  const { code, frontmatter } = await bundleMDX({ source });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
