/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./main.css"
import "./css/bootstrap.min.css"
import "./css/fontawesome.min.css"
import "./css/all.min.css"
import "./css/loader.css"

import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/iicacademy.jpg"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery_S8B {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="row bg_footer" id="contactUs">
          <div className="col-12 col-sm-4 mt-4">
          <div className="px-4 py-1 padding_0">
            <a className="navbar-brand mb-3 bg-white p-2" href="/">
                <img src={logo} alt={"IIC logo"}/>
              </a>
              <p className="intro_para pb-2">
              Do you have questions? Drop us a line at:
              <a href="mailto:nauticalcartographer@iicacademy.com" className="white_text homenav">nauticalcartographer@iicacademy.com </a>
            </p>
          </div>
          </div>
          <div className="col-12 col-sm-4 mt-5">
            <h3 className="white_text m-0 pb-2 px-5 padding_0">Explore</h3>
            <nav className="navbar px-5 padding_0">
              
              <ul className="navbar-nav contactus">
                <li className="nav-item">
                  <a className="nav-link white_text homenav" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white_text homenav" href="./program_breakdown" target="_blank" rel="noreferrer">Program Schedule</a>
                </li>
              </ul> 
            </nav>
          </div>
          <div className="col-12 col-sm-4 mt-5">
            <h3 className="white_text m-0 pb-2">Contact us</h3>
            <form id="contactForm" className="py-3 pr-5 mr-4">
              <div className="form-group">
                <label htmlFor="contactEmail" className="white_text">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter email" id="contactEmail"/>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage" className="white_text">Your Message</label>
                <textarea className="form-control" id="contactMessage"></textarea>
              </div>  
              <button type="button" className="redbtn" /*onClick={sendMessage}*/>Send Message</button>
            </form>
          </div>
          <section className="col-12 height_footer">
          <div className="footer_copyright px-4 py-4">
            <p className="m-0 p-0 white_text homenav">© Copyright 2021 by <a href="https://www.iictechnologies.com/" target="_blank" rel="noreferrer" className="white_text homenav">IIC TECHNOLOGIES.</a> All Rights Reserved.</p>
          </div>
          </section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
