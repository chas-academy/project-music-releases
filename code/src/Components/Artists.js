import React from 'react';

// This is a component // This is the Artist component //
// exoprt beofre const //
const Artists = (props) => {
  console.log(props);
  return (<h1>{props.artists}</h1>)
}

// The Album function is avalible to all the other codes that we write //
export default Artists;
