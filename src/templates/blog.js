import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}) {
      title
      slug
      publishedDate (formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       console.log(node)
  //       // const alt = node.data.target.fields.title['en-us'];
  //       // const url = node.data.target.fields.file['en-us'].url;
  //       // return <img alt={alt} src={url} />
  //     } 
  //   }
  // }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <small>{props.data.contentfulBlogPost.publishedDate}</small>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
      <Link to="/blog/">Go Back</Link>
    </Layout>
  );
};

export default Blog;
