import React from "react";
import { Link } from "gatsby";
import Topbar from "./topbar/Topbar";
import logoUber from "./bestapart.png";
import whatsapp from "./whatsapp.png";
import "./layout.scss";
import "../app.scss";
const Layout = ({ children }) => {
  return (
    <div className="app">
      <Topbar />
      <img class="button_float" src={logoUber} alt="" />
      <a href="https://bit.ly/3pGO0pN">
        <img class="whatsapp-icon" src={whatsapp} alt="" />
      </a>
      <div className="sections">{children}</div>
      {/* <footer>F
        <p>Copyright © 2023</p>
      </footer> */}
    </div>
  );
};

export default Layout;
