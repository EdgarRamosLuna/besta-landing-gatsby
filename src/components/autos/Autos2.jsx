import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "./autos2.scss";
import { dataAutos } from "./data";
import "swiper/css";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
export default function VerticalTabs() {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      introCarImg: file(relativePath: { eq: "calendarioicon2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 36, placeholder: BLURRED)
        }
      }
    }
  `);

  // const getImageData = (imageURL) => {
  //   const imageNode = data.allFile.nodes.find(
  //     (node) => node.relativePath === imageURL.split("/").pop()
  //   );
  //   return imageNode ? getImage(imageNode) : null;
  // };
  const getImageData = (imageURL) => {
    const imageNode = data.allFile.nodes.find(
      (node) => node.relativePath === imageURL.split("/").pop()
    );
    return imageNode ? imageNode.childImageSharp.fluid : null;
  };
  const image = getImage(data.introCarImg);
  console.log(image);
  return (
    <div className="autos2" id="modelos">
      <h1 className="h1-autos">Modelos disponibles</h1>
      {/* {dataAutos.map((auto) => (
        <div key={auto.id}>
          <h3>{auto.marca} {auto.modelo}</h3>
          <Img
            fluid={{
              src: auto.imagen,
            }}
            style={{ width: "300px", height: "200px" }}
            imgStyle={{ objectFit: "cover" }}
            alt={`${auto.marca} ${auto.modelo}`}
          />
          <p>{auto.montoSemanal}</p>
          <p>{auto.texto}</p>
        </div>
      ))} */}
      <div className="autos-besta">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {dataAutos.map((item) => (
            <SwiperSlide>
              <Link to={`formulario/${item.id}`} className="link">
                <div className="card-autos2">
                  <div className="card-top2">
                    <h2>{item.marca}</h2>
                    <h3>{item.modelo}</h3>
                    <Img
                      fluid={getImageData(item.imagen)}
                      alt={`${item.marca} ${item.modelo}`}
                      style={{ width: "100%" }}
                      imgStyle={{ objectFit: "cover" }}
                      className="card-img"
                    />
                    {/* <GatsbyImage
                      backgroundColor="transparent"
                      image={getImageData(item.imagen)}
                      alt={`${item.marca} ${item.modelo}`}                      
                      loading="eager"
                      placeholder="blurred"
                      layout="constrained"
                    /> */}
                  </div>
                  <div className="card-bottom2">
                    <p className="texto-autos2">
                      <strong>*{item.montoSemanal}</strong>
                    </p>
                    <div className="calendar-container">
                      <div className="icon">
                        <GatsbyImage
                          image={image}
                          alt="Image Description"

                          ///   imgClassName="calendario"
                        />
                      </div>
                      <div className="txt">
                        <p className="texto">{item.texto}</p>
                        <p className="textoAviso">
                          *Precio sujeto a cambios sin previo aviso
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
