import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Urbano 你好</h2>
        <p>Need a developer <Link to="/contact">Contact me.</Link></p>
        <p>Follow me on <a href="https://twitter.com/ubaz_3">Twitter</a></p>
      </Layout>
    </div>
  )
}

export default IndexPage;