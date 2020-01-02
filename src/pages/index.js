import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello 你好</h1>
        <p>I'm <strong>Urbano</strong> from Miami, FL. Working on creating this space so I can talk about some of my experiences with #100DaysofGatsby and web development/programming in general. Obviously it's a work in progress but I'm excited to showcase some of the improvements. I'm also trying to learn Chinese and get more consistent with yoga and meditation. I read books for fun which wasn't always the case. So I would love to hear from you if you want to help me practice my Mandarin or love yoga, mindfulness, meditation, etc.</p>
        <p>Follow me on <a href="https://twitter.com/ubaz_3">Twitter</a></p>
      </Layout>
    </div>
  )
}

export default IndexPage;