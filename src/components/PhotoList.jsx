import React from 'react';
import Photo from './Photo';

function PhotoList({ photos, title }) {
    console.log('Photos:', photos);
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;