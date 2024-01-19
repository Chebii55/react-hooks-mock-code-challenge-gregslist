import React from "react";

function Search({ searchText, setSearchText }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
