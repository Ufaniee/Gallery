import React, { useState } from 'react';
import './App.css';
import ImageDropZone from './ImageDropZone';
import Footer from "./Footer";
import Images from './Images';

function HomeScreen() {
  const [image, setImage] = useState(null);

  const handleImageDrop = (file) => {
    // Process the dropped image file
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <h1>Drag and Drop Images</h1>
      <Images/>
      <ImageDropZone onImageDrop={handleImageDrop} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" className="uploaded-image"  height={250} width={300}/>
        </div>
      )}
       <Footer/>
    </div>
  );
}

export default HomeScreen;
