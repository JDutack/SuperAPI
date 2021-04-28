import React from "react";

function ResultCards(props) {
    const {data} = props;

    return (
        <div id="results-main">
            <div id="results-card">
                <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                <div id="result-profile-data">
                    <h1 id="card-name">{data.name}</h1>
                    <h2 id="card-fullname">{data.biography["full-name"]}</h2>
                    <button id="add-button">Agregar al equipo</button>
                    <span id="alignment">Alineación: {data.biography.alignment}</span>
                </div>
            </div>
        </div>
    );
}

export default ResultCards;