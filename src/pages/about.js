import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About Me</h1>
        <p>I am currently learning everything to do with web development.</p>
      </div>
    </Layout>
  )
}

export default AboutPage;