import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

import useLoaded from "@/hooks/useLoaded";

import TextGradient from "@/components/attr/TextGradient";
// import { InView } from 'react-intersection-observer';
import HeadMeta from "@/components/HeadMeta";
import Layout from "@/components/main/Layout";
import TechStack from "@/components/TechStack";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <HeadMeta />
        <main>
          <section
            className={clsx(
              "flex flex-col justify-center mb-10 min-h-main layout",
              useLoaded() && "fade-in-start"
            )}
          >
            <article className="mb-4">
              <figure
                className={clsx(
                  "flex flex-col justify-center overflow-hidden",
                  "md:px-8  md:text-left"
                )}
              >
                <div className="space-y-3">
                  <h2
                    className="bg-gradient-to-r from-yellow-600 via-green-500 to-green-400 bg-clip-text text-transparent font-bold text-2xl md:text-4xl"
                    fade-side="2"
                  >
                    Hi There!
                  </h2>
                  <h1
                    className="bg-gradient-to-r from-yellow-600 via-green-500 to-green-400 bg-clip-text text-transparent font-bold text-2xl md:text-4xl"
                    fade-side="3"
                  >
                    My Name Is Heryanto
                  </h1>
                  <blockquote>
                    <p
                      className="font-light mb-10 md:text-medium text-gray-500 dark:text-gray-300"
                      fade-side="4"
                    >
                      You can call me{" "}
                      <TextGradient className="font-semibold italic">
                        Heryan
                      </TextGradient>
                      . I know web developer since 2015,The first thing I
                      learned is HTML, CSS3, Javascript PHP &amp; Web server in
                      januari 2016. Currently November 2021, I&apos;m very
                      interested framework for backend and frontend from
                      Javascript
                    </p>
                  </blockquote>
                  <figcaption className="text-md">
                    <Link href="/profile">
                      <a
                        className="font-bold bg-gradient-to-r from-green-800 to-green-500 text-gray-200 inline-block px-4 py-2 rounded-lg"
                        fade-bottom="3"
                      >
                        Explore AboutMe
                      </a>
                    </Link>
                  </figcaption>
                </div>
              </figure>
            </article>
            <div className="my-2 pb-4 md:px-8">
              <h2
                className="text-lg font-semibold text-gray-600 dark:text-gray-300"
                fade-bottom="4"
              >
                The framework used:
              </h2>
              <TechStack />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
