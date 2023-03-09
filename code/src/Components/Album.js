import React from 'react';

const Album = (props) => {
  console.log(props);
  return (
    <div className="album-containers">
      <a className="albumcovers" href={props.albums.href.url}>
          Album Cover
      </a>
      <p>{props.title}</p>
      {props.albums.items.map((album) => (
        <div key={album.id}>
          <p>{album.name}</p>
          <a href={album.href}>Listen Now</a>
        </div>
      ))}
    </div>
  );
};

export default Album;
