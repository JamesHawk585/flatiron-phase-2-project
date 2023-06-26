import React from "react";

function NavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>Blog Posts</button>
      <button onClick={() => onChangePage("List")}>Projects</button>
    </nav>
  );
}

export default NavBar;
