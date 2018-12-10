import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SpaceManImage from '../components/spaceManImage'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <Layout>
      <h1>Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={ node.id } post={ node } />
      ))}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <SpaceManImage />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`
