import React from 'react';

/**
 * DogList component renders details about dogs. Takes in prop dogs which is
 * an object object [{name, age, source, facts}, ...] that is data needed for
 * the components mapped.
 *
 * Props:
 * -dogs: object [{name, age, source, facts}, ...]
 *
 * State:
 * -None
 *
 * RoutesList -> DogList
*/
function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog, idx) =>
      <div key={idx}>
        <img src={`./${dog.src}.jpg`}></img>
        {dog.name}{dog.src}
      </div>)}
    </div>
  )
}



export default DogList