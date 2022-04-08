/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./main.css"
import "./css/bootstrap.min.css"
import "./css/fontawesome.min.css"
import "./css/all.min.css"
import logo from "../images/IICAcademy 2.png"
import Sextant from "../images/sextant 1.png"
const Layout = ({ children }) => {
  

  return (
    <>
      
      <div>
        <header/>
        <main>{children}</main>
        <footer className="row bg_footer" id="contactUs">
          <div className="col-12 mt-4">
            <div className="px-4 py-1 padding_0">
              <a className="navbar-brand  p-2" href="/">
                  <img src={logo} alt={"IIC logo"}/>
                </a>
                
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-2">
            <div className="intro py-4 m-auto">
              <img className="m-auto" src={Sextant} alt={""} />
            </div>
          </div>
          <div className="col-12 col-sm-8 my-2">

            <p className="intro_para pb-4">
              Do you have questions?<br/>
              Email Us
            </p>
            <div className="row mb-5">
              <div className="col-12 col-md-6 mb-4">
                <p className="m-0 intro_para font-weight-bold">General information</p>
                <p className="m-0 intro_para font-weight-normal">E-mail: <a href="mailto:nauticalcartographer@iicacademy.com" className="white_text homenav font-weight-light">coordinator@iicacademy.com </a>
                </p>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <p className="m-0 intro_para font-weight-bold">For job opportunities of a career with us</p>
                <p className="m-0 intro_para font-weight-normal">E-mail: <a href="mailto:nauticalcartographer@iicacademy.com" className="white_text homenav font-weight-light">careers@iicacademy.com </a>
                </p>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <p className="m-0 intro_para font-weight-bold">For general questions related to IIC Academy</p>
                <p className="m-0 intro_para font-weight-normal">E-mail: <a href="mailto:nauticalcartographer@iicacademy.com" className="white_text homenav font-weight-light">info@iicacademy.com </a>
                </p>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <p className="m-0 intro_para font-weight-bold">For questions related to this website</p>
                <p className="m-0 intro_para font-weight-normal">E-mail: <a href="mailto:nauticalcartographer@iicacademy.com" className="white_text homenav font-weight-light">webmaster@iictechnologies.com </a>
                </p>
              </div>
            </div>
          </div>
          
          <section className="col-12 height_footer m-3">
          <div className="footer_copyright px-4 py-4">
            <p className="m-0 p-0 white_text homenav">© Copyright 2021 by <a href="https://www.iictechnologies.com/" target="_blank" rel="noreferrer" className="white_text homenav">IIC TECHNOLOGIES.</a><br/> All Rights Reserved.</p>
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
