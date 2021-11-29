import * as React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type MainPageProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function SkillBase({ children, className }: MainPageProps) {
  return (
    <>
      <div className={className}>
        {children}
        <ul className="flex-shrink-0 grid sm:grid-cols-2  md:grid-cols-3 gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
          {frontend.map((skills, index) => (
            <>
              <li className="relative text-xs" fade-side={ 1 + index }>
=======
          {frontend.map((skills) => (
            <>
              <li className="relative text-xs ">
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
=======
          {frontend.map((skills) => (
            <>
              <li className="relative text-xs ">
>>>>>>> 61368d4fb33eb41350e300d7900520ca114ae7f8
                <div className="pl-1">
                  <skills.icons className="w-5 h-5 text-gray-400 inline-block mb-1" />
                  <span className="p-1 text-gray-500 dark:text-gray-300">
                    {skills.text}
                  </span>
                  <div className="rating text-gray-400 dark:text-gray-300 absolute  top-2 right-0">
                    {skills.rating}%
                  </div>
                </div>
                <div className="w-full  h-4 mt-1 bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 h-4 w-full"
                    style={{ width: skills.rating + "%" }}
                  ></div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

const frontend = [
  {
    text: "HTML5",
    icons: SiHtml5,
    rating: "100",
  },
  {
    text: "CSS3",
    icons: SiCss3,
    rating: "92",
  },
  {
    text: "JavaScript",
    icons: SiJavascript,
    rating: "80",
  },

  {
    text: "NodeJS",
    icons: SiNodedotjs,
    rating: "60",
  },
  {
    text: "React",
    icons: SiReact,
    rating: "75",
  },
  {
    text: "Typescript",
    icons: SiTypescript,
    rating: "85",
  },
  {
    text: "Jquery",
    icons: SiJquery,
    rating: "85",
  },
  {
    text: "SiPhp",
    icons: SiPhp,
    rating: "90",
  },
  {
    text: "Laravel",
    icons: SiLaravel,
    rating: "75",
  },
];
