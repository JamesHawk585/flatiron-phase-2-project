import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
    const articleList = posts.map(post => (
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
    ));
    console.log(posts)
    return (
    <h1>ArticleList Component</h1>
    );
}

export default ArticleList;