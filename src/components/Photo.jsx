import React from 'react';

function Photo({ photo }) {
  return (
    <li>
      <img src={photo.url_s} alt={photo.title} />
    </li>
  );
}

export default Photo;
