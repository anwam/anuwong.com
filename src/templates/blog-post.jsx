import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Tags from "../components/tags"
import Seo from "../components/seo"
import Layout from "../components/layout"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="w-full p-5 mx-auto my-5 rounded-xl bg-base-100"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="mx-auto prose md:p-5 md:bg-gray-50 md:rounded-xl prose-headings:text-primary">
          {post.frontmatter.preview && (
            <div className="mb-5">
              <GatsbyImage
                image={getImage(post.frontmatter.preview)}
                alt={post.frontmatter.description}
              />
            </div>
          )}
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className="px-4 py-2 rounded-lg bg-secondary text-secondary-content">
              {post.frontmatter.date}
            </p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          {post?.frontmatter?.tags && <Tags tags={post.frontmatter.tags} />}
        </div>
      </article>
      <nav className="my-5">
        <ul className="flex flex-wrap justify-between p-2 list-none">
          <li>
            {previous && (
              <Link
                className="gap-2 btn btn-secondary btn-outline text-secondary-content"
                to={previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className="gap-2 btn btn-secondary btn-outline text-secondary-content"
                to={next.fields.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        preview {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
    }
    previous: markdownRemark(
      id: { eq: $previousPostId }
      frontmatter: { draft: { ne: true } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }
      frontmatter: { draft: { ne: true } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
