import React from "react";

import "./contacMe.css";

function ContacMe({ className }) {
  return (
    <>
      <div id="contact" className={className}>
        <h1 className="titleContacMe">Contac Me</h1>
        <section className="ContacMe">
          <div className="aboutMec">
            <h2>Hi!, Nece to meet you </h2>

            <p>
              Let me show you my achievement in web development, I would be
              happy to show you my services.
            </p>

            <div>
              <li>
                <span>
                  <i class="bxr  bx-mail-open"></i> 4j0joa@gmail.com
                </span>
              </li>
              <li>
                <span>
                  <i class="bxr  bx-phone-ring"></i>+573115219258
                </span>
              </li>
              <li>
                <span>
                  <i class="bxr  bx-globe-oceania"></i> Colombia, neiva city
                </span>
              </li>
            </div>
          </div>
          <div className="form">
            <div className="name">
              <label htmlFor="name"> Your Name</label>
              <input type="text" placeholder="Write your name" />
            </div>
            <div className="email">
              <label htmlFor="name"> Your email</label>
              <input type="text" placeholder="Write your email" />
            </div>

            <div className="message">
              <label htmlFor="message">Your message</label>
              <textarea
                name=""
                id=""
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btnContac">
              {" "}
              <h4>SEND</h4>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContacMe;
