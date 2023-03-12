import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="m-0 text-xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="container max-w-5xl pt-6 mx-auto"
      data-is-root-path={isRootPath}
    >
      <header className="flex flex-row items-center gap-5 global-header">
        <StaticImage
          className="rounded-full "
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpeg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {header}
      </header>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
