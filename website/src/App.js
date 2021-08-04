import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.tsx';

function App() {
  const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  const targets = document.querySelectorAll(".show-on-scroll");

  targets.forEach(function(target) {
    observer.observe(target);
  });
  
  return (
      <Router>
          <Route path='/' exact component={HomePage} />
      </Router>
  );
}

export default App;