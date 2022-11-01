import React from "react";
import "./Header.css";
import { CTA } from "./CTA";
import ME from "../../assets/me.png"
import { HeaderSocials } from "./HeaderSocials";



export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Sanket Yadav</h1>
        <h2 className="text-light">Full-Stack Web Developer</h2>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};
