import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import RouteList from './RouteList';




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

function App() {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    isLoading: true
  });

  //AJAX request for dog list
  //Asynchronous? How to delay this so it doesn't auto fail when Promise first
  //returned?

  // useEffect(function fetchDogWhenMounted() {
  //   async function fetchDog() {
  //     const response = await fetch("http://localhost:5001/dogs");
  //     const dogs = await response.json();
  //     setDataFetch({
  //       data: dogs,
  //       isLoading: false
  //     });
  //   }
  // })

  //conditional logic that runs this only when we don't have dogs
  //

  async function fetchDog() {
    const response = await fetch("http://localhost:5001/dogs");
    const dogs = await response.json();
    setDataFetch({
      data: dogs,
      isLoading: false
    });
  }

  if (dataFetch.isLoading) {
    fetchDog(); //don't care what this returns, we're going to render a loading screen
    return (<div>Loading...</div>);
  }



  return (
    <div className="App">
      {dataFetch.dogs}
      {console.log(dataFetch.data)}
      <BrowserRouter>
        <Navbar dogs={dataFetch.data} />
        <RouteList />
      </BrowserRouter>
    </div>

  );
}

export default App;
//Routes -> /dogs   /dogs/:name  *
//Nav component