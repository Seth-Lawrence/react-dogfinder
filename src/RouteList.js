import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';

/**
 * RoutesList component maps routes to components. Takes in prop dogs which is
 * an object object [{name, age, source, facts}, ...] that is data needed for
 * the components mapped.
 *
 * Props:
 * -dogs: object [{name, age, source, facts}, ...]
 *
 * State:
 * -None
 *
 * App -> RoutesList -> {DogList, DogDetails}
*/

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route path='/' element={<DogList dogs={dogs}/>} />
      <Route path='/dogs/:name' element={<DogDetails />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}


export default RouteList;