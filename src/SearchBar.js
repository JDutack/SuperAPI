import React, { useState } from "react";

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");

    async function searchSuperHeroes () {
       const response = await fetch(`https://www.superheroapi.com/api.php/10224302364615758/search/${searchText}`);
       const data = await response.json();
    }

    function handleChange (e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm) {
            if (searchTerm > 3) {
                searchSuperHeroes();
            }
        }

    }

    return (
        <div id="search-main">
            <input id="search-input"
            type="search"
            placeholder="Buscá tu súper..."
            onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;