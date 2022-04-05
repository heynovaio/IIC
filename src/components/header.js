import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/iicacademy.jpg"
import { Navbar, Nav , NavDropdown , Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="row">

    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} className="p-2" alt={"IIC Logo"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "#D9000D"}}/>
        <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/S8B/program_breakdown"><p className="black_text m-0">Program Breakdown</p></Nav.Link>
            <Nav.Link href="/S8B"><p className="black_text m-0">Contact Us</p></Nav.Link>
            <Nav.Link href="/S8B/applyform" className="nav-item margin_web ml-0 ml-lg-5 p-0"><p className="white_text redbtn m-0">Apply Now</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
