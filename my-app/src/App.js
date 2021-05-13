import React, { useState } from 'react';
import Nav from  './components/Nav';
import About from './components/About';
import Odds from './components/Odds';

function App() {
    const [categories] = useState([
        {
            name: "About",
            description: "It pays to fade this man",
        },
        {
            name: "Contact",
            description: "VIP picks",
        },
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
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    return (
      <div>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory} 
          ></Nav>
          <main>
              <div>
              <Odds></Odds>
              <About></About>
              </div>
          </main>
      </div>
  );
}

export default App;
