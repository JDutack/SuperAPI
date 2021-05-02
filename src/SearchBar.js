import React from "react";

function SearchBar(props) {
    const {handleChange, searchText} = props;

    return (
        <div id="search-main">
            <input 
            id="search-input"
            type="search"
            placeholder="Buscá tu súper..."
            onChange={handleChange}
            value={searchText}
            />
        </div>
    );
}

export default SearchBar;