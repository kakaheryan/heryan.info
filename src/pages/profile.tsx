import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";

import useLoaded from "@/hooks/useLoaded";

import TextGradient from "@/components/attr/TextGradient";
import HeadMeta from "@/components/HeadMeta";
import LearnExperience from "@/components/LearnExperience";
import Layout from "@/components/main/Layout";
import Skillbase from "@/components/Skillbase";

import ProfilImage from "/public/img/me.jpg";

export default function ProfilePage() {
  return (
    <>
      <Layout>
        <HeadMeta templateTitle="Heryan's Portofolio" />
        <main className="md:grid md:grid-rows-3  md:grid-cols-3 md:grid-flow-col gap-2 layout">
          <section
            className={clsx(
              "row-span-2 col-span-1",
              "flex flex-col justify-center my-4 p-2 rounded-md",
              "bg-white dark:bg-gray-800 overflow-hidden",
              useLoaded() && "fade-in-start"
            )}
          >
            <div
              className={clsx(
                "bg-gray-100 dark:bg-darknight rounded-md ",
                "flex items-center flex-row p-2 mb-2"
              )}
            >
              <Image
                className="w-28 h-28 object-cover rounded-full"
                src={ProfilImage}
                alt="sevt"
                width="120"
                height="120"
                fade-side="1"
              />
              <div className="mx-2 p-2 space-y-2 sm:text-left" fade-side="2">
                <h2>
                  <TextGradient>Heryanto</TextGradient>
                </h2>
                <span className="text-xs text-gray-300" fade-side="2">
                  Full-Stack Developer
                </span>
                <div className="text-gray-600 dark:text-gray-300" fade-side="3">
                  Ciamis, Indonesia
                </div>
              </div>
            </div>
            <div className="rounded-md mt-2">
              <h3
                className="title-bar mb-2 py-2 border-b border-gray-500"
                fade-side="3"
              >
                <TextGradient>AboutMe</TextGradient>
              </h3>
              <p
                className="px-1 text-gray-600 dark:text-gray-300"
                fade-side="4"
              >
                Hi there! I'm an Web Developer Back-End and Front-End. I was
                born in Cirebon, Indonesia. now I am 25 years old and still
                single.I work for myself
              </p>
            </div>

            <div className="rounded-md mt-2">
              <h3
                className="title-bar mb-2 py-2 border-b border-gray-500"
                fade-side="4"
              >
                <TextGradient className="inline-block">Contact</TextGradient>
              </h3>
              <div className="px-1 flex flex-col gap-2" fade-bottom="4">
                {sociallink.map((sosial, index) => (
                  <>
                    <Link href={sosial.link}>
                      <a fade-side={1 + index}>
                        <sosial.icons
                          className={clsx(
                            sosial.color,
                            "p-1 w-6 h-6 rounded-md text-white inline-block mr-2"
                          )}
                        />
                        {"https://wa.me/6282321736345" === sosial.link
                          ? sosial.link.replace("https://wa.me/", "+")
                          : sosial.link.replace("https://", "")}
                      </a>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </section>

          <section
            className={clsx(
              "row-span-3 col-span-2",
              "flex flex-col rounded-md bg-white dark:bg-gray-800",
              " my-4 p-4 shadow-xl overflow-hidden",
              useLoaded() && "fade-in-start"
            )}
          >
            <Skillbase className="mb-4">
              <h3 className="flex-none py-1 mb-4 text-gray-800 dark:text-green-400 border-b border-gray-300">
                Skill &amp; abilities
              </h3>
            </Skillbase>
            <LearnExperience className="mb-4">
              <h3 className="flex-none py-1 mb-4 text-gray-800 dark:text-green-400 border-b border-gray-300">
                Learning Experience
              </h3>
            </LearnExperience>
          </section>
        </main>
      </Layout>
    </>
  );
}

const sociallink = [
  {
    icons: SiFacebook,
    link: "https://fb.me/heryanofficial",
    color: "bg-blue-800 ",
  },
  {
    icons: SiInstagram,
    link: "https://instagram.com/kakaheryan",
    color: "bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-500",
  },
  {
    icons: SiWhatsapp,
    link: "https://wa.me/6282321736345",
    color: "bg-green-500",
  },
  {
    icons: SiLinkedin,
    link: "https://linkedin.com/in/kakaheryan",
    color: "bg-blue-500",
  },
];
