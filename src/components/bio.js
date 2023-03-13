/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
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
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col justify-center max-w-2xl p-5 mx-auto my-5 rounded-xl bg-base-300">
      {author?.name && (
        <p className="p-0 m-0">
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a
            className="underline text-primary"
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            meet me at Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
