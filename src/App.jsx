import React, { useState } from 'react'
import Header from './components/Header';
import ShowList from './components/ShowList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'

function App() {

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList/>} />
        </Routes>
      </Router>
  );
};

export default App
