import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const year = new Date().getFullYear();


  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; {year}</p>
    </footer>
  )
}

export default Footer;
