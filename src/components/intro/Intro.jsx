import { StaticImage } from "gatsby-plugin-image";
import "./intro.scss";
import React from "react";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <StaticImage
            src="INICIO-CARRO.png"
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            width={650}
            height={650}
            alt="chorizo"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>¿TRABAJAS EN APLICACIÓN?</h2>
          <h1>BESTA TU MEJOR</h1>
          <h1>ALIADO</h1>
          <h3>
            DESPREOCÚPATE DE SEGUIR RENTANDO{" "}
            <img
              src="assets/palomita.png"
              alt="palomita"
              className="palomita"
            />
          </h3>
        </div>
        <a href="#portafolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
