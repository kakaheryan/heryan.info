import clsx from "clsx";
import * as React from "react";

import LinkHref from "@/components/etc/LinkHref";

import { ProjectFrontmatter } from "@/types/content";

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<"li">;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        "rounded-md project-card md:w-full",
        "border dark:border-gray-600",
        "transform-gpu scale-100 hover:scale-[1.02] active:scale-[0.97]",
        "transition duration-100",
        "animate-shadow",
        className
      )}
    >
      <LinkHref
        href={`/projects/${project.slug}`}
        className="flex flex-col items-start h-full p-4 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      >
        <h4>{project.title}</h4>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <p className="inline-block mt-2 font-medium animated-underline">
          See more →
        </p>
      </LinkHref>
    </li>
  );
}
