import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SpaceManImage from '../components/spaceManImage'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Howdy people!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.description}</p>
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
  }
`
