import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { RiProjectorLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <BsFillBookmarkPlusFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <RiProjectorLine/>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <TbMessage />
      </a>
    </nav>
  );
};
