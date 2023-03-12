import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }} className="flex flex-col gap-5">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li
              className="w-full max-w-2xl p-6 mx-auto transition-transform text-sky-100 bg-sky-900 rounded-xl hover:scale-105 hover:cursor-pointer"
              key={post.fields.slug}
            >
              <Link to={post.fields.slug} itemProp="url">
                <article itemScope itemType="http://schema.org/Article">
                  <div className="flex flex-col gap-3">
                    <header>
                      <h2 className="m-0 text-2xl">
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small className="text-sky-200">
                        {post.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        className="text-sky-200"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                </article>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
