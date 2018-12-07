import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SpaceManImage from '../components/spaceManImage'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <Layout>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.description}</p>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <PostListing post={ node } />
      })}
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
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
        }
      }
    }
  }
`
