import React, { useContext } from "react";
import  { HeroContext } from "./App";

function TeamCards(props) {
    const { hero } = useContext(HeroContext);

    return (
        <div>
            <div>
                <ul>{hero.map(({ superHeroList }) => (<li key={"id"}>{"name"}</li>))}</ul>
            </div>
            {console.log("teamcards", hero)}
        </div>
    );
}

export default TeamCards;