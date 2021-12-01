import clsx from "clsx";
import * as React from "react";

import useLoaded from "@/hooks/useLoaded";

import TextGradient from "@/components/attr/TextGradient";
import { TypedText } from "@/components/attr/TypedText";
import ButtonAnimate from "@/components/etc/ButtonAnimate";
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
              "relative flex flex-col justify-center mb-12 min-h-main layout",
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
                    className="text-2xl md:text-4xl text-green-500 dark:text-primary-300"
                    fade-side="2"
                  >
                    Hi There!
                  </h2>
                  <h1
                    className="text-green-500 dark:text-primary-300"
                    fade-side="3"
                  >
                    My Name Is Heryanto
                  </h1>
                  <blockquote>
                    <p
                      className="font-light mb-5 md:text-medium text-gray-500 dark:text-gray-300"
                      fade-side="4"
                    >
                      You can call me{" "}
                      <TextGradient className="font-semibold italic">
                        Heryan
                      </TextGradient>
                      . I know web developer since 2015,The first thing I
                      learned is HTML, CSS3, Javascript PHP &amp; Web server in
                      januari 2016. Currently November 2021, because I like to
                      learn something new. I&apos;m very interested framework
                      for backend and frontend from Javascript
                    </p>
                  </blockquote>
                  <figcaption className="p-4 text-lg relative" fade-bottom="4">
                    <ButtonAnimate
                      href="/profile"
                      className="font-bold bg-gradient-to-r from-primary-500 via-primary-300 to-primary-400 text-gray-200 inline-block px-4 py-3 rounded-lg text-gray-200"
                    >
                      {" "}
                      Explore AboutMe
                    </ButtonAnimate>
                  </figcaption>
                </div>
              </figure>
            </article>
            <div className="p-4 md:px-8">
              <h2
                className="text-lg font-semibold text-gray-600 dark:text-gray-300"
                fade-bottom="4"
              >
                The framework used:
              </h2>
              <TechStack />
            </div>
            <div>
              <div className="absolute  bottom-7 left-0 right-0 m-auto text-center ">
                <div className="inline-block relative">
                  <div
                    className={clsx(
                      "absolute -inset-0.5 rounded blur",
                      "bg-gradient-to-r from-primary-600 via-primary-300 to-primary-400",
                      " dark:via-primary-300 z-0"
                    )}
                    fade-bottom="4"
                  />

                  <TypedText
                    className="inline-block text-white text-medium font-bold"
                    options={{
                      strings: [
                        "i&apos;m a Fullstack Web developer",
                        "i&apos;m a UI/UX Designer",
                        "i&apos;m  a Next.js Developer",
                        "i&apos;m a Jamstack Developer",
                        "i&apos;m a Nodejs Developer",
                        "i&apos;m a PHP Developer",
                        "i&apos;m a Laravel Developer",
                      ],
                    }}
                    fade-bottom="4"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
