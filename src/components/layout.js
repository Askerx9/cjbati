/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import gsap from 'gsap'

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  useEffect(() => {
    const headerSection = document.querySelector('.section-header').querySelector('.container')
    const secondSection = document.querySelector('.main').children[1]
    const tl = gsap.timeline()

    tl.set([headerSection.children, secondSection], {alpha: 0})
    tl.to([headerSection.children, secondSection], {
      alpha: 1,
      stagger: .3,
      delay: 1,
      duration: 1
    })
  })



  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="main">{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
