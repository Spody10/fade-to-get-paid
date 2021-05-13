import React, { useState } from 'react';
import roostyImage from "../../assets/roosty.jpg";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const { 
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid='link' href="/">
                    <span role="img" aria-label="roosty">
                        <img src={roostyImage} className="my-2" style={{ width: "10%" }} alt =""></img>
                       
                    </span> 
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* <li className="mx-2">
                        <a data-testid='about' href="#about">
                            About McNoosty
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li> */}
                    {categories.map((category) => (
                    <li 
                        className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}
                    >
                        <span onClick={() => {setCurrentCategory(category)}} 
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;