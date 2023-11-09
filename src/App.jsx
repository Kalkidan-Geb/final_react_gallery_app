import { useState, useEffect } from 'react';
import './index.css';
import apiKey from './config';
import { Route, Routes, Navigate } from 'react-router-dom';


import PhotoList from './PhotoList';
import Search from './Search';
import Nav from './Nav';

const baseUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);

  useEffect(() => {
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

    const fetchAllData = async () => {
      const catsData = await fetchData("cats");
      const dogsData = await fetchData("dogs");
      const computersData = await fetchData("computers");
      setCats(catsData);
      setDogs(dogsData);
      setComputers(computersData);
    };

    fetchAllData();
  }, []);

  return (
    <div>
      
      <Search fetchData={fetchData} />
      <Nav />

      {/* routes, and route components */}
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList photos={cats} title="Cats" />} />
        <Route path="/dogs" element={<PhotoList photos={dogs} title="Dogs" />} />
        <Route path="/computers" element={<PhotoList photos={computers} title="Computers" />} />
        <Route path="/search/:query" element={<PhotoList photos={photos} title="Query Results" />} />
      </Routes>
    </div>
  );
}

export default App;