import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/cr.gif";
import img2 from "../../assets/cj.jpg";
import img3 from "../../assets/ht.jpg";
import img4 from "../../assets/todo.jpg";
import img5 from "../../assets/w.jpg";
import img6 from "../../assets/y.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Clone of Carbs Manager-Keto Diet App(Using ReactJs)",
    techstack: "Tech Stack: ReactJS,Redux,Html,Css,NodeJs,Chakra-UI",
    github: "https://github.com/NazminS28/Anthropologie.com",
    demo: "https://frontend-ruby-chi.vercel.app/",
  },
  {
    id: 2,
    image: img3,
    title: "Clone of Hindustan Times",
    techstack: "Tech Stack: ReactJS,Redux,Html,Css,NodeJs,Chakra-UI",
    github: "https://monumental-daifuku-09502d.netlify.app/",
    demo: "https://effortless-dodol-6ac997.netlify.app/",
  },
  {
    id: 3,
    image: img2,
    title: "Clone of Carbs Manager-Keto Diet App",
    techstack: "Tech Stack: Javascript, Html, Css, NodeJs, Chakra-UI",

    github: "https://github.com/yadavsankt24/CarbsManager",
    demo: "https://dynamic-cocada-c6ad50.netlify.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Todo Application",
    techstack: "Tech Stack: Html, Css, Javascript",

    github: "https://github.com/yadavsankt24/Todo-application",
    demo: "https://golden-naiad-ffbb32.netlify.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Youtube application ",
    techstack: "Tech Stack: Html, Css, Javascript",

    github: "https://github.com/yadavsankt24/Youtube",
    demo: "https://clinquant-peony-8c22fe.netlify.app/",
  },
  {
    id: 6,
    image: img6,
    title: "Weather Application",
    techstack: "Tech Stack: Html, Css, Javascript",

    github: "https://github.com/yadavsankt24/wheather-application",
    demo: "https://sensational-lebkuchen-923a1a.netlify.app/",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title,techstack, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h3>{techstack}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Source Code
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
