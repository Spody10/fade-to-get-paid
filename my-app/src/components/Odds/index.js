import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/baseball-ex.png";

function Odds(props) {
    const currentOdds = {
        name: "baseball",
        description: "Baseball odds today",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentOdds.name)}</h1>
            <p>{currentOdds.description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="baseball-ex"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Odds;