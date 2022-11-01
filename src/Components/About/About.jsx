import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { GiAchievement } from "react-icons/gi";
import {BsFillPatchCheckFill} from "react-icons/bs"
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_cotent">
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>20+ Completed </small>
              </article>
              <article className="about_card">
                <GiAchievement className="about_icon" />
                <h5>Experience</h5>
                <small>1.4 Years </small>
              </article>
            </div>
            <p>
              <ul>
                <li> <BsFillPatchCheckFill/> &nbsp; 
                  I'm a passionate Developer, with strong administrative and
                  communication skills, good attention to detail and the ability to write efficient code using MERN Stack.
                </li>
                <li> <BsFillPatchCheckFill/> &nbsp; 
                  I had built a number of web applications and
                  4 major projects. Also contributed in more than 3 team project enhanced my team-collabatration skills and adaptibility as well. After months of rigorous
                  training, here I am looking for an opportunity as a full stack web developer.
                </li>
              </ul>
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
