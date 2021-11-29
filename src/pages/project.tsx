import clsx from "clsx";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";
<<<<<<< HEAD
<<<<<<< HEAD
import useLoaded from "@/hooks/useLoaded";

=======
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
=======
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8

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
<<<<<<< HEAD
<<<<<<< HEAD
              useLoaded() && "fade-in-start"
=======
              "fade-in-start"
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
=======
              "fade-in-start"
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
            )}
          >
            <h3 className="flex-none py-2 text-sm font-semibold border-b-2 border-gray-300 dark:border-green-300">
              My Projects
            </h3>
            <ul className="grid gap-2 mt-4 sm:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
<<<<<<< HEAD
<<<<<<< HEAD
              {repos.map((repo, index) => (

=======
              {repos.map((repo) => (
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
=======
              {repos.map((repo) => (
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
                <li
                  key={repo.i}
                  className={clsx(
                    "w-full bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden",
                    "md:max-w-2xl"
<<<<<<< HEAD
<<<<<<< HEAD
                  )} fade-side={1 + index}>
=======
                  )}
                >
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
=======
                  )}
                >
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
                  <div className="md:flex">
                    <div className="p-3">
                      <a
                        href={repo.html_url}
                        className=" mt-1 text-sm  leading-tight font-bold bg-clip-text dark:bg-gradient-to-r from-green-500 to-green-300 dark:text-transparent hover:underline"
                      >
                        {repo.name}
                      </a>

                      <blockquote>
                        <p
                          className="font-light mb-1 text-xs text-gray-500 dark:text-gray-400"
                          data-fade="3"
                        >
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
