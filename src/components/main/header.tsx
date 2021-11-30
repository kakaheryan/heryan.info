import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [onTop, setOnTop] = React.useState(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const arrOfRoute = router.route.split("/");
  const baseRoute = "/" + arrOfRoute[1];

  return (
    <>
      <header
        className={clsx(
          "bg-white dark:bg-darknight",
          "transition-shadow sticky top-0 z-50",
          "justify-center transition-opacity",
          !onTop && "shadow-md"
        )}
      >
        <div className="layout">
          <nav className="flex items-center justify-between py-4">
            <ul
              className={clsx(
                "flex items-center justify-between space-x-0.5",
                "font-bold antialiased md:space-x-2 md:text-lg"
              )}
            >
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>
                    <a
                      className={clsx(
                        "p-1 bg-clip-text text-transparent",
                        "bg-gradient-to-r from-primary-500 via-primary-200 to-primary-300",
                        href === baseRoute && "textglow"
                      )}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex bg-gray-200 dark:bg-gray-700 w-9 h-5 my-auto rounded-full focus:outline-none"
            >
              <span className="text-white bg-gray-400 dark:bg-green-600 pl-0.5 pt-0.5 ml-0.5  w-4 h-4 my-auto rounded-full transition dark:dot ">
                {theme === "dark" ? (
                  <FiSun className="" size={12} />
                ) : (
                  <FiMoon size={12} className="text-white" />
                )}
              </span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/profile", label: "Profile" },
  { href: "/project", label: "Projects" },
];
