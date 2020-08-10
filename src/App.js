import React from 'react';
import './App.scss';
import Footer from './Components/Footer/Footer.js';
import Blog from './Components/Blog/Blog.js';
import About from './Components/About/About.js';
import Header from './Components/Header/Header.js';

const App = () => {
  return (
    <>
    <div class="app">
      <Header/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
