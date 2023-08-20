import * as React from "react"
import { Link } from "gatsby"
import {
  UserCircleIcon,
  ArrowTopRightOnSquareIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <h1 className="m-0 font-bold">{title}</h1>
  } else {
    header = (
      <span className="m-0 font-bold" to="/">
        {title}
      </span>
    )
  }

  return (
    <div className="grid h-full grid-flow-row grid-cols-12 gap-2 mx-auto auto-rows-min md:gap-5">
      <header className="container sticky top-0 z-50 h-auto col-span-12 mx-auto mt-0 rounded-none shadow-lg md:top-5 md:mt-5 navbar md:rounded-xl backdrop-blur-sm">
        <Link to="/" className="gap-2 ml-2 md:gap-5 md:ml-5 navbar-start">
          <StaticImage
            className="w-10 h-10 rounded-full"
            layout="fixed"
            formats={["auto", "webp"]}
            src="../images/profile-pic.jpeg"
            width={40}
            height={40}
            quality={80}
            alt="Profile picture"
          />
          <div className="hidden text-primary sm:block">{header}</div>
        </Link>
        <div className="navbar-end">
          {/* dropdown */}
          <details className="z-10 dropdown dropdown-end">
            <summary className="btn rounded-box md:hidden hover:bg-secondary hover:shadow-lg hover:text-secondary-content hover:shadow-secondary/50">
              <Bars3BottomRightIcon className="w-6 h-6" />
            </summary>
            <ul
              className={`relative gap-2 p-2 mt-1 shadow top-full w-fit rounded-box bg-base-100 dropdown-content menu menu-sm`}
            >
              <li className="border border-secondary rounded-box hover:bg-secondary bg-gray-50">
                <Link to="/about" partiallyActive>
                  <UserCircleIcon className="w-6 h-6" />
                  About
                </Link>
              </li>
              <li className="border border-primary rounded-box bg-gray-50">
                <a href="https://github.com/anwam">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Github
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </details>
          <ul className="items-center hidden gap-2 font-bold bg-transparent md:flex md:flex-row menu menu-normal menu-horizontal">
            <li className="border border-secondary rounded-box bg-gray-50/75">
              <Link to="/about" partiallyActive>
                <UserCircleIcon className="w-6 h-6" />
                About
              </Link>
            </li>
            <li className="border border-primary rounded-box bg-gray-50/75">
              <a href="https://github.com/anwam">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
            </li>
          </ul>
        </div>
      </header>
      <aside className="z-10 flex flex-col items-center self-start justify-center h-auto col-span-12 gap-2 md:sticky md:col-span-2 top-4 md:gap-5">
        {/* <div className="w-full p-2 rounded-lg bg-base-300 h-72 animate-pulse">
          Advertisement
        </div>
        <div className="w-full p-2 rounded-lg bg-base-300 h-72 animate-pulse">
          Advertisement
        </div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div> */}
      </aside>
      <main className="container h-full col-span-12 mx-auto md:col-span-8">
        {children}
      </main>
      <aside className="z-10 flex flex-col items-center self-start justify-center h-auto col-span-12 gap-2 md:sticky md:col-span-2 top-4 md:gap-5">
        {/* <div className="w-full p-2 rounded-lg bg-base-300 h-72 animate-pulse">
          Advertisement
        </div>
        <div className="w-full p-2 rounded-lg bg-base-300 h-72 animate-pulse">
          Advertisement
        </div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div>
        <div className="p-2 rounded-lg bg-base-300">Ads</div> */}
      </aside>
      <footer className="container sticky bottom-0 z-50 h-auto col-span-12 p-2 mx-auto md:bottom-5 md:mb-5 backdrop-blur-sm md:rounded-xl">
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col items-center justify-center px-2 py-2 text-xs rounded-lg bg-base-100 md:px-5">
            <div className="flex flex-row">
              <p>
                © {new Date().getFullYear()}, Built with{" "}
                <span className="text-red-600">❤️</span> and
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby.js</a>
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                Background Photo by{" "}
                <a
                  className="text-blue-500"
                  href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Pawel Czerwinski
                </a>{" "}
                on{" "}
                <a
                  className="text-blue-500"
                  href="https://unsplash.com/photos/hR545CzxZxk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
