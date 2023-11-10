import React from 'react';

function Photo({ photo }) {
  const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

  return (
    <li>
      <img src={imageUrl} alt={photo.title} />
    </li>
  );
}

export default Photo;
