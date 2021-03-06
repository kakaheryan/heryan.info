import clsx from "clsx";
import { format } from "date-fns";
import * as React from "react";
import { HiCalendar, HiOutlineClock } from "react-icons/hi";

import Tag from "@/components/content/Tag";
import LinkHref from "@/components/etc/LinkHref";

import { BlogFrontmatter } from "@/types/content";

type BlogCardProps = {
  post: BlogFrontmatter;
  dataid: number;
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<"li">;

export default function ListContent({
  post,
  className,
  checkTagged,
  dataid,
}: BlogCardProps) {
  return (
    <>
      <li
        className={clsx(
          "block overflow-hidden transform-gpu scale-100 hover:scale-[1.02] active:scale-[0.97]",
          "transition duration-100",
          "animate-shadow",
          className
        )}
      >
        <LinkHref
          className={clsx(
            "w-full bg-white rounded-md border dark:border-gray-600 border-gray-300 dark:bg-dark",
            "block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
          )}
          href={`/post/${post.slug}`}
          fade-side={dataid + 2}
        >
          <div className="p-4">
            <h4 className="text-primary-300 dark:text-gray-100">
              {post.title}
            </h4>
            <div className="flex items-center justify-start gap-2 mt-2 text-sm font-medium  text-gray-400">
              <div className="flex items-center gap-1">
                <HiCalendar className="inline-block text-base" />
                {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineClock className="inline-block text-base" />
                {post.readingTime.text}
              </div>
            </div>
            <p className="text-sm text-black dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="relative ">
            <div
              className={clsx(
                "w-full p-1",
                "flex flex-wrap justify-end  text-sm text-black gap-x-2 gap-y-1 dark:text-gray-100"
              )}
            >
              {post.tags.split(",").map((tag) => (
                <Tag className="bg-opacity-80 dark:!bg-opacity-60" key={tag}>
                  {checkTagged?.(tag) ? { tag } : tag}
                </Tag>
              ))}
            </div>
          </div>
        </LinkHref>
      </li>
    </>
  );
}
