import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ search, defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  const onSubmitSearch = (event) => {
    event.preventDefault();
    search(keyword);
  };

  const onChangeSearch = (event) => {
    setKeyword(event.target.value);
    search(event.target.value);
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={onSubmitSearch}>
        <input
          type="text"
          placeholder="Masukan Judul Notes"
          value={keyword}
          onChange={onChangeSearch}
        />
        <button className="search-submit-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default SearchBar;
