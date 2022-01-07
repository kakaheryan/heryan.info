import clsx from "clsx";
import * as React from "react";
import { HiAdjustments } from "react-icons/hi";

import Tooltip from "@/components/Tooltip";

type TitlePageProps = {
  children?: React.ReactNode;
  className?: string;
  sortbyList?: boolean;
  withSearch?: boolean;
};

export default function TitlePage({
  children,
  className,
  sortbyList = false,
  withSearch = false,
}: TitlePageProps) {
  return (
    <div className={clsx("border-b border-primary-200 mb-1", className)}>
      <div className=" flex items-center justify-between py-1">
        <h1
          className={clsx(
            "p-1 bg-clip-text text-transparent",
            "bg-gradient-to-r from-primary-600 via-primary-200 to-primary-300"
          )}
        >
          {children}
        </h1>

        {sortbyList ? (
          <div className="listbox">
            <button
              className="sortlistbox w-7 h-7 px-1 pt-2 center justify-end content-end border-none"
              onClick={() => alert("listView")}
            >
              <HiAdjustments className="w-5 h-5 text-white" />
              <Tooltip
                content={
                  <ul className="dropdown-menu text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                  </ul>
                }
              ></Tooltip>
            </button>
            <div className="listbox m-auto"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      {withSearch ? (
        <form className="group relative mb-4">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-primary-200"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="dark:bg-dark ring-1 ring-gray-600 outline-none w-full placeholder-gray-400 rounded-md py-2 pl-10 shadow-sm"
            type="text"
            placeholder="Search.."
          />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
