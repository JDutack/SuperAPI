import React from "react";
import ResultCards from "./ResultCards";

function SearchResults(props) {
    const {superheroData = []} = props;

    return (
        <div id="results-main">
            <ul id="results-list">
            {superheroData.map(superhero =>
            <ResultCards data={superhero} />
                )}
            </ul>    
        </div>
    );
}

export default SearchResults;