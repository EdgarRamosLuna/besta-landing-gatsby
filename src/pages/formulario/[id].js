import React from "react";
import Layout from "../../components/Layout";
import Formulario from "../../components/formulario/Formulario";

const index = ({ params }) => {
  console.log(params.id);
  return (
    <Layout>
      <Formulario id={params.id} />
    </Layout>
  );
};

export default index;
