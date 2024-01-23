import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar component displays navigation links at the top of the page given
 * a 'dogs' object [{name, age, source, facts}, ...] where name is a string.
 *
 * Props:
 * -dogs: object
 *
 * State:
 * -None
 *
 * App -> Navbar
*/

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