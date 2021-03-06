const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions
    if( node.internal.type === 'MarkdownRemark' ) {
        var slug = createFilePath({
            node,
            getNode,
            basePath: 'posts'
        })
    }
    
    createNodeField({
        node,
        name: 'slug',
        value: `/posts${slug}`
    })
}

exports.createPages = () => ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
            
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/posts/PostPage.js'),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
        })
        resolve()
    })
}
