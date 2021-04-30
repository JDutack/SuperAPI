import React from "react";
import TeamCards from "./TeamCards.js";

function HomePage(props) {
    
    return (
        <div className="App">
            <div className="app-main">
                <div id="supes-grid">
                <a className="supes-cards"><TeamCards /></a>
                </div>
            </div>                        
        </div>
    );
}

export default HomePage;