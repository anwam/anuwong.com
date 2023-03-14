import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
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
      <ol className="flex flex-col gap-5 my-5 list-none">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tags = post.frontmatter.tags

          return (
            <li
              className="w-full max-w-2xl p-5 mx-auto transition-transform rounded-xl bg-base-200 hover:cursor-pointer active:scale-95"
              key={post.fields.slug}
            >
              <Link to={post.fields.slug} itemProp="url">
                <article
                  className="prose"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className="flex flex-col gap-3">
                    <section>
                      <h2 className="m-0 mb-5">
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <p
                        className=""
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                      <small className="">{post.frontmatter.date}</small>
                      <Tags className="mt-2" tags={tags} />
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
export const Head = () => <Seo title="Blogs" />

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
          tags
        }
      }
    }
  }
`
