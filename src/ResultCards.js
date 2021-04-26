import React from "react";

function ResultCards(props) {
    return (
        <div id="results-main">
            <div id="results-card">
                <div id="result-profile-pic"><img src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg" alt="imagen-super" height="275px"/></div>
                <div id="result-profile-data">
                    <h2 id="card-name">Superhero Name</h2>
                    <div className="stats">Intelligence: </div>
                    <div className="stats">Strenght: </div>
                    <div className="stats">Speed: </div>
                    <div className="stats">Durability:</div>
                    <div className="stats">Power: </div>
                    <div className="stats">Combat: </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCards;