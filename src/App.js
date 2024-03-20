import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Faith from './components/pages/Faith';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/faith' exact element={<Faith />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;