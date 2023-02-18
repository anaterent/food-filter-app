import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import Search from './components/Search';
import Navbar from './components/Navbar';

import Card from './components/Card';


function App() {
  // search bar
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  // filter cuisine
  const [cuisineState, setCuisineState] = useState("All");
  let updateCuisineState = (c) => {
    setCuisineState(c.target.innerText);

  };

  // filter price functions 
  function deletePrice(p) {
    setPriceState(prevState => {
      return prevState.filter(price => price !== p)
    });
  }

  function addPrice(p) {
    // setPriceState(prevState => priceState.concat({prevState, p}))
    setPriceState(prevState => ([...prevState, p]))
  }

  const [priceState, setPriceState] = useState(["$", "$$", "$$$", "$$$$"]);
  function updatePriceState(p) {
    if (priceState.includes(p.target.innerText)) {
      if (priceState.length >= 2) {
        deletePrice(p.target.innerText)
      }
    } else {
      addPrice(p.target.innerText)
    }
  }

  const priceStateString = priceState.toString();


  return (
    <Router>
      <div className="App">
        <header className="app-heading"> ˗ˏˋ ꒰ ♡ ꒱ ˎˊ˗ where should we eat? ˗ˏˋ ꒰ ♡ ꒱ ˎˊ˗
        </header>

        <div className='search-bar'>
          <Search changeHandle={inputHandler} />
        </div>

        <Navbar cChangeHandle={updateCuisineState} pChangeHandle={updatePriceState} priceState={priceStateString} />

        {/* testing */}
        <div>{priceState.toString()}</div>

        <div className='body'>
          <Card input={inputText} cuisineState={cuisineState} priceState={priceStateString} />
        </div>




      </div>
    </Router>

  );
}

export default App;
