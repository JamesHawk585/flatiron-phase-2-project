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
    
    return <main>{articleList}</main>;
}

export default ArticleList;