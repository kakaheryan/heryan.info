import clsx from "clsx";
import { format } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";

import { getFileBySlug, getFiles } from "@/lib/Client";
import useScrollSpy from "@/hooks/useScrollspy";

import TextGradient from "@/components/attr/TextGradient";
import TableOfContents, {
  HeadingScrollSpy,
} from "@/components/content/TableOfContents";
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";

import { BlogType } from "@/types/content";

export default function SingleBlogPage({ code, frontmatter }: BlogType) {
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
  //#endregion  //*======== Scrollspy ===========

  return (
    <Layout>
      <HeadMeta
        templateTitle={frontmatter.title}
        description={frontmatter.description}
      />

      <main>
        <section className="">
          <div className={clsx("layout")}>
            <div className="pb-4 dark:border-gray-600">
              <h1 className="mt-4 bg-gradient-to-r from-primary-600 via-primary-200 to-primary-300 bg-clip-text text-transparent">
                {frontmatter.title}
              </h1>

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
                  <TextGradient>{frontmatter.readingTime.text}</TextGradient>
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <TextGradient> views</TextGradient>
                </div>
              </div>
            </div>

            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <article className="w-full mx-auto mt-4 mdx prose transition-colors ">
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
                </div>
              </aside>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params?.slug as string);

  return {
    props: { ...post },
  };
};

const MDXComponents = {
  pre: Pre,
  code: CustomCode,
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

export function CustomCode(props: React.ComponentPropsWithRef<"code">) {
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
    </code>
  );
}
