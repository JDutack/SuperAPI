import React from "react";
import ResultCards from "./ResultCards";

function SearchResults(props) {
    const {data} = props;
    const {superheroData = []} = props;

    return (
        <div id="results-main">
            <div>
            {superheroData.map(superhero =>
            <ResultCards data={superhero} />
                )}
            </div>    
        </div>
    );
}

export default SearchResults;