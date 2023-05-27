import React from "react";
import Topbar from "../components/topbar/Topbar";
import Home from "../components/home/Home";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}; 
export const Head = () => <Seo title="Besta" />

export default index;
