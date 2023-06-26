import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Header from './Header';
import ArticleList from './ArticleList';

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <Header toggleDarkMode={onDarkModeClick}/> */}
      <Header/>
      <NavBar onChangePage={setPage}/>
      {page === "About" ? <About /> : <ArticleList posts={posts}/>}
    </div>
  );
}

export default App;
