// DisplayImages.js

import React from 'react';

function DisplayImages({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
}

export default DisplayImages;
