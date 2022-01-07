import clsx from "clsx";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

import useLoaded from "@/hooks/useLoaded";

import LinkHref from "@/components/etc/LinkHref";
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";
import TitlePage from "@/components/main/TitlePage";

export default function ProjectPage({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <HeadMeta templateTitle="My Projects" />
        <main>
          <section
            className={clsx(
              "flex flex-col mb-10 mt-4 min-h-main layout",
              useLoaded() && "fade-in-start"
            )}
          >
            <TitlePage className="text-primary-300">Project</TitlePage>
            <ul className="grid gap-2 mt-4 sm:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
              {repos.map((repo, index) => (
                <li key={index} className="block overflow-hidden">
                  <div
                    className={clsx(
                      "bg-white dark:bg-opacity rounded-xl border  dark:border-none border-gray-200",
                      "md:flex"
                    )}
                    fade-side={1 + index}
                  >
                    <div className="p-3">
                      <LinkHref
                        href={repo.html_url}
                        className=" mt-1 text-base md:text-lg font-bold bg-clip-text dark:bg-gradient-to-r from-primary-500 via-primary-300 to-primary-400 dark:text-transparent hover:underline"
                      >
                        {repo.name}
                      </LinkHref>

                      <blockquote>
                        <p className="font-light mb-1 text-xs text-gray-500 dark:text-gray-400">
                          {repo.html_url}
                        </p>
                      </blockquote>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {repo.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://api.github.com/users/kakaheryan/repos?sort=created"
  );
  let repos = await data.json();

  repos = repos.map((i) => {
    return {
      name: i.name,
      html_url: i.html_url,
      description: i.description,
      language: i.language,
      last_update: i.updated_at,
    };
  });
  return {
    props: {
      repos,
    },
  };
}
