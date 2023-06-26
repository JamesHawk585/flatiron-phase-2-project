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

// q: Why can't I switch seemlessly between the About and ArticleList pages?
// a: Because the About and ArticleList components are not rendered at the same time.
//    When the page is first loaded, the About component is rendered.
//    When the user clicks on the "Blog Posts" button, the ArticleList component is rendered.
export default NavBar;

