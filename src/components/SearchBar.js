import React from 'react';
import '../App.css';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
