import clsx from "clsx";
import * as React from "react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import TextGradient from "@/components/attr/TextGradient";
import Tooltip from "@/components/Tooltip";

export default function TechStack() {
  return (
    <div className="flex space-x-2 md:space-x-4 mx-auto" fade-bottom="5">
      {stacks.map((tech, index) => (
        <Tooltip
          className="bg-gray-100 border-none text-xs"
          key={tech.id}
          content={<p>{tech.tooltip}</p>}
        >
          <tech.icon
            key={tech.id}
            className={clsx(
              "w-10 h-10  md:w-10 md:h-10",
              "dark:hover:text-primary-200 hover:text-primary-300",
              "text-primary-200 dark:text-primary-300 transform -rotate-45"
            )}
            fade-side={3 + index}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: "nextjs",
    icon: SiNextdotjs,
    tooltip: (
      <>
        {" "}
        <TextGradient> nextjs</TextGradient>, currently using this framework
        because of the static generation, dynamic paths, and built-in api.
      </>
    ),
  },
  {
    id: "typescript",
    icon: SiTypescript,
    tooltip: (
      <>
        The reason I use this framework.{" "}
        <TextGradient> TypeScript</TextGradient> is a superset of JavaScript
        which primarily provides optional static typing, classes and interfaces.
        TypeScript make it easy to organize our code and provides Object
        Oriented Programming.
      </>
    ),
  },
  {
    id: "tailwind",
    icon: SiTailwindcss,
    tooltip: (
      <>
        I think tailwindccs is the best choice at this time for design UI/UX
        because it is very simple
      </>
    ),
  },
  {
    id: "react",
    icon: SiReact,
    tooltip: (
      <>
        <TextGradient> React </TextGradient> is a JavaScript library for
        building the user interface. React uses the component to divide the
        whole user interface into small sections and at each component contains
        its own property and state.
      </>
    ),
  },
  {
    id: "node",
    icon: SiNodedotjs,
    tooltip: (
      <>
        <TextGradient> NodeJS</TextGradient> is an open-source, cross platform
        JavaScript run time environment for executing the JavaScript code at
        server side. Node.js is used to create Real time, web application and
        command line applications
      </>
    ),
  },
];
