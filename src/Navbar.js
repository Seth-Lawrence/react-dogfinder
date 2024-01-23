import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar({ dogs }) {

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      {dogs.map((dog, idx) =>
        <NavLink key={idx} to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>)}
    </nav>
  );
}