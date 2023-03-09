import React from 'react';

// This is a component // This is the Images component //
const Images = (props) => {
  console.log(props); // Is this an argument?//
  return (
    <div>
      {props.images.map((singleimage) => <img src={singleimage.url} alt="album cover" />)}
    </div>
  )
}

// Our Images function is avalible to all the other codes that I´ll write //
export default Images;