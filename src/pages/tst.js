import React from "react";
import Topbar from "../components/topbar/Topbar";
import Home from "../components/home/Home";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import Img from 'gatsby-image';
const index = ({data}) => {
  return (
    <Layout>
      
      <Img
      fluid={data.introCarImg.childImageSharp.fluid}
      alt="BESTA INTRO"
      

      />
    </Layout>
  );
}; 

export default index;

export const query = graphql`
query {
  introCarImg: file(relativePath: {eq: "INICIO_CARRO.png"}) {
    childImageSharp {
      fluid(maxWidth: 1920,) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`