import React from "react";
import ResultCards from "./ResultCards";

function SearchResults(props) {

    const {superheroData = []} = props;

    return (
        <div id="results-main">
            {superheroData.map(superhero =>
            <ResultCards data={superhero} />
                )}
        </div>
    );
}

export default SearchResults;