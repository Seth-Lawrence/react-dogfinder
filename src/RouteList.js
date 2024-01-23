import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';


function RouteList() {
  return (
    <Routes>
      <Route path='/' element={<DogList />} />
      <Route path='/dogs/:name' element={<DogDetails />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}


export default RouteList;