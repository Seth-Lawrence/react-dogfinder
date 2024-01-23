import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';


/**
 * App component makes AJAX request to get list of dogs and uses this to pass as
 * a prop to the child components as needed. Renders NavBar and RoutesList.
 *
 * Props:
 * -None
 * State:
 * -dataFetch - Tracks whether AJAZ request complete or not
 *
 * App -> {NavBar, RoutesList}
 */

async function App() {
  const [dataFetch, setDataFetch] = useState();

  //AJAX request for dog list
  //Asynchronous? How to delay this so it doesn't auto fail when Promise first
  //returned?

  const response = await fetch("http://localhost:5001/dogs");
  const dogs = await response.json();

  return (
    <div className="App">
      <Navbar dogs={dogs}/>
      <RouteList />
    </div>
  );
}

export default App;
//Routes -> /dogs   /dogs/:name  *
//Nav component