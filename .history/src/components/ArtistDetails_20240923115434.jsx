import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.photo_url} alt={artist.name} style={{ width: '180px', height: '180px' }} />
      <h3>{artist.name}</h3>
      <p><strong>Country:</strong> {artist.country}</p>
      <p><strong>Years Active:</strong> {artist.years_active}</p>
    </div>
  );
};

export default ArtistDetails;
