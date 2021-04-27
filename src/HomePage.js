import React from "react";

function HomePage(props) {
    const {data} = props;


    return (
        <div id="home-main">
            <div id="team-cards">
                <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                <div id="result-profile-data">
                    <h2 id="card-name">{data.name}</h2>
                    <div className="powerstats">Intelligence: {data.powerstats.intelligence}</div>
                    <div className="powerstats">Strenght: {data.powerstats.strength}</div>
                    <div className="powerstats">Speed: {data.powerstats.speed}</div>
                    <div className="powerstats">Durability: {data.powerstats.durability}</div>
                    <div className="powerstats">Power: {data.powerstats.power}</div>
                    <div className="powerstats">Combat: {data.powerstats.combat}</div>
                </div>
            </div>                        
        </div>
    );
}

export default HomePage;