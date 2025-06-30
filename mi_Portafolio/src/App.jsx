import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Proyects from "./components/Proyects";
import ContacMe from "./components/ContacMe";
import Footer from "./components/Footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={"bodyApp "}>
        <div>
          {" "}
        </div>

        <div className="aboutMePhater">
          {" "}
          <AboutMe />{" "}
        </div>

        <NavBar />

        <Skills className="skillPhater" />
        <Services className ="servicesPhater"/>
        <Proyects className="proyectsPhater"/>
        <ContacMe className="contacPhtaer" />

        <Footer className="compFooter"/>

      </div>

      {/* <AboutMe />
      <Services />
      <Proyects />
      <Contact /> */}
    </>
  );
}

export default App;
