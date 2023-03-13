import * as React from "react"
import { Link } from "gatsby"
import { UserIcon } from "@heroicons/react/24/solid"

import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="m-0 text-xl font-bold">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="m-0 font-bold" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container max-w-5xl mx-auto" data-is-root-path={isRootPath}>
      <header className="p-5 navbar rounded-xl bg-base-200">
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
        </div>
        <div className="navbar-center">{header}</div>
        <div className="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabIndex={0} class="btn gap-2">
              Contact me
              <UserIcon className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="https://github.com/anwam">Github</a>
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

export default Layout
