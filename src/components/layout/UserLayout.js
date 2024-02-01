import React, { Children } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideMenu from "../side-Menu/SideMenu";

const UserLayout = ({ Children }) => {
  return (
    <div>
      <Header />

      <SideMenu />

      <main style={{ minHeight: "70vh" }}>{Children}</main>

      <Footer />
    </div>
  );
};

export default UserLayout;
