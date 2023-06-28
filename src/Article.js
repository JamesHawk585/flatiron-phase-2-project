import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
//   const handleDeleteClick = () => {
//     handleDelete(title);


  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
    </article>
  );
};

export default Article;