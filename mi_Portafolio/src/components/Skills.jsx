import React, { useEffect, useState } from "react";

import imgSkill from "../assets/perfil.png";

import "../components/skills.css";

export default function Skills({ className }) {
  const [filledCss, setFilledCss] = useState(0);
  const [filledHtml, setFilledHtml] = useState(0);
  const [filledJs, setFilledJs] = useState(0);
  const [filledRc, setFilledRc] = useState(0);
  const [filledPsql, setFilledPsql] = useState(0);

  const [loading, isLoading] = useState(false);

  useEffect(() => {
    if (filledCss < 100 && loading) {
      setTimeout(() => setFilledCss((prev) => (prev = +70)), 50);
    }
  }, [filledCss, loading]);

  useEffect(() => {
    if (filledHtml < 100 && loading) {
      setTimeout(() => setFilledHtml((prev) => (prev = +75)), 50);
    }
  }, [filledHtml, loading]);

  useEffect(() => {
    if (filledJs < 100 && loading) {
      setTimeout(() => setFilledJs((prev) => (prev = +78)), 50);
    }
  }, [filledJs, loading]);

  useEffect(() => {
    if (filledRc < 100 && loading) {
      setTimeout(() => setFilledRc((prev) => (prev = +75)), 50);
    }
  }, [filledRc, loading]);

  useEffect(() => {
    if (filledPsql < 100 && loading) {
      setTimeout(() => setFilledPsql((prev) => (prev = +50)), 50);
    }
  }, [filledPsql, loading]);

  return (
    <>
      <div id="skills" className={className}>
        <h1 className="titleSkills"> Skills</h1>
        <section className="sectionSkills">
          <div className="ContentImagDesc">
            <div className="imagePerfil">
              <h1 className="sectionAboutMe"> About Me</h1>
              <img src={imgSkill} alt="" />
            </div>

            <div className="box">
              <div className="descriptioSkill">
                <p>
                  Apasionado desarrollador Junior Full Stack con una orientación
                  en la creación de aplicaciones y páginas web responsivas.
                  Experiencia con las tecnologías más relevantes en el
                  desarrollo front-end y Back-end: HTML, CSS, JavaScript y React
                  Vite, consumo APIs, Redux,Express y PostgreSQL.
                </p>
              </div>

              <div className="skills">
                <div className="skillBack"></div>
                <div className="skillfont"></div>
                <div className="cenSkills">
                  <div className="css">
                    <div
                      style={{
                        backgroundColor: "orange",
                        width: `${filledCss}%`,
                        transition: "width 0.5s",
                      }}
                    ></div>
                    <h1>CSS 70%</h1>
                  </div>

                  <br />
                  <div className="html">
                    <div
                      style={{
                        backgroundColor: "orange",
                        width: `${filledHtml}%`,
                        transition: "width 0.5s",
                      }}
                    ></div>
                    <h1>HTML 75%</h1>
                  </div>
                  <br />
                  <div className="jc">
                    <div
                      style={{
                        backgroundColor: "orange",
                        width: `${filledJs}%`,
                        transition: "width 0.5s",
                      }}
                    ></div>
                    <h1>JAVASCRIPT 78%</h1>
                  </div>
                  <br />
                  <div className="rct">
                    <div
                      style={{
                        backgroundColor: "orange",
                        width: `${filledRc}%`,
                        transition: "width 0.5s",
                      }}
                    ></div>
                    <h1>REACT 75%</h1>
                  </div>
                  <br />
                  <div className="psql">
                    <div
                      style={{
                        backgroundColor: "orange",
                        width: `${filledPsql}%`,
                        transition: "width 0.5s",
                      }}
                    ></div>
                    <h1>POTSGRESQL 50%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="listSk">
            <li>
              <h1>+1</h1>
              <p>Años Experiencia</p>
            </li>
            <li>
              <h1>+8</h1>
              <p>Proyectos Completados</p>
            </li>
            <li>
              <h1>+2</h1>
              <p>Clientes Felices</p>
            </li>

            <li className="btnContac">
              <button
                className="linkContac"
                onClick={() => {
                  isLoading(true);
                }}
              >
                {" "}
                <h1>Start</h1>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
