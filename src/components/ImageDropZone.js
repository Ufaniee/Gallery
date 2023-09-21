// UploadImage.js

import React from 'react';

function UploadImage({ onImageUpload }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
    </div>
  );
}

export default UploadImage;
