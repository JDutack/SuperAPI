import React, { useState } from "react";

const superHeroList = [];

function ResultCards(props) {
    const {data} = props;

    const superHeroInfo  = {
    "id": data.id,
    "name": data.name,
    "alignment": data.biography.alignment
}
    const [list] = useState(superHeroList);


    function handleAdd() {

    if(!list.includes(superHeroInfo)) {
        if(list.length < 6) {
        list.push(superHeroInfo);
        
   } 
}
            console.log("alignment", superHeroInfo.alignment)
            console.log("superlist", superHeroList)
            console.log("list", list)
        
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