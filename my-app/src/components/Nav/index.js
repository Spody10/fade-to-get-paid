import React from 'react';
import roostyImage from "../../assets/roosty.jpg";

function Nav() {
    const categories = [
        {
            name: "Sports",
            description: "Sports available to pick"
        },
        {
            name: "Current Picks",
            description: "Current picks from the WOAT",
        },
        {
            name: "Previous Picks",
            description: "God he is awful",
        },

    ]
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="roosty">
                        <img src={roostyImage} className="my-2" style={{ width: "5%" }} alt =""></img>
                    </span> 
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About McNoosty
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                    <li 
                        className="mx-1"
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)} >
                            {category.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;