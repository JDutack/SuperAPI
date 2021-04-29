import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage.js"
import Navbar from "./Navbar.js";

function App() {

  return (
    <div className="App">
    <Navbar />        
      <Router>
        <Switch>
            <Route path="/HomePage.js">
              <HomePage /* ResultCards data={superhero} */ />
            </Route>
          <Route path="/SearchPage.js">
            <SearchPage />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
