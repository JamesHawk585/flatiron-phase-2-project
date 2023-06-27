import React from 'react';
import Article from './Article';
import Card from 'react-bootstrap/Card';

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
        <Card>
            <Card.Body>ArticleList Component</Card.Body>
        </Card>
    // return (
    // <h1>ArticleList Component</h1>
    // );
)};

export default ArticleList;