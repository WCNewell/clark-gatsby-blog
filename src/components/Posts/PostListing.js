import React from 'react'
// import Link from 'gatsby-link'

const PostListing = ({ post }) =>
    <article>
        <h1>{ post.frontmatter.title }</h1>
        <h3>{ post.frontmatter.date }</h3>
    </article>

export default PostListing
