import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Sanket Yadav
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100004289590524">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_sanky_987/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sanket-yadav-a05062183/">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sanket Yadav. All rights reserved.</small>
      </div>
    </footer>
  );
};
