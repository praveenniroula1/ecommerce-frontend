import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogoSnapchat } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <div>
            <Navbar.Brand href="/">
              <GiHamburgerMenu className="fs-2 " />{" "}
              <IoLogoSnapchat className="fs-1 text-warning" />
              ShopIt{" "}
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-4">
              <Link className="nav-link" to="/">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
