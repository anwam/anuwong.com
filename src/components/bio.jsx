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
            workAt
            hobbies
          }
          description
          social {
            twitter
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const description = data.site.siteMetadata?.description

  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="text-lg font-bold">About me</h1>
      <div className="p-4 shadow bg-base-100 rounded-box">
        {author?.name && (
          <p className="p-0 m-0 text-primary">
            <strong>{author.name}</strong>
          </p>
        )}
        {author?.summary && (
          <p className="p-0 m-0">
            <span className="text-sm">{author.summary}</span>
          </p>
        )}
        {author?.workAt ? (
          <p className="p-0 m-0 text-sm">{author?.workAt}</p>
        ) : null}
        {description && <p className="p-0 m-0 mt-4 text-sm">{description}</p>}

        <h3 className="mt-4 font-bold text-md">Contact</h3>
        <a
          href={`https://twitter.com/${social?.twitter}`}
          className="text-sm link text-primary"
        >
          Twitter @{social?.twitter}
        </a>
        <p className="text-sm text-secondary">{social?.email}</p>
      </div>

      <h2 className="text-lg font-bold">Projects</h2>
      <div className="p-4 shadow bg-base-100 rounded-box">
        <p className="p-0 m-0 text-primary animate-pulse">Inprogress...</p>
      </div>

      <h2 className="text-lg font-bold">Hobbies</h2>
      <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3">
        {author?.hobbies &&
          author?.hobbies.map((hobby, index) => (
            <div className="p-4 shadow bg-base-100 rounded-box" key={index}>
              <p className="p-0 m-0 font-sans text-center whitespace-pre-wrap text-primary">
                {hobby.split(" ").join("\n")}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Bio
