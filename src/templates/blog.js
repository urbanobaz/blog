import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (
      fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h4 style={{margin: '0'}}>{props.data.markdownRemark.frontmatter.title}</h4>
      <small>{props.data.markdownRemark.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} style={{marginTop: '2rem'}}></div>
      <Link to="/blog">Go Back</Link>
    </Layout>
  )
}

export default Blog;