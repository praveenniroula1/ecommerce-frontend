import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-slice/systemSlice";
import { ListGroup } from "react-bootstrap";
import { RiDashboard3Fill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { SiSimplenote } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const dispatch = useDispatch();
  const { showSideMenu } = useSelector((state) => state.system);

  const handleClose = () => dispatch(setShowSideMenu(false));
  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin CMS</Offcanvas.Title>
          <hr></hr>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link to="/dashboard" onClick={handleClose} className="nav-link">
                <RiDashboard3Fill /> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/category" onClick={handleClose} className="nav-link">
                <MdCategory /> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/products" onClick={handleClose} className="nav-link">
                <MdProductionQuantityLimits /> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/" onClick={handleClose} className="nav-link">
                <FaMoneyBill /> Payment Methods
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/" onClick={handleClose} className="nav-link">
                <FaUsers /> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/" onClick={handleClose} className="nav-link">
                <SiSimplenote /> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/" onClick={handleClose} className="nav-link">
                <FaStar /> Review
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/" onClick={handleClose} className="nav-link">
                <IoSettings /> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideMenu;
