import React from 'react'
import './index.css';
import Artists from 'Components/Artists'
import Header from 'Components/Header'
/* import Images from 'Components/Images' */

import data from './data.json'

console.log(data);

export const App = () => {
  const imageIndex = 0; // index of the image you want to display

  return (
    <>
      <Header />
      <main className="parent-container">
        <div className="album-container">
          {data.albums.items.map((album) => (
            <div key={album.id}>
              <div className="Images">
                <img src={album.images[imageIndex].url} alt={album.name} />
              </div>
              <a href={album.external_urls.spotify}>
                <Artists artists={album.artists} />
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

/* import React from 'react';
import Header from 'components/Header';
import Artists from 'components/Artists';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <>
      {data.albums.items.map((album) => (
        <div key={album.id}>
          <Header title={album.name} />
          <Artists artists={album.artists} />
        </div>
      ))}
    </>
  );
} */