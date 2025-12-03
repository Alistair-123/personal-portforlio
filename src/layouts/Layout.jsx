// src/components/Layout/Layout.jsx
import React,{ useRef } from "react";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <div className='flex h-dvh overflow-hidden'>
      <Navbar scrollContainerRef={scrollRef} />
      <main
        ref={scrollRef}
        className='flex-1 bg-white overflow-y-auto min-w-0 scroll-container'
      >
        {children}
      </main>
    </div>
  );
};


export default Layout;
