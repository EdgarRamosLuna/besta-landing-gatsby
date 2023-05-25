import React from 'react';
import { Link } from 'gatsby';
import Topbar from './topbar/Topbar';

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Topbar/>
      <main
      style={{
        //calca margin-top:
        marginTop: 70
      }}
      >{children}</main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </>
  );
};

export default Layout;
