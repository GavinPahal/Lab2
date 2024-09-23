// src/App.jsx
import React from 'react';
import ArtistDetails from './components/ArtistDetails';
import artists from './best-selling-music-artists'; // import the data

const App = () => {
  return (
    <div className="App">
      <h1>Best-Selling Music Artists</h1>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default App;
