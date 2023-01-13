import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/cr.gif";
import img2 from "../../assets/cj.gif";
import img3 from "../../assets/ht.jpg";
import img4 from "../../assets/todo.jpg";
import img5 from "../../assets/w.gif";
import img6 from "../../assets/y.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Anthroplogie.com(E-commerce App)",
    techstack: "Tech Stack: ReactJS,Redux,Json-server,Css,NodeJs,Express JS,Mongo DB",
    github: "https://github.com/NazminS28/Anthropologie.com",
    demo: "https://frontend-ruby-chi.vercel.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Digi-Pathshala(Stydy-App) ",
    techstack: "Tech Stack: NextJs, MongoDB, ExpressJS, NodeJS. Tailwind, React Redux",

    github: "https://github.com/jyotiranjan1997/Mind-Optimiser",
    demo: "digipathshala-jyotiranjan1997.vercel.app/",
  },
  {
    id: 3,
    image: img2,
    title: "Clone of Carbs Manager(Diet App)",
    techstack: "Tech Stack: Javascript, Html, Css, Chakra-UI",

    github: "https://github.com/yadavsankt24/CarbsManager",
    demo: "https://dynamic-cocada-c6ad50.netlify.app/",
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
    id: 4,
    image: img4,
    title: "Todo Application",
    techstack: "Tech Stack: Html, Css, Javascript",

    github: "https://github.com/yadavsankt24/Todo-application",
    demo: "https://golden-naiad-ffbb32.netlify.app/",
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
