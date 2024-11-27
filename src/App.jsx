import { useState } from 'react'
import ShowList from './components/ShowList'
import './styles/App.css'

function App() {
  const [setSelectedShow] = useState(null);

  return (
    <div className="app">
      <ShowList onSelectShow={setSelectedShow} />
    </div>
  );
};

export default App
