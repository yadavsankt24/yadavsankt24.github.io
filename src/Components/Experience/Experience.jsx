import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>What Skills I Have</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon" />
                <img
                  style={{ width: "60px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt=""
                  />
                  <h4>HTML </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "70px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt=""
                  />
                  <h4>CSS3 </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt=""
                  />
                  <h4>JavaScript </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt=""
                  />
                  <h4>ReactJs </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px"}}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt=""
                  />
                  <h4>TypeScript </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt=""
                  />
                  <h4>Redux </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
                  alt=""
                  />
                  <h4>Chakra-UI </h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt=""
                  />
                  <h4>Node JS </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "70px" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt=""
                  />
                  <h4>MongoDB </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px", background: "white" }}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt=""
                  />
                  <h4>Express JS </h4>
              </div>
            </article>
            <article className="experience_details">
              <div className="logos">
              <BsFillPatchCheckFill className="experience_details-icon"
/>
                <img
                  style={{ width: "60px" }}
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt=""
                  />
                  <h4>Post man </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
