import React from 'react';
import MyHeader from './MyHeader/MyHeader';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import About from './About/About';
import './css/App.css';

function App(){

return(
  <div className = "app">

    <MyHeader/>
    <About/>
    <Skills/>
    <Contact/>
  </div>
);
}

export default App;
