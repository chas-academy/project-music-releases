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
          <div className="icons">
            <a href={album.external_urls.spotify}>
              <img className="heart" src="project-music-releases/code/public/icons/heart.svg" alt="heart icon" />
              <img className="play" src="./icons/play.svg" alt="play icon" />
              <img className="dots" src="./icons/dots.svg" alt="dots icon" />
            </a>
          </div>
          <p>{album.name}</p>
          <a href={album.href}>Listen Now</a>
        </div>
      ))}
    </div>
  );
};

export default Album;
