import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import "./intro.scss";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      introCarImg: file(relativePath: { eq: "INICIO_CARRO.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920            
            placeholder: BLURRED                        
          )
        }
      }
    }
  `);

  const image = getImage(data.introCarImg);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">

           <GatsbyImage image={image} alt="Image Description" 
          //  imgClassName="imgContainer"

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
              src={`../../palomita.png`}
              alt="palomita"
              className="palomita"
            />
          </h3>
        </div>
        <a href="#portafolio">
          <img src={`../../down.png`} alt="" />
        </a>
      </div>
    </div>
  );
}
