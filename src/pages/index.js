import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="bg_banner_sec_2">
    
    <section className="container">

      <div className="row">
        <div className="row">
          <div className="navbar-brand logo_className" >
            <StaticImage src="../images/IICAcademy 2.png" className="" alt={"IIC Logo"} layout="constrained"/>
          </div>
        </div>
        <div className="row p-0">
          <div className="col-12 col-md-6 py-0 px-4">
            <div className="intro py-5 my-0 my-md-5 margin_0">
              <h1 className="intro_heading py-2">
               International Centre of Geospatial sciences
              </h1>
              <p className="intro_para pb-2">
                IIC Academy is the training arm of IIC Technologies, which brings together over two decades of global expertise in geospatial projects and services.
              </p>
    
            </div>
          </div>
          <div className="col-12 col-md-6 py-0 px-4">
            <div className="intro py-0 py-md-5 mt-0 mb-5 my-md-5">
              <StaticImage className="mx-auto py-2" src="../images/compass 2.png" alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <section className="row mb-5 pb-5">
      <div className="container">
        <div className="row pt-4 justify-content-center">
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="py-4">
              <h2 className="mb-3 black_text font-weight-bold text-center">Current Programs</h2>
              <p className="black_text text-center"> The Academy’s industry-focused programs are flexible, customizable and range 
              from short term fundamentals to long term advanced levels. Using best practices, the academy empowers its learners to be industry-ready and succeed in the workplace. </p>
            </div>
          </div>
        </div>
        <div className="row py-4 justify-content-between">
          <div className="col-12 col-lg-5 d-flex align-items-center bg_navy rounded mb-4">
            <div className="px-4 py-5 col-12">
              <div className="mb-4 w-100 row-4" style={{height: '350px'}}>
                <StaticImage className="h-100 w-100 mx-auto py-2 " src="../images/Vero Boat_S5 1.png" alt={""} style={{objectFit: 'cover'}}/>
              </div>
              <h2 className="mb-3 white_text ">S-5B Hydrographic Surveying Program </h2>
              <p className="white_text pr-2">
               The purpose of the IIC S-8 Category B program is to prepare candidates with the theoretical and practical competencies necessary to effectively carry out the planning and implementation of nautical ...
              </p>
              <div className="mt-4 mb-2"><a href="../iicacademy/S5BProgram.html" target="_blank" rel="noreferrer" className="redbtn_see">Learn More</a></div>

            </div>
            <div className="position-absolute bg_lightblue px-3 py-2 " style={{right:"0",  top:"300px"}}><h4 className="white_text m-0">Commencing Sept. 6, 2022</h4></div>
          </div> 
          <div className="col-12 col-lg-5 d-flex align-items-center bg_navy rounded mb-4">
            <div className="px-4 py-5 col-12">
              <div className="mb-4 w-100 row-4 " style={{height: '350px'}}>
                <StaticImage className="h-100 w-100 mx-auto py-2 " src="../images/Survey_s8.png" alt={""} style={{objectFit: 'cover'}}/>
              </div>
              <h2 className="mb-3 white_text">S-8B Marine Geospatial Information Program</h2>
              <p className="white_text pr-2">
                The purpose of the IIC S-8 Category B program is to prepare candidates with the theoretical and practical competencies necessary to effectively carry out the planning and implementation of nautical ...
              </p>
              <div className="mt-4 mb-2"><a href="../S8B/S8BProgram.html" target="_blank" rel="noreferrer" className="redbtn_see">Learn More</a></div>
            </div>
            <div className="position-absolute bg_lightblue px-3 py-2 " style={{right:"0",  top:"300px"}}><h4 className="white_text m-0">Commencing Sept. 12, 2022</h4></div>
          </div>    
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
