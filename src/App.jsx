import { useState, useEffect } from 'react';
import './App.css';
import apiKey from './config';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PhotoList from './components/PhotoList';
import Search from './components/Search';
import Nav from './components/Nav';

const baseUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);

  const fetchData = async (query) => {
    try {
      const res = await fetch(`${baseUrl}&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
      const data = await res.json();
      setPhotos(data.photos.photo);
      return data.photos.photo;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData('cats').then((cats) => setCats(cats));
    fetchData('dogs').then((dogs) => setDogs(dogs));
    fetchData('computers').then((computers) => setComputers(computers));
  }, []);

  return (
    <Router>
      <div>
        <Search fetchData={fetchData} /> {/* Pass "fetchData" to the Search component */}
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" />} />
          <Route path="/cats" element={<PhotoList photos={cats} title={'Cats'} />} />
          <Route path="/dogs" element={<PhotoList photos={dogs} title={'Dogs'} />} />
          <Route path="/computers" element={<PhotoList photos={computers} title={'Computers'} />} />
          <Route path="/search" element={<PhotoList photos={photos} title={'Query Results'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;