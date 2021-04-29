import React, { useState } from "react";

function SearchBar(props) {
    const {handleChange, searchText} = props;

    return (
        <div className="App">
          <Navbar />
          <div className="app-main">
          {/* <HomePage ResultCards data={superhero} /> */} 
            <SearchBar searchText={searchText} handleChange={handleChange} />
            <SearchResults superheroData={superheroData} />
          </div>
        </div>
      );
}

export default SearchBar;