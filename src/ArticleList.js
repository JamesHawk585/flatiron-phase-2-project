// import React from 'react';
// import Article from './Article';
// import Card from 'react-bootstrap/Card';

// function ArticleList({ posts }) {
//     const articleList = posts.map(post => (
//         <Article
//         key={post.id}
//         title={post.title}
//         date={post.date}
//         preview={post.preview}
//         />
//     ));

//     return (
//         <article key={posts.id}>
//         <h3>{posts.title}</h3>
//         <small>{posts.date}</small>
//         <p>{posts.preview}</p>
//     </article>
// )};

// export default ArticleList;

import React from 'react';

function ArticleList({ posts }) {
    const articleList = posts.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.preview}</p>
            </article>
        )
    })
    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList;