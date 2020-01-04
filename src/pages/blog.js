import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
                <li key={edge.node.fields.slug} className={blogStyles.post}>
                  <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.post}>
                    <h2 className={blogStyles.postTitle}>{edge.node.frontmatter.title}</h2>
                    <small>{edge.node.frontmatter.date}</small> 
                  </Link>

                </li>
            );
          })}
        </ol>
      </Layout>
    </div>
  );
};

export default BlogPage;
