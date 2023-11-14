import React, { useState } from "react";

const ButtonStyle = {
  width: "100px",
};

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search record..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-secondary"
        style={ButtonStyle}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
