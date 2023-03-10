import React from 'react';

// This is a component // This is the Artist component //
// exoprt beofre const //
const Artists = (props) => {
  console.log(props);
  return (
    <>
      {props.artists.map((artist) => {
        return <p>{artist.name}</p>
      })}
    </>
  )
}
// The Album function is avalible to all the other codes that we write //
export default Artists;

// THIS IS DONE DO NOT TOUCH :D //