// src/components/Navbar.jsx
import React from "react";
import StaggeredMenu from "./StaggeredMenu";

// These are the items that will show in the GSAP staggered menu
const menuItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

// These show up under the "Socials" section
const socialItems = [
  { label: "GitHub", link: "https://github.com/your-username" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/your-handle" },
  // add more if you want
];

export default function Navbar() {
  return (
    <StaggeredMenu
      position="right"        // slide in from the right        // makes it cover the viewport like your old navbar
      items={menuItems}
      socialItems={socialItems}
      accentColor="#5227FF"   // matches the CSS accent color
    />
  );
}
