import React from "react";

function NavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("About")}>About</button>
      <button onClick={() => onChangePage("Form")}>Projects</button>
      <button onClick={() => onChangePage("List")}>Blog Posts</button>
    </nav>
  );
}

export default NavBar;
