import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogoSnapchat } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-slice/systemSlice";
import { logoutAction } from "../../pages/login/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShow = () => dispatch(setShowSideMenu(true));
  const { user } = useSelector((state) => state.admin);

  const handleOnLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <div>
            {user._id && (
              <GiHamburgerMenu
                className="fs-2 text-light"
                onClick={handleShow}
              />
            )}
            <Navbar.Brand href="/">
              <IoLogoSnapchat className="fs-1 text-warning" />
              ShopIt{" "}
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-4">
              {user._id ? (
                <Link onClick={handleOnLogout} className="nav-link" to="/">
                  Logout
                </Link>
              ) : (
                <>
                  {" "}
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
