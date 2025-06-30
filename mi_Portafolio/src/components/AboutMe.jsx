import React from "react";

import imagePerfil from "../assets/abperfil.png";

import "../components/aboutMe.css";

export default function AboutMe({className}) {
  return (
    <>
      <div id="home" className={className}>
        <h1 className="titleAboutMe"> About Me</h1>
        <section className="aboutMe">
          <div className="imagePerfil">
            <img src={imagePerfil} alt="" />
          </div>

          <div className="i_am">
            <h1>
              I'm <span className="name"> <h1 >Luis Octavio Jojoa, </h1></span> Developer Web Full Stack
            </h1>

            <p className="descriptionPerfil">
              I am here to achieve your dreams and mine, begining our path, I am here to achieve your dreams and mine, begining our path
            </p>
          </div>

          <div className="btnContacMe">
            <button className="linkContac">
              <h1>Contact Me</h1>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
