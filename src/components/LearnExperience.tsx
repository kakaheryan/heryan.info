import * as React from "react";

type MainPageProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function LearnExperience({
  children,
  className,
}: MainPageProps) {
  return (
    <>
      <div className={className}>
        {children}
        <div className="relative">
          <ul className="education block space-y-3 mb-10">
            <h3>Education</h3>
            <li className="border-l-2 border-red-500 px-2">
              <h4>Junior High School</h4>
              <span>June 2009 - juli 2011 </span>
            </li>
          </ul>

          <ul className="block space-y-3 mb-10">
            <h3>Course</h3>
            <li className="border-l-2 border-red-500 px-2">
              {" "}
              Membuat dan memasarkan konten kreatif Digital untuk menjadi
              content creator
            </li>
            <li className="border-l-2 border-blue-500 px-2">
              Belajar cara menerapkan SEO pada website untuk Menjadi spesialis
              pemasaran
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
