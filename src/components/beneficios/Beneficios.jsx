import { Link, graphql, useStaticQuery } from "gatsby";
import "./beneficios.scss";
import * as React from "react";

import Img from "gatsby-image";

const Beneficios = () => {
  const data = useStaticQuery(graphql`
    query {
      introCarImg: file(relativePath: { eq: "BENEFICIOSCARRO-2023.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="c-beneficios" id="beneficios">
      <h1 className="c-title-beneficios">BESTA ADAPTADO A TU VIDA </h1>
      <div className="c-bg"></div>
      <div className="c-wrapper-beneficios">
        <div className="c-izquierdo">
          <div className="c-info-item">
            <p>
              Logramos ser tu aliado más importante gracias a nuestros
              beneficios y la rápida respuesta para maximizar tus ganancias.
            </p>
          </div>
          <Link to="/preguntas-frecuentes" className="enlace">
            Preguntas frecuentes
          </Link>
        </div>
        <div className="c-derecho">
          <p className="c-desc">
            <Img
              fluid={data.introCarImg.childImageSharp.fluid}
              alt="Beneficios besta"
              
              style={{width: "100%"}}
              imgStyle={{ objectFit: "cover" }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
