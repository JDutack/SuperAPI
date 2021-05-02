import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function SearchPage(props) {

    const [searchText, setSearchText] = useState("");
    const [superheroData, setSuperheroData] = useState([]);
  
    async function searchSuperHeroes () {
       const response = await fetch(`https://www.superheroapi.com/api.php/10224302364615758/search/${searchText}`);
       const data = await response.json();
  
       setSuperheroData(data.results);
    }
  
    function handleChange (e) {
        const searchTerm = e.target.value;
  
        if(searchTerm.length === 0) {
          setSuperheroData([]);
        }
        setSearchText(searchTerm);
         if (searchTerm.length >= 3) {
             searchSuperHeroes();
         }
    }

    return (
        <div className="App">
          <div className="app-main">
            <SearchBar searchText={searchText} handleChange={handleChange} />
            <SearchResults superheroData={superheroData} /> 
          </div>
        </div>
      );
}

export default SearchPage;