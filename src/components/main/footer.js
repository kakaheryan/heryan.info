import * as React from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="pb-2 mt-4 b-0 ">
      <main className="flex flex-col items-center pt-6 border-t border-gray-400 dark:border-gray-600 layout">
        <FooterLinks />
        <p className="mt-12 text-primary-600 dark:text-gray-300">
          Reach me out
        </p>

        <div className="flex mt-2 space-x-4">
          {socials.map((social) => (
            <a
              key={social.text}
              className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
              href={social.href}
            >
              <social.icon className="w-6 h-6 my-auto text-gray-500 align-middle transition-colors dark:text-gray-300 hover:text-primary-100 dark:hover:text-primary-300" />
            </a>
          ))}
        </div>

        <p className="mt-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-yellow-300">
          © Heryan Official {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-center space-x-3">
      {footerLinks.map(({ href, text }) => (
        <a
          key={href}
          className="rounded-sm dark:text-gray-200 animated-underline focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
          href={href}
        >
          {text}
        </a>
      ))}
    </div>
  );
}

const footerLinks = [
  {
    href: "/",
    text: "Templates",
  },
  {
    href: "/",
    text: "Docs",
  },
  {
    href: "/",
    text: "Statistics",
  },
];

const socials = [
  {
    href: "https://github.com/kakaheryan",
    icon: SiGithub,
    text: "Github",
  },
  {
    href: "https://linkedin.com/kakaheryan",
    icon: SiLinkedin,
    text: "Linkedin",
  },
  {
    href: "https://twitter.com/kakaheryan",
    icon: SiTwitter,
    text: "Twitter",
  },
];
