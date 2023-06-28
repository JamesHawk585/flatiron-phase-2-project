import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
import Header from './Header';
import ArticleList from './ArticleList';
import { Switch, Route } from "react-router-dom";
import Home from './Home';

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("/");
  const [darkMode, setDarkMode] = useState(false);

  function onDarkModeClick() {
    setDarkMode((isDarkMode) => !isDarkMode);
  }
  

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(posts => {setPosts(posts)});
  }, []);

  // return (
  //   <div className={"App " + (darkMode ? "dark" : "light")}>
  //     <Header onDarkModeClick={onDarkModeClick}/>
  //     <NavBar onChangePage={setPage}/>
  //     {page === "ProjectList" ? <ProjectList /> : <ArticleList posts={posts}/>}
  //   </div>
  // );

  return (
    <Route>
      <div className={"App " + (darkMode ? "dark" : "light")}>
        <Header onDarkModeClick={onDarkModeClick}/>
        <NavBar onChangePage={setPage}/>
        <Switch>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/ArticleList">
            <ArticleList posts={posts}/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Route>


  )


}

export default App;
