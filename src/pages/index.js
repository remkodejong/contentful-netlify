import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
        body {
          childMarkdownRemark {
            excerpt
          }
        }
        createdAt(formatString: "DD MMMM, YYYY")
        slug
        id
      }
    }
  }
  # allMarkdownRemark(sort: {
  #   fields: [frontmatter___date],
  #   order: DESC
  # }) {
  #   edges {
  #     node {
  #       id
  #       frontmatter {
  #         title
  #         date(formatString:"DD MMM YYYY")
  #       }
  #       fields {
  #         slug
  #       }
  #       html
  #       excerpt
  #     }
  #   }
  # }
}
`