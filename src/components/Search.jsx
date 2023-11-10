import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ fetchData }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(query); // Call fetchData with the query
    navigate(`/search?q=${query}`); // Pass the query as a URL parameter
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
