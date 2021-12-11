import clsx from "clsx";
import { format } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";

import { getFileBySlug, getFiles } from "@/lib/Client";
import useScrollSpy from "@/hooks/useScrollspy";

import TableOfContents, {
  HeadingScrollSpy,
} from "@/components/content/TableOfContents";
import LinkHref from "@/components/etc/LinkHref";
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";

import { BlogType } from "@/types/content";

type SingleBlogPageProps = BlogType;

export default function SingleBlogPage({
  code,
  frontmatter,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3");

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, []);

  return (
    <Layout>
      <main>
        <HeadMeta templateTitle={frontmatter.title} />
        <section className="">
          <div className={clsx("layout")}>
            <div className="pb-4 dark:border-gray-600">
              <h1 className="mt-4">{frontmatter.title}</h1>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Written on{" "}
                {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")} by
                Heryan
                {frontmatter.lastUpdated && (
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {" "}
                    Last updated{" "}
                    {format(new Date(frontmatter.lastUpdated), "MMMM dd, yyyy")}
                  </span>
                )}
              </p>
              <div className="flex items-center justify-start gap-2 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <HiOutlineClock className="inline-block text-base" />
                  {frontmatter.readingTime.text}
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                </div>
              </div>
              {!frontmatter?.englishOnly && (
                <LinkHref href="/blog/" className="mt-2"></LinkHref>
              )}
            </div>

            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <article className="w-full mx-auto mt-4 prose text-xs  text-gray-300 transition-colors dark:prose-dark">
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>

              <aside className="py-4">
                <div className="sticky top-36">
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                  <div className="flex items-center justify-center py-8">
                    {frontmatter.description}
                  </div>
                </div>
              </aside>
            </section>

            <div className="flex flex-col items-start gap-4 mt-8 md:flex-row-reverse md:justify-between">
              <LinkHref href="/blog">← Back to blog</LinkHref>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug("blog", params?.slug as string);

  return {
    props: { ...post },
  };
};

export function Pre(props: React.ComponentPropsWithRef<"pre">) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>{`
        pre {
          position: relative;
          padding-top: 2.5rem;
        }
      `}</style>
    </pre>
  );
}

function CustomCode(props: React.ComponentPropsWithRef<"code">) {
  const textRef = React.useRef<HTMLDivElement>(null);

  const language = props.className?.includes("language")
    ? props.className.replace("language-", "").replace(" code-highlight", "")
    : null;

  return (
    <code {...props}>
      {language ? (
        <div ref={textRef} className="overflow-x-auto">
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}

      {language && (
        <div className="absolute top-0 px-3 py-1 border border-t-0 border-gray-600 rounded-b-md left-6">
          <span className="font-medium text-transparent select-none bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text">
            {language}
          </span>
        </div>
      )}
    </code>
  );
}

const MDXComponents = {
  pre: Pre,
  code: CustomCode,
};
