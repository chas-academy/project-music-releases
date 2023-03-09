import React from 'react'
import Artists from 'Components/Artists'
import Images from 'Components/Images'
/* import Album from 'components/Album' */
import Header from 'Components/Header'
import data from './data.json'

console.log(data);

/* the mother ship of components */
export const App = () => {
  return (
    <>
      <Header />
      <main className="parent-container"/* Parent album container */>
        <div className="album-container"/* The album containers */>
          {data.albums.items.map((album) => (
            <div key={album.id}>
              <a href={album.external_urls.spotify}/* the spotify album url list */>
                <Artists artists={album.name} />
              </a>
              {/* <Albums albums={albums.artists} /> */}
              <Images images={album.images} /* the images url */ />
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