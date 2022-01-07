import clsx from "clsx";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

import { getAllFiles } from "@/lib/Client";
import { sortDateFn } from "@/lib/SortDefault";
import useLoaded from "@/hooks/useLoaded";

import EmptyPage from "@/components/content/EmptyPage";
import ListContent from "@/components/content/view/GridContent";
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";
import TitlePage from "@/components/main/TitlePage";

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => {
    const results = posts.filter(
      (post) => post.title.toLowerCase() || post.description.toLowerCase()
    );
    results.sort(sortDateFn);

    results;
  }, [posts]);

  return (
    <Layout>
      <HeadMeta templateTitle="Blog MDX" />
      <main>
        <section
          className={clsx(
            "flex flex-col mb-10 mt-4 min-h-main layout",
            useLoaded() && "fade-in-start"
          )}
        >
          <TitlePage className="text-primary-300" sortbyList withSearch>
            Blog
          </TitlePage>
          <div className="max-w-[100px] w-full"></div>
          <ul className="grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <ListContent key={index} post={post} dataid={index} />
              ))
            ) : (
              <EmptyPage />
            )}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFiles("blog");
  return { props: { posts } };
}

export function getFromSessionStorage(key: string) {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
}
