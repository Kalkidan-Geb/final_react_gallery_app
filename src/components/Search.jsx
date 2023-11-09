import React, { useState } from 'react';

function Search({ performSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;