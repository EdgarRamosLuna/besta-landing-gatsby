import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
};

export default Layout;