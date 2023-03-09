import React from 'react';

// This is a component // This is the Album component //
const Album = (props) => {
  console.log(Album);
  return (
    <div className="album-containers">
      <a className="albumcovers"/* This is gonna target covers and targer url - {props.albums.href.url} */>
        {props.albums.href.url}
      </a>
    </div>
  )
}

// The Album function is avalible to all the other codes that we write //
export default Album;

/* <p>{props.album}</p> */
/* <>
      {props.albums.items.map((album) => (
        <div key={album.id}>
          <Album title={album.name} />
          <Album title={album.artists} />
        </div>
      ))}
    </> */