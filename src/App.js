import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Header from './Header';
import ArticleList from './ArticleList';
import posts from '../data/posts';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const onDarkModeClcik = () => {
    setIsDarkMode(isDarkMode => !isDarkMode);


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light" )}>
      <h1>App</h1>
      <Header toggleDarkMode={onDarkModeClcik}/>
      <NavBar />
      <About />
      <ArticleList />
    </div>
  );
}}

export default App;
