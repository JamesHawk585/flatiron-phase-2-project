import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Header from './Header';
import ArticleList from './ArticleList';
// import posts from '../data/posts';

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  // const onDarkModeClick = () => {
  //   setIsDarkMode(isDarkMode => !isDarkMode);


  return (
    // <div className={"App " + (isDarkMode ? "dark" : "light" )}>
    <div className="App">
      <h1>My Website</h1>
      {/* <Header toggleDarkMode={onDarkModeClick}/> */}
      <Header/>
      <NavBar onChangePage={setPage}/>
      {page === "Home" ? <About /> : <ArticleList posts={posts}/> }
    </div>
  );
}

export default App;
