import React from "react";

function NavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("About")}>About</button>
      {/* <button onClick={() => onChangePage("Projects")}>Projects</button> */}
      {/* <button onClick={() => onChangePage("Blog Posts")}>Blog Posts</button> */}
        <button onClick={() => onChangePage("ArticleList")}>Blog Posts</button>
    </nav>
  );
}

export default NavBar;

