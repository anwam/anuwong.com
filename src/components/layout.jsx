import * as React from "react"
import { Link } from "gatsby"
import {
  ArchiveBoxIcon,
  ArrowTopRightOnSquareIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid"

import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="m-0 text-base font-bold md:text-xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="m-0 text-sm font-bold md:text-base" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container max-w-5xl mx-auto" data-is-root-path={isRootPath}>
      <header className="p-5 navbar rounded-xl bg-base-300">
        <div className="gap-5 navbar-start">
          <StaticImage
            className="rounded-full"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.jpeg"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
          {header}
        </div>
        <div className="navbar-end">
          {/* dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn md:hidden">
              <Bars3BottomRightIcon className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="w-56 gap-2 p-2 bg-base-200 md:bg-transparent max-md:dropdown-content rounded-box menu menu-compact md:menu-normal md:menu-horizontal"
            >
              <li>
                <Link to="/blog" partiallyActive activeClassName="active">
                  <ArchiveBoxIcon className="w-6 h-6" />
                  Blogs
                </Link>
              </li>
              <li>
                <a
                  className="btn btn-accent text-accent-content"
                  href="https://github.com/anwam"
                >
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
          </div>
        </div>
      </header>
      <main className="px-5">{children}</main>
      <footer className="my-5">
        © {new Date().getFullYear()}, Built with{" "}
        <span className="text-red-600">❤️</span> and
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
