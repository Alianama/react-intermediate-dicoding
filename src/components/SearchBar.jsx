import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

function SearchBar({ search, defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const { locale } = useContext(LocaleContext);

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
          placeholder={
            locale === "id" ? "Cari berdasarkan Judul" : "Search by Title"
          }
          value={keyword}
          onChange={onChangeSearch}
        />
        <button className="search-submit-button" type="submit">
          {locale === "id" ? "Cari" : "Search"}
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
