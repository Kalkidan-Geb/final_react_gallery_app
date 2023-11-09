import React from 'react';

function Nav({ performSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(e.target.search.value);
    e.currentTarget.reset();
  }

  return (
    <nav className="main-nav">
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search" required />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Nav;
