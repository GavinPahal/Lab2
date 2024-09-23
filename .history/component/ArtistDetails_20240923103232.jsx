import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-card">
      <h3>{artist.name}</h3>
      <p><strong>Genre:</strong> {artist.genre}</p>
      <p><strong>Sales:</strong> {artist.sales} million</p>
    </div>
  );
};