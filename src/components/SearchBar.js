import React, { useState } from 'react';
import '../App.css'; 
const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={searchTerm}
        onChange={onChange}
        placeholder="Search tasks..."
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
