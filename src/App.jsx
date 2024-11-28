import React, { useState } from 'react'
import Header from './components/Header';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import './styles/App.css'

function App() {
  const [setSelectedShow, selectedShow] = useState(null);

  return (
    <div className="app">
      <Header />
      <ShowList onSelectShow={setSelectedShow} />
      <ShowDetail show={selectedShow} />
    </div>
  );
};

export default App
