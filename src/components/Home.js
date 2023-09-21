// App.js
import React, { useState } from 'react';
import UploadImage from './ImageDropZone';
import DisplayImages from './DisplayImages';
import ImageSearch from './ImageSearch';

import Footer from './Footer';

function Home() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  const handleImageUpload = (file) => {
    setUploadedImages([...uploadedImages, file]);
    setFilteredImages([...uploadedImages, file]); // Initially, display all uploaded images
  };

  const handleSearch = (searchTerm) => {
    // Filter images based on the search term
    const filtered = uploadedImages.filter((image) =>
      image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  return (
    <div>
      <h1>Image Search App</h1>
      <UploadImage onImageUpload={handleImageUpload} />
      <ImageSearch images={uploadedImages} onSearch={handleSearch} />
      <DisplayImages images={filteredImages} />
      <Footer/>
    </div>
  );
}

export default Home;
