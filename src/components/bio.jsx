/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  BuildingOfficeIcon,
  AcademicCapIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            workAt
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="flex flex-col justify-center max-w-2xl gap-5 p-5 mx-auto my-5 prose rounded-xl bg-base-300">
      {author?.name && (
        <p className="p-0 m-0">
          <strong className="text-primary">{author.name}</strong>
          {", "}
          {author?.summary || null}
          {` `}
        </p>
      )}
      <p className="p-0 m-0">
        <CommandLineIcon className="inline w-6 h-6 mr-2 text-primary" />
        Golang, NodeJS, Typescript, ReactJS, MongoDB, MySQL
      </p>
      {author?.workAt ? (
        <p className="p-0 m-0">
          <BuildingOfficeIcon className="inline w-6 h-6 mr-2 text-primary" />
          {author?.workAt}
        </p>
      ) : null}
    </div>
  )
}

export default Bio
