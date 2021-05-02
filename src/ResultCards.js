import React, { useState } from "react";

const superHeroList = [];

function ResultCards(props) {
    const {data} = props;

    const superHeroInfo  = {
    "id": data.id,
    "name": data.name,
    "alignment": data.biography.alignment,
    "picture": data.image.url,
    "powerstats": data.powerstats
}

    const [list, setList] = useState(superHeroList);


    function handleAdd() {

        function filterByAlignment(hero) {
            return superHeroInfo.alignment === hero.alignment;
        }
        if(!list.includes(superHeroInfo) && list.filter(filterByAlignment).length < 3) {
           superHeroList.push(superHeroInfo);
           setList(superHeroList);
        }
    }

    return (
        <div>
            <li id="results-main" key={data.id}>
                <div id="results-card">
                    <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                    <div id="result-profile-data">
                        <h1 id="result-card-name">{data.name}</h1>
                        <h2 id="result-card-fullname">{data.biography["full-name"]}</h2>
                        <button type="button" id="add-button" onClick={handleAdd}>Agregar al equipo</button>
                        <span id="alignment">Alineación: {data.biography.alignment}</span>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default ResultCards;