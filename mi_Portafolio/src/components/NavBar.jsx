import React, { useState } from "react";

import "./navBarStyle.css";

const NavBar = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(visible=>!visible);
  };

  return (
    <>
      <section  className="sectionNav">
        <nav className="navElements">
          <div className="miName">
            <button onClick={toggleVisible}>
              {" "}
              <i className="bxr  bx-menu-wider"></i>{" "}
            </button>

            <h1>Octavio</h1>
          </div>

          {visible ? (
            <div className="options">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#proyects">Proyects</a>
              <a href="#contact">Contact</a>
            </div>
          ) : (
            <div className="options" style={{position:'absolute', right:'-100', display:'none'}}>
              <a href="#home">Home</a>
              <a href="#aboutMe">About Me</a>
              <a href="#services">Services</a>
              <a href="#proyects">Proyects</a>
              <a href="#contact">Contact</a>
            </div>
          )}

          {visible ? (<div className="btnContac" style={{transition:'2s ease-in-out'}}>
            <button className="linkContac">
              {" "}
              <h1>Contact Me</h1>
            </button>
          </div>):(<div className="btnContac" style={{display:"none", transition:'2s ease-in-out'}}>
            <button className="linkContac">
              {" "}
              <h1>Contact Me</h1>
            </button>
          </div>)}

          
        </nav>
      </section>
    </>
  );
};

export default NavBar;
