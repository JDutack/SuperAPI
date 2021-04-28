import React from "react";

function HomePage(props) {
    const {data} = props;


    return (
        <div id="home-main">
            <div id="home-super-list">
                <div id="team-cards">
                    <div id="result-profile-pic"><img src={data.image.url} alt="imagen-super" height="275px"/></div>
                    <div id="result-profile-data">
                        <h2 id="card-name">{data.name}</h2>
                    </div>
                </div>
            </div>                        
        </div>
    );
}

export default HomePage;