import React from "react";

function NavBar({ onChangePage }) {
  return (
    <nav>
        <button onClick={() => onChangePage("ArticleList")}>Blog Posts</button>
        <button onClick={() => onChangePage("ProjectList")}>Project List</button>
    </nav>
  );
}

export default NavBar;

