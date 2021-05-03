import React, { useState, createContext, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage.js"
import Navbar from "./Navbar.js";
import UserContext from "./User/User.js";

export const HeroContext = createContext();

function reducer(state, item) {
  return [...state, item]
}

const user = {
  name: "Juan",
  supes: []
}

function App() {
  const [hero, setHero] = useReducer(reducer, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HeroContext.Provider value={{hero, setHero}}>
          <Navbar />        
            <Router>
              <Switch>
                  <Route path="/HomePage.js">
                    <HomePage  />
                  </Route>
                <Route path="/SearchPage.js">
                  <SearchPage />
                </Route>
              </Switch>
            </Router>
          </HeroContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
