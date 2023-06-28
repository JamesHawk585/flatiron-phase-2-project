import React from "react";

function NavBar({ onChangePage }) {
  return (
    <nav>
        {/* <button onClick={() => onChangePage("ArticleList")}>Blog Posts</button>
        <button onClick={() => onChangePage("ProjectList")}>Project List</button> */}

        <a onClick={() => onChangePage("/")}  href="/">Home</a>
        <a onClick={() => onChangePage("/projects")} href="/projects">Projects</a>
        <a onClick={() => onChangePage("/about")} href="/about">About</a>
        <a onClick={() => onChangePage("/contact")} href="/contact">Contact</a>
        <a onClick={() => onChangePage("/ArticleList")} href="/articlelist">Blog Posts</a>
    </nav>
  );
}

export default NavBar;

