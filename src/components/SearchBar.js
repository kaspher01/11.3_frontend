import React from 'react';

const SearchBar = ({ searchTerm, onSearch, onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for meals..."
        value={searchTerm}
        onChange={onInputChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;