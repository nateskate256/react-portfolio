import React from "react";

function Navbar(props) {
  return (
    <header class="main-header">
      <a href="https://shipp-portfolio.netlify.app/">
      <img 
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/017b7213-1eb1-4d62-a026-2ddfebce2d73/0baa77fd-c629-4961-8516-2a59d21861d3_rwc_0x0x892x273x4096.png?h=bbfd890e16a05034dfd060ce6b500417"
        alt="header"/>
      </a>
      <nav>
        <a href="#About-Me">About Me</a>
        <a href="#Contact">Contact</a>
        <a href="#Work">Work</a>
        <a href="https://www.linkedin.com/in/shippnate/">LinkedIn</a>
        <a href="https://www.github.com/nateskate256">Github</a>
        <a href="assets/Shipp_resume.pdf" download>Resume</a>
      </nav>
    </header>
  );
}
export default Navbar;

