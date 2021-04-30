import React, { useState } from "react";

const initialList = [];

function ResultCards(props) {
    const {data} = props;
    const [list, setList] = useState(initialList);


    function handleAdd() {
        }
        const newList = list.concat({  });
        setList(newList);
    }

    return (
        <div>
        <div id="results-main">
            <div id="results-card">
                <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                <div id="result-profile-data">
                    <h1 id="result-card-name">{data.name}</h1>
                    <h2 id="result-card-fullname">{data.biography["full-name"]}</h2>
                     <button type="button" id="add-button" onClick={handleAdd}>Agregar al equipo</button>
                    <span id="alignment">Alineación: {data.biography.alignment}</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ResultCards;