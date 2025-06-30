import React from "react";

import portafolio from "../assets/portafolio.png";
import choping from "../assets/choping.png";
import targetWeather from "../assets/targetWeather.png";
import form from "../assets/form.png";
import pokedez from "../assets/pokedez.png";
import riquiMorty from "../assets/riquiMorty.png";

import "./proyects.css";

const proyects = [
  {
    id: 1,
    name: "Portafolio",
    tecnologies: "HTML, CSS",
    Image: portafolio,
    gitHub: "https://github.com/J0joa",
  },
  {
    id: 2,
    name: "Choping",
    tecnologies: "HTML, CSSS, JAVASCRIPT",
    Image: choping,
    gitHub: "https://github.com/J0joa",
  },
  {
    id: 3,
    name: "Target Weather",
    tecnologies: "HTML, CSS, javasCript, REACT",
    Image: targetWeather,
    gitHub: "https://github.com/J0joa",
  },
  {
    id: 4,
    name: "Form",
    tecnologies: "HTML, CSSS, JAVASCRIPT, REACT, REDUX",
    Image: form,
    gitHub: "https://github.com/J0joa",
  },
  {
    id: 5,
    name: "Rick And Morty",
    tecnologies: "HTML, CSS, javasCript, REACT",
    Image: riquiMorty,
    gitHub: "https://github.com/J0joa",
  },
  {
    id: 6,
    name: "Pokedez",
    tecnologies: "HTML, CSSS, JAVASCRIPT, REACT, REDUX",
    Image: pokedez,
    gitHub: "https://github.com/J0joa",
  },
];

const Proyects = ({ className }) => {
  return (
    <>
      <div id="proyects" className={className}>
        <h1 className="titleProyect">Proyects</h1>
        <section className="proyects">
          {proyects.map((proyect) => (
            <div key={proyect.id} className="proyect"  style={{backgroundImage:` url(${proyect.Image})`, backgroundSize:"cover"}}>
              <h2>{proyect.name}</h2>
              <h3>{proyect.tecnologies}</h3>
              <button className="btnProyect"><span> <a href="https://github.com/J0joa?tab=repositories"><i class='bxr  bx-git-repo-forked'  ></i></a></span></button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Proyects;
