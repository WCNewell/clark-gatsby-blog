import React from 'react'
// import Link from 'gatsby-link'

const PostListing = ({ post }) =>
    <article>
        <h2>{ post.frontmatter.title }</h2>
        <span>{ post.frontmatter.date }</span>
        <div><br></br></div>
        <p>
            { post.excerpt }
        </p>


        {/* <div dangerouslySetInnerHTML={{
            __html: post.html
        }} /> */}
    </article>

export default PostListing
