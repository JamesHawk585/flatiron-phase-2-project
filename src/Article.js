import React from "react";

function Article({ title, date, preview }) {


  return (
    <div className="article">
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
    </div>
  )};


export default Article;