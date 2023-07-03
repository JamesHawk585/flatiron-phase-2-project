import React, { useState } from 'react';
import Article from './Article';


function ArticleList({ posts, addNewPost }) {
  const [newArticle, setNewArticle] = useState({
    title: '',
    date: '',
    preview: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to the server
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then((response) => response.json())
      .then((createdPost) => {

        // ------------------------------------------------------------ 
    // addNewPost(createdPost);


        // ------------------------------------------------------------
        // Handle the response if needed
        console.log('New article created:', createdPost);

        // Clear the form inputs
        setNewArticle({
          title: '',
          date: '',
          preview: '',
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error creating article:', error);
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newArticle.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="date"
          value={newArticle.date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="preview"
          value={newArticle.preview}
          onChange={handleInputChange}
          placeholder="Preview"
        />
        <button type="submit">Add Article</button>
      </form>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        //   handleDelete={handleDeleteArticle}
        />
      ))}
    </main>
  );
}

export default ArticleList;
