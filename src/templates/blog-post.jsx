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
        className="grid grid-flow-row grid-cols-12 gap-2 p-2 mx-auto prose-sm prose md:gap-5 prose-p:text-base prose-headings:text-lg md:prose-headings:text-xl lg:prose-headings:text-2xl lg:prose-p:text-xl prose-headings:text-primary md:prose-base max-w-none"
        itemType="http://schema.org/Article"
      >
        <div className="col-span-12 md:shadow-md md:p-5 md:bg-gray-50 md:rounded-xl">
          {post.frontmatter.preview && (
            <GatsbyImage
              image={getImage(post.frontmatter.preview)}
              alt={post.frontmatter.description}
              className="rounded-xl"
              objectFit="cover"
            />
          )}
        </div>

        <div className="col-span-12 md:shadow-md md:p-5 md:bg-gray-50 md:rounded-xl">
          <header>
            <h1>{post.frontmatter.title}</h1>
            <span className="text-secondary">{post.frontmatter.date}</span>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          {post?.frontmatter?.tags !== "" ? (
            <Tags tags={post.frontmatter.tags} />
          ) : null}
        </div>
      </article>
      <nav className="my-2 md:my-5">
        <ul className="flex flex-wrap justify-between gap-2 list-none md:gap-5">
          <li>
            {previous && (
              <Link
                className="text-xs btn btn-secondary btn-sm btn-outline text-secondary-content"
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
                className="text-xs btn btn-secondary btn-sm btn-outline text-secondary-content"
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
      image={post.frontmatter.preview?.publicURL}
      slug={post.fields.slug}
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        preview {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
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
