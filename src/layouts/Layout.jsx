// src/components/Layout/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
  
  return (
    <div className='flex h-dvh overflow-hidden'>
      <Navbar  />
      <main
        id="scroll-container"           
        className='flex-1 bg-white overflow-y-auto min-w-0 scroll-container'
      >
        {children}
      </main>
    </div>
  );
};


export default Layout;
