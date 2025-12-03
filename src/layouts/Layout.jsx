// src/components/Layout/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
