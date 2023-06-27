import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
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
console.log(posts)

// When I console.log() posts, I get an empty array. Why is that?

  return (
    <div className="App">
      {/* <Header toggleDarkMode={onDarkModeClick}/> */}
      <Header/>
      <NavBar onChangePage={setPage}/>
      {page === "ProjectList" ? <ProjectList /> : <ArticleList posts={posts}/>}
    </div>
  );
}

export default App;
