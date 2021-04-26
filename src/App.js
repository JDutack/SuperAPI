import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="app-main">
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
