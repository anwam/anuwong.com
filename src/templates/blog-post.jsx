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
        className="w-full mx-auto my-5 prose lg:prose-lg"
        itemScope
        itemType="http://schema.org/Article"
      >
        {post.frontmatter.preview && (
          <div className="mb-5">
            <GatsbyImage
              image={getImage(post.frontmatter.preview)}
              alt={post.frontmatter.description}
            />
          </div>
        )}
        <header className="bg-base-200 p-5 rounded-lg">
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post?.frontmatter?.tags && <Tags tags={post.frontmatter.tags} />}
      </article>
      <nav className="my-5">
        <ul className="flex flex-wrap justify-between p-0 list-none">
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
