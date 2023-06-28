// import React from "react";

//     function Article({ props }) {
//     const onHandleDelete = () => {
//         onHandleDelete(id);
//     }
//     return (
//         <article>
//             <h3>{props.title}</h3>
//             <small>{props.date}</small>
//             <p>{props.preview}</p>
//             <button onClick={onHandleDelete}>Delete</button>
//         </article>
//     );
// }

// export default Article;

// import React from "react";

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