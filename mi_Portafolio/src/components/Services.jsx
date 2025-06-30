import React from "react";

import "./services.css";

const Services = ({ className }) => {
  const allServicios = [
    {
      id: 1,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
    {
      id: 2,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
    {
      id: 3,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
    {
      id: 4,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
    {
      id: 5,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
    {
      id: 6,
      tetle: "Web Desing",
      description: "Aps responsives web ando movile",
    },
  ];

  return (
    <>
      <div id="services" className={className}>
        <h1 className="titleServices">Services </h1>
        <section className="servicios">
          {allServicios.map((service) => (
            <div key={service.id} className="service">
              {" "}
              <h3>SERVICE</h3> <h4>{service.tetle}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Services;
