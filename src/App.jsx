import React, { useState } from 'react'
import Header from './components/Header';
import ShowList from './components/ShowList';
import './styles/App.css'

function App() {

  return (
    <div className="app">
      <Header />
      <ShowList/>
    </div>
  );
};

export default App
