import React, { useState } from 'react'
import Header from './components/Header';
import ShowList from './components/ShowList';
import GenreList from './components/GenreList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList genre={selectedGenre} />} />
          <Route path="/genres" element={<GenreList onSelectGenre={setSelectedGenre} />} />
        </Routes>
      </Router>
  );
};

export default App
