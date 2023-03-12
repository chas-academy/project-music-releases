import React from 'react';

const Album = (props) => {
  console.log(props);
  return (
    <div className="album-containers">
      <p>{props.album.name}</p>
      <div key={props.album.id}>
        <h2>{props.title}</h2>

        <div className="icons-container">
          <a href={props.album.external_urls.spotify}>
            <img className="heart" src="./icons/heart.svg" alt="heart icon" />
            <img className="play" src="./icons/play.svg" alt="play icon" />
            <img className="dots" src="./icons/dots.svg" alt="dots icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Album;

/* Annika, I tooked a look at our js. and removed this down under here,
it looks like we don´t really need them? We should look this up:) */

/* The <p>{props.title}</p> seem to not have an affect on our page? */
/* Also, <a className="albumcovers" href={props.album.href.url}> Album Cover</a>
does not have an affect on our site either?  */

/* The h2 --> {props.album.name} is the album names on our page */
