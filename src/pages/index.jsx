import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "../components/tags"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title
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
      <ol className="grid grid-flow-row grid-cols-12 gap-4 px-4 list-none md:gap-6 md:p-0">
        {posts.map((post, i) => {
          const title = post.frontmatter.title || post.fields.slug
          const subtitle = post.frontmatter.subtitle || ""
          const tags = post.frontmatter.tags

          return (
            <li
              className="col-span-12 mx-auto transition-all shadow rounded-xl hover:cursor-pointer hover:ring-4 hover:ring-red-400 md:hover:shadow-xl md:hover:scale-[1.0125] hover:z-20 bg-gray-100/75 md:bg-gray-100/75 backdrop-blur-lg"
              key={post.fields.slug}
            >
              <Link to={post.fields.slug} itemProp="url">
                <div className="grid grid-flow-row grid-cols-12">
                  {post.frontmatter.preview ? (
                    // <div className="hidden md:col-span-4 md:block bg-gray-50 rounded-tl-xl rounded-bl-xl">
                    <GatsbyImage
                      image={getImage(post.frontmatter.preview)}
                      alt={post.frontmatter.description}
                      className="col-span-12 bg-gray-100 lg:col-span-4 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl"
                      imgClassName="col-span-12 lg:col-span-4"
                      objectFit={"cover"}
                    />
                  ) : null}
                  <article
                    className="col-span-12 p-4 prose lg:col-span-8 md:p-6 prose-headings:text-base prose-p:text-sm"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div className="flex flex-col gap-3">
                      <section>
                        <h2 className="m-0 mb-4 md:mb-6 text-primary">
                          <span itemProp="headline">{title}</span>
                        </h2>
                        <p
                          className=""
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                        {subtitle && (
                          <p className="px-6 py-4 text-lg font-extrabold rounded-md shadow bg-gray-50 text-accent">
                            {subtitle}
                          </p>
                        )}
                        <small className="">{post.frontmatter.date}</small>
                        <Tags className="mt-4" tags={tags} />
                      </section>
                    </div>
                  </article>
                </div>
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
          subtitle
          description
          tags

          preview {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
