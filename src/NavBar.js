// import React from "react";

// function NavBar({ onChangePage }) {
//   return (
//     <nav>
//         <a onClick={() => onChangePage("/")}  href="/">Home</a>
//         <a onClick={() => onChangePage("/projects")} href="/projects">Projects</a>
//         <a onClick={() => onChangePage("/about")} href="/about">About</a>
//         <a onClick={() => onChangePage("/contact")} href="/contact">Contact</a>
//         <a onClick={() => onChangePage("/ArticleList")} href="/articlelist">Blog Posts</a>
//     </nav>
//   );
// }

// export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 8px;
  margin-right: 10px;

  &:hover {
    color: #666;
  }
`;

function NavBar({ onChangePage }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={() => onChangePage("/")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => onChangePage("/projects")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => onChangePage("/about")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => onChangePage("/contact")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/ArticleList" onClick={() => onChangePage("/ArticleList")}>
            Blog Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
