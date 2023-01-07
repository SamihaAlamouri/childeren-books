import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navivationUl,
  navivationLi,
  navLinkText, 
  siteTitle,
  topNavigation
} from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <header className={siteTitle}><h1>{data.site.siteMetadata.title}</h1></header>
      <nav className={topNavigation}>
        <ul className={navivationUl}>
          <li className={navivationLi}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navivationLi}>
            <Link to="/books" className={navLinkText}>
              Books
            </Link>
          </li>
          <li className={navivationLi}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout