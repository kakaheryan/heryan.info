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
          <ul className="space-y-3 mb-10">
            <h3 className="text-pink-600">Course</h3>
            {courseArray.map((course, index) => (
              <>
                <li className="border-l-2 border-pink-700 px-2">
                  <h4 className="text-blue-400">{course.title}</h4>
                  <div fade-side={4 + index}>
                    <div className="text-xs text-gray-500 dark:text-gray-300">
                      {course.selesai}(
                      <span className="text-yellow-500">graduated</span>)
                    </div>
                    <div className="mt-0.5">
                      <span className="font-bold text-xs">
                        {course.lembaga}
                      </span>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
          <ul className="education block space-y-3 mb-10">
            <h3 className="text-red-600">Education</h3>
            <li className="border-l-2 border-red-700 px-2">
              <h4 className="text-blue-400">Junior High School</h4>
              <span className="text-xs">June 2009 - juli 2011 </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const courseArray = [
  {
    title:
      "Belajar cara menerapkan SEO pada website untuk Menjadi spesialis pemasaran",
    selesai: "Senin, 6 September 2021",
    lembaga: "Pakar",
    rating: "7.5",
  },
  {
    title:
      "Membuat dan memasarkan konten kreatif Digital untuk menjadi content creator",
    selesai: "Senin, 25 Agustus 2021",
    lembaga: "Skill Academy By Ruangguru",
    rating: "7.5",
  },
  {
    title:
      "Membangun Website dengan Wordpress dan HTML bagi pengembang Internet",
    selesai: "Senin, 3 oktober 2021",
    lembaga: "International Design School",
    rating: "7.0",
  },
];
