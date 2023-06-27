import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
import Header from './Header';
import ArticleList from './ArticleList';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);
  // const [page, setPage] = useState("Home");
  const [page, setPage] = useState("/");
  const [darkMode, setDarkMode] = useState(false);

  function onDarkModeClick() {
    setDarkMode((isDarkMode) => !isDarkMode);
  }
  

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      // .then(posts => setPosts(posts));
      .then(posts => {setPosts(posts)});
  }, []);

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick}/>
      {/* <Header/> */}
      <NavBar onChangePage={setPage}/>
      {page === "ProjectList" ? <ProjectList /> : <ArticleList posts={posts}/>}
    </div>
  );
}

export default App;
