import React from "react";

function ResultCards(props) {
    const {data} = props;

    return (
        <div id="results-main">
            <div id="results-card">
                <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                <div id="result-profile-data">
                    <h2 id="card-name">{data.name}</h2>
                    <div className="stats">Intelligence: {data.powerstats.intelligence}</div>
                    <div className="stats">Strenght: {data.powerstats.strength}</div>
                    <div className="stats">Speed: {data.powerstats.speed}</div>
                    <div className="stats">Durability: {data.powerstats.durability}</div>
                    <div className="stats">Power: {data.powerstats.power}</div>
                    <div className="stats">Combat: {data.powerstats.combat}</div>
                </div>
            </div>
        </div>
    );
}

export default ResultCards;