import React from "react";
import TeamCards from "./TeamCards.js";

function HomePage(props) {
    const {data} = props;
    
    return (
        <div className="App">
            <div className="app-main">
                <div id="supes-grid">
                <a className="supes-cards"><TeamCards /></a>
                <a className="supes-cards">atzo</a>
                <a className="supes-cards">atzo</a>
                <a className="supes-cards">atzo</a>
                <a className="supes-cards">atzo</a>
                <a className="supes-cards">atzo</a>
                </div>
            </div>                        
        </div>
    );
}

export default HomePage;