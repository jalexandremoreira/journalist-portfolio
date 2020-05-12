import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" id="navbar-style">
      <Navbar.Brand href="/" id="nav-brand">
        John Doe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbar-links" href="/portfolio">
            Published Articles
          </Nav.Link>
          <Nav.Link className="navbar-links" href="/blog">
            Updates & News
          </Nav.Link>
          <Nav.Link className="navbar-links" href="/about">
            About
          </Nav.Link>
          {/* <Nav.Link className="navbar-links" href="/contact">
            Contact
          </Nav.Link> */}
        </Nav>

        <Nav>
          <span>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="fab fa-twitter nostyle navbar-custom-links"
            />
            <a
              style={{ marginLeft: "1em" }}
              href="https://www.linkedin.com/"
              target="_blank"
              className="fab fa-linkedin-in nostyle navbar-custom-links"
            />
          </span>

          {/* <span>
            <Nav.Link
              className="navbar-links"
              href="https://www.linkedin.com/in/rubendieleman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </Nav.Link>
            <Nav.Link
              className="navbar-links"
              href="https://twitter.com/RBNDLM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </Nav.Link>
          </span> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
