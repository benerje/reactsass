import React from 'react'
import About from './components/About';
import Blank from './components/Blank';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Showcase from './components/Showcase';
import './sass/main.scss'

function App() {
  return (
    <div >
      <Header />
      <NavBar />
      <About />
      <Showcase />
      <Blank />
      <Portfolio/>
    </div>
  );
}

export default App;
