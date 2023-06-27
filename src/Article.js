import React from "react";

// function Article({ title, date = "January 1, 1970", preview }) {
//     return (
//         <article>
//             <h3>{title}</h3>
//             <small>{date}</small>
//             <p>{preview}</p>
//         </article>
//     );
// }

function Article(props) {
    return (
        <article>
            <h1>Artical Component </h1>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    );
}

export default Article;